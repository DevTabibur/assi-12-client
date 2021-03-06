import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./HeaderNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const HeaderNav = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar className="shadow header" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            PROJECT NAME
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="header-link" to="/home">
                HOME
              </Nav.Link>

              <Nav.Link as={Link} className="header-link" to="/contact">
                CONTACT
              </Nav.Link>
              <Nav.Link as={Link} className="header-link" to="/blog">
                BLOG
              </Nav.Link>

              {/* // only login user can see this route */}
              {user && (
                <>
                  {" "}
                  <Nav.Link
                    as={Link}
                    className="header-link"
                    to="/manage-inventory"
                  >
                    Manage Inventory
                  </Nav.Link>
                  <Nav.Link as={Link} className="header-link" to="/add-item">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} className="header-link" to="/my-items">
                    My Items
                  </Nav.Link>
                </>
              )}

              {user ? (
                <button
                  className="header-link sign-out-btn"
                  onClick={() => signOut(auth)}
                >
                  LOGOUT
                </button>
              ) : (
                <Nav.Link className="header-link" as={Link} to="/login">
                  LOGIN
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav;
