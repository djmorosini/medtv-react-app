import React, { Component, Fragment } from 'react';
import {
    Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu,
    Collapse
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'

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
                <h1 className='trendTitle' id="video-header">Video List</h1>
                <VideoListBreadCrumb />
                <div id='filter-sidebar'>
                    <Nav id='filter-top'>
                        <Dropdown isOpen={this.state.dropdownOpen1} toggle={this.drop1}>
                            <DropdownToggle className="filter-icons" caret>
                                Age
                        </DropdownToggle>
                            <DropdownMenu right>
                            <Link className='filter-links' to="/videos?tag=Below+60"><DropdownItem>Below 60</DropdownItem></Link>
                            <Link className='filter-links' to="/videos?tag=Above+60"><DropdownItem>Above 60</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.drop2}>
                            <DropdownToggle className="filter-icons" caret>
                                Gender
                        </DropdownToggle>
                            <DropdownMenu right>
                            <Link className='filter-links' to="/videos?tag=Male"><DropdownItem >Male</DropdownItem></Link>
                            <Link className='filter-links' to="/videos?tag=Female"><DropdownItem>Female</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen3} toggle={this.drop3}>
                            <DropdownToggle className="filter-icons" caret>
                                Duration
                        </DropdownToggle>
                            <DropdownMenu right>
                            <Link className='filter-links' to="/videos?tag=Less+than+45+min"><DropdownItem>Less than 45 min</DropdownItem></Link>
                            <Link className='filter-links' to="/videos?tag=Longer+than+45+min"><DropdownItem>Longer than 45 min</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen4} toggle={this.drop4}>
                            <DropdownToggle className="filter-icons" caret>
                                Location
                        </DropdownToggle>
                            <DropdownMenu right>
                            <Link className='filter-links' to="/videos?tag=In+US"><DropdownItem >In U.S.</DropdownItem></Link>
                            <Link className='filter-links' to="/videos?tag=Outside+US"><DropdownItem>Outside U.S.</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                    <Nav vertical id='side-nav'>
                        <h4 id='side-nav-title'>Categories</h4>
                        <NavItem className='category-title' onClick={this.toggle1}>Cardiology</NavItem>
                        <Collapse isOpen={this.state.collapse1}>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Coronary+Artery">Coronary Artery</NavLink></div>
                            </NavItem>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Heart">Heart</NavLink></div>
                            </NavItem>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Aneurysm+Repair">Aneurysm Repair</NavLink></div>
                            </NavItem>
                        </Collapse>
                        <NavItem className='category-title' onClick={this.toggle2}>Orthopedic</NavItem>
                        <Collapse isOpen={this.state.collapse2}>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=back">Back</NavLink></div>
                            </NavItem>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Hip">Hip</NavLink></div>
                            </NavItem>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Hand/Wrist">Hand/Wrist</NavLink></div>
                            </NavItem>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Knee">Knee</NavLink></div>
                            </NavItem>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Shoulder">Shoulder</NavLink></div>
                            </NavItem>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Foot+Ankle">Foot/Ankle</NavLink></div>
                            </NavItem>
                        </Collapse>
                        <NavItem className='category-title' onClick={this.toggle3}>General</NavItem>
                        <Collapse isOpen={this.state.collapse3}>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Cholecystectomy">Cholecystectomy</NavLink></div>
                            </NavItem>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Hemorrhoid">Hemorrhoid</NavLink></div>
                            </NavItem>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Colon+Resection">Colon Resection</NavLink></div>
                            </NavItem>
                            <NavItem>
                            <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Thyroid">Thyroid</NavLink></div>
                            </NavItem>
                        </Collapse>
                    </Nav>
                </div>
            </Fragment>
        );
    }
}