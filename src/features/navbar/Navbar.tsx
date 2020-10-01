import React, { useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    toggle,
    selectIsOpen
} from './navbarSlice';
import { selectBreeds, load } from '../breeds/breedsSlice';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import LocalisedLink, { LocalisedNavLink } from '../LocalisedLink'
import { LocalisationData } from '../localisation/Localisation'

export function Navbar() {
    const isOpen = useSelector(selectIsOpen);
    const breeds = useSelector(selectBreeds);
    const dispatch = useDispatch();
    const intlData = useIntl();

    let closeBurgerMenu = () => {
        if (isOpen) {
            dispatch(toggle());
        }
    }

    useEffect(() => {
        dispatch(load());
        // eslint-disable-next-line
    }, []);

    let breedsMenuItem;
    if (Object.keys(breeds).length === 0) {
        breedsMenuItem = (
            <LocalisedLink to="/breeds" className="navbar-item" onClick={() => closeBurgerMenu()}>
                <FormattedMessage
                    id="breeds"
                    defaultMessage="Breeds"
                />
            </LocalisedLink>
        );
    }
    else {
        let navbarBreeds: ReactElement[] = [];
        Object.keys(breeds).forEach((u, i) => {

            navbarBreeds.push(
                <LocalisedNavLink to={"/breeds/" + u} key={i} className="navbar-item" activeClassName="is-active" onClick={() => closeBurgerMenu()}>
                    {breeds[u].name}
                </LocalisedNavLink>);
        });

        let breedsDropdown = (
            <div className="navbar-dropdown">
                {navbarBreeds}
            </div>
        )

        breedsMenuItem = (
            <div className="navbar-item has-dropdown is-hoverable">
                <LocalisedLink to="/breeds" className="navbar-link" onClick={() => closeBurgerMenu()}>
                    <FormattedMessage
                        id="breeds"
                        defaultMessage="Breeds"
                    />
                </LocalisedLink>
                {breedsDropdown}
            </div>
        );
    }

    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <LocalisedLink to="/" className="navbar-item" onClick={() => closeBurgerMenu()}>
                    <span role="img" aria-label="dog" className="is-size-4">🐕</span>
                </LocalisedLink>

                <a className={`navbar-burger burger ${isOpen ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => dispatch(toggle())}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
                <div className="navbar-start">
                    {breedsMenuItem}
                </div>
                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <p className="navbar-link">
                            {LocalisationData[intlData.locale].displayText}
                        </p>
                        <div className="navbar-dropdown">
                            {Object.keys(LocalisationData).map((locale, i) => {
                                // replace locale (javascript replace only replaces first occurence)
                                let switchLangUrl = window.location.pathname.replace(`${process.env.PUBLIC_URL}/${intlData.locale}`, `/${locale}`);
                                if(locale !== intlData.locale) {
                                    return (
                                        <Link to={switchLangUrl} key={i} className="navbar-item" onClick={() => closeBurgerMenu()}>
                                            {LocalisationData[locale].displayText}
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <div key={i} className="navbar-item has-text-weight-bold has-text-link">
                                            {LocalisationData[locale].displayText}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
    /* eslint-enable */
}