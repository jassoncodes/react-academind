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
- CSS code is not scoped to components, this can lead to rules that might crash across components

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

Third-pary package that allows "convert" tag elements with css rules applied into "components".
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

This will create a component to be used along with the styles defined. This way the tag "converted" into a styled component can be used as a regular component.

```jsx
<ControlContainer>{/* jsx code*/}</ControlContainer>
```
