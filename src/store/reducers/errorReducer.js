
//Takes the current state and an action, and returns the new state.
//Input: state and action
//Output: a new state
//Never modifies the original state directly (immutability is key)

//| Part          | Description                                      |
//| ------------- | ------------------------------------------------ |
//| **Reducer**   | Function that updates state based on actions     |
//| **Pure**      | No side effects, always returns same output      |
//| **Immutable** | Returns a **new state**, doesn’t modify original |

const initialState = {
    isLoading: false,
    errorMessage: null,
    categoryLoader: false,
    categoryError: null,
    btnLoader: false,
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "IS_FETCHING":
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            };
        case "BUTTON_LOADER":
            return {
                    ...state,
                    btnLoader: true,
                    errorMessage: null,
                    categoryError: null,
                };
        case "IS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                btnLoader: false,
                categoryError: null,
                categoryLoader: false,
            };
        case "IS_ERROR":
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
                btnLoader: false,
                categoryLoader: false,
            }
        case "CATEGORY_SUCCESS":
            return {
                ...state,
                categoryLoader: false,
                categoryError: null,
            };
        case "CATEGORY_LOADER":
            return {
                ...state,
                categoryLoader: true,
                categoryError: null,
                errorMessage: null,
            }

        default:
            return state;
    }  
};