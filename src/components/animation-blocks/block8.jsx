const Block8 = () =>{
  const handleClick = (e) => {
    e.preventDefault(); 
  };
  return(
    <div className="animation-block" style={{gap: '20px', paddingBottom: '10px', paddingTop: '10px' }}>
      <div className="main_eight-animation">
      <a href="#" className="main__button" onClick={handleClick}>
        RGB Border
      </a>
    </div>
    <hr className="animation-block__line" /> 
    <div className="animation-block__text">
          <h3 style={{ fontSize: '18px', color: '#536fee' }}>RGB Border</h3>
          <hr className="animation-block__line" />
          <p style={{ letterSpacing: '0.5px', fontWeight: '500', color: '#536fee' }}>Nice animation of a button with rgb transfusion that will suit everyones taste</p>
          <hr className="animation-block__line" />
    </div>
    </div>
  )
}

export default Block8