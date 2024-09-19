import lightBulbImg from '../../image/bulb-img.png';
const Block9 = () =>{
  return(
    <div className="animation-block" style={{gap: '10px', paddingBottom: '10px', paddingTop: '30px' }}>
      <div className="lastItem">
      <div className="item__picture">
        <img src={lightBulbImg} alt="Light bulb icon" />
      </div>
      <div className="item__text">
        <hr className="main__line" />
        <p style={{ fontSize: '18px', color: '#536fee' }}>We are working on new ideas...</p>
        <hr className="main__line" />
      </div>
    </div>
    </div>
  )
}

export default Block9