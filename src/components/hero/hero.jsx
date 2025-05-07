import "./hero.css";
import arrowBtn from "../../assets/arrowbtn.png";
import playBtn from "../../assets/play-icon.png";
import pauseBtn from "../../assets/pause-btn.png";


const Hero = (heroData, heroCount,setHeroCount, setPlayStatus, playStatus) => {
    return (
        <>
            <div className="hero">
                <div className="hero-text">
                    <p>{heroData.text1}</p>
                    <p>{heroData.text2}</p>
                </div>
                <div className="hero-explore">
                    <p>Explore the features</p>
                    <img src={arrowBtn} alt="" width="30px" height="30px" />
                </div>
                <div className="hero-dot-play">
                    <ul className="hero-dots">
                        <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                        <li onClick={()=>setHeroCount(1)}  className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                        <li onClick={()=>setHeroCount(2)}  className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
                    </ul>
                    <div className="hero-play">
                        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pauseBtn:playBtn} alt="" width="30px" height="30px"/>
                        <p>See the video.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;