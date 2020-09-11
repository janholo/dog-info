import React, { useState, useEffect } from 'react'
import App from '../../App';
import { IntlProvider } from 'react-intl'
import { MessageFormatElement } from 'intl-messageformat-parser/src/types'
import Spinner from '../Spinner';

export class Locale {
    displayText: string = "";
}

export const LocalisationData: { [locale: string]: Locale } = {
    "en": { displayText: "English" },
    "de": { displayText: "Deutsch" },
}

interface ILocalisedAppProps {
    locale: string
}

enum State {
    FailedToLoadLanguageData,
    Loading,
    Ok
}

export function LocalisedApp(props: ILocalisedAppProps) {
    let [messages, setMessages] = useState<{messages: Record<string, string> | Record<string, MessageFormatElement[]> | undefined, state: State, locale: string}>({messages: undefined, state: State.Loading, locale: "en"});

    useEffect(() => {
        // locale changed, load messages
        if(props.locale !== "en") {
            setMessages({messages: undefined, state: State.Loading, locale: props.locale});

            fetch(`/compiled-lang/${props.locale}2.json`)
                .then(r => r.json())
                .then(json => {
                    setMessages({messages: json, state: State.Ok, locale: props.locale});
                })
                .catch(() => {
                    setMessages({messages: undefined, state: State.Ok, locale: "en"});
                    //addToast("Failed to load language data - Please reload this page");
                });    
        }
        else {
            setMessages({messages: undefined, state: State.Ok, locale: props.locale});
        }
    }, [props.locale]);


    if(messages.state === State.Loading) {
        return <Spinner></Spinner>
    }

    return (
        <IntlProvider messages={messages.messages} locale={props.locale} defaultLocale="en">
            <App />
        </IntlProvider>
    );
}
