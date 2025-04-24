
// const initialState = {count:10};
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {count: state.count + 1};
//     case 'DECREMENT':
//       return {count: state.count - 1};
//     case 'RESET':
//       return {count: 0};
//     default:
//       return state;
//   }
// }
// export default counterReducer;

import { useEffect } from "react"



const initialState ={
    count:10
}

const counterReducer = (state=initialState, action) =>{


    switch(action.type){

        case 'INCREMENT':
           return {count: state.count +1}
           case "DECREMENT":
            return {count:state.count-1}
            default:
                return state;
    }

}
export default counterReducer;