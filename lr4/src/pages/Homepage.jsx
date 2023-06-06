import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Homepage = () => {
    return (
        <div>
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
    <div class="container my-4">
        <h1>Ласкаво просимо на головну сторінку!</h1>
        <p>Текст.</p>
    </div>
        <div class="container">
    <div class="row">
        <div class="col-md-4">
        <h2>Послуга 1</h2>
        <p>Це текст, який описує послугу 1</p>
        </div>
        <div class="col-md-4">
        <h2>Послуга 2</h2>
        <p>Це текст, який описує послугу 2</p>
        </div>
        <div class="col-md-4">
        <h2>Послуга 3</h2>
        <p>Це текст, який описує послугу 3</p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8">
        <h2>Про нас</h2>
        <p>Текст, який описує  компанію.</p>
        </div>
    </div>
    </div>
    </div>
    )
}

export {Homepage}
