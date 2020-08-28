import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggle,
  selectIsOpen
} from './navbarSlice';
import { selectUnits, load } from '../units/unitsSlice';

export function Navbar() {
    const isOpen = useSelector(selectIsOpen);
    const units = useSelector(selectUnits);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(load());
    // eslint-disable-next-line
    }, []);
    
    let navbarUnits = []
    if(units.length === 0)
    {
        navbarUnits.push(
            <p key="load" className="navbar-item">
                Loading...
            </p>);
    }
    else
    {
        units.forEach((u, i) => {
              navbarUnits.push(
                <a key={i} href={"/units/" + u.name} className="navbar-item">
                    {u.name}
                </a>);            
        });
    }

    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="/logo.png" alt="AOE2"/>
                </a>
            
                <a className={`navbar-burger burger ${isOpen ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => dispatch(toggle())}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="/units">
                            Units
                        </a>
                        <div className="navbar-dropdown">
                            {navbarUnits}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
    /* eslint-enable */
}