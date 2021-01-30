import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Dashboard.css";
// import Master from "./Master";
// import Pos from "./Pos";
import IndexDashboard from "./IndexDashboard";
import NotFound from "../404";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import { SalesSummary, Projects, Feeds } from '../components/dashboard-components';
import ThemeRoutes from "../routes/routing";
import Sidebar from "../components/sidebar/sidebar";
import {Header} from "../components";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogout: false
        };
    }
    signOut = () => {
        localStorage.removeItem("token");
        this.setState({
            islogout: true
        });
    };
    render() {
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        const { match } = this.props;
        return (
            // <div>
            //     <Sidebar />
            // <div>
            //     <button onClick={this.signOut} href="#">
            //         Sign Out
            //     </button>
            // </div>
        <div>
            <Row>
            <Col lg={1}>
                <Sidebar />
            </Col>
            <Col>
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <Col sm={8} lg={4}>
                        <Feeds />
                    </Col>
                    <Col sm={6} lg={8}>
                        <SalesSummary />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Projects />
                    </Col>
                </Row>
            </Col>
            </Row>
        </div>
        // </div>
        );
    }
}

export default withRouter(Dashboard);
