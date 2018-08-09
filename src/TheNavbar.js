import React, { Component } from 'react';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupAddon, InputGroupText, InputGroup, Input,
  Container, Row, Col
} from 'reactstrap';

// class Navbar extends Component {

//   render() {

//     return (

//       <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
//         <div class="container">
//           <a class="navbar-brand" href="index.html">MedTV</a>
//           <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarResponsive">
//             <ul class="navbar-nav ml-auto">
//               <li class="nav-item">
//                 <a class="nav-link active" href="videoListPage.html">Videos</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="404.html">Contribute</a>
//               </li>
//               <li class="nav-item dropdown">
//                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Browse
//                 </a>
//                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
//                   <a class="dropdown-item" href="#">Head</a>
//                   <a class="dropdown-item" href="#">Appendages</a>
//                   <a class="dropdown-item" href="#">Heart</a>
//                   <a class="dropdown-item" href="#">Lungs</a>
//                   <a class="dropdown-item" href="#">Vascular</a>
//                 </div>
//               </li>
//               <li class="nav-item">
//                 <div class="input-group">
//                   <input type="text" class="form-control" placeholder="Search for..." />
//                   <span class="input-group-btn">
//                     <button class="btn btn-secondary" type="button">Go!</button>
//                   </span>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     )
//   }
// }
// export default TheNavbar;


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

      <Navbar fixed="top" className="bg-primary" dark expand="lg">
        <Container>
          <NavbarBrand href="/">MedTV</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem id="nav-search">
                <InputGroup>
                  <Input type="text" className="form-control" placeholder="Search for..." />
                  <InputGroupAddon className="input-group-btn">
                    <Button className="btn-success" type="button">Go!</Button>
                  </InputGroupAddon>
                </InputGroup>
              </NavItem>
              <NavItem>
                <NavLink active href="#">Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contribute</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Browse
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Head
                  </DropdownItem>
                  <DropdownItem>
                    Appendages
                  </DropdownItem>
                  <DropdownItem>
                    Heart
                  </DropdownItem>
                  <DropdownItem>
                    Lung
                  </DropdownItem>
                  <DropdownItem>
                    Vascular
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <InputGroup>
                  <Input type="text" className="form-control" placeholder="Search for..." />
                  <InputGroupAddon className="input-group-btn">
                    <Button className="nav-go" type="button">Go!</Button>
                  </InputGroupAddon>
                </InputGroup>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}