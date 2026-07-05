Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

$scriptDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $scriptDirectory '..')
$publicDirectory = Join-Path $projectRoot 'public'

function New-IconBitmap {
  param (
    [Parameter(Mandatory = $true)]
    [int] $Size
  )

  $bitmap = [System.Drawing.Bitmap]::new($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $circlePath = $null
  $backgroundBrush = $null
  $textBrush = $null
  $glowBrush = $null
  $font = $null
  $format = $null

  try {
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
    $graphics.Clear([System.Drawing.Color]::Transparent)

    $padding = [Math]::Max(0.0, $Size * 0.04)
    $circleRectangle = [System.Drawing.RectangleF]::new(
      $padding,
      $padding,
      $Size - ($padding * 2),
      $Size - ($padding * 2)
    )

    $circlePath = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $circlePath.AddEllipse($circleRectangle)

    $backgroundBrush = [System.Drawing.Drawing2D.PathGradientBrush]::new($circlePath)
    $backgroundBrush.CenterColor = [System.Drawing.ColorTranslator]::FromHtml('#1e3438')
    $backgroundBrush.SurroundColors = @([System.Drawing.ColorTranslator]::FromHtml('#000000'))

    $graphics.FillPath($backgroundBrush, $circlePath)

    $textBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
    $glowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(95, 184, 223, 225))
    $fontSize = $Size * 0.64
    $font = [System.Drawing.Font]::new('Segoe UI', $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $format = [System.Drawing.StringFormat]::new()
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center
    $format.Trimming = [System.Drawing.StringTrimming]::None

    $textRectangle = [System.Drawing.RectangleF]::new(0, -($Size * 0.03), $Size, $Size)
    $glowOffset = [Math]::Max(1.0, $Size * 0.025)
    foreach ($offset in @(
      @(-$glowOffset, 0),
      @($glowOffset, 0),
      @(0, -$glowOffset),
      @(0, $glowOffset)
    )) {
      $glowRectangle = [System.Drawing.RectangleF]::new(
        $textRectangle.X + $offset[0],
        $textRectangle.Y + $offset[1],
        $textRectangle.Width,
        $textRectangle.Height
      )
      $graphics.DrawString('Y', $font, $glowBrush, $glowRectangle, $format)
    }
    $graphics.DrawString('Y', $font, $textBrush, $textRectangle, $format)

    return $bitmap
  }
  catch {
    $bitmap.Dispose()
    throw
  }
  finally {
    if ($null -ne $format) { $format.Dispose() }
    if ($null -ne $font) { $font.Dispose() }
    if ($null -ne $glowBrush) { $glowBrush.Dispose() }
    if ($null -ne $textBrush) { $textBrush.Dispose() }
    if ($null -ne $backgroundBrush) { $backgroundBrush.Dispose() }
    if ($null -ne $circlePath) { $circlePath.Dispose() }
    $graphics.Dispose()
  }
}

function Convert-BitmapToPngBytes {
  param (
    [Parameter(Mandatory = $true)]
    [System.Drawing.Bitmap] $Bitmap
  )

  $stream = [System.IO.MemoryStream]::new()
  try {
    $Bitmap.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)
    return $stream.ToArray()
  }
  finally {
    $stream.Dispose()
  }
}

function Save-Png {
  param (
    [Parameter(Mandatory = $true)]
    [System.Drawing.Bitmap] $Bitmap,
    [Parameter(Mandatory = $true)]
    [string] $Path
  )

  $bytes = Convert-BitmapToPngBytes -Bitmap $Bitmap
  [System.IO.File]::WriteAllBytes($Path, $bytes)
}

function Save-Ico {
  param (
    [Parameter(Mandatory = $true)]
    [string] $Path,
    [Parameter(Mandatory = $true)]
    [byte[]] $SmallPng,
    [Parameter(Mandatory = $true)]
    [byte[]] $LargePng
  )

  $entries = @(
    @{ Width = 16; Height = 16; Bytes = $SmallPng },
    @{ Width = 32; Height = 32; Bytes = $LargePng }
  )

  $stream = [System.IO.MemoryStream]::new()
  $writer = [System.IO.BinaryWriter]::new($stream)
  try {
    $writer.Write([uint16]0)
    $writer.Write([uint16]1)
    $writer.Write([uint16]$entries.Count)

    $imageOffset = 6 + (16 * $entries.Count)
    foreach ($entry in $entries) {
      $writer.Write([byte]$entry.Width)
      $writer.Write([byte]$entry.Height)
      $writer.Write([byte]0)
      $writer.Write([byte]0)
      $writer.Write([uint16]1)
      $writer.Write([uint16]32)
      $writer.Write([uint32]$entry.Bytes.Length)
      $writer.Write([uint32]$imageOffset)
      $imageOffset += $entry.Bytes.Length
    }

    foreach ($entry in $entries) {
      $writer.Write($entry.Bytes)
    }

    $writer.Flush()
    [System.IO.File]::WriteAllBytes($Path, $stream.ToArray())
  }
  finally {
    $writer.Dispose()
    $stream.Dispose()
  }
}

$favicon16 = New-IconBitmap -Size 16
$favicon32 = New-IconBitmap -Size 32
$appleTouchIcon = New-IconBitmap -Size 180

try {
  $smallPng = Convert-BitmapToPngBytes -Bitmap $favicon16
  $largePng = Convert-BitmapToPngBytes -Bitmap $favicon32

  Save-Png -Bitmap $favicon16 -Path (Join-Path $publicDirectory 'favicon-16x16.png')
  Save-Png -Bitmap $favicon32 -Path (Join-Path $publicDirectory 'favicon-32x32.png')
  Save-Png -Bitmap $appleTouchIcon -Path (Join-Path $publicDirectory 'apple-touch-icon.png')
  Save-Ico -Path (Join-Path $publicDirectory 'favicon.ico') -SmallPng $smallPng -LargePng $largePng

  Write-Host "Generated favicon PNG and ICO assets in $publicDirectory"
}
finally {
  $favicon16.Dispose()
  $favicon32.Dispose()
  $appleTouchIcon.Dispose()
}
