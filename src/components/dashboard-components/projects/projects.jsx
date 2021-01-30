import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>History (Jaison Burnette)</CardTitle>
                        <CardSubtitle>Overview of Latest Month</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Date</th>
                            <th className="border-0">Alert view</th>
                            <th className="border-0">Time</th>
                            <th className="border-0">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h5 className="mb-0 font-16 font-medium">12 / May / 2020</h5> 
                            </td>
                            <td>On</td>
                            <td>03 : 34 : 04 p.m.</td>
                            <td><a href="https://www.google.lk/maps/place/New+York">Live Map</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="mb-0 font-16 font-medium">12 / May / 2020</h5>
                            </td>
                            <td>Off</td>
                            <td>04 : 34 : 04 a.m</td>
                            <td><a href="https://wrappixel.com">Live Map</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="mb-0 font-16 font-medium">12 / May / 2020</h5>
                            </td>
                            <td>On</td>
                            <td>07 : 34 : 04 a.m</td>
                            <td><a href="https://wrappixel.com">Live Map</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="mb-0 font-16 font-medium">12 / May / 2020</h5>
                            </td>
                            <td>On</td>
                            <td>03 : 34 : 04 p.m</td>
                            <td><a href="https://wrappixel.com">Live Map</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="mb-0 font-16 font-medium">12 / May / 2020</h5>
                            </td>
                            <td>Off</td>
                            <td>04 : 34 : 04 a.m.</td>
                            <td><a href="https://wrappixel.com">Live Map</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="mb-0 font-16 font-medium">12 / May / 2020</h5>
                            </td>
                            <td>Off</td>
                            <td>04 : 34 : 04 a.m.</td>
                            <td><a href="https://wrappixel.com">Live Map</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="mb-0 font-16 font-medium">12 / May / 2020</h5>
                            </td>
                            <td>On</td>
                            <td>07 : 34 : 04 a.m.</td>
                            <td><a href="https://wrappixel.com">Live Map</a></td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Projects;
