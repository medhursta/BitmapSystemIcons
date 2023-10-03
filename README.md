# BitmapSystemIcon
BitmapSystemIcon is a simple library which I create to use the [Visual Studio 2022 Image Library](https://www.microsoft.com/en-us/download/details.aspx?id=35825) as button icons within a WinFroms application.

The library take an SVG file and converts it to a bitmap icon using the [C# SVG rendering library](https://github.com/svg-net/SVG).

## Example Usage
```c#
using BitmapSystemIcons

Button1.Image = SystemIcon.Get(Icons.Abbreviation);
```

## Methods
### SystemIcon.Get
Gets a bitmap of the required icon.

<i>Declaration</i>
```c#
public static Image Get(Icons icon)
```

<i>Parameters</i>
| Type | Name | Description                               |
| ---- | ---- | ----------------------------------------- |
| [Enum](https://learn.microsoft.com/en-gb/dotnet/api/system.enum?view=net-7.0) | icon | A enum value from [BitmapSystemIcons.Icons](#icons-bitmapsystemiconsicons) |

<i>Returns</i>
| Type  | Description                                  |
| ----- | -------------------------------------------- |
| [Image](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.image?view=dotnet-plat-ext-7.0) | A [System.Drawing.Image](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.image?view=dotnet-plat-ext-7.0) of the requested icon |


## Icons (BitmapSystemIcons.Icons)
For a full list of icons please see the Wiki.
