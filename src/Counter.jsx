import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/actions/action";

/* 
useSelector: 
    is a React-Redux hook that lets your React component access data from the Redux strore


useDispatch:
    
    is another React-Redux hook lets your component send actions to the Redux store

*/
// const Counter = () => {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h1>Counter in counter component :{count} </h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//     </div>
//   );
// };
// export default Counter;


const Counter = () =>{

   const count = useSelector( (state) => state.count);
   const dispatch = useDispatch();

   return(
    <div>
        <h1>counter component {count}</h1>
       <button onClick={ () => dispatch(increment())}>increment</button>
    </div>
   )

}

export default Counter;