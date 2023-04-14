import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Homepage = () => {
    return (
    <Carousel>
        <div>
            <img src="https://via.placeholder.com/800x301" />
            <p className="legend">801</p>
        </div>
        <div>
            <img src="https://via.placeholder.com/800x302" />
            <p className="legend">802</p>
        </div>
        <div>
            <img src="https://via.placeholder.com/800x303" />
            <p className="legend">803</p>
        </div>
    </Carousel>
    )
}

export {Homepage}
