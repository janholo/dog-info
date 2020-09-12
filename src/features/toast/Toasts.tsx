import React from 'react'
import styled from 'styled-components';
import { selectToasts, dismissToast, Severity } from '../toast/toastSlice';
import { useSelector, useDispatch } from 'react-redux';

const ToastsContainer = styled.div`
    position: fixed;
    display: grid;
    justify-items: right;
    align-items: center;
    width: 100%;
    z-index: 19;
`;

const ToastsContainer2 = styled.div`
    margin-top: 2vw;
    margin-right: 2vw;
`;

export default function Toasts() {

    let toasts = useSelector(selectToasts);
    let dispatch = useDispatch();

    if(toasts.length === 0) {
        return <></>
    }

    return (    
        <ToastsContainer>
            <ToastsContainer2>
                {toasts.map(t => {
                    let c = t.severity === Severity.Error ? "is-danger" : t.severity === Severity.Warning ? "is-warning" : "";
                    return (
                        <div className={`notification ${c}`}>
                            <button className="delete" onClick={() => dispatch(dismissToast(t.id))}></button>
                            {t.message}
                        </div>
                    )
                })}

            </ToastsContainer2>
        </ToastsContainer>
    )
}