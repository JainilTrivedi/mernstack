import React, { useState } from 'react';
import axios from "axios";
import {toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",

  const Submited = async (e) => {
    e.preventDefault();

    if (pass !== cpass) {
      // alert("Passwords do not match");
      toast.error('Passwords do not match!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    const newUser = {
      name:name,
      email:email,
      password:pass,
      confirmPassword:cpass,
    };
    try{
      const user = await axios.post('/register',newUser);
      console.log(user.data.userRegistered.name);
      if(user.status===201){
        alert(user.data.userRegistered);
      }
    }catch(e){
      console.log(e.message);
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="toastcontainer"><ToastContainer></ToastContainer></div>
        {/* <form action="" class="form" method="post"> */}
        <form method='POST' onSubmit={(e) => { Submited(e) }} class="form" >
          <h2>Sign Up</h2>
          <div class="inputs">
            <input value={name} type="text" required name="userName" id="userName" onChange={(e) => setName(e.target.value)} />
            <label for="userName">User Name</label>
          </div>
          <div class="inputs">
            <input value={email} type="text" required name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            <label for="email">Email</label>
          </div>
          <div class="inputs">
            <input value={pass} type="password" required name="pass" id="pass" onChange={(e) => setPass(e.target.value)} />
            <label for="pass">Password</label>
          </div>
          <div class="inputs">
            <input value={cpass} type="password" required name="confirmPassword" id="confirmPassword" onChange={(e) => setCpass(e.target.value)} />
            <label for="confirmPassword">Confirm Passoword</label>
          </div>
          <input type="submit" value="login" class="submit-button" />
        </form>
      </div>
    </>
  )
}

export default Signup
