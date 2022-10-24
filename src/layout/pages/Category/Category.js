import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../shared/NewsSummary/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            <h4>This is category:{categoryNews.length} </h4>
            {
                categoryNews.map(news => <NewsSummaryCard news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;