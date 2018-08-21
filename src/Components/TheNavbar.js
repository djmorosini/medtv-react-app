import React from 'react';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupAddon, InputGroup, Input,
  Container
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'

import Picture from '../images/logo_transparent_small(1).png'


export default class TheNavbar extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (

      <Navbar fixed="top" id='toplevel-nav' dark expand="lg">
        <Container>
          <Link className='the-logo' to="/"><img alt='MedTV logo' height={40} src={Picture} /></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className='nav-links' to="/videos"><div className='nav-item-container'>Videos</div></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Browse
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink className='nav-browse' to='videos?tag=Cranial'>Cranial</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className='nav-browse' to='videos?tag=Appendages'>Appendages</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className='nav-browse' to='videos?tag=Heart'>Heart</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className='nav-browse' to='videos?tag=Lung'>Lung</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className='nav-browse' to='videos?tag=Vascular'>Vascular</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem id='team-nav'>
                <NavLink className='nav-links nav2' to="/meet-our-team"><div className='nav-item-container contribute'>Team</div></NavLink>
              </NavItem>
              <NavItem>
                <InputGroup>
                  <Input type="text" className="form-control" placeholder="Search for..." />
                  <InputGroupAddon addonType="append" className="input-group-btn">
                    <Button className="nav-go" type="button">Go!</Button>
                  </InputGroupAddon>
                </InputGroup>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}