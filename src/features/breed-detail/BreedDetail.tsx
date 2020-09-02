import React from 'react'
import { useParams } from 'react-router-dom'

export function BreedDetail() {

    let { breed } = useParams();

    return (
        <div>
            <p>
            Breed Detail
            </p>
        <div>
            {breed}
        </div>
        </div>
    )
}