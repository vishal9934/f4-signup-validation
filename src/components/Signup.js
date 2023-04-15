import "./signup.css";
import React, { useState } from "react";

function Signup() {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
//   console.log(userData.name)
//   console.log(userData.email)

const [error1 , setError1]=useState("");
const [error2 , setError2]=useState("");
const [error3 , setError3]=useState("");
const [error4 , setError4]=useState("");


  function clickHandler(e) {
    e.preventDefault();
    
    //error for empty field
   let arr=Object.keys(userData);
   
   arr.map((item)=> {
    if(userData[item]===""){
        setError1("Error: All The fields are mandatory");
    }
    else{
        setError1("")
    }
   })
   
   
  

   //email validate
   if(!validateEmail(userData.email)){
    setError2("Please enter a valid email")
}else{
    setError2("")
}

        //password validate
        if(userData.password !== userData.confirmPassword){
            setError3("Password is mismatching")
        } else{
            setError3("")
        }
        console.log(userData.password)
       
     //validation
     if( error1==="" && error2==="" && error3==="" && userData.password!=="" && userData.password === userData.confirmPassword ){
        setError4("Successfully Signed Up!")
    }else{
        setError4("")
    }



  }
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={clickHandler}>
        <input type="text" placeholder="Full Name" onChange={(e) => {setuserData({...userData, name: e.target.value})}}/>
        <input type="text" placeholder="Email"  onChange={(e) => {setuserData({...userData, email: e.target.value})} }/>
        <input type="password" placeholder="Password"  onChange={(e) => {setuserData({...userData, password: e.target.value})}}/>
        <input type="password" placeholder="Confirm Password"  onChange={(e) => {setuserData({...userData, confirmPassword: e.target.value})}}/>
         
        <div className="error1">{error1} </div>
        <div className="error2">{error2} </div>
        <div className="error3">{error3} </div>
        <div className="error4">{error4} </div>
        
        <button>Signup</button>
      </form>

    </div>
  );
}
export default Signup;
