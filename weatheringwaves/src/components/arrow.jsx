import '../App.css';

function Arrow({direction}) {
    return (   
    <div
      className="wind-arrow"
        style={{ transform: `rotate(${direction}deg)` }}
    >
      ↑
    </div>
    );
}

export default Arrow