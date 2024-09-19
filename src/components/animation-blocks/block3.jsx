const Block3 = () =>{
  return(
    <div className="animation-block" style={{gap: '20px' }}>
       <div className="main__third-animation">
          <div className="container">
            <div className="bowl">
              <div className="liquid"></div>
            </div>
          </div>
      </div>
      <hr className="animation-block__line" /> 
      <div className="animation-block__text">
          <h3 style={{ fontSize: '18px', color: '#536fee' }}>Shining glass</h3>
          <hr className="animation-block__line" />
          <p style={{ letterSpacing: '0.5px', fontWeight: '500', color: '#536fee' }}>An unusual animation of a glass flask with liquid inside that pulsates with colors and shimmers</p>
          <hr className="animation-block__line" />
      </div>
    </div>
  )
}

export default Block3