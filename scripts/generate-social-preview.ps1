Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

$scriptDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $scriptDirectory '..')
# System.Drawing cannot decode WebP, so the card is built from a JPEG copy of the same photo.
$profileImagePath = Join-Path $projectRoot 'src\assets\profile\portrait-social-source.jpg'
$outputPath = Join-Path $projectRoot 'public\social-preview.png'
$outputTempPath = Join-Path (Split-Path -Parent $outputPath) 'social-preview.tmp.png'

$width = 1200
$height = 630
$roleText = 'AI & Software Development | Software Engineering Student'

function New-RoundedRectanglePath {
  param (
    [Parameter(Mandatory = $true)]
    [System.Drawing.RectangleF] $Rectangle,
    [Parameter(Mandatory = $true)]
    [float] $Radius
  )

  $diameter = $Radius * 2
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $path.AddArc($Rectangle.X, $Rectangle.Y, $diameter, $diameter, 180, 90)
  $path.AddArc($Rectangle.Right - $diameter, $Rectangle.Y, $diameter, $diameter, 270, 90)
  $path.AddArc($Rectangle.Right - $diameter, $Rectangle.Bottom - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($Rectangle.X, $Rectangle.Bottom - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

function New-SolidBrush {
  param (
    [Parameter(Mandatory = $true)]
    [string] $Color
  )

  return [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($Color))
}

function Draw-RoundedRectangle {
  param (
    [Parameter(Mandatory = $true)]
    [System.Drawing.Graphics] $Graphics,
    [Parameter(Mandatory = $true)]
    [System.Drawing.RectangleF] $Rectangle,
    [Parameter(Mandatory = $true)]
    [float] $Radius,
    [Parameter(Mandatory = $true)]
    [System.Drawing.Brush] $Brush,
    [System.Drawing.Pen] $Pen = $null
  )

  $path = New-RoundedRectanglePath -Rectangle $Rectangle -Radius $Radius
  try {
    $Graphics.FillPath($Brush, $path)
    if ($null -ne $Pen) {
      $Graphics.DrawPath($Pen, $path)
    }
  }
  finally {
    $path.Dispose()
  }
}

function Draw-Text {
  param (
    [Parameter(Mandatory = $true)]
    [System.Drawing.Graphics] $Graphics,
    [Parameter(Mandatory = $true)]
    [string] $Text,
    [Parameter(Mandatory = $true)]
    [System.Drawing.Font] $Font,
    [Parameter(Mandatory = $true)]
    [System.Drawing.Brush] $Brush,
    [Parameter(Mandatory = $true)]
    [System.Drawing.RectangleF] $Rectangle,
    [System.Drawing.StringFormat] $Format = $null
  )

  if ($null -eq $Format) {
    $Format = [System.Drawing.StringFormat]::GenericTypographic.Clone()
    $disposeFormat = $true
  }
  else {
    $disposeFormat = $false
  }

  try {
    $Format.Trimming = [System.Drawing.StringTrimming]::EllipsisWord
    $Format.FormatFlags = $Format.FormatFlags -bor [System.Drawing.StringFormatFlags]::NoClip
    $Graphics.DrawString($Text, $Font, $Brush, $Rectangle, $Format)
  }
  finally {
    if ($disposeFormat) {
      $Format.Dispose()
    }
  }
}

function Draw-CoverImage {
  param (
    [Parameter(Mandatory = $true)]
    [System.Drawing.Graphics] $Graphics,
    [Parameter(Mandatory = $true)]
    [System.Drawing.Image] $Image,
    [Parameter(Mandatory = $true)]
    [System.Drawing.RectangleF] $Destination
  )

  $sourceRatio = $Image.Width / $Image.Height
  $destinationRatio = $Destination.Width / $Destination.Height

  if ($sourceRatio -gt $destinationRatio) {
    $sourceHeight = $Image.Height
    $sourceWidth = $Image.Height * $destinationRatio
    $sourceX = ($Image.Width - $sourceWidth) / 2
    $sourceY = 0
  }
  else {
    $sourceWidth = $Image.Width
    $sourceHeight = $Image.Width / $destinationRatio
    $sourceX = 0
    $sourceY = ($Image.Height - $sourceHeight) / 2
  }

  $sourceRectangle = [System.Drawing.RectangleF]::new($sourceX, $sourceY, $sourceWidth, $sourceHeight)
  $Graphics.DrawImage($Image, $Destination, $sourceRectangle, [System.Drawing.GraphicsUnit]::Pixel)
}

if (-not (Test-Path $profileImagePath)) {
  throw "Profile image not found: $profileImagePath"
}

$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

$backgroundBrush = $null
$surfaceBrush = $null
$surfacePen = $null
$accentBrush = $null
$headingBrush = $null
$bodyBrush = $null
$shadowBrush = $null
$photoOverlayBrush = $null
$photoBorderPen = $null
$profile = $null
$outputStream = $null

$titleFont = [System.Drawing.Font]::new('Segoe UI', 74, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$roleFont = [System.Drawing.Font]::new('Segoe UI', 34, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

try {
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

  $backgroundBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Rectangle]::new(0, 0, $width, $height),
    [System.Drawing.ColorTranslator]::FromHtml('#020405'),
    [System.Drawing.ColorTranslator]::FromHtml('#142024'),
    [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal
  )
  $graphics.FillRectangle($backgroundBrush, 0, 0, $width, $height)

  $surfaceBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(224, 7, 16, 18))
  $surfacePen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(118, 184, 223, 225), 2)
  $accentBrush = New-SolidBrush '#b8dfe1'
  $headingBrush = New-SolidBrush '#ffffff'
  $bodyBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(226, 235, 247, 248))
  $shadowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(78, 0, 0, 0))
  $photoOverlayBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Rectangle]::new(760, 72, 352, 486),
    [System.Drawing.Color]::FromArgb(105, 3, 5, 6),
    [System.Drawing.Color]::FromArgb(6, 3, 5, 6),
    [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
  )
  $photoBorderPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(72, 184, 223, 225), 2)

  Draw-RoundedRectangle -Graphics $graphics -Rectangle ([System.Drawing.RectangleF]::new(72, 80, 1080, 490)) -Radius 34 -Brush $shadowBrush
  Draw-RoundedRectangle -Graphics $graphics -Rectangle ([System.Drawing.RectangleF]::new(56, 60, 1088, 504)) -Radius 34 -Brush $surfaceBrush -Pen $surfacePen

  $profile = [System.Drawing.Image]::FromFile($profileImagePath)
  $photoRectangle = [System.Drawing.RectangleF]::new(760, 72, 352, 486)
  $photoShadowRectangle = [System.Drawing.RectangleF]::new(778, 92, 352, 486)
  Draw-RoundedRectangle -Graphics $graphics -Rectangle $photoShadowRectangle -Radius 36 -Brush $shadowBrush

  $photoPath = New-RoundedRectanglePath -Rectangle $photoRectangle -Radius 36
  $previousClip = $graphics.Clip.Clone()
  try {
    $graphics.SetClip($photoPath)
    Draw-CoverImage -Graphics $graphics -Image $profile -Destination $photoRectangle
    $graphics.FillRectangle($photoOverlayBrush, $photoRectangle)
  }
  finally {
    $graphics.SetClip($previousClip, [System.Drawing.Drawing2D.CombineMode]::Replace)
    $previousClip.Dispose()
  }
  $graphics.DrawPath($photoBorderPen, $photoPath)
  $photoPath.Dispose()

  Draw-Text -Graphics $graphics -Text 'Yahya Alsharif' -Font $titleFont -Brush $headingBrush -Rectangle ([System.Drawing.RectangleF]::new(92, 190, 630, 96))
  Draw-Text -Graphics $graphics -Text $roleText -Font $roleFont -Brush $bodyBrush -Rectangle ([System.Drawing.RectangleF]::new(96, 306, 600, 120))
  Draw-RoundedRectangle -Graphics $graphics -Rectangle ([System.Drawing.RectangleF]::new(96, 462, 290, 8)) -Radius 4 -Brush $accentBrush

  $graphics.Dispose()
  $graphics = $null

  if (Test-Path $outputTempPath) {
    Remove-Item -LiteralPath $outputTempPath -Force
  }

  $outputStream = [System.IO.MemoryStream]::new()
  $bitmap.Save($outputStream, [System.Drawing.Imaging.ImageFormat]::Png)
  [System.IO.File]::WriteAllBytes($outputTempPath, $outputStream.ToArray())
  Move-Item -LiteralPath $outputTempPath -Destination $outputPath -Force
  Write-Host "Generated $outputPath"
}
finally {
  if ($null -ne $profile) { $profile.Dispose() }
  if ($null -ne $outputStream) { $outputStream.Dispose() }
  if ($null -ne $graphics) { $graphics.Dispose() }
  $bitmap.Dispose()
  $titleFont.Dispose()
  $roleFont.Dispose()
  if ($null -ne $backgroundBrush) { $backgroundBrush.Dispose() }
  if ($null -ne $surfaceBrush) { $surfaceBrush.Dispose() }
  if ($null -ne $surfacePen) { $surfacePen.Dispose() }
  if ($null -ne $accentBrush) { $accentBrush.Dispose() }
  if ($null -ne $headingBrush) { $headingBrush.Dispose() }
  if ($null -ne $bodyBrush) { $bodyBrush.Dispose() }
  if ($null -ne $shadowBrush) { $shadowBrush.Dispose() }
  if ($null -ne $photoOverlayBrush) { $photoOverlayBrush.Dispose() }
  if ($null -ne $photoBorderPen) { $photoBorderPen.Dispose() }
}
