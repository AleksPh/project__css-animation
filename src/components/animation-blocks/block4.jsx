const Block4 = () =>{
  const spans = Array.from({ length: 20 }, (_, i) => i + 1);
  return(
    <div className="animation-block" style={{paddingBottom: '40px', paddingTop: '40px', gap: "30px"}}>
       <div className="main__fourth-animation">
      <div className="loader">
        {spans.map((i) => (
          <span key={i} style={{ '--i': i }}></span>
        ))}
      </div>
    </div>
    <hr className="animation-block__line" /> 
    <div className="animation-block__text">
          <h3 style={{ fontSize: '18px', color: '#536fee' }}>Bright loader</h3>
          <hr className="animation-block__line" />
          <p style={{ letterSpacing: '0.5px', fontWeight: '500', color: '#536fee' }}>Bright loading screen animation shimmering with RGB colors and pulsing</p>
          <hr className="animation-block__line" />
    </div>
    </div>
  )
}

export default Block4