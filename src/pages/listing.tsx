import { Card } from 'components/Card'
import { Pagination } from 'components/Pagination'
import { Header } from 'Layout/Header'
import React from 'react'

export const ListingPage = (): JSX.Element => {
    return (
        <>
            <Header />
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                </div>

            </div>
        </>
    )
}