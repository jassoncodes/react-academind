## React Context API

Is a feature that allows to share data between layers of component. The idea is basically

    1. Create a context value
    2. Provide that value as a wrapper to be shared
    3. Link the context to the state and the functions required to update the state

It can easily be connected to the state making the state be accesible to the entire application.

Context value are often stored in a store folder as a convention to follow a organized code folder structure.

### How to use the React Context API

1. Create the Context Provider

   - Import createContext from react
   - Define a context constant initialazing its value with the createContext function imported
   - Pass a default value to create the context that will be used as an initial value that can be provided to multiple components wrapped by this context, it can be any value.

> Setting a default value will also help to get better auto-completion and also allows to use object destructuring when using the context

- Make that context value shareable by exporting it

```jsx
import { createContext } from "react";

export const CartContext = createContext({
  items: [], //state
  addItemToCart: () => {}, //dummy function
});
```

2. Use the context created as a wrapper component in the component that hold all the components that will need the context. This can be done by simply importing the context and using it as a regular wrapper component. Although this method will only work in React 19, in older versions of React it is necessary access to a nested provider property on that context.

```jsx
{
  /* React < 19 */
}
<CartContext.Provider>
  {/* 
    ...code 
  */}
</CartContext.Provider>;
```

```jsx
<CartContext></CartContext>
```

- It is also necessary to add a value prop to the context provider component.

> The default value set when creating the context is only used if a component that was not wrapped by the Provider component tries to access the context value

```jsx
<CartContext.Provider value={{ items: [] }}>
  {/* ...code */}
</CartContext.Provider>
```

3. Consume the context by importing the context value in the components that will use the context and its values. Also it is necessary to import the `useContext` hook that allows consume or access some context inside a component:

```jsx
import { CartContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";

const cartCtx = useContext(CartContext);
```

- Alternatively it can be use the `use` Hook instead (only available in React 19):

```jsx
import { use } from "react";
import { MyContext } from "../store/my-context.jsx";

const cartCtx = use(CartContext);
```

    > The use hook is a flexible hook that can be used inside of an IF bloc for instance, while the useContext hook works by the same rules as any other hook

### Link the context to the state

Linking the context to the state by using it as a value for the value property in the wrapper context component's tag. This will allow to access the state from anywhere in the application that uses the context. As for updating the state throught the context api, it is necessary to expose the functions that handles the updates of the state, and this can be done by defining and object with the properties that will hold the state and the functions required:

```jsx
const ctxValue = {
  items: shoppingCart.items,
  addItemToCart: handleAddItemToCart,
};
```
