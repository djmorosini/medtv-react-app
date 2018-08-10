import React from 'react';
import {
    Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink,
    Collapse, Button, CardBody, Card, Input
} from 'reactstrap';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse1: false, collapse2: false, collapse3: false, dropdownOpen: false };
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

    toggle() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    render() {
        return (
            <div id='filter-sidebar'>
                <Nav id='filter-top'>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle className="bg-primary" caret>
                            Age
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem >Age Below 60</DropdownItem>
                            <DropdownItem>Age Above 60</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink href="#">Gender</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Duration</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Location</NavLink>
                    </NavItem>
                </Nav>
                <Nav vertical id='side-nav'>
                    <h5>Categories</h5>
                    <NavItem>
                        <NavItem className='category-title' onClick={this.toggle1}>Cardiology</NavItem>
                        <Collapse isOpen={this.state.collapse1}>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Coronary Artery Bypass Grafting</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Heart</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Aneurysm Repair</NavLink>
                            </NavItem>
                        </Collapse>
                    </NavItem>
                    <NavItem>
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
                    </NavItem>
                    <NavItem>
                        <NavItem className='category-title' onClick={this.toggle3}>General</NavItem>
                        <Collapse isOpen={this.state.collapse3}>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Laparoscopic Cholecystectomy</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Hemorrhoid</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Laparoscopic Colon Resection</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Thyroid</NavLink>
                            </NavItem>
                        </Collapse>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}