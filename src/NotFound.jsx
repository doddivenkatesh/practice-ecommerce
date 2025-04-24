import { Link, Outlet } from "react-router-dom"


function NotFound(){
    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        
       <h1 className="text-3xl font-bold text-blue-600">404 Not |Found page</h1>
       <p className="text-gray-700 mt-4 text-lg">OOPs  no more</p>
        </div>
    
    
      )
}
export default NotFound