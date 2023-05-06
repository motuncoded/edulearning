import './App.css';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom"
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Resources from './pages/Resources';

function App() {
  return (
    <div className="App">
     <Navbar/>
  

     <Routes>
      <Route index path="/" element={<Home/>} />
      <Route path="resources" element={<Resources/>}/>
      <Route path="courses" element={<Courses/>}/>

      <Route path="blog" element={<Blog/>}/>
      <Route path="contact" element={<Contact/>}/>

     </Routes>
    </div>
  );
}

export default App;
