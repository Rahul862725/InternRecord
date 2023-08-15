import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {Routes,Route} from 'react-router-dom'
import About from './Components/About';

function App() {
  return (
     <>
     <Navbar/>
     <Routes>
      
      <Route exact path="/about" element={<About/>}/>
         
       
      <Route exact path="/" element={<News category="general" page={5} pageSize={10}/>}/>
      <Route exact path="/business" element={<News category="business" page={5} pageSize={10}/>}/>
      <Route exact path="/technology" element={<News category="technology" page={5} pageSize={10}/>}/>
      <Route exact path="/entertainment" element={<News category="entertainment" page={5} pageSize={10}/>}/>
      <Route exact path="/health" element={<News category="health" page={5} pageSize={10}/>}/>
      <Route exact path="/science" element={<News category="science" page={5} pageSize={10}/>}/>
      <Route exact path="/general" element={<News category="general" page={5} pageSize={10}/>}/>
      <Route exact path="/sports" element={<News category="sports" page={5} pageSize={10}/>}/>
       

     </Routes>

     </>
  );
}

export default App;
