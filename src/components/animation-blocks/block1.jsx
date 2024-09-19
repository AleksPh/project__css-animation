const Block1 = () =>{
  return(
    <div className="animation-block" style={{gap: '50px' }}>
       <div>
         <div className="cube">
            <div className="top"></div>
              <div>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 1 }}></span>
                <span style={{ '--i': 2 }}></span>
                <span style={{ '--i': 3 }}></span>
              </div>
          </div>
       </div> 
        <div className="animation-block__text">
          <h3 style={{ fontSize: '18px', color: '#536fee' }}>RGB Cube</h3>
          <hr className="animation-block__line" />
          <p style={{ letterSpacing: '0.5px', fontWeight: '500', color: '#536fee' }}>The rgb animation of the levitating cube is written in pure CSS without JavaScript interference</p>
          <hr className="animation-block__line" />
        </div>
    </div>
  )
}

export default Block1



    