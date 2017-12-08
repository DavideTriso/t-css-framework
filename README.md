# T CSS FRAMEWORK

## ABOUT

Mobile-first, fully customisable CSS / SASS framework built for large projects.

## DEPENDENCIES

**No dependencies**

## FUNCTIONS

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

**Output:** the new string .

### stripUnit

```
stripUnit($number)
```

* `$number`: a number with unit

**Output:** number without unit


## HELPERS

### backgroundImage

```
@include backgroundImage($imageUrlMap)
```

**Parameters:**

* `$imageUrlMap`: accepts 1 - 2 keys
    * `normal`: url of normal image
    * `retina`: url of hi-res img _(optional)_

### border

```
@include border($borderMap)
```

**Parameters:**

* `$borderMap`: accepts one - four keys
    * `borderColor`  _(optional)_
    * `borderRadius` _(optional)_
    * `borderStyle` _(optional)_
    * `borderWidth` _(optional)_

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


### ellipsis

```
@include ellipsis
```

**Parameters:**

* No parameters

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

### margin

```
@include margin($marginMap)
```

**Parameters:**

* `$marginMap`: accepts one - four keys
    * `top`  _(optional)_
    * `bottom` _(optional)_
    * `left` _(optional)_
    * `right` _(optional)_


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

### padding

```
@include padding($paddingMap)
```

**Parameters:**

* `$paddingMap`: accepts one - four keys
    * `top`  _(optional)_
    * `bottom` _(optional)_
    * `left` _(optional)_
    * `right` _(optional)_

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

* `$sizesMap`: accepts one - six keys
    * `height`  _(optional)_
    * `minHeight` _(optional)_
    * `maxHeight` _(optional)_
    * `width` _(optional)_
    * `minWidth` _(optional)_
    * `maxWidth` _(optional)_

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

* `$textMap`: accepts one - four parameters
    * `color` _(optional)_
    * `textDecoration` _(optional)_
    * `textTransform` _(optional)_


### typography

```
@include typography($typographyMap)
```

**Parameters:**

* `$typographyMap`
    * `letterSpacing` _(optional)_
    * `lineHeight` _(optional)_
    * `verticalAlign` _(optional)_
    * `wordSpacing` _(optional)_
    

## RESET

## GRIDS





## SETTINGS
