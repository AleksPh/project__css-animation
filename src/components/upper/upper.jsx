import { Link } from 'react-router-dom';
import TypingText from "./typingText";
import BackgroundVideo from "./bgcVideo";
import animationImg from '../../image/animation-img.png'
import arrowImg from '../../image/arrow-img.png'
import Header from './header';

const Upper = ()=>{
  const value = 'home'
  return(
    <div className="upper">
      <BackgroundVideo/>
      <Header value={value}/>
      <div className="upper__content">
        <div className="upper__container">
          <TypingText/>
          <div className="upper__insert">
            <div className="upper__insert-image">
              <img src={animationImg} alt="Animation-image" className="upper__insert-image-img"></img>
            </div>
            <div className="upper__insert-text">
              <div className="upper__insert-text-span">AWESOME</div>
              <div className="upper__insert-text-span align-end">DIFFERENT-SIDES</div>
              <div className="upper__insert-text-span">ANIMATIONS</div>
            </div>
          </div>
          <div className="upper__text">
            <p>CSS animations make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components: a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation`s style.</p>
            </div>
          <div className="upper__button">
            <Link to='/All'><button className="upper__button-btn">Let`s Go! <img className="upper__button-img" src={arrowImg} alt="Arrow-Image" /></button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upper

