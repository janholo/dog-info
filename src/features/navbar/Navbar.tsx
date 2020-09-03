import React, { useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    toggle,
    selectIsOpen
} from './navbarSlice';
import { selectBreeds, load } from '../breeds/breedsSlice';
import { Link } from 'react-router-dom';

export function Navbar() {
    const isOpen = useSelector(selectIsOpen);
    const breeds = useSelector(selectBreeds);
    const dispatch = useDispatch();

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
            <Link to="/breeds" className="navbar-item" onClick={() => closeBurgerMenu()}>
                Breeds
            </Link>
        );
    }
    else {
        let navbarBreeds: ReactElement[] = [];
        Object.keys(breeds).forEach((u, i) => {

            navbarBreeds.push(
                <Link to={"/breeds/" + u} key={i} className="navbar-item" onClick={() => closeBurgerMenu()}>
                    {breeds[u].name}
                </Link>);
        });

        let breedsDropdown = (
            <div className="navbar-dropdown">
                {navbarBreeds}
            </div>
        )

        breedsMenuItem = (
            <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/breeds" className="navbar-link" onClick={() => closeBurgerMenu()}>
                    Breeds
                </Link>
                {breedsDropdown}
            </div>
        );
    }

    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item" onClick={() => closeBurgerMenu()}>
                    <img src="/logo.png" alt="Dog" />
                </Link>

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
                            English
                        </p>
                        <div className="navbar-dropdown">
                            <Link to="/en" key={1} className="navbar-item" onClick={() => closeBurgerMenu()}>
                                English
                            </Link>
                            <Link to="/de" key={2} className="navbar-item" onClick={() => closeBurgerMenu()}>
                                Deutsch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
    /* eslint-enable */
}