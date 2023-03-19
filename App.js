import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect, useContext } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from './images/Logo.jpg';
import hero from './images/hero.jpg';

// import Hero from './components/Hero';

// import axios from 'axios';
//import { getError } from './utils';
// import { Study } from './Study';

import { get } from './fetch';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import SearchBox from './components/SearchBox';
import SecondHeroSection from './components/SecondHeroSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons/faBurger';
import Form from 'react-bootstrap/Form';

// import data from './data';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState(null);
  const { selectedCategory, setSelectedCategory } = useState(null);
  const [items, setItems] = useState({});

  useEffect(() => {
    get('/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory && !items[selectedCategory]) {
      get(`/items?category= ${selectedCategory}`).then((response) => {
        setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
      });
    }
  }, [items, selectedCategory]);

  if (!categories) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar
            style={{ width: '100%' }}
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Container>
              <Button
                title="Courses"
                id="collasible-nav-dropdown"
                style={{
                  color: 'blue',
                  height: '20px',
                  width: '20px',
                }}
                className=" d-line-block ml-auto side-nav-button "
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                {' '}
                <FontAwesomeIcon icon={faBurger} />
              </Button>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    src={Logo}
                    height="30"
                    className=" logo d-inline-block align-top img-fluid"
                    alt="logo"
                  />{' '}
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-100 justify-content-end">
                  <Link to="/AboutUs" className="nav-link">
                    About us
                  </Link>
                  <Link to="/tutor" className="nav-link">
                    Find a Tutor
                  </Link>
                  <Link to="/pricing" className="nav-link">
                    Pricing
                  </Link>

                  <NavDropdown
                    className="categories"
                    title="Courses"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item to="/math">Math</NavDropdown.Item>
                    <NavDropdown.Item to="/science">Science</NavDropdown.Item>
                    <NavDropdown.Item to="/english">English</NavDropdown.Item>
                    <NavDropdown.Item to="/history">History</NavDropdown.Item>
                    <NavDropdown.Divider />

                    <Link to="/contactUs">
                      <strong style={{ color: 'red' }}>Contact Us</strong>
                    </Link>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Link to="/signup">
                    <Button bsStyle="info" bsSize="x-small">
                      Join
                    </Button>
                  </Link>
                  <br></br>
                  <Link to="/login">
                    <Button bsStyle="warning" bsSize="x-small">
                      {' '}
                      Login
                    </Button>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            {categories.map((category) => (
              <Nav.Item key={category}>
                <Button style={{ color: 'red' }}>
                  <LinkContainer
                    to={`/items/category=${categories}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    <Nav.Link>{category}</Nav.Link>
                  </LinkContainer>
                </Button>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <HeroSection />
        <br></br>
        <SecondHeroSection />
        <br></br>
        <Pricing />
        <br></br>

        <div>
          <Container className="small-container">
            <h1 className="my-3">Sign Up</h1>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" required placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Enter Password"
                />
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>
              </Form.Group>
              <div className="mb-3">
                <Button type="submit">Sign Up</Button>
              </div>
              <div className="mb-3">
                Already have an account?
                <Link to="/login">Sign-In</Link>
              </div>
            </Form>
          </Container>
        </div>

        <main>
          <Container className="mt-3">
            <Routes></Routes>
          </Container>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
