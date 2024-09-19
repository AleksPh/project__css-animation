const Block7 = () =>{
  return(
    <div className="animation-block" style={{paddingBottom: '10px', paddingTop: '30px'}}>
      <div className="main__seventh-animation">
      <div className="scan">
        <div className="fingerprint"></div>
        <span>Scanning...</span>
      </div>
    </div>
    <hr className="animation-block__line" /> 
    <div className="animation-block__text">
          <h3 style={{ fontSize: '18px', color: '#536fee' }}>Scanner</h3>
          <hr className="animation-block__line" />
          <p style={{ letterSpacing: '0.5px', fontWeight: '500', color: '#536fee' }}>Unusual fingerprint scanning animation written without using JavaScript</p>
          <hr className="animation-block__line" />
    </div>
    </div>
  )
}

export default Block7