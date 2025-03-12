## Debugging

There are many types of bugs including functional, logical, performance, security, and usability bugs.

#### Understanding React Error Messages

### Developer Tools

#### Console

In react app we can debug using the browser console by reading the error messages, the stack call, and the line number where the error was generated.

#### Source Tab

Using the developer tools, in the `Source` tab, we can set break points to "pause" the application in runtime and walk thought the code `step by step` or line by line, or `jump` into the next function or out of the function. This tool also allow to hover on variables declared and see its value or content.

### React Strict mode

It execute every component function twice

```jsx
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### React Developer Tools

It enables two new tabs on the developer tools:

#### Components

It displays a components tree that is being rendered in the UI

#### Profiler
