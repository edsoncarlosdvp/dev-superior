import React from 'react'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import './styles.css'

export const Pagination = (): JSX.Element => {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <ArrowLeft />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <ArrowRight />
                </button>
            </div>
        </div>
    )
}