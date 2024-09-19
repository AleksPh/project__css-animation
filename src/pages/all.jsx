import { ReactTyped } from 'react-typed';
import BackgroundVideo from "../components/upper/bgcVideo";
import Header from "../components/upper/header";
import Container from '../components/animation-container/container';
import Buttons from '../components/upper/buttons';

const All = ()=>{
  const value = 'all'
  return(
    <div >
      <BackgroundVideo/>
      <Header value={value}/>
     <div className='page-typed'>
        <ReactTyped
          strings={['All ANIMATIONS']}
          typeSpeed={80}
          backSpeed={60}
        />
     </div>
     <Container/>
     <Buttons nextLink={"/"} prevLink={"/Cubes"}/>
    </div>
    
  )
}

export default All