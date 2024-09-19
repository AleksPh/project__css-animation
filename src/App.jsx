import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/style.css'

import Upper from "./components/upper/upper";
import All from './pages/all';
import Cubes from './pages/cubes';
import Loaders from './pages/loaders';
import Registration from './pages/registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Upper/>}></Route>
        <Route path='/All' element={<All/>}></Route>
        <Route path='/Cubes' element={<Cubes/>}></Route>
        <Route path='/Loaders' element={<Loaders/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;



