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
            <div>
            <div>
                <ul>
                    <li>
                        <Link to={`${match.path}`}>Dashboard</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to={`${match.path}/master`}>Master</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link to={`${match.path}/pos`}>Pos</Link>*/}
                    {/*</li>*/}
                    <li className="push-right">
                        <button onClick={this.signOut} href="#">
                            Sign Out
                        </button>
                    </li>
                </ul>
                <main role="main">
                    <div className="main">
                        <Switch>
                            {/*<Route path={`${match.path}/master`}>*/}
                            {/*    <Master />*/}
                            {/*</Route>*/}
                            {/*<Route path={`${match.path}/pos`}>*/}
                            {/*    <Pos />*/}
                            {/*</Route>*/}
                            <Route exact path={`${match.path}`}>
                                <IndexDashboard />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </main>
            </div>
        <div>
            <Row>
                <Col sm={6} lg={4}>
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
        </div>
        </div>
        );
    }
}

export default withRouter(Dashboard);
