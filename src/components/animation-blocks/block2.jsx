import smileImg from "../../image/smile-img.png"
const Block2 = () =>{
  return(
    <div className="animation-block" style={{gap: '50px' }}>
       <div className="main__animation translated">
         <div className="main__second-animation">
            <div className="cube-2">
              <div className="side front"><img src={smileImg} alt=""/></div>
              <div className="side back"><img src={smileImg} alt=""/></div>
              <div className="side right"><img src={smileImg} alt=""/></div>
              <div className="side left"><img src={smileImg} alt=""/></div>
              <div className="side topp"><img src={smileImg} alt=""/></div>
              <div className="side bottom"><img src={smileImg} alt=""/></div>
           </div>
         </div>
      </div>
      <hr className="animation-block__line" /> 
      <div className="animation-block__text">
          <h3 style={{ fontSize: '18px', color: '#536fee' }}>Rotating Cube</h3>
          <hr className="animation-block__line" />
          <p style={{ letterSpacing: '0.5px', fontWeight: '500', color: '#536fee' }}> Simple animation of a volumetric cube rotating both along the X and Y axes, simple and beautiful</p>
          <hr className="animation-block__line" />
      </div>
    </div>
  )
}

export default Block2