# Advanced State Management

The main problem of shared state is Prop Drilling, which means passing data between layers of hierarchical componetns.

A more advanced approach to shared state betweenn complex applications with multiple components and layers of components would be using the component composition approach.

## Common Problems

We have an app with multiple hierarchical components with state shared between them and lifted up stated from a child component to a parent component. At the end we are passing data throught multiple components layers that probably they most of them only need them to be passed to another component.

## Section goal

Build an online shopping cart to add, remove, and update products in a cart

## Component Composition to solve Prop Drilling

This is an approach of building complex user interfaces (UI) by combining smaller, reusable components.

It provides the following advantages

- Reusability: In the different parts of the application, the components can be reused.
- Maintainability: In the application, it is easier to update and manage the code.
- Improved Readability: Smaller, focused components are easier to understand and debug.

## React Context API to manage shared state

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

2. Use the context created as a wrapper component in the component that hold all the components that will need the context. This can be done by simply importing the context and using it as a regular wrapper component. Although this method will only work in React 19, in older versions of React it is necessary access to a default Provider component (provided by the CreateContext component used while creating the context component)

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

- Another way to consume the context is by using the default Consumer component (provided by the CreateContext component used while creating the context component), and is used by as a wrapper to the JSX code that should have access to a context value with it. Although the Consumer component needs a special kind of content that is passed between the opening/closing tags, which is a function that will be executed by reat under the hood, that function receive as a paramenter the context value that needs to be consumed and will return the actual JSX code that should be output the component consuming the context value.

```jsx
import { CartContext } from "../store/shopping-cart-context";

export default function Cart({ onUpdateItemQuantity }) {
  return (
    // Using the Consumer component
    <CartContext.Consumer>
      {(cartCtx) => {
        const totalPrice = cartCtx.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );

        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

        return (
          <div id="cart">
            {cartCtx.items.length === 0 && <p>No items in cart!</p>}
            {cartCtx.items.length > 0 && (
              <ul id="cart-items">
                {cartCtx.items.map((item) => {
                  const formattedPrice = `$${item.price.toFixed(2)}`;

                  return (
                    <li key={item.id}>
                      <div>
                        <span>{item.name}</span>
                        <span> ({formattedPrice})</span>
                      </div>
                      <div className="cart-item-actions">
                        <button
                          onClick={() => onUpdateItemQuantity(item.id, -1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onUpdateItemQuantity(item.id, 1)}>
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            <p id="cart-total-price">
              Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}
```

> Although the default approach to access a context value is by using the useContext hook because is easier, it provides a cleaner code and is easier to read.

### Link the context to the state

Linking the context to the state by using it as a value for the value property in the wrapper context component's tag. This will allow to access the state from anywhere in the application that uses the context. As for updating the state throught the context api, it is necessary to expose the functions that handles the updates of the state, and this can be done by defining and object with the properties that will hold the state and the functions required:

```jsx
const ctxValue = {
  items: shoppingCart.items,
  addItemToCart: handleAddItemToCart,
};
```

> Whenever a context value changes, the component function that access that context value will be re-excuted by react, just as the component function would also be re-executed if it would be using some internal state that was updated or if its parent component were executed again.

### Practice project: migrate the project management app to use the Context API

## Outsourcing Context & State into a Separate Provider Component

A common practice when using context in a react app is to outsource the code of the context provider into a separate file and be exported to use throughout the entire application, since its very likely that the source code increase over time and handle multiple states values, therefore the context creation and sharing can be defined in the same file along with the context provider component function.

```bash
│   └── store
│       └── shopping-cart-context.jsx
```

## React Hook useReducer to manage more complex state

A reducer is a function that reduce one or more complex values to a simpler one. The `useReducer` Hook is similar to the `useState` Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, `useReducer` may be useful.

## How to use it?

The useReducer Hook accepts two arguments:

```jsx
  useReducer(<reducer>, <initialState>)
```

The `reducer` function contains your custom state logic and the `initialState` can be a simple value but generally will contain an object. The `reducer` argument function accepts two arguments: `state` and `action`:

```jsx
function reducer(state, action) {
  // reducer logic
}
```

The `useReducer` Hook returns the current stateand a dispatchmethod.
