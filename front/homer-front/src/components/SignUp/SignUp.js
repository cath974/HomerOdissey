import React, { useState } from 'react';

const SignUp = () => {
   
    const [ email, setEmail ] = useState('');
    

 const  updateEmailField = (event) => {
    const value = event.target.value;
    setEmail(value)
  }


      return (
        <div>
            <h1>{email}</h1>
            <input type="email" name="email"
            value={email}
            onChange={updateEmailField}/>                      
        </div>          
                   
    )
}

export default SignUp;
