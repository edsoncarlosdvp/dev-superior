import React from 'react'
import { ReactComponent as GithubIcon } from 'assets/github_icon.svg'
import './styles.css'

export const NavBar = (): JSX.Element => {
    return (
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer" >
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/devsuperior</p>
                    </div>
                </a>
            </div>
        </nav>
    )
}