import { ReactTyped } from 'react-typed';
import BackgroundVideo from "../components/upper/bgcVideo"
import Header from "../components/upper/header"
import LoaderContainer from '../components/animation-container/loaderContainer';
import Buttons from '../components/upper/buttons';

const Loaders = () =>{
  const value = 'loader'
  return(
    <div>
      <BackgroundVideo/>
      <Header value={value}/>
      <div className='page-typed'>
        <ReactTyped
          strings={['LOADERS ANIMATIONS']}
          typeSpeed={80}
          backSpeed={60}
        />
     </div>
     <LoaderContainer/>
     <Buttons nextLink={"/Cubes"} prevLink={"/"}/>
      </div>
  )
}

export default Loaders