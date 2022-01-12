import {
    Routes,
    Route
} from "react-router-dom"
import { ListingPage } from 'pages/listing'
import { FormPage } from 'pages/form'

export const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/form">
                <Route path=":movieId" element={<FormPage />} />
            </Route>
            <Route path="/" element={<ListingPage />} />
        </Routes>
    );
}