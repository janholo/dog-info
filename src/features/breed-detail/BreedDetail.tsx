import React, { useEffect, useState } from 'react'
import { useParams, useRouteMatch, Switch, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loadAdditionalData, selectBreeds, Breed } from '../breeds/breedsSlice';
import { ModalImage } from '../modal-image/ModalImage'
import LocalisedLink from '../LocalisedLink';
import { FormattedMessage } from 'react-intl';

export function BreedDetail() {
    let { breed, subbreed } = useParams();
    let { path, url } = useRouteMatch();

    let breedName: string = breed;
    let subBreedName: string = subbreed;

    const dispatch = useDispatch();
    const breeds = useSelector(selectBreeds);
    const breedObject = getBreedObject(breeds, breedName, subBreedName);

    const [page, setPage] = useState(0);

    useEffect(() => {
        setPage(0);
        if (subBreedName !== undefined) {
            // skip sub breeds
            return
        }
        dispatch(loadAdditionalData(breedObject?.name));
        // eslint-disable-next-line
    }, [breed, subbreed]);

    if (breedObject === undefined) {
        return (
            <div className="section">
                <div className="container">
                    <h1 className="title">
                        <FormattedMessage
                            id="loading"
                            defaultMessage="Loading..."
                        />
                    </h1>
                </div>
            </div>
        )
    }

    const imagesPerPage = 20;
    const maxPage = Math.floor(breedObject?.images.length / imagesPerPage);

    let pageImages = breedObject.images.slice(page * imagesPerPage, page * imagesPerPage + imagesPerPage);

    let breedImages = pageImages.map((u, i) => {
        return (
            <div className="column is-3" key={i}>
                <Link to={`${url}/image/${i + page * imagesPerPage}`} className="box">
                    <img src={u} alt={breedObject.name} style={{display: "block", margin: "0 auto"}}></img>
                </Link>
            </div>);
    });

    let pagination =
        (
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <button className="pagination-previous" disabled={page <= 0} onClick={() => setPage(page - 1)}>
                    <FormattedMessage
                        id="previous"
                        defaultMessage="Previous"
                    />
                </button>
                <button className="pagination-next" disabled={page >= maxPage} onClick={() => setPage(page + 1)}>
                    <FormattedMessage
                        id="next"
                        defaultMessage="Next"
                    />
                </button>
                <ul className="pagination-list">
                    {page > 1 &&
                        <li>
                            <button className="pagination-link" onClick={() => setPage(0)}>1</button>
                        </li>
                    }
                    {page > 2 &&
                        <li>
                            <span className="pagination-ellipsis">&hellip;</span>
                        </li>
                    }
                    {page > 0 &&
                        <li>
                            <button className="pagination-link" onClick={() => setPage(page - 1)}>{page}</button>
                        </li>
                    }
                    <li>
                        <button className="pagination-link is-current" aria-current="page">{page + 1}</button>
                    </li>
                    {page < maxPage &&
                        <li>
                            <button className="pagination-link" onClick={() => setPage(page + 1)}>{page + 2}</button>
                        </li>
                    }
                    {page + 2 < maxPage &&
                        <li>
                            <span className="pagination-ellipsis">&hellip;</span>
                        </li>
                    }
                    {page + 1 < maxPage &&
                        <li>
                            <button className="pagination-link" onClick={() => setPage(maxPage)}>{maxPage + 1}</button>
                        </li>
                    }
                </ul>
            </nav>
        )

    let subBreedBoxes = Object.keys(breedObject.subBreeds).map((u, i) => {
        let subBreed = breedObject.subBreeds[u];
        return (
            <div className="column is-4" key={i}>
                <LocalisedLink to={`/subbreeds/${breedObject.name.toLowerCase()}/${subBreed.name.toLowerCase()}`} className="box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <h2 className="is-size-5">
                        {subBreed.name}
                    </h2>
                    {subBreed.images.length !== 0 && (
                        <figure className="image is-128x128">
                            <img src={subBreed.images[0]} alt={subBreed.name} className="is-rounded" style={{ objectFit: "cover", width: 128, height: 128 }}></img>
                        </figure>
                    )}
                </LocalisedLink>
            </div>);
    });


    return (
        <>
            <div className="section">
                <div className="container">
                    <h1 className="title is-3">{breedObject.name}</h1>
                    {subBreedName !== undefined &&
                        <p className="subtitle">
                            <FormattedMessage
                                id="sub-breed-link"
                                defaultMessage="Is a sub-breed of <a></a>"
                                values={{
                                    a: () => <LocalisedLink to={`/breeds/${breedName.toLowerCase()}`}>{" " + breeds[breedName].name}</LocalisedLink>,
                                }}
                            />
                        </p>
                    }
                </div>
            </div>
            {subBreedBoxes.length !== 0 &&
                <div className="section">
                    <div className="container">
                        <h2 className="title is-4">
                            <FormattedMessage
                                id="sub-breeds"
                                defaultMessage="Sub-breeds"
                            />
                        </h2>
                        <div className="columns is-multiline">
                            {subBreedBoxes}
                        </div>
                    </div>
                </div>
            }
            <div className="section">
                <div className="container">
                    <h2 className="title is-4">
                        <FormattedMessage
                            id="images"
                            defaultMessage="Images"
                        />
                    </h2>
                    {pagination}
                    <div className="columns is-multiline">
                        {breedImages}
                    </div>
                    {pagination}
                </div>
            </div>
            <Switch>
                <Route path={`${path}/image/:imageNumber`} render={() => <ModalImage breed={breed} subBreed={subbreed} maxImageCount={breedObject.images.length} />} />
            </Switch>
        </>
    )
}

function getBreedObject(breeds: { [id: string]: Breed }, breedName: string, subBreedName: string): Breed | undefined {
    let breed = breeds[breedName];

    if (breed === undefined) {
        return undefined;
    }

    if (subBreedName !== undefined) {
        return breed.subBreeds[subBreedName];
    }

    return breed;
}