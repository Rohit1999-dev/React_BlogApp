import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

function Login() {
    
    const navigate = useNavigate();
    const [email, setEmail1] = useState()
    const [password, setPassword] = useState()
    // const handleInputValue = (e)=>{
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     console.log(name, value);
    //     setEmail1({...email1, [name]: value});
    //     console.log(setEmail1);
    // }

    const submitLogin = async(e)=>{
        // alert("submitted login sucessfully !");
        e.preventDefault();
        try {
            await axios.post('https://reactblog-0n93.onrender.com/login/', {  // post form data API
            email,
            password
            })
            .then(res=>{
                if(res.data === 'Login sucessfully !'){
                    navigate('/home') 
                }else if(res.data === 'User not exist !'){
                    alert('User not exist !');
                    navigate('/signuppage');
                }else if(res.data === 'email invalid !'){
                    alert('Email not exist !');
                    navigate('/signuppage');
                }
                else{
                    alert('Password invalid !');
                    navigate('/signuppage');
                }
                
            })
        } catch (error) {
            console.log("Error in submitLogin 1", error);
        }

    }
  return (
    <div>
          <section class="">
              <div class="px-4 py-5 px-md-5 text-center text-lg-start">
                  <div class="container">
                      <div class="row gx-lg-5 align-items-center">
                          <div class="col-lg-6 mb-5 mb-lg-0">
                              <h6 class="my-5 display-3 fw-bold ls-tight">
                                  The platform <br />
                                  <span class="text-primary">where we can explore our thought & ideas.</span>
                              </h6>
                              <p>
                                 Every learner have some inovative idea to explore their ability for making their own website.
                              </p>
                          </div>

                          <div class="col-lg-6 mb-5 mb-lg-0">
                              <div class="card">
                                  <div class="card-body py-5 px-md-5">
                                      <form action='POST'>
                                      <div class="d-flex align-items-center mb-3 pb-1">
                                                  <i class="fas fa-cubes fa-2x me-3"></i>
                                                  <span class="h1 fw-bold mb-0">Sign In</span>
                                              </div>
                                          <div class="row">
                                          <div class="form-outline mb-4">
                                              <label class="form-label" for="form3Example3">Email address</label>
                                              <input type="email" id="email" name='email' onChange={(e)=> setEmail1(e.target.value)} class="form-control" />
                                          </div>
                                          <div class="form-outline mb-4">
                                              <label class="form-label" for="form3Example4">Password</label>
                                              <input type="password" id="password" name='password' onChange={(e)=> setPassword(e.target.value)} class="form-control" />
                                          </div>
                                          <button type="submit" onClick={submitLogin} class="btn btn-primary btn-block mb-4">
                                              Sign In
                                          </button>
                                          </div>
                                          <div class="text-center">
                                          <button class="mb-5 pb-lg-2" onClick={()=>{navigate('/signuppage', {replace: true})}}>signup</button>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Login;