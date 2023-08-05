import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function Blog() {
  const navigate = useNavigate();
  const [opinion, setBlog] = useState([])
  const [records, setRecords] = useState([])
  const [filterData, setFilterData] = useState('');
// const getDataArray = async()=>{
//   axios.get('http://localhost:8000/get')
//   .then(res =>{
//     console.log(res.data);
//     console.log(res);
//     setBlog(res.data);
//   }).catch(err =>{
//     console.log(err);
//   })
// }

useEffect(()=>{  // get all blogs API
  axios.get('https://reactblog-0n93.onrender.com/get')
  .then(opinion =>{
    setBlog(opinion.data)
    setRecords(opinion.data);
  }
    )
  .catch(err => console.log(err))
}, [])

const Filter = (e)=>{  // filter data based on title
  if(e.target.value === ''){
    setBlog(records)
  }else{
    const filterResult =  records.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setBlog(filterResult)
  }
  setFilterData(e.target.value)
}


const deleteData = async(_id)=>{ // delete api by id for frontend code
  if(window.confirm(`Are you sure you want to delete ${_id}`)){
    axios.delete('https://reactblog-0n93.onrender.com/remove/' + _id)
      .then(res => {
        console.log(res.data);
        alert('data is deleted !')
      }).catch(err => {
        console.log(err);
      })
  }else{
    console.log('data is not existing !');
  }
  
}

const logOutButton = async(e)=>{
  alert("Logout Sucessfully !");
      e.preventDefault();
      navigate('/signup');
}
  
  return (
    <>
    <div className='container' style={{backgroundColor: "skyblue"}}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="!#"><b>Opinion App</b></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" to={"/"} href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" to={"/"} href="/blogForm">Blog Form</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" onClick={logOutButton} type="submit">Log Out</button>
            </form>
          </div>
        </div>
      </nav>
      
      <div className='container'>
        <div>
       
         <input style={{marginTop:"4px", marginBottom:"4px"}} type="text" className='form-control' value={filterData} onInput={(e)=>Filter(e)} placeholder='Search'/>

        </div>
        {opinion.map(ele => {
        return (
          <div class="card" style={{marginTop:"2px", marginBottom: "2px", backgroundColor:"GrayText"}}>
            <div class="card-body">
              <h5 class="card-title">{ele.title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">{ele.subtitle}</h6>
              <p class="card-text">{ele.Description}</p>
              <button style={{alignItems: "center"}} onClick={()=>deleteData(ele._id)} class="btn btn-primary">Delete</button>
            </div>
          </div>
        )
      })}
      </div>

      <footer class="container" style={{backgroundColor: "gray"}}>
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className='container'>
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

export default Blog;
