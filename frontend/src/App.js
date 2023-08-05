import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from './components/blog';
import BlogPage from './components/blogform';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import SignUpPage from './components/signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route
            path="/"
            element={ <Login/> }
        />
        <Route
            path="/signup"
            element={ <SignUpPage/> }
        />
        <Route
            path="/home"
            element={ <Blog /> }
        />
        <Route
            path="/blogForm"
            element={ <BlogPage /> }
        />
    </Routes>
</BrowserRouter>
  );
}

export default App;
