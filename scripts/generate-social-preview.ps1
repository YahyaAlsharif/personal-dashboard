Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

$scriptDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $scriptDirectory '..')
$profileImagePath = Join-Path $projectRoot 'src\assets\profile\profile-picture-optimized.jpg'
$outputPath = Join-Path $projectRoot 'public\social-preview.png'

$width = 1200
$height = 630

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

if (-not (Test-Path $profileImagePath)) {
  throw "Profile image not found: $profileImagePath"
}

$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

$backgroundBrush = $null
$cardBrush = $null
$strongCardBrush = $null
$borderPen = $null
$accentBrush = $null
$accentSoftBrush = $null
$headingBrush = $null
$mutedBrush = $null
$bodyBrush = $null
$shadowBrush = $null
$profile = $null

$labelFont = [System.Drawing.Font]::new('Segoe UI', 20, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$titleFont = [System.Drawing.Font]::new('Segoe UI', 68, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$roleFont = [System.Drawing.Font]::new('Segoe UI', 31, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$supportFont = [System.Drawing.Font]::new('Segoe UI', 25, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$smallFont = [System.Drawing.Font]::new('Segoe UI', 23, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$cardTitleFont = [System.Drawing.Font]::new('Segoe UI', 30, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$cardTextFont = [System.Drawing.Font]::new('Segoe UI', 21, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

try {
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

  $backgroundBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Rectangle]::new(0, 0, $width, $height),
    [System.Drawing.ColorTranslator]::FromHtml('#ffffff'),
    [System.Drawing.ColorTranslator]::FromHtml('#eeeeee'),
    [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal
  )
  $graphics.FillRectangle($backgroundBrush, 0, 0, $width, $height)

  $cardBrush = New-SolidBrush '#fafafa'
  $strongCardBrush = New-SolidBrush '#ffffff'
  $borderPen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml('#dedede'), 2)
  $accentBrush = New-SolidBrush '#2f8a94'
  $accentSoftBrush = New-SolidBrush '#b8dfe1'
  $headingBrush = New-SolidBrush '#0a0a0a'
  $mutedBrush = New-SolidBrush '#5f5f5f'
  $bodyBrush = New-SolidBrush '#262626'
  $shadowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(22, 0, 0, 0))

  Draw-RoundedRectangle -Graphics $graphics -Rectangle ([System.Drawing.RectangleF]::new(60, 70, 1080, 490)) -Radius 28 -Brush $shadowBrush
  Draw-RoundedRectangle -Graphics $graphics -Rectangle ([System.Drawing.RectangleF]::new(52, 58, 1080, 490)) -Radius 28 -Brush $cardBrush -Pen $borderPen

  Draw-RoundedRectangle -Graphics $graphics -Rectangle ([System.Drawing.RectangleF]::new(92, 98, 225, 46)) -Radius 18 -Brush $accentSoftBrush
  Draw-Text -Graphics $graphics -Text 'Personal Dashboard' -Font $labelFont -Brush $headingBrush -Rectangle ([System.Drawing.RectangleF]::new(116, 109, 190, 26))

  Draw-Text -Graphics $graphics -Text 'Yahya Alsharif' -Font $titleFont -Brush $headingBrush -Rectangle ([System.Drawing.RectangleF]::new(90, 177, 650, 88))
  Draw-Text -Graphics $graphics -Text 'Software Engineering Student | AI Learner | Project Coordinator' -Font $roleFont -Brush $bodyBrush -Rectangle ([System.Drawing.RectangleF]::new(94, 278, 620, 92))

  $bullet = [string][char]0x2022
  $supportText = "Software Engineering $bullet Artificial Intelligence $bullet ESAS $bullet KAUST Academy"
  Draw-Text -Graphics $graphics -Text $supportText -Font $supportFont -Brush $mutedBrush -Rectangle ([System.Drawing.RectangleF]::new(94, 394, 655, 72))

  Draw-RoundedRectangle -Graphics $graphics -Rectangle ([System.Drawing.RectangleF]::new(94, 484, 360, 52)) -Radius 16 -Brush $strongCardBrush -Pen $borderPen
  Draw-Text -Graphics $graphics -Text 'Makkah Region, Saudi Arabia' -Font $smallFont -Brush $mutedBrush -Rectangle ([System.Drawing.RectangleF]::new(118, 497, 315, 34))

  Draw-RoundedRectangle -Graphics $graphics -Rectangle ([System.Drawing.RectangleF]::new(788, 88, 295, 415)) -Radius 18 -Brush $shadowBrush
  Draw-RoundedRectangle -Graphics $graphics -Rectangle ([System.Drawing.RectangleF]::new(776, 78, 295, 415)) -Radius 18 -Brush $strongCardBrush -Pen $borderPen

  $profile = [System.Drawing.Image]::FromFile($profileImagePath)
  $imageRectangle = [System.Drawing.RectangleF]::new(800, 102, 247, 247)
  $imagePath = New-RoundedRectanglePath -Rectangle $imageRectangle -Radius 16
  $previousClip = $graphics.Clip.Clone()
  try {
    $graphics.SetClip($imagePath)
    $graphics.DrawImage($profile, $imageRectangle)
  }
  finally {
    $graphics.SetClip($previousClip, [System.Drawing.Drawing2D.CombineMode]::Replace)
    $previousClip.Dispose()
    $imagePath.Dispose()
  }

  $centerFormat = [System.Drawing.StringFormat]::new()
  $centerFormat.Alignment = [System.Drawing.StringAlignment]::Center
  $centerFormat.LineAlignment = [System.Drawing.StringAlignment]::Near
  try {
    Draw-Text -Graphics $graphics -Text 'Yahya Alsharif' -Font $cardTitleFont -Brush $headingBrush -Rectangle ([System.Drawing.RectangleF]::new(805, 376, 238, 42)) -Format $centerFormat
    Draw-Text -Graphics $graphics -Text 'Makkah Region, Saudi Arabia' -Font $cardTextFont -Brush $mutedBrush -Rectangle ([System.Drawing.RectangleF]::new(808, 429, 232, 52)) -Format $centerFormat
  }
  finally {
    $centerFormat.Dispose()
  }

  $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Host "Generated $outputPath"
}
finally {
  if ($null -ne $profile) { $profile.Dispose() }
  $graphics.Dispose()
  $bitmap.Dispose()
  $labelFont.Dispose()
  $titleFont.Dispose()
  $roleFont.Dispose()
  $supportFont.Dispose()
  $smallFont.Dispose()
  $cardTitleFont.Dispose()
  $cardTextFont.Dispose()
  if ($null -ne $backgroundBrush) { $backgroundBrush.Dispose() }
  if ($null -ne $cardBrush) { $cardBrush.Dispose() }
  if ($null -ne $strongCardBrush) { $strongCardBrush.Dispose() }
  if ($null -ne $borderPen) { $borderPen.Dispose() }
  if ($null -ne $accentBrush) { $accentBrush.Dispose() }
  if ($null -ne $accentSoftBrush) { $accentSoftBrush.Dispose() }
  if ($null -ne $headingBrush) { $headingBrush.Dispose() }
  if ($null -ne $mutedBrush) { $mutedBrush.Dispose() }
  if ($null -ne $bodyBrush) { $bodyBrush.Dispose() }
  if ($null -ne $shadowBrush) { $shadowBrush.Dispose() }
}
