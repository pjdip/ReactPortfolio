import React from "react";
import "./style.css";

const GalleryItem = (props) => {
    return (
        <div className="col-12 col-lg-6 col-xl-4 mb-4">
            <a target="_blank" rel="noopener noreferrer" href={props.sauce}>
                <img className="img img-thumbnail" alt={props.alt} src={props.sauce} />
            </a>
        </div>
    );
};

export default GalleryItem;