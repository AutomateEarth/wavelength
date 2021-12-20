import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Skill from './pages/Skill';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="skills" element={<Skills />} />
                <Route path="/skill/:path" element={<Skill />} />
            </Route>
        </Routes>
    );
}