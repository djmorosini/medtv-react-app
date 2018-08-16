import React, { Component, Fragment } from 'react';
import {
    Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink,
    Collapse
} from 'reactstrap';
import VideoList from './VideoList';
// import { Link } from 'react-router-dom'
import VideoListBreadCrumb from './ListBreadcrumb'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.drop1 = this.drop1.bind(this);
        this.drop2 = this.drop2.bind(this);
        this.drop3 = this.drop3.bind(this);
        this.drop4 = this.drop4.bind(this);
        this.state = { collapse1: false, collapse2: false, collapse3: false, dropdownOpen1: false, dropdownOpen2: false, dropdownOpen3: false, dropdownOpen4: false };
    }

    toggle1() {
        this.setState({ collapse1: !this.state.collapse1 });
    }

    toggle2() {
        this.setState({ collapse2: !this.state.collapse2 });
    }

    toggle3() {
        this.setState({ collapse3: !this.state.collapse3 });
    }

    drop1() {
        this.setState({ dropdownOpen1: !this.state.dropdownOpen1 });
    }
    drop2() {
        this.setState({ dropdownOpen2: !this.state.dropdownOpen2 });
    }
    drop3() {
        this.setState({ dropdownOpen3: !this.state.dropdownOpen3 });
    }
    drop4() {
        this.setState({ dropdownOpen4: !this.state.dropdownOpen4 });
    }

    render() {
        return (
            <Fragment>
                <h1 className='trendTitle' id="video-header">Video List Page</h1>
                <VideoListBreadCrumb />
                <div id='filter-sidebar'>
                    <Nav id='filter-top'>
                        <Dropdown isOpen={this.state.dropdownOpen1} toggle={this.drop1}>
                            <DropdownToggle className="filter-icons" caret>
                                Age
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem >Age Below 60</DropdownItem>
                                <DropdownItem>Age Above 60</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.drop2}>
                            <DropdownToggle className="filter-icons" caret>
                                Gender
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem >Male</DropdownItem>
                                <DropdownItem>Female</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen3} toggle={this.drop3}>
                            <DropdownToggle className="filter-icons" caret>
                                Duration
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem >Less than 3 hours</DropdownItem>
                                <DropdownItem>Longer than 3 hours</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen4} toggle={this.drop4}>
                            <DropdownToggle className="filter-icons" caret>
                                Location
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem >In U.S.</DropdownItem>
                                <DropdownItem>Outside U.S.</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                    <Nav vertical id='side-nav'>
                        <h4 id='side-nav-title'>Categories</h4>
                        <NavItem className='category-title' onClick={this.toggle1}>Cardiology</NavItem>
                        <Collapse isOpen={this.state.collapse1}>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Coronary Artery</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Heart</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Aneurysm Repair</NavLink>
                            </NavItem>
                        </Collapse>
                        <NavItem className='category-title' onClick={this.toggle2}>Orthopedic</NavItem>
                        <Collapse isOpen={this.state.collapse2}>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Back</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Hip</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Hand/Wrist</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Knee</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Shoulder</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Foot/Ankle</NavLink>
                            </NavItem>
                        </Collapse>
                        <NavItem className='category-title' onClick={this.toggle3}>General</NavItem>
                        <Collapse isOpen={this.state.collapse3}>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Cholecystectomy</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Hemorrhoid</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Colon Resection</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Thyroid</NavLink>
                            </NavItem>
                        </Collapse>
                    </Nav>
                    <VideoList />
                </div>
            </Fragment>
        );
    }
}