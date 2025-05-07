
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
    products: null,
    categories: null,
    pagination: {},
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage,
                },
            };
                default :
                return state;
        }};