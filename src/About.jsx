import { Link, Outlet } from "react-router-dom"


function About(){
    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 ">
        
       <h1 className="text-3xl font-bold text-blue-600">About page</h1>
       <p className="text-gray-700 mt-4 text-lg">welcome to page and explore more</p>
       

       <nav>
        <ul>
            <li><Link to="team" className="text-blue-500 hover:underline">Our Team</Link></li>
            <li><Link to="/" className="text-blue-500 hover:underline">
            Back To Home</Link></li>
        </ul>
       </nav>
       <div className="mt-8 w-full max-w-4xl">
        <Outlet/>
       </div>
       
        </div>
    
    
      )
}
export default About