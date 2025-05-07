import api from "../../api/api"
//In Redux, an action is a plain JavaScript object that describes an event or intent to change the state of the application.
//| Term         | Role                              |
//| ------------ | --------------------------------- |
//| `action`     | Describes **what** happened       |
//| `dispatch()` | Sends the action to Redux         |
//| `reducer`    | Decides **how** the state changes |
//Redux follows a strict unidirectional data flow. Actions help keep that flow predictable, traceable, and maintainable by:

//Describing what happened
//Actions give a clear, structured way to represent user interactions or events.

//Separating logic from intent
//Components dispatch actions, and reducers decide how the state changes — this separation improves modularity and testability.

//Centralizing state updates
//All state changes happen through actions and reducers, making the app's behavior easier to follow and debug.

export const fetchProducts = (queryString) => async (dispatch) => {
    try {
        dispatch({ type: "IS_FETCHING" });
        const { data } = await api.get(`/public/products?${queryString}`);
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        
        dispatch({ type: "IS_SUCCESS" });
    } catch (error) {
        console.log(error);
        dispatch({ 
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch products",
         });
    }
};


export const fetchCategories = () => async (dispatch) => {
    try {
        dispatch({ type: "CATEGORY_LOADER" });
        const { data } = await api.get(`/public/categories`);
        dispatch({
            type: "FETCH_CATEGORIES",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        dispatch({ type: "IS_ERROR" });
    } catch (error) {
        console.log(error);
        dispatch({ 
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch categories",
         });
    }
};
