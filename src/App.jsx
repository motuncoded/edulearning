import './App.css';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom"
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Books from './components/Books';
import Errorpage from './components/Errorpage';
import Websites from './components/Websites';
import Tools from "./components/Tools"

function App() {
  return (
    <div className="App">
     <Navbar/>
  

     <Routes>
      <Route index path="/" element={<Home/>} />
      <Route path="resources">
      <Route  index element={<Courses/>}/>
        <Route path="/resources/books" element={<Books/>}/>
        <Route path="/resources/courses" element={<Courses/>}/>

        <Route path="/resources/tools" element={<Tools/>}/>
        <Route path="/resources/websites" element={<Websites/>}/>

      </Route>
      <Route path="blog" element={<Blog/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<Errorpage/>}/>


     </Routes>
    </div>
  );
}

export default App;
