import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from './components/blog';
import Blogform from './components/blogform';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route
            path="/home"
            element={ <Blog /> }
        />
        <Route
            path="/blogForm"
            element={ <Blogform /> }
        />
    </Routes>
</BrowserRouter>
  );
}

export default App;
