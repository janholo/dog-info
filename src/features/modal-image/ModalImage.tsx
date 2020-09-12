import React from 'react'
import { useParams, useRouteMatch, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBreeds } from '../breeds/breedsSlice';

type ModalImageProps = {
    breed: string,
    subBreed: string | undefined
    maxImageCount: number
}

interface RouteParams {
    imageNumber: string
}

export function ModalImage(props: ModalImageProps) {
    let { imageNumber } = useParams<RouteParams>();
    let { url } = useRouteMatch();
    const breeds = useSelector(selectBreeds);

    let breed = breeds[props.breed];

    if (breed === undefined) {
        return <></>
    }

    if (props.subBreed !== undefined) {
        breed = breed.subBreeds[props.subBreed];

        if (breed === undefined) {
            return <></>
        }
    }

    let imageNumberNumber = parseInt(imageNumber);

    if (isNaN(imageNumberNumber)) {
        return <></>
    }
    let imgSrc = breed.images[imageNumberNumber];

    if (imgSrc === undefined) {
        return <></>
    }

    let index = url.indexOf("/image/");
    let backUrl = url.slice(0, index);

    let nextImage = backUrl + "/image/" + (imageNumberNumber + 1);
    let previousImage = backUrl + "/image/" + (imageNumberNumber - 1);

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content" style={{ width: "100%", height: "100%", maxWidth: "calc(100vw - 40px)" }}>
                <img src={imgSrc} alt={breed.name} style={{ display: "block", objectFit: "contain", width: "100%", height: "100%" }} />
            </div>
            <Link to={backUrl}>
                <button className="modal-close is-large" aria-label="close"></button>
            </Link>
            {imageNumberNumber > 0 &&
                <div style={{ position: "fixed", left: "5vw", top: "90%" }}>
                    <Link to={previousImage}>
                        <button className="button is-link">
                            &#060;
                        </button>
                    </Link>
                </div>
            }
            {imageNumberNumber < (props.maxImageCount - 1) &&
                <div style={{ position: "fixed", right: "5vw", top: "90%" }}>
                    <Link to={nextImage}>
                        <button className="button is-link">
                            &#062;
                        </button>
                    </Link>
                </div>
            }
        </div>
    )
}