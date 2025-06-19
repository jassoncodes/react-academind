## Side Effects

Side effects are tasks that needs to be executed in the app in order for the app work correctly, but don't impact current component render cycle.

### useEffect Hook

The hook must be executed within the component. It takes a function as an argument, usually an anonimous function that should wrap the code of the effect, and a list of dependencies as a second argument.

The hook will be executed by react after every component execution.

If you define the dependencies array (the second argument), React will execute the the `useEffect` hook on every change of those dependencies listed in the array. If the array is empty, react will onle execute the code one time.

If you don't define the dependency array, react will execute the useEffect code after every time the component is rendered which can lead to an infinite loop.

```jsx
useEffect(() => {
  // codes
}, []);
```
