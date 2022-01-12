import React from 'react'
import { Rating } from 'components/Rating'
import './styles.css'

export const Score = (): JSX.Element => {

    const score = 3.5
    const count = 13

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <Rating />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}