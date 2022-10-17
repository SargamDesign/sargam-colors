![](help/cover.png)

# Sargam Colors
An open-source color system for crafting delightful, accessible websites and apps.

## Installation
Install Sargam Colors from your terminal via npm.

```
npm i @sargamdesign/colors
```

Use the CDN files

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sargamdesign/colors@1.0.0/dist/themes/light.min.css" />

```

## Structure

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

## Building themes from tokens

### Light
- Build theme: `npm run build:tokens -- --theme=light`
- [Get a Figma copy for light theme](https://www.figma.com/community/file/1161992682973418812)

(Note: Dark theme coming soon.)

## License
MIT License, Copyright (c) 2022 Abhimanyu Rana
