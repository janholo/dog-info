import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

export function Home() {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    <FormattedMessage
                        id="info"
                        defaultMessage="Infos about Dogs"
                    />
                </h1>
                <p className="subtitle">
                    <FormattedMessage
                        id="info-sub"
                        defaultMessage="A simple website using the <a>dog api</a>"
                        values={{
                            a: (chunks: ReactElement) => <a href="https://dog.ceo/dog-api/">{chunks}</a>,
                          }}
                    />
                </p>
            </div>
        </section>
    );
}