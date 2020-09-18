import React from 'react'
import { FormattedMessage } from 'react-intl'

export function NotFound() {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    <FormattedMessage
                        id="not-found-title"
                        defaultMessage="Not found!"
                    />
                </h1>
                <p className="subtitle">
                    <FormattedMessage
                        id="not-found-text"
                        defaultMessage="This is not the page you are looking for."
                    />

                </p>
            </div>
        </section>
    )
}


export function NotFoundUnlocalised() {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    Not found!
                </h1>
                <p className="subtitle">
                    This is not the page you are looking for.
                </p>
            </div>
        </section>
    )
}