import { ReactTyped } from 'react-typed';
import BackgroundVideo from "../components/upper/bgcVideo"
import Header from "../components/upper/header"
import ShapeContainer from '../components/animation-container/shapeContainer';
import Buttons from '../components/upper/buttons';

const Cubes = () =>{
  const value = 'cube'
  return(
    <div>
      <BackgroundVideo/>
      <Header value={value}/>
      <div className='page-typed'>
        <ReactTyped
          strings={['SHAPES ANIMATIONS']}
          typeSpeed={80}
          backSpeed={60}
        />
     </div>
     <ShapeContainer/>
     <Buttons nextLink={"/All"} prevLink={"/Loaders"}/>
      
    </div>
  )
}

export default Cubes