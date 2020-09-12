import React from 'react'
import { FormattedMessage } from 'react-intl'

interface INotFoundProps {
    error: string
}

export default function Error(props: INotFoundProps) {
    return (
        <section className="section">
            <div className="container notification is-danger">
                <h1 className="title">
                    <FormattedMessage
                        id="error"
                        defaultMessage="Error!"
                    />
                </h1>
                <p className="subtitle">
                    {props.error}
                </p>
            </div>
        </section>
    )
}