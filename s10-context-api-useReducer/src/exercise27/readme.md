## Using useReducer()

Your task is to build a basic counter app that uses React's **`useReducer()`** Hook for state management - not the `useState()` Hook!

To achieve this goal, you should enhance the already existing `counterReducer` function that can be found right next to the App component (don't remove the export keyword!).

In addition, inside the App component, the `useReducer` Hook should be used with that reducer function to manage the counter state.

The three `<button>` elements should be "connected" to the reducer-managed state (i.e., they should trigger state changes), the `<p id="counter">` element should output the count value.

Important: The state managed with help of the reducer must be an object of the following shape:

```json
{
    // of course, 0 is not static but changes as the different <button>s are clicked
    count: 0;
}
```

When dispatching actions, you should make sure that every action is an object that has a type property (it must be named type - other names will make the automatic checks fail!) that contains either `'INCREMENT'`, `'DECREMENT'` or `'RESET'` as a value!
