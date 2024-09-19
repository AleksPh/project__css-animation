const Block5 = () =>{
  const blocks = Array.from({ length: 5 }, (_, i) => i + 1);
  return(
    <div className="animation-block" style={{paddingBottom: '40px', paddingTop: '40px'}}>
      <div className="main__fifth-animation">
      {blocks.map((i) => (
        <div key={i} className="pre-block" style={{ '--i': i }}></div>
      ))}
    </div>
    <hr className="animation-block__line" /> 
    <div className="animation-block__text">
          <h3 style={{ fontSize: '18px', color: '#536fee' }}>Scanner</h3>
          <hr className="animation-block__line" />
          <p style={{ letterSpacing: '0.5px', fontWeight: '500', color: '#536fee' }}> Unusual fingerprint scanning animation written without using JavaScript</p>
          <hr className="animation-block__line" />
    </div>
    </div>
  )
}

export default Block5