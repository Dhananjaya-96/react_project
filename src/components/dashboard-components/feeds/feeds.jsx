import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const Feeds = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle>STAFF</CardTitle>
                <div className="feed-widget">
                    <ul className="list-style-none feed-body m-0 pb-3">
                        <li className="feed-item">
                            <div className="feed-icon bg-info"><i className="far fa-bell"></i></div>Jaison Burnatte<span className="ml-auto font-12 text-muted"></span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-success"><i className="ti-server"></i></div>Ali Akbhar<span className="ml-auto font-12 text-muted"></span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-warning"><i className="ti-shopping-cart"></i></div>Clifford Shan<span className="ml-auto font-12 text-muted"></span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-danger"><i className="ti-user"></i></div>Mickey Mouse<span className="ml-auto font-12 text-muted"></span>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}

export default Feeds;
