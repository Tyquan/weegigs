import React from "react";
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import AddGigPage from "./views/user/AddGigPage";
import IndexPage from "./views/static/indexPage";
import SingleGigPage from './views/static/SingleGigPage';
import EditGigPage from "./views/user/EditGigPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<IndexPage />} />
                <Route path="gig">
                    <Route index element={<AddGigPage />} />
                    <Route path=":gigId" element={<SingleGigPage />} />
                    <Route path="edit/:gigId" element={<EditGigPage />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;