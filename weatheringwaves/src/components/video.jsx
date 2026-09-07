import "../App.css"
import sky from "../assets/skyvideo.mp4"

function skybackground() {
    return(
        <div className="video-container">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="background-video"
            >
                <source src={sky}/>
            </video>
        </div>
    );

}

export default skybackground