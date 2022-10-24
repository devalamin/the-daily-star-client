import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    // console.log(news);
    const { title, thumbnail_url: img, details, _id, total_view } = news;

    return (
        <div>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Image src={img}></Image>

                    <Card.Text>
                        {
                            details?.length > 250 ? <span>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></span>
                                :
                                <span>{details}</span>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>


        </div>
    );
};

export default NewsSummaryCard;