import React from "react";
import GalleryItem from "../../components/GalleryItem";
import { Carousel } from "react-bootstrap";

const Gallery = () => {
    return (
        <div className="container bg-white mt-5 mx-auto">

            <div className="row ml-sm-1">
                <div className="col mt-3">
                    <h2 className="card-title card-header bg-white text-primary pl-0 mb-4">Gallery</h2>
                </div>
            </div>

            <div className="row ml-sm-1">
                <GalleryItem
                    sauce={"./assets/images/Reso-Best-Photo.jpg"}
                    alt={"Me with my partner at Resonance Music Festival with Tobacco and The Seven Fields of Aphelion in masks"}
                />
                <GalleryItem
                    sauce={"./assets/images/pesh-pile.jpg"}
                    alt={"An adorable pile of Boston Terrier Puppies"}
                />
                <GalleryItem
                    sauce={"./assets/images/comfy.gif"}
                    alt={"Gif of Boston Terrier puppy getting comfy in a chair"}
                />
                <GalleryItem
                    sauce={"./assets/images/cuddling-kitties.jpg"}
                    alt={"My tiny kitties that I brought home from Morocco cuddling together on the bed"}
                />
                <GalleryItem
                    sauce={"./assets/images/chaouen.jpg"}
                    alt={"A view of Chefchaouen from up near the hotel/camping area"}
                />
                <GalleryItem
                    sauce={"./assets/images/chaouen-from-shuyahet(kalaa).jpg"}
                    alt={"A view of Chefchaouen from the peak of the nearest mountain at 1900 meters"}
                />
                <GalleryItem
                    sauce={"./assets/images/mountain-pass.jpg"}
                    alt={"A view of one of the steep mountain passes to gain access to the trail to the peak of Mount Tissouka"}
                />
                <GalleryItem
                    sauce={"./assets/images/akchour.jpg"}
                    alt={"A lovely waterfall within a day's hiking distance of Chefchaouen"}
                />
                <GalleryItem
                    sauce={"./assets/images/sharks1.jpg"}
                    alt={"Snorkeling with black-tip reef sharks in Bora Bora, Tahiti"}
                />
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/images/Reso-Best-Photo.jpg"
                        alt="Resonance Music Festival with Tobacco and The Seven Fields of Aphelion in masks"
                    />
                    <Carousel.Caption>
                        <p>Resonance Music Festival with Tobacco and The Seven Fields of Aphelion in masks</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/images/pesh-pile.jpg"
                        alt="An adorable pile of Boston Terrier Puppies"
                    />
                    <Carousel.Caption>
                        <p>"An adorable pile of Boston Terrier Puppies"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/images/comfy.gif"
                        alt="Gif of Boston Terrier puppy getting comfy in a chair"
                    />
                    <Carousel.Caption>
                        <p>Gif of Boston Terrier puppy getting comfy in a chair</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/images/cuddling-kitties.jpg"
                        alt="My tiny kitties that I brought home from Morocco cuddling together on the bed"
                    />
                    <Carousel.Caption>
                        <p>My tiny kitties that I brought home from Morocco cuddling together on the bed</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/images/chaouen.jpg"
                        alt="A view of Chefchaouen from up near the hotel/camping area"
                    />
                    <Carousel.Caption>
                        <p>A view of Chefchaouen from up near the hotel/camping area</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/images/chaouen-from-shuyahet(kalaa).jpg"
                        alt="A view of Chefchaouen from the peak of the nearest mountain at 1900 meters"
                    />
                    <Carousel.Caption>
                        <p>A view of Chefchaouen from the peak of the nearest mountain at 1900 meters</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/images/mountain-pass.jpg"
                        alt="A steep mountain pass to gain access to the trail to the peak of Mount Tissouka"
                    />
                    <Carousel.Caption>
                        <p>A steep mountain pass to gain access to the trail to the peak of Mount Tissouka</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/images/akchour.jpg"
                        alt="A lovely waterfall within a day's hiking distance of Chefchaouen"
                    />
                    <Carousel.Caption>
                        <p>A lovely waterfall within a day's hiking distance of Chefchaouen</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./assets/images/sharks1.jpg"
                        alt="Snorkeling with black-tip reef sharks in Bora Bora, Tahiti"
                    />
                    <Carousel.Caption>
                        <p>Snorkeling with black-tip reef sharks in Bora Bora, Tahiti</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Gallery;