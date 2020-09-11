import React from 'react'

interface INotFoundProps {
    error: string
}

export default function Error(props: INotFoundProps) {
    return (
        <section className="section">
            <div className="container notification is-danger">
                <h1 className="title">
                    Error!
                </h1>
                <p className="subtitle">
                    {props.error}
                </p>
            </div>
        </section>
    )
}