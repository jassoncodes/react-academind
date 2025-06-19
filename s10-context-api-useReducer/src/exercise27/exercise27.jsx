import React from "react"

export function counterReducer(state, action)
{
    switch (action.type)
    {
        case 'INCREMENT':
            return {
                count: state.count += 1
            }
        case 'DECREMENT':
            return {
                count: state.count -= 1
            }
        case 'RESET':
            return {
                count: 0
            }
    }
}

export const Counter = () =>
{
    const [counterState, counterDispatch] = React.useReducer(
        counterReducer,
        {
            count: 0
        }
    );

    return (
        <div id="counter">
            <h1>The (Final?) Counter</h1>
            <p id="actions">
                <button onClick={() => counterDispatch({ type: 'INCREMENT' })}>Increment</button>
                <button onClick={() => counterDispatch({ type: 'DECREMENT' })} >Decrement</button>
                <button onClick={() => counterDispatch({ type: 'RESET' })}>Reset</button>
            </p>
            <p id="counter">{counterState.count}</p>
        </div>
    )
}
