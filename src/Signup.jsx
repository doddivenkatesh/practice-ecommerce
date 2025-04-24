import React from 'react'




const Signup = () => {
   
  return (
    <div>
      <h1>SignUp</h1>
          
     <label>
        <form>
            <h1>userName</h1>
            <input type='text' placeholder='username'/>
            <h1>email address</h1>
            <input type="email" placeholder='enter_email_address'></input>
            <h1>password</h1>
            <input type='text' placeholder='password'/>
         
             <br/>
             <br/>
            <button onClick={ () =>{}} className='bg-white  px-0 py-0 '>Register</button>
        </form>
     </label>
      
      
    </div>
  )
}

export default Signup
