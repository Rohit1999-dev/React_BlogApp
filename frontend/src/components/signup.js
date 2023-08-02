import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

import axios from 'axios';

function SignUp() {

    const navigate = useNavigate();
    const [signUp, setSignUp] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });

      const handleEmailInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setSignUp({...signUp, [name]: value});
        console.log(signUp);
    }

    const submitSignUp = async(e) =>{
        alert("submitted signup sucessfully !");
        e.preventDefault();
        navigate('/login');
        try {
            await axios.post('http://localhost:8000/signup/', {  // post form data API
            firstName: signUp.firstName,
            lastName: signUp.lastName,
            email: signUp.email,
            password: signUp.password
            })
          } catch (error) {
            console.log(error);
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
                                                  <span class="h1 fw-bold mb-0">Sign Up</span>
                                              </div>
                                          <div class="row">
                                              <div class="col-md-6 mb-4">
                                                  <div class="form-outline">
                                                      <label class="form-label" for="form3Example1">First name</label>
                                                      <input type="text" id="firstName" onChange={handleEmailInput} name="firstName" class="form-control" />
                                                  </div>
                                              </div>
                                              <div class="col-md-6 mb-4">
                                                  <div class="form-outline">
                                                      <label class="form-label" for="form3Example2">Last name</label>
                                                      <input type="text" id="lastName" onChange={handleEmailInput} name="lastName" class="form-control" />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="form-outline mb-4">
                                              <label class="form-label" for="form3Example3">Email address</label>
                                              <input type="email" id="email" onChange={handleEmailInput} name="email" class="form-control" />
                                          </div>
                                          <div class="form-outline mb-4">
                                              <label class="form-label" for="form3Example4">Password</label>
                                              <input type="password" id="password" onChange={handleEmailInput} name="password" class="form-control" />
                                          </div>
                                          <button type="submit" onClick={submitSignUp} class="btn btn-primary btn-block mb-4">
                                              Sign up
                                          </button>

                                          <div class="text-center">
                                          <p class="mb-5 pb-lg-2" to={'/'}>If we have account so Directly<a href="/"
                                                  >Login here</a></p>
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
export default SignUp;
