# Styling Components

## Vanilla CSS: Advantages & Disadvantages

It can be decoupled in files by component

```bash
├── Header.css
└── Header.jsx
```

```jsx
import "./Header.css";
```

**Advantages**

- CSS code is deoupled from JSX code
- You write regular CSS code
- CSS Code cann be written by another developer who needs only a minimal amount of access to your JSX code

**Disadvantages**

- You need to knonw CSS
- CSS code is not scoped to components
- CSS rules may clash across components

## Inline styles

It can by done through the style prop:

```jsx
<p style={{color: red;}}>Test</p>
```

**Advantages**

- Quick and easy to add to JSX code
- Styles only affect to the element to which is added

**Disadvantages**

- You need to know CSS
- Style elements individually
- No separation bewteen jsx and css code
- Code repeating

## Scoping CSS rules with modules

CSS Files must include the word "module" in it the file name, e.g: Styles.module.css and must be imported:

```jsx
import classes from "./Styles.module.css";
```

Then, the classes can be accessed as javascript object:

```jsx
<h1 className={classes.header}> Dynamic Styling with CSS classes </h1>
```

**Advantages**

- CSS code is decoupled from jsx
- You write regular CSS
- CSS Code cann be written by another developer who needs only a minimal amount of access to your JSX code
- CSS clases are scoped to the component which import them

**Disadvantages**

- You need to know CSS
- You may end up with many relatively small CSS files
- Weird class names in elements rendered

## Styled Components (Third-party Package)

It's a third-pary package that allows "convert" tag elements with css rules applied into "wrapper components".

**Install**

```bash
npm install styled-components
```

**Use:**
Import the package:

```jsx
import { styled } from "styled-components";
```

Use the package by defining a constant variable that will store the regular HTML tag element with the css rules to be applied to it:

```jsx
const ControlContainner = styled.div`
  /* CSS rules to be applied */
`;
```

This will create a component to be used along with the styles defined. This way the "wrapped component" can be used as a regular component.

```jsx
<ControlContainer>{/* jsx code*/}</ControlContainer>
```

Styled components forwards not only the content within the components but also the built-in and custom props defined.

> 💡 To avoid custom props clash with built-in props, they must be prefixed with a $ sign before the prop name:
>
> ```jsx
> <Label $invalid={emailNotValid}>
> ```

## Media querys and nested selectors

Media querys and nested selectors can be applied to styled components prefixing the css rule to be applied with the "&" sign.

> 💡 Pseudo elements can also be included using the same approach

```jsx
const Buttons = styled.button`
  .button {
    padding: 1rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.25rem;
    color: #1f2937;
    background-color: #f0b322;
    border-radius: 6px;
    border: none;
  }

  &:hover {
    background-color: #f0920e;
  }
`;
```

> 💡 Note the use of the "&" prefix without blank space between the pseudo element and the prefix. Otherwise it will target child elements within the styled component

Styled components also allow to combine components and export them to resuable components

**Advantages**

- Quick & ease to add
- You continue "thinking in react" by creating configurable style functions
- Styles are scoped to components which avoid CSS rules clashes

**Disadvantages**

- You need to know CSS
- No clear separation of React and CSS code
- You end up with many relatively small "wrapper" components

## Introducing Tailwind CSS

[Tailwind](https://tailwindcss.com/docs/installation/using-vite) is a CSS Framwork designed to use its utilities to apply preset css rules.

**Install**

```bash
npm install tailwindcss @tailwindcss/vite
```

**Configure**

Import tailwind into the vite config file and add it to the plugins sections:

```js
import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

**Use**
Tailwind css utilities can be used in any component by adding them into the className prop.

**[Custom styles](https://tailwindcss.com/docs/adding-custom-styles)**

Tailwind CSS 4 no longer need tailwind.config.js file, instead, you define customize styles by adding each custom theme variable directly into the CSS file used in the project, within the <code>@theme</code> directive:

```css
@import "tailwindcss";

@theme {
  /* Cutoms font imported from google fonts */
  --font-title: "Satoshi", "sans-serif";

  --breakpoint-3xl: 1920px;
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  --color-avocado-400: oklch(0.92 0.19 114.08);
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --color-avocado-600: oklch(0.53 0.12 118.34);
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
  /* ... */
}
```

> 💡 Any custom import must preced the <code>@import "tailwindcss";</code> directive

- [Responsive design with Tailwind](https://tailwindcss.com/docs/responsive-design)

**Advantages**

- You don't need too much CSS knowledge
- Rapid development
- No style clashes between components since you don't define any CSS rules
- Highly configurable & extensible

**Disadvantages**

- Relatively long class names values
- Any style changes require editing JSX
- You end up with many relatively small "wrapper" components OR lots of copy & pasting
