import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h1>This is home, Total News : {allNews.length}</h1>
        </div>
    );
};

export default Home;