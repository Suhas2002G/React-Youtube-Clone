import './cards.css';

function Card(prop){
    return(
        <>
        {/* card component starts */}
            <div class="video-card">
                <img src={prop.imgsrc} alt="Image_Not_Found"></img>
                <h3>{prop.title}</h3>
                <p>{prop.subtitle}</p>
                <a href={prop.link} target="__blank">
                    <button>Watch Now</button>
                </a>
            </div>
        {/* card component ends */}
        </>
    );
}
export default Card;