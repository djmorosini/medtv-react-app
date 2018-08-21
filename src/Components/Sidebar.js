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
        this.toggle4 = this.toggle4.bind(this);
        this.toggle5 = this.toggle5.bind(this);
        this.toggle6 = this.toggle6.bind(this);
        this.drop1 = this.drop1.bind(this);
        this.drop2 = this.drop2.bind(this);
        this.drop3 = this.drop3.bind(this);
        this.drop4 = this.drop4.bind(this);
        this.state = { collapse1: false, collapse2: false, collapse3: false, collapse4: false, collapse5: false, collapse6: false, dropdownOpen1: false, dropdownOpen2: false, dropdownOpen3: false, dropdownOpen4: false };
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

    toggle4() {
        this.setState({ collapse4: !this.state.collapse4 });
    }

    toggle5() {
        this.setState({ collapse5: !this.state.collapse5 });
    }

    toggle6() {
        this.setState({ collapse6: !this.state.collapse6 });
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
                                <Link className='filter-links' to="/videos?tag=Below+60"><DropdownItem className='filter-items'>Below 60</DropdownItem></Link>
                                <Link className='filter-links' to="/videos?tag=Above+60"><DropdownItem className='filter-items'>Above 60</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.drop2}>
                            <DropdownToggle className="filter-icons" caret>
                                Gender
                        </DropdownToggle>
                            <DropdownMenu right>
                                <Link className='filter-links' to="/videos?tag=Male"><DropdownItem className='filter-items'>Male</DropdownItem></Link>
                                <Link className='filter-links' to="/videos?tag=Female"><DropdownItem className='filter-items'>Female</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen3} toggle={this.drop3}>
                            <DropdownToggle className="filter-icons" caret>
                                Duration
                        </DropdownToggle>
                            <DropdownMenu right>
                                <Link className='filter-links' to="/videos?tag=Less+than+45+min"><DropdownItem className='filter-items'>Less than 45 min</DropdownItem></Link>
                                <Link className='filter-links' to="/videos?tag=Longer+than+45+min"><DropdownItem className='filter-items'>Longer than 45 min</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpen4} toggle={this.drop4}>
                            <DropdownToggle className="filter-icons" caret>
                                Location
                        </DropdownToggle>
                            <DropdownMenu right>
                                <Link className='filter-links' to="/videos?tag=In+US"><DropdownItem className='filter-items'>In U.S.</DropdownItem></Link>
                                <Link className='filter-links' to="/videos?tag=Outside+US"><DropdownItem className='filter-items'>Outside U.S.</DropdownItem></Link>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                    <Nav vertical id='side-nav'>
                        <h4 id='side-nav-title'>Categories</h4>
                        <NavItem className='category-title' onClick={this.toggle1}>Cardiovascular</NavItem>
                        <Collapse isOpen={this.state.collapse1}>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Aortic+Valve">Aortic Valve</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Coronary+Artery">Coronary Artery</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Heart">Heart</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Transplantation">Transplantation</NavLink></div>
                            </NavItem>
                        </Collapse>
                        <NavItem className='category-title' onClick={this.toggle2}>Digestive</NavItem>
                        <Collapse isOpen={this.state.collapse2}>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Duodenum">Duodenum</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Liver">Liver</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Pancreas">Pancreas</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Spleen">Spleen</NavLink></div>
                            </NavItem>
                        </Collapse>
                        <NavItem className='category-title' onClick={this.toggle3}>Musculoskeletal</NavItem>
                        <Collapse isOpen={this.state.collapse3}>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Knee">Knee</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Hemorrhoid">Hip/Thigh</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Neck/Spine">Neck/Spine</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Pelvis">Pelvis</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Wrist/Hand">Wrist/Hand</NavLink></div>
                            </NavItem>
                        </Collapse>
                        <NavItem className='category-title' onClick={this.toggle4}>Respiratory</NavItem>
                        <Collapse isOpen={this.state.collapse4}>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Bronchus">Bronchus</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Lung">Lung</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Thoracic">Thoracic</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Trachea">Trachea</NavLink></div>
                            </NavItem>
                        </Collapse>
                        <NavItem className='category-title' onClick={this.toggle5}>Skin</NavItem>
                        <Collapse isOpen={this.state.collapse5}>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Biopsy">Biopsy</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Cosmetic">Cosmetic</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Grafting">Grafting</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Nail">Nail</NavLink></div>
                            </NavItem>
                        </Collapse>
                        <NavItem className='category-title' onClick={this.toggle6}>Urinary System</NavItem>
                        <Collapse isOpen={this.state.collapse6}>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Bladder">Bladder</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Kidney">Kidney</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Prostate">Prostate</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className='sub-links'><NavLink className='sub-title' to="/videos?tag=Ureter">Ureter</NavLink></div>
                            </NavItem>
                        </Collapse>
                    </Nav>
                </div>
            </Fragment>
        );
    }
}