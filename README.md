# T

## ABOUT

Mobile-first, customisable CSS framework that scales.

**Key features**:

* Modular, easy to customise and incrementally adoptable
* Mobile-first
* Follows the BEM methodology
* Built using relative units (`%` and `rem`)
* Responsive flexbox grid
* Functions and mixins to speed up development and keep code DRY
* Reset stylesheet


## DEPENDENCIES

**No dependencies**

## FUNCTIONS

Following functions are included in the framework:

### clampNumber

Clamp a number between two given values.

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

### mapDeepGet

Retrieve values from deep nested maps.

```
mapDeepGet($map, $key...)
```

**Parameters:**

* `$map`: the map
* `$key...`: a comma separated list of keys.

**Output:** the value associated with the last key of the list.

### pxToRem and remToPx

Convert px values to rem and vice versa.

```
pxToRem($length, $htmlElementFontlength)

remToPx($length, $htmlElementFontlength)
```

**Parameters:**

* `$length`: the length in px or rem to be converted
* `$htmlElementFontSize`: font size of the html element (in general 16px)

**Output:** the converted length.

### replaceString

Replace part of a string.

```
replaceStr($string, $search, $replace)
```

**Parameters:**

* `$string`: the string
* `$search`: the query sting
* `$replace`: the string which replaces the query string

**Output:** the new string.

### stripUnit

Remove unit from a value.

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

Set animation properties

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

Set background properties

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

Set border properties

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

Absolutely position and element and center it in his relative positioned container.
Mimic the behavior of background images positioned with `background-position: center;` and `background-size: cover;`.

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

Set multi-column layout properties.

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

Do not wrap a text when too large for the container, instead show ellipsis.

```
@include ellipsis
```

**Parameters:**

* No parameters

### flexPositioning

Set flexbox module properties for container

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

Set font properties

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

Include custom font using the `@font-face` rule

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

Apply a 3d translation of 0, 0, 0 to an element, which, in most scenarios, will trigger GPU rendering.

```
@include hardwareAcceleration
```

**Parameters:**

* No parameters

### list

Set list properties.

```
@include list($listMap)
```

**Parameters**

* `$listMap`
    * `listStyleImage`
    * `listStyleType`
    * `listStylePosition`

### margin

Set margins.

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

Simply manage your media queries.

```
@include mqMin($breakpointName)

@include mqMax($breakpointName)

@include mqRange($breakpointMinName, $breakpointMaxName)
```

#### mqMin and mqMax

(mqMin = `@media (min-width)`; mqMax = `@media (max-width)`)

**Parameters:**

* `$breakpointName`: key name of the breakpoint (from breakpoints map)

#### mqRange

(mqRange = `@media (min-width) and (min-width)`)

**Parameters:**

* `$breakpointMinName`: key name of the min breakpoint (from breakpoints map)
* `$breakpointMaxName`: key name of the max breakpoint (from breakpoints map)


### outline

Apply outline and outline-offset.

```
@include outline($outlineMap)
```

**Parameters**

* `$outlineMap`
    * `outline`
    * `outlineOffset`


### padding

Set padding

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

Set the color of placeholder text.

```
@include placeholderColor ($color) {
```

**Parameters:**

* `$color`: the color for placeholder text

### sizes

Size an element.

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

Position element off-screen, in order to make the content available only to screen-reader users.

```
@include srOnly
```

**Parameters:**

* No parameters

### text

Style text.

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

Set typographic properties like `line-height` and `letter-spacing`.

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

The framework includes an extensive and easy to customize CSS reset stylesheet.

## FLEX GRID

A customizable responsive flexbox grid is included in the framework: check the [demo](https://davidetriso.github.io/t-css-framework/flex-grid.html).

## SETTINGS
