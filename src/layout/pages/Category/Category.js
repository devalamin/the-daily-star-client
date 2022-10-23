import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            <h4>This is category:{categoryNews.length} </h4>
        </div>
    );
};

export default Category;