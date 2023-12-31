import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function Editform() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [values, setValues] = useState({
        id: id,
        title: '',
        subtitle: '',
        Description: ''
    })
    useEffect(()=>{
        axios.get('https://reactblog-0n93.onrender.com/blogform/'+id)
        .then(res=>{
            // console.log(res);
            setValues({title: res.data.title, subtitle: res.data.subtitle, Description: res.data.Description});
        }).catch(err =>{
            console.log(err);
        })
    }, [id]);

    const editSubmit = async(e)=>{
        e.preventDefault();
        axios.put('https://reactblog-0n93.onrender.com/rename/'+id, values)
        .then(res=>{
            navigate('/home')
        }).catch(err =>{
            console.log(err);
        })
    }

  return (
    <>
        <div className='container' style={{backgroundColor:'skyblue'}}>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="!#"><b>Opinion App</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <p class="nav-link" aria-current="page" onClick={()=>{navigate('/home')}}>Home</p>
                            </li>
                            <li class="nav-item">
                            <p class="nav-link" onClick={()=>{navigate('/blogform')}}>Blog Form</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section class="h-25 d-inline-block">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black">
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit Messages</p>
                                            <form>
                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form4Example1">Title</label>
                                                    <input type="text" name="title" value={values.title} onChange={e=> setValues({...values, title:e.target.value})} class="form-control" />
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form4Example2">Subtitle</label>
                                                    <input type="text" name="subtitle" value={values.subtitle} onChange={e=> setValues({...values, subtitle:e.target.value})} class="form-control" />
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form4Example3">Description</label>
                                                    <textarea class="form-control" name="Description" value={values.Description} onChange={e=> setValues({...values, Description:e.target.value})} rows="4"></textarea>
                                                </div>

                                                <button type="submit" onClick={editSubmit} class="btn btn-primary btn-block mb-4">Edit Form</button>
                                                <button type="submit" style={{alignItems: "center", marginLeft: "5px"}} onClick={()=>{navigate('/home')}} class="btn btn-primary btn-block mb-4">Back</button>

                                            </form>

                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                class="img-fluid" alt="" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="container" style={{backgroundColor: "gray"}}>
                <section class="">
                    <div>
                        <a href="!#" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="!#" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="!#" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="!#" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="!#" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="!#" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </section>
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>About Website
                                </h6>
                                <p>
                                    Here you can use this site for give the opinion or bloging the websites, here we can explore your opinion.
                                </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Skills
                                </h6>
                                <p>
                                    <a href="!#" class="text-reset">React Js</a>
                                </p>
                                <p>
                                    <a href="!#" class="text-reset">JavaScript</a>
                                </p>
                                <p>
                                    <a href="!#" class="text-reset">MySql</a>
                                </p>
                                <p>
                                    <a href="https://www.javatpoint.com/mongodb-tutorial" class="text-reset">Mongo DB</a>
                                </p>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Read tutorial links
                                </h6>
                                <p>
                                    <a href="https://www.w3schools.com/REACT/DEFAULT.ASP" class="text-reset">React js tutorial</a>
                                </p>
                                <p>
                                    <a href="https://www.w3schools.com/js/default.asp" class="text-reset">JavaScript tutorial</a>
                                </p>
                                <p>
                                    <a href="https://www.javatpoint.com/mysql-tutorial" class="text-reset">MySql tutorial</a>
                                </p>
                                <p>
                                    <a href="https://www.javatpoint.com/mongodb-tutorial" class="text-reset">Mongodb tutorial</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3"></i>Noida Sector-102, UP, 201304</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    yadavrohit00005@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 98 211 213 77</p>
                                <p><i class="fas fa-print me-3"></i> + 97 110 139 37</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="text-center p-4">
                    © 2021 Copyright:
                    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>
            </div>
        </>
  )
}

export default Editform;
