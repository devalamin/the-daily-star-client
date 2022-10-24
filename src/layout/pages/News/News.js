import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../shared/NewsSummary/NewsSummaryCard';


const News = () => {
    const news = useLoaderData();
    return (
        <div>
            <h3>This is News</h3>
            <NewsSummaryCard news={news}></NewsSummaryCard>
        </div>
    );
};

export default News;