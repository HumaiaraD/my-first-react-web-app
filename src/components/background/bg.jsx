import "./bg.css";
import video1 from "../../assets/video1.mp4";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";



const Background = ({playStatus, heroCount}) => {
    
    if (playStatus){
        return (
            <video className="background fade-in" autoPlay loop muted >
                <source src={video1} type="video/mp4"/>
            </video>
        )
    }
    else if (heroCount===0){
        return <img src={b1} className="background fade-in" alt="" />
    }
    else if (heroCount===1){
        return <img src={b2} className="background fade-in" alt="" />
    }
    else if (heroCount===2){
        return <img src={b3} className="background fade-in" alt="" />
    }

}

export default Background;