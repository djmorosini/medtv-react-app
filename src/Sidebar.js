import React from 'react';
import {
    Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink,
    Collapse, Button, CardBody, Card, Input
} from 'reactstrap';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.state = { collapse: false, collapse2: false, collapse3: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggle2() {
        this.setState({ collapse2: !this.state.collapse2 });
    }

    toggle3() {
        this.setState({ collapse3: !this.state.collapse3 });
    }

    render() {
        return (
                <Nav vertical id='filter-sidebar'>
                    <h5>Categories</h5>
                    <NavItem>
                        <NavItem className='category-title' onClick={this.toggle}>Category 1</NavItem>
                        <Collapse isOpen={this.state.collapse}>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Sub-category</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Sub-category</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Sub-category</NavLink>
                            </NavItem>
                        </Collapse>
                    </NavItem>
                    <NavItem>
                        <NavItem className='category-title' onClick={this.toggle2}>Category 2</NavItem>
                        <Collapse isOpen={this.state.collapse2}>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Sub-category</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Sub-category</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Sub-category</NavLink>
                            </NavItem>
                        </Collapse>
                    </NavItem>
                    <NavItem>
                        <NavItem className='category-title' onClick={this.toggle3}>Category 3</NavItem>
                        <Collapse isOpen={this.state.collapse3}>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Sub-category</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Sub-category</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='sub-title' href="#">- Sub-category</NavLink>
                            </NavItem>
                        </Collapse>
                    </NavItem>
                    <br />
                    <h5>Filters</h5>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                </Nav>
            
        );
    }
}