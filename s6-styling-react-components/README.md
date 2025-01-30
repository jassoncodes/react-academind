# Styling Components

## Vanilla CSS: Advantages & Disadvantages

It can be decoupled in files by component

```bash
├── Header.css
└── Header.jsx
```

```jsx
import './Header.css';
```

**Advantages**
* CSS code is deoupled from JSX code
* You write regular CSS code
* CSS Code cann be written by another developer who needs only a minimal amount of access to your JSX code

**Disadvantages**
* You need to knonw CSS
* CSS code is not scoped to components, this can lead to rules that might crash across components

## Inline styles
It can by done through the style prop:
```jsx
<p style={{color: red;}}>Test</p>
```

**Advantages**
* Quick and easy to add to JSX code
* Styles only affect to the element to which is added

**Disadvantages**
* You need to know CSS
* Style elements individually
* No separation bewteen jsx and css code
* Code repeating