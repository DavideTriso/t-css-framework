# T CSS FRAMEWORK

## ABOUT

Mobile-first, customisable CSS / SASS framework that scales.

**Key features**:

* Customisable and mobile-first flexbox grid
* Functions and mixin helpers to speed up development and keep code DRY
* Reset stylesheet
* Extremely lightweight
* Adoptable for BEM projects

## DEPENDENCIES

**No dependencies**

## FUNCTIONS

Following functions are included in the framework:

### clampNumber

```
clampNumber($value, $min, $max)
```

**Parameters:**

* `$value`: the length to clamp
* `$min`: minimum accepted length
* `$max`: the maximum accepted length

**Output:** clamped length

### linearInterpolation

```
linearInterpolation($map)
```

**Parameters:**

* `$map`: a map where length == 2 of viewport widths and size value pairs

**Output:** a linear equation (CSS `calc()`function)

### pxToRem and remToPx

```
pxToRem($length, $htmlElementFontlength)

remToPx($length, $htmlElementFontlength)
```

**Parameters:**

* `$length`: the length in px or rem to be converted
* `$htmlElementFontSize`: font size of the html element (in general 16px)

**Output:** the converted length.

### replaceString

```
replaceStr($string, $search, $replace)
```

**Parameters:**

* `$string`: the string
* `$search`: the query sting
* `$replace`: the string which replaces the query string

**Output:** the new string.

### stripUnit

```
stripUnit($number)
```

* `$number`: a number with unit

**Output:** number without unit


### zIndex

Manage z-index across the application.

```
zIndex('zIndexMapKey')
```

**Parameters:**

* `$zIndexMapKey`: a key of the map `$zIndexMap`

**Output:** the value associated with the key.


## HELPERS

Following mixin helpers  are included in the framework:

### animation

```
@include animation($animationMap)
```

**Parameters:**

* `$animationMap`
    * `animationDelay`
    * `animationDirection`
    * `animationDuration`
    * `animationFillMode`
    * `animationIterationCount`
    * `animationName`
    * `animationPlayState`
    * `animationTimingFunction`


### background

```
@include backgroundImage($backgroundMap)
```

**Parameters:**

* `$backgroundMap`
    * `backgroundAttachment`
    * `backgroundClip`
    * `backgroundColor`
    * `backgroundGradient`
    * `normalImage` url of normal background image _(required when retinaImage is set)_
    * `retinaImage` url of hi-res background image
    * `backgroundOrigin`
    * `backgroundPosition`
    * `backgroundRepeat`
    * `backgroundSize`


### border

```
@include border($borderMap)
```

**Parameters:**

* `$borderMap`
    * `borderColor`  
    * `borderRadius`
    * `borderStyle`
    * `borderWidth`

### centerAbsolute

```
@include centerAbsolute
```

**Parameters:**

* No parameters

### clearfix

```
@include clearfix
```

**Parameters:**

* No parameters


### columns

```
@include columns($columnsMap)
```

**Parameters:**

* `$columnsMap`
    * `columnCount`
    * `columnFill`
    * `columnGap`
    * `columnRule`
    * `columnRuleColor`
    * `columnRuleStyle`
    * `columnRuleWidth`
    * `columnWidth`

### ellipsis

```
@include ellipsis
```

**Parameters:**

* No parameters

### flexPositioning

```
@flexPositioning($flexMap)
```

**Parameters:**

* `$flexPositioningMap`
    * `alignItems`
    * `alignContent`
    * `flexDirection`
    * `flexWrap`
    * `justifyContent`


### font

```
@include font($fontMap)
```

**Parameters:**

* `$fontMap`
    * `fontFamily`
    * `fontSize`
    * `fontStyle`
    * `fontVariant`
    * `fontWeight`


### fontFace

```
@include fontFace($name, $path, $weigh, $style, $exts)
```

**Parameters:**

* `$name`: the font name
* `$path`: the path to the font files
* `$weight`: the font weight
* `$style`: the font style
* `$exts`: list of file formats / extension

### hardwareAcceleration

```
@include hardwareAcceleration
```

**Parameters:**

* No parameters

### list

```
@include list($listMap)
```

**Parameters**

* `$listMap`
    * `listStyleImage`
    * `listStyleType`
    * `listStylePosition`

### margin

```
@include margin($marginMap)
```

**Parameters:**

* `$marginMap`
    * `all` _(optional - when this parameter is set, all other parameters are ignored)_
    * `topBottom` _(optional - when this parameter is set, the parameter top, bottom, left, right are ignored, and the parameter leftRight becomes required)_
    * `leftRight` _(optional - when this parameter is set, the parameter top, bottom, left, right are ignored, and the parameter topBottom becomes required)_
    * `top`  
    * `bottom`
    * `left`
    * `right`


### media queries

```
@include mqMin($breakpointName)

@include mqMax($breakpointName)

@include mqRange($breakpointMinName, $breakpointMaxName)
```

#### mqMin and mqMax

**Parameters:**

* `$breakpointName`: key name of the breakpoint (from breakpoints map)

#### mqRange

**Parameters:**

* `$breakpointMinName`: key name of the min breakpoint (from breakpoints map)
* `$breakpointMaxName`: key name of the max breakpoint (from breakpoints map)


### outline

```
@include outline($outlineMap)
```

**Parameters**

* `$outlineMap`
    * `outline`
    * `outlineOffset`


### padding

```
@include padding($paddingMap)
```

**Parameters:**

* `$paddingMap`
    * `all` _(optional - when this parameter is set, all other parameters are ignored)_
    * `topBottom` _(optional - when this parameter is set, the parameter top, bottom, left, right are ignored, and the parameter leftRight becomes required)_
    * `leftRight` _(optional - when this parameter is set, the parameter top, bottom, left, right are ignored, and the parameter topBottom becomes required)_
    * `top`  
    * `bottom`
    * `left`
    * `right`

### placeholderColor

```
@include placeholderColor ($color) {
```

**Parameters:**

* `$color`: the color for placeholder text

### sizes

```
@include lengths($sizesMap)
```

**Parameters:**

* `$sizesMap`
    * `height`  
    * `minHeight`
    * `maxHeight`
    * `width`
    * `minWidth`
    * `maxWidth`

### srOnly

```
@include srOnly
```

**Parameters:**

* No parameters

### text

```
@include text($textMap)
```

**Parameters:**

* `$textMap`
    * `color`
    * `textAlign`
    * `textDecoration`
    * `textDecorationColor`
    * `textDecorationLine`
    * `textDecorationStyle`
    * `textIndent`
    * `textTransform`
    * `textShadow`


### typography

```
@include typography($typographyMap)
```

**Parameters:**

* `$typographyMap`
    * `letterSpacing`
    * `lineHeight`
    * `verticalAlign`
    * `wordBeak`
    * `wordSpacing`
    * `wordWrap`


## RESET

The framework includes an extensive and easy to customise CSS styles reset.

## FLEX GRID

A customisable responsive flexbox grid module:


## SETTINGS
