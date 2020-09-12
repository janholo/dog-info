import React from 'react';
import { useSelector } from 'react-redux';
import { selectBreeds } from '../breeds/breedsSlice';
import LocalisedLink from '../LocalisedLink';
import { FormattedMessage } from 'react-intl';

export function Breeds() {
    const breeds = useSelector(selectBreeds);

    if (Object.keys(breeds).length === 0) {
        return NoBreedsFound();
    }

    let breedBoxes = Object.keys(breeds).map((u, i) => {
        let breed = breeds[u];
        return (
            <div className="column is-4" key={i}>
                <LocalisedLink to={"/breeds/" + u} className="box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <h2 className="is-size-5">
                        {breed.name}
                    </h2>
                    {breed.images.length !== 0 && (
                        <figure className="image is-128x128">
                            <img src={breed.images[0]} alt={breed.name} className="is-rounded" style={{ objectFit: "cover", width: 128, height: 128 }}></img>
                        </figure>
                    )}
                </LocalisedLink>
            </div>);
    });

    return (
        <>
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        <FormattedMessage
                            id="breeds"
                            defaultMessage="Breeds" />
                    </h1>
                    <p className="subtitle">
                        <FormattedMessage
                            id="select-breed"
                            defaultMessage="Select a breed to show more information" />
                    </p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline">
                        {breedBoxes}
                    </div>
                </div>
            </section>
        </>
    );
}

function NoBreedsFound() {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    <FormattedMessage
                        id="breeds"
                        defaultMessage="Breeds"
                    />
                </h1>
                <p className="subtitle">
                    <FormattedMessage
                        id="loading"
                        defaultMessage="Loading..."
                    />
                </p>
            </div>
        </section>
    )
}