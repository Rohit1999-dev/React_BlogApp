import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from './components/blog';
import BlogPage from './components/blogform';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import Editform from './components/editform';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route
            path="/"
            element={ <Login/> }
        />
        <Route
            path="/signuppage"
            element={ <SignUp/> }
        />
        <Route
            path="/home"
            element={ <Blog/> }
        />
         <Route
            path="/edit/:id"
            element={ <Editform/> }
        />
        <Route
            path="/blogform"
            element={ <BlogPage/> }
        />
    </Routes>
</BrowserRouter>
  );
}

export default App;
