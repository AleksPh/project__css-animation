import arrowImg from "../../image/arrow-img.png"
import { Link } from 'react-router-dom';

const Buttons = ({nextLink, prevLink})=>{
  return(
    <div className="buttons">
      <button className="prev">
        <img className="buttons__image" src={arrowImg} alt="arrow" />
        <Link to={prevLink}>Previous Page</Link>
      </button>
      <button className="next">
        <Link to={nextLink}>Next Page</Link>
        <img className="buttons__image next" src={arrowImg} alt="arrow" />
      </button>
     </div>
  )
}
export default Buttons