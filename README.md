![](help/cover.png)

# Sargam Colors
A simple scalable color system for designing warm welcoming, caring websites and apps.

[[sargamcolors.com]](https://sargamcolors.com/) 

## Installation
Install Sargam Colors from your terminal via npm. Current version is 2.1.1

```
npm i @sargamdesign/colors
```

Import vanilla CSS

```
import "@sargamdesign/colors/dist/themes/light.css";
import "@sargamdesign/colors/dist/themes/dark.css";
```

To get started quickly, you can use the CDN files.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sargamdesign/colors@2.1.1/dist/themes/light.css" />
```

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sargamdesign/colors@2.1.1/dist/themes/dark.css" />
```

[[Figma variables & styles]](https://www.figma.com/community/file/1315655575821378223/sargam-colors)

## Usage Example

```
.button { background-color: var(--button-primary);
          color: var(--text-on-color); }
.button:hover { background-color: var(--button-primary-hover); }
.button:active { background-color: var(--button-primary-active); }
```

## Understanding Project Structure
Here's the file structure of a Sargam colors:

```
.
├── tokens/
│   ├── global/
│   │   └── global.json
│   └── themes/
│       ├── dark/
│       │   └── dark.json
│       └── light/
│           └── light.json
└── dist/
    └── themes/
        ├── light.css
        └── dark.css
```

`tokens/` folder serves as the single source of truth (SSOT), residing within the GitHub repository and synchronized with Figma's color styles or variables. (To maintain a tech-agnostic approach, Sargam Colors employs the JSON format for the SSOT.)

For generating various web or app-specific requirements, [Style Dictionary](https://github.com/amzn/style-dictionary) will be utilized.

To modify colors values or to add new sequential scales, go to `tokens/global/`. If you want to modify the current theme or create a new one, head to the `tokens/themes/`. For modifying generated CSS variables, leverage SASS functions and mixins.


## Building Themes
```
git clone https://github.com/SargamDesign/sargam-colors.git
cd sargam-colors
npm i
npm run build
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

---

## Primitives

### Red
Variable | Value | Color
:--- |:--- |:---
`$red1` | hsl(0, 100%, 98%) | ![#FFF7F7](https://via.placeholder.com/16/FFF7F7/FFF7F7.png)
`$red2` | hsl(1, 90%, 88%) | ![#FCC6C5](https://via.placeholder.com/16/FCC6C5/FCC6C5.png)
`$red3` | hsl(1, 89%, 71%) | ![#F77472](https://via.placeholder.com/16/F77472/F77472.png)
`$red4` | hsl(1, 89%, 64%) | ![#F55451](https://via.placeholder.com/16/F55451/F55451.png)
`$red5` | hsl(1, 89%, 57%) | ![#F33330](https://via.placeholder.com/16/F33330/F33330.png)
`$red6` | hsl(1, 67%, 48%) | ![#CC2B28](https://via.placeholder.com/16/CC2B28/CC2B28.png)
`$red7` | hsl(1, 67%, 34%) | ![#921F1D](https://via.placeholder.com/16/921F1D/921F1D.png)
`$red8` | hsl(1, 67%, 20%) | ![#571211](https://via.placeholder.com/16/571211/571211.png)

### Yellow
Variable | Value | Color
:--- |:--- |:---
`$yellow1` | hsl(48, 100%, 98%) | ![#FFFDF5](https://via.placeholder.com/16/FFFDF5/FFFDF5.png)
`$yellow2` | hsl(51, 91%, 86%) | ![#FCF2BC](https://via.placeholder.com/16/FCF2BC/FCF2BC.png)
`$yellow3` | hsl(50, 92%, 67%) | ![#F8DE5D](https://via.placeholder.com/16/F8DE5D/F8DE5D.png)
`$yellow4` | hsl(50, 92%, 59%) | ![#F7D737](https://via.placeholder.com/16/F7D737/F7D737.png)
`$yellow5` | hsl(50, 92%, 51%) | ![#F5CF11](https://via.placeholder.com/16/F5CF11/F5CF11.png)
`$yellow6` | hsl(50, 87%, 43%) | ![#CEAE0E](https://via.placeholder.com/16/CEAE0E/CEAE0E.png)
`$yellow7` | hsl(50, 87%, 31%) | ![#937C0A](https://via.placeholder.com/16/937C0A/937C0A.png)
`$yellow8` | hsl(50, 87%, 18%) | ![#584B06](https://via.placeholder.com/16/584B06/584B06.png)

### Green
Variable | Value | Color
:--- |:--- |:---
`$green1` | hsl(132, 38%, 97%) | ![#F6FBF7](https://via.placeholder.com/16/F6FBF7/F6FBF7.png) 
`$green2` | hsl(139, 45%, 82%) | ![#BDE6CA](https://via.placeholder.com/16/BDE6CA/BDE6CA.png)
`$green3` | hsl(139, 45%, 57%) | ![#5FC37E](https://via.placeholder.com/16/5FC37E/5FC37E.png)
`$green4` | hsl(138, 51%, 47%) | ![#3AB55F](https://via.placeholder.com/16/3AB55F/3AB55F.png)
`$green5` | hsl(138, 79%, 37%) | ![#14A741](https://via.placeholder.com/16/14A741/14A741.png)
`$green6` | hsl(139, 78%, 31%) | ![#118C37](https://via.placeholder.com/16/118C37/118C37.png)
`$green7` | hsl(138, 79%, 22%) | ![#0C6427](https://via.placeholder.com/16/0C6427/0C6427.png)
`$green8` | hsl(138, 79%, 13%) | ![#073C17](https://via.placeholder.com/16/073C17/073C17.png)

### Teal
Variable | Value | Color
:--- |:--- |:---
`$teal1` | hsl(132, 38%, 97%) | ![#F6FBF7](https://via.placeholder.com/16/F6FBF7/F6FBF7.png)
`$teal2` | hsl(177, 43%, 81%) | ![#BBE4E2](https://via.placeholder.com/16/BBE4E2/BBE4E2.png)
`$teal3` | hsl(178, 42%, 54%) | ![#59BCB8](https://via.placeholder.com/16/59BCB8/59BCB8.png)
`$teal4` | hsl(177, 55%, 44%) | ![#32ADA7](https://via.placeholder.com/16/32ADA7/32ADA7.png)
`$teal5` | hsl(177, 87%, 33%) | ![#0B9D96](https://via.placeholder.com/16/0B9D96/0B9D96.png)
`$teal6` | hsl(177, 87%, 28%) | ![#09847E](https://via.placeholder.com/16/09847E/09847E.png)
`$teal7` | hsl(177, 86%, 20%) | ![#075E5A](https://via.placeholder.com/16/075E5A/075E5A.png)
`$teal8` | hsl(177, 87%, 12%) | ![#043936](https://via.placeholder.com/16/043936/043936.png)

### Lavender
Variable | Value | Color
:--- |:--- |:---
`$lavender1` | hsl(270, 40%, 98%) | ![#FAF8FC](https://via.placeholder.com/16/FAF8FC/FAF8FC.png)
`$lavender2` | hsl(280, 33%, 86%) | ![#DFCFE7](https://via.placeholder.com/16/DFCFE7/DFCFE7.png)
`$lavender3` | hsl(281, 34%, 65%) | ![#B289C5](https://via.placeholder.com/16/B289C5/B289C5.png)
`$lavender4` | hsl(281, 34%, 57%) | ![#A06EB7](https://via.placeholder.com/16/A06EB7/A06EB7.png)
`$lavender5` | hsl(281, 35%, 49%) | ![#8E52A9](https://via.placeholder.com/16/8E52A9/8E52A9.png)
`$lavender6` | hsl(281, 35%, 41%) | ![#77458E](https://via.placeholder.com/16/77458E/77458E.png)
`$lavender7` | hsl(282, 35%, 29%) | ![#553165](https://via.placeholder.com/16/553165/553165.png)
`$lavender8` | hsl(281, 34%, 18%) | ![#331E3D](https://via.placeholder.com/16/331E3D/331E3D.png)

### Pink
Variable | Value | Color
:--- |:--- |:---
`$pink1` | hsl(334, 100%, 99%) | ![#FFF8FB](https://via.placeholder.com/16/FFF8FB/FFF8FB.png)
`$pink2` | hsl(331, 96%, 90%) | ![#FECBE4](https://via.placeholder.com/16/FECBE4/FECBE4.png)
`$pink3` | hsl(331, 95%, 75%) | ![#FC82BC](https://via.placeholder.com/16/FC82BC/FC82BC.png)
`$pink4` | hsl(331, 96%, 69%) | ![#FC64AD](https://via.placeholder.com/16/FC64AD/FC64AD.png)
`$pink5` | hsl(331, 96%, 63%) | ![#FB479D](https://via.placeholder.com/16/FB479D/FB479D.png)
`$pink6` | hsl(331, 63%, 53%) | ![#D33C84](https://via.placeholder.com/16/D33C84/D33C84.png)
`$pink7` | hsl(332, 56%, 38%) | ![#972B5E](https://via.placeholder.com/16/972B5E/972B5E.png)
`$pink8` | hsl(331, 55%, 23%) | ![#5A1A39](https://via.placeholder.com/16/5A1A39/5A1A39.png)

### Silver
Variable | Value | Color
:--- |:--- |:---
`$silver1` | hsl(0, 0%, 100%) | ![#FFFFFF](https://via.placeholder.com/16/FFFFFF/FFFFFF.png)
`$silver2` | hsl(30, 12%, 97%) | ![#F8F7F6](https://via.placeholder.com/16/F8F7F6/F8F7F6.png)
`$silver3` | hsl(43, 13%, 89%) | ![#E7E5E0](https://via.placeholder.com/16/E7E5E0/E7E5E0.png)
`$silver4` | hsl(47, 11%, 84%) | ![#DBD9D2](https://via.placeholder.com/16/DBD9D2/DBD9D2.png)
`$silver5` | hsl(45, 6%, 74%) | ![#C1BFB9](https://via.placeholder.com/16/C1BFB9/C1BFB9.png)
`$silver6` | hsl(48, 2%, 44%) | ![#72716D](https://via.placeholder.com/16/72716D/72716D.png)
`$silver7` | hsl(30, 2%, 17%) | ![#2C2B2A](https://via.placeholder.com/16/2C2B2A/2C2B2A.png)
`$silver8` | hsl(0, 3%, 6%) | ![#100F0F](https://via.placeholder.com/16/100F0F/100F0F.png)

## Websites and apps crafted with Sargam Colors:
- [Sargam Icons](https://sargamicons.com/)
- [Sargam Design](https://sargam.design/)
- [Your Vedas](https://yourvedas.com/)
- [Andlo](https://www.andlopayroll.com/)

## License
MIT License, Copyright (c) 2023 Abhimanyu Rana.
Brought to you by [@planetabhi](https://twitter.com/planetabhi) 🙌 


[![npm version](https://badge.fury.io/js/@sargamdesign%2Fcolors.svg)](https://badge.fury.io/js/@sargamdesign%2Fcolors) 
[![](https://data.jsdelivr.com/v1/package/npm/@sargamdesign/colors/badge)](https://www.jsdelivr.com/package/npm/@sargamdesign/colors)
