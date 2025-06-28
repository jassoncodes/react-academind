## Side Effects

Side effects are tasks that needs to be executed in the app in order for the app work correctly, but don't impact current component render cycle.

## useEffect Hook

The hook must be executed within the component. It takes a function as an argument, usually an anonimous function that should wrap the code of the effect, and a list of dependencies as a second argument.

The hook will be executed by react after every component execution.

If you define the dependencies array (the second argument), React will execute the the `useEffect` hook on every change of those dependencies listed in the array. If the array is empty, react will onle execute the code one time.

If you don't define the dependency array, react will execute the useEffect code after every time the component is rendered which can lead to an infinite loop.

```jsx
useEffect(() => {
  // codes
}, []);
```

### useEffect Clean up

A clean up function is a function that will be executed right before the effect function runs again or right before the component is dismount (removed from the DOM)

When your component is added to the DOM, React will run your setup function. After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function.

When adding a function as a dependencie in the useEffect hook there is a risk of creating an infinite loop

### useCallback Hook

This hook takes as a first argument the function that will run as a callback wrapping it, and as a second argument takes an array of dependencies. This dependency array works the same as the dependency array of useEffect. The dependency array should include any prop or state values that is used inside the wrapped function.

This hook returns a value, specifically the function that is being wrapped so that the inner function is not recreated instead is stored in memory and reuses that stored function whenever the component function executes again.

It is recommended to use the useCallback hook when passing functions as dependencies to useEffect.
