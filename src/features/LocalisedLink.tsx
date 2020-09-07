import React from 'react'
import { Link, LinkProps } from "react-router-dom";
import * as H from 'history';
import { useIntl } from 'react-intl';

export default function LocalisedLink<S = H.LocationState>(props: React.PropsWithoutRef<LinkProps<S>> & React.RefAttributes<HTMLAnchorElement>) {
    const intl = useIntl()

    let adjustedProps = {...props, to:`/${intl.locale}${props.to}`};
    
    return (
        <Link {...adjustedProps}></Link>
    )
}
