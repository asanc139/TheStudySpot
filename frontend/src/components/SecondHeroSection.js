import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faGraduationCap,
  faLaptop,
  faLocationDot,
  faMagnifyingGlassLocation,
} from '@fortawesome/free-solid-svg-icons';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default function SecondHeroSection() {
  const image =
    'https://images.unsplash.com/photo-1588702547981-5f8fed370e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80';

  return (
    <Container>
      <Row className="justify-content-between flex-wrap">
        <Col>
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>
                <strong>A fresh take on education</strong>
              </Card.Title>
              <Card.Text>
                We offer tutoring to everyone of all ages! We offer tailored
                learning programmes from our state of the art tutor's covering
                Math, Science, and History to name a few.{' '}
                <strong>
                  Education to meet the individual needs from the comfort of
                  your own home.
                </strong>
              </Card.Text>
              <Button variant="primary">Find Out More!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div class="my-container">
            <h1>
              Why Online Tutoring at <strong>THE STUDY SPOT?</strong>
            </h1>
            <br></br>
            <ListGroup>
              <DropdownButton title="Reason #1" id="bg-nested-dropdown">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <FontAwesomeIcon icon={faLaptop} /> -
                    <Badge bg="warning" pill>
                      <div className="fw-bold">Benifits of online learning</div>{' '}
                    </Badge>
                    <br></br>
                    Learn from anywhere, using your desktop, tablet or mobile
                    phone. our tutoring is interactive and practical.
                  </div>
                </ListGroup.Item>
              </DropdownButton>
              <br></br>

              <DropdownButton title="Reason #2" id="bg-nested-dropdown">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <FontAwesomeIcon icon={faChalkboardTeacher} /> -
                    <Badge bg="warning" pill>
                      <div className="fw-bold">Experienced Tutors</div>{' '}
                    </Badge>
                    <br></br>
                    Our tutors have over 10 years of experience between them and
                    are experts in their subject fields
                  </div>
                </ListGroup.Item>
              </DropdownButton>
              <br></br>

              <DropdownButton title="Reason #3" id="bg-nested-dropdown">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <FontAwesomeIcon icon={faGraduationCap} /> -
                    <Badge bg="warning" pill>
                      <div className="fw-bold">Amazing Results</div>{' '}
                    </Badge>
                    <br></br>
                    Our students go on to achieve higher grades than they
                    expected after completing tutoring with us.
                  </div>
                </ListGroup.Item>
              </DropdownButton>
            </ListGroup>
          </div>
          <br></br>
          <Row>
            <Col>
              <Container>
                <Card style={{ width: '500px' }}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      <strong>The Study Spot</strong>
                    </Typography>
                    <Typography color="textSecondary">
                      Read What We Are All About.
                    </Typography>
                    <Typography variant="body2" component="p">
                      <div>
                        {' '}
                        Welcome to our tutoring website! We are passionate about
                        providing high-quality educational services to students
                        of all ages and backgrounds. Our team of experienced
                        tutors is dedicated to helping students achieve their
                        academic goals and succeed in their studies.
                      </div>

                      <div>
                        Our tutoring services are designed to be flexible and
                        affordable, so that students can receive the support
                        they need without breaking the bank. We offer one-on-one
                        tutoring sessions, group tutoring, and online tutoring,
                        so that students can choose the option that works best
                        for their schedule and learning style.
                      </div>

                      <div>
                        Our tutors are highly qualified and knowledgeable in a
                        wide range of subjects, including math, science,
                        English, history, and more. They work closely with
                        students to identify their strengths and weaknesses, and
                        develop a personalized tutoring plan that targets their
                        specific needs and learning goals.
                      </div>

                      <div>
                        At our tutoring website, we are committed to providing a
                        positive and supportive learning environment that
                        encourages students to reach their full potential. Our
                        tutors are patient, friendly, and always willing to go
                        the extra mile to help students succeed.
                      </div>

                      <div>
                        If you're looking for high-quality tutoring services
                        that can help you achieve your academic goals, look no
                        further than our tutoring website. Sign up today and
                        experience the benefits of personalized, one-on-one
                        tutoring from experienced and dedicated tutors who are
                        passionate about helping you succeed.
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Container>
            </Col>
          </Row>
        </Col>
        <Col>
          <Container>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Scheduling{' '}
                </Typography>
                <Typography color="textSecondary">
                  Check for tutors availability
                </Typography>
                <Typography variant="body2" component="p">
                  <Button variant="warning">Scedule Tutor</Button>
                </Typography>
              </CardContent>
            </Card>
            <br></br>
            <br></br>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Find a Tutor Near You!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <FontAwesomeIcon icon={faLocationDot} />
                </Card.Subtitle>
                <Card.Text>
                  You can now find the nearest tutor to your convienced,
                  avoiding time conflicting time-zones. Now you can study with a
                  tutor in your own time zone!
                </Card.Text>
                <Button variant="warning">
                  <Link href="#">
                    Find
                    <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
