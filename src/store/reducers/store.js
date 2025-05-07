import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./errorReducer";

//The Redux store is a centralized container for your application's state.
//It holds the entire state tree and provides methods to:

//Access the state
//Dispatch actions
//Subscribe to state changes

//| Function              | Description                                    |
//| --------------------- | ---------------------------------------------- |
//| `getState()`          | Returns the current state tree                 |
//| `dispatch(action)`    | Sends an action to update the state            |
//| `subscribe(listener)` | Registers a function to run when state changes |

//Centralized State: All state is stored in one place — easy to debug, test, and manage.
//Predictable State Management: State changes only via actions and reducers → makes logic consistent.
//Shared Access Across Components: Any component can access or update the same store — no prop drilling.
//Time Travel & Debugging Tools: Redux DevTools can rewind and replay state changes using the store.

//| Part        | Purpose                           |
//| ----------- | --------------------------------- |
//| `store`     | Holds the entire app state        |
//| `dispatch`  | Updates state through actions     |
//| `getState`  | Lets you read current state       |
//| `subscribe` | Lets you respond to state changes |

export const store = configureStore({
    reducer: {
         products: productReducer,
         errors: errorReducer,
        // carts: cartReducer,
        // auth: authReducer,
        // payment: paymentMethodReducer,
    },
    preloadedState: {
       
    }
});

export default store;