import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loadAdditionalData, selectBreeds } from '../breeds/breedsSlice';

export function BreedDetail() {
    let { breed } = useParams();
    let breedName: string = breed;
    const dispatch = useDispatch();
    const breeds = useSelector(selectBreeds);
    const breedObject = breeds[breedName.toLowerCase()]

    useEffect(() => {
        dispatch(loadAdditionalData(breedName));
        // eslint-disable-next-line
    }, [breed]);

    const imagesPerPage = 20;
    const maxPage = Math.floor(breedObject?.images.length / imagesPerPage);
    const [page, setPage] = useState(0);

    if (breedObject === undefined) {
        return (
            <div className="section">
                <div className="container">
                    <h1 className="title">Loading...</h1>
                </div>
            </div>
        )
    }

    let pageImages = breedObject.images.slice(page * imagesPerPage, page * imagesPerPage + imagesPerPage);

    let breedImages = pageImages.map((u, i) => {
        return (
            <div className="column is-3" key={i}>
                <div className="box">
                    <img src={u} alt={breedObject.name}></img>
                </div>
            </div>);
    });

    let pagination =
        (
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <button className="pagination-previous" disabled={page <= 0} onClick={() => setPage(page - 1)}>Previous</button>
                <button className="pagination-next" disabled={page >= maxPage} onClick={() => setPage(page + 1)}>Next page</button>
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
                            <button className="pagination-link" onClick={() => setPage(maxPage)}>{maxPage+1}</button>
                        </li>
                    }
                </ul>
            </nav>
        )

    return (
        <>
            <div className="section">
                <div className="container">
                    <h1 className="title">{breedObject.name}</h1>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    {pagination}
                    <div className="columns is-multiline">
                        {breedImages}
                    </div>
                    {pagination}
                </div>
            </div>
        </>
    )
}