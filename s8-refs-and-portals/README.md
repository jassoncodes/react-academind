## Refs & Portals

Advance DOM Access and Value Management

### Key concepts to learn:

- What refs are?
- How to use refs?
- What portals are?
- How to use portals?
- Accessing DOM Elements with Refs
- Manage values that shouldn't be a state, with Refs
- Exposing and Calling API Functions from Components
- Detaching DOM Rendering from JSX Structure

### Demo project to work:

Game where visitors can start different timer challenges with the goal of estimating when the time is up and stop the timer
early enough before it expires.

### Understanding Refs

#### Managing values with state

Using state to handle information that needs to be entered by the user and rendered would mean to have more than one state:

```jsx
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "Unknown entity"} entity</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
```

### Refs

#### Managing values with refs

A ref is a special kind of value, managed by react. Ref values can be created by using the `useRef` hook or via a custom hook. The ref value can be "connected" to an input element through the `ref` propperty of the input element. For all the ref values created with the useRef hook it's necessary to access to a `current` propperty where is the actual ref value of the "connected" input is stored.

By using the `current` propperty it is possible to access to all the native built-in methods and properties exposed by the input html element, eg value.

```jsx
export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
```

#### Manipulate DOM using Refs

Refs is not ment to be to manipulate DOM elements, but it can be usefull for simple DOM manipulation tasks.

### Refs vs State

| Refs                                                                                                      | State                                                                           |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Do not cause component re-evaluation (re-execution) when changed                                          | Causes copmponent re-evaluation (re-execution) when changed                     |
| Can be used to gain direct DOM element access (great for reading values or accesing certain browser APIs) | Should be used for values that are directly reflected in the UI                 |
|                                                                                                           | Should not be used for "behind the scenes" values that have no direct UI impact |

#### Forwarding ref to a component

It can be done by defining the refValue using the `useRef` hook and a custom prop in the component that will receive the refValue. This is only possible in newer versions of React, since in older versions it is not allowed to pass ref values as props.

In older versions of react you would need to wrap the component function with an imported react function called `forwardRef` and define the ref value as a second parameter of the component function that will receive the ref value:

```jsx
const ResultModal_withForwradRef = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <p>
        The target time was: <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal_withForwradRef;
```

This will result in a function component that will include the ref value forwarded and exported.

#### Exposing Component APIs via useImperativeHandle Hook

This is a technique that allows to create components that expose its own functions that can be called with help of a ref outside of that component and will still work indepedently of how the component might change in the future as long as that function is called. This technique allows to create the components to be more stable and reusable by keeping the functionality needed to work properly.

This can be achieved by using the `useImperativeHandle` special hook <strong>in the component</strong> that wants to expose such callable function.

`useImperativeHandle` uses two arguments: the forwardedRef object passed to the component and a function that returns an object which groups all the methods and properties that should be exposed by the component.

It also needs a separate refValue for the function that will expose the grouped methods and properties, since the forwardedRef refValue passed to the component will act only as a "connection" to the component so that the exposed methods and properties can be call through that refValue.

```jsx
import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <p>
        The target time was: <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
```

With this approach if the code of the component changes, eg isntead of a `<dialog>` it uses a `<div>` tag, as long as the logic inside the `open()` method changes as well, everythng should work properly.

### Portals

Portals is a feature that allows to render children components into a DOM node that is outside the DOM hierarchy of the parent component. This means that content can be rendered at the top level of the HTML document or within a container specified by the developer.
This is useful when creating UI elements such as modals, tooltips, or popovers that need to be positioned relative to a parent component but rendered outside of its DOM hierarchy.

#### Use

import the `createPortal` function from `react-dom`. This function takes two arguments, one is the code that should be "teleported", that is defined by wrapping the jsx code in the `return` statement of the component function as a first argument. The second argument is the html element to which the jsx code should be "teleported", that should be an element that exist in the `index.html` file

```jsx
import { createPortal } from "react-dom";

return createPortal(
  <>{/* JSX code */}</>,
  document.getElementById("html-element")
);
```

#### Best Practices for React Portals

Here are some best practices to follow when using React Portals:

1. Create a new container element for the portal in the index.html file, and avoid rendering other content into it.
2. Use a Portal component to wrap the content that needs to be rendered outside of its parent component.
3. Pass the target element as a prop to the Portal component.
4. Use the CSS z-index property to ensure that the portal content is rendered above other content.
5. Use event bubbling to handle events that occur within the portal content. For example, if a click event occurs within a modal rendered using a portal, the event should bubble up to the parent component rather than being handled by the portal itself.
