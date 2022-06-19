import React from 'react'

const Login = () => {
  return (
    <>
     <div className="login-container">
     <form action="" class="form" method="post">
        <h2>Login</h2>
        <div class="inputs">
            <input type="text" required name="userName" id="userName" />
            <label for="userName">User Name</label>
        </div>
        <div class="inputs">
            <input type="password" required name="pass" id="pass" />
            <label for="pass">Password</label>
        </div>
          <input type="submit" value="login" class="submit-button" />
          <a href="#forgotPass" class="forgotPassword">Forgot Password</a>
      </form>
    </div>

    <div id="forgotPass">
        <form action="" class="form" method="get">
            <a href='#'  class="close" > &times; </a>   { /*&times will produce a cross(x)  */ } 
            <h3>Reset Password</h3>
            <div class="inputs">
                <input type="email" required name="email" id="email" />
                <label for="email">Email</label>
              </div>
          <input type="submit" value="Submit" class="submit-button" />
        </form>
     </div>
    </>
  )
}

export default Login
