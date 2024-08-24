![](help/cover.png)

# Sargam Colors
Colors for designing warm welcoming, caring sites & apps.

## Installation
Install Sargam Colors from your terminal via npm.

```
npm i @sargamdesign/colors -D
```

Import vanilla CSS

```
import "@sargamdesign/colors/dist/themes/light.css";
import "@sargamdesign/colors/dist/themes/dark.css";
```

To get started quickly, you can use the CDN files.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sargamdesign/colors@latest/dist/themes/light.css" />
```

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sargamdesign/colors@latest/dist/themes/dark.css" />
```

## Usage Example

```
.button { background-color: var(--button-primary);
          color: var(--text-on-color); }
.button:hover { background-color: var(--button-primary-hover); }
.button:active { background-color: var(--button-primary-active); }
```

---

## Color Tokens

### Text
Variable | Value(Light) | Value(Dark)| Role
:--- |:--- |:--- |:---
`--text-primary` | *--silver8* | *--silver1* | Body copy
`--text-primary-alt` | *--silver7* | *--silver3* | Body copy alt
`--text-secondary` | *--silver6* | *--silver5* | Secondary text color
`--text-placeholder` | *--silver5* | *--silver6* | Placeholder text
`--text-on-color` | *--silver1* | *--silver1* | Text on interactive colors
`--text-error` | *--red6* | *--red4* | Error message text
`--text-success` | *--green6* | *--green4* | Success message text

### Support
Variable | Value(Light) | Value(Dark)| Role
:--- |:--- |:--- |:---
`--support-error` | *--red5* | *--red4* | Error
`--support-warning` | *--yellow5* | *--yellow4* | Warning
`--support-success` | *--green5* | *--green4* | Success
`--support-info` | *--teal5* | *--teal4* | Information


### Link
Variable | Value(Light) | Value(Dark)| Role
:--- |:--- |:--- |:---
`--link` | *--teal6* | *--teal4* | Primary links
`--link-hover` | *--teal7* | *--teal6* | Hover state for primary links
`--link-subtle` | *--teal5* | *--teal5* | Secondary links
`--link-visited` | *--lavender6* | *--lavender4* | Link visited
`--link-muted` | *--silver8* | *--silver1* | Link muted


### Icon
Variable | Value(Light) | Value(Dark)| Role
:--- |:--- |:--- |:---
`--icon-primary` | *--silver7* | *--silver3* | Primary icons
`--icon-secondary` | *--silver6* | *--silver5* | Secondary icons
`--icon-disabled` | *--silver5* | *--silver6* | Disabled state for icons
`--icon-on-color` | *--silver1* | *--silver8* | Icons on interactive colors

### Button
Variable | Value(Light) | Value(Dark)| Role
:--- |:--- |:--- |:---
`--button-primary` | *--teal5* | *--teal4* | Primary button background
`--button-primary-hover` | *--teal6* | *--teal3* | Primary button hover
`--button-primary-active` | *--teal7* | *--teal2* | Primary button active
`--button-secondary` | *--silver8* | *--silver6* | Secondary button background
`--button-secondary-hover` | *--silver7* | *--silver7* | Secondary button hover
`--button-secondary-active` | *--silver6* | *--silver8* | Secondary button active
`--button-danger` | *--red5* | *--red4* | Danger button background
`--button-danger-hover` | *--red6* | *--red3* | Danger button hover
`--button-danger-active` | *--red7* | *--red2* | Danger button active
`--button-disabled` | *--silver5* | *--silver6* | Disabled button
`--button-disabled-alt` | *--silver4* | *--silver7* | Disabled button alt


### Border
Variable | Value(Light) | Value(Dark)| Role
:--- |:--- |:--- |:---
`--border-muted` | *--silver3* | *--silver7* | Muted borders and separators
`--border-default` | *--silver5* | *--silver6* | Default borders and separators
`--border-strong` | *--silver6* | *--silver5* | Strong borders and separators


### Background
Variable | Value(Light) | Value(Dark)| Role
:--- |:--- |:--- |:---
`--background` | *--silver1* | *--silver8* | Default app background
`--background-subtle` | *--silver2* | *--silver7* | Subtle background
`--background-selected` | *--silver3* | *--silver6* | Hovered UI element background
`--background-red` | *--red1* | *--red8* | Subtle red background
`--background-yellow` | *--yellow1* | *--yellow8* | Subtle yellow background
`--background-green` | *--green1* | *--green8* | Subtle green background
`--background-teal` | *--teal1* | *--teal8* | Subtle teal background
`--background-lavender` | *--lavender1* | *--lavender8* | Subtle lavender background
`--background-pink` | *--pink1* | *--pink8* | Subtle pink background

## License
MIT License, Copyright (c) 2024 Method Black.
Brought to you by [@planetabhi](https://planetabhi.com/) 🙌 
