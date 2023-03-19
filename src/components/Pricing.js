import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      One step closer to that A+!
    </Tooltip>
  );

  const ratings = [
    { name: 'John', rating: 5 },
    { name: 'Jane', rating: 5 },
    { name: 'Bob', rating: 5 },
    { name: 'Mary', rating: 5 },
    { name: 'Tom', rating: 5 },
  ];

  const totalRatings = ratings.length;
  const averageRating =
    ratings.reduce((sum, rating) => sum + rating.rating, 0) / totalRatings;
  const formattedRating = averageRating.toFixed(1);

  const ratingCounts = {};
  ratings.forEach((rating) => {
    if (ratingCounts[rating.rating]) {
      ratingCounts[rating.rating] += 1;
    } else {
      ratingCounts[rating.rating] = 1;
    }
  });
  return (
    <Container>
      <div className="my-container">
        <h1 className="my-heading" style={{ marginBottom: '29px' }}>
          Pricing
        </h1>
      </div>
      <CardGroup>
        <Row>
          <Col>
            <Card>
              <Card.Img varient="top" src={require('..//images/group.jpg')} />

              <Card.Body>
                <Card.Title>1 on 1 Online Tutoring</Card.Title>
                <Card.Text style={{ padding: '10px' }}>
                  We charge <strong>$40 per hour</strong> for our 1 on 1 Online
                  Tutoring service is regardless of the subject. We offer
                  discounts for booking a bulk amount of sessions.
                  <div style={{ padding: '5px' }}></div>
                  <div>
                    We require a minimum of 6 sessions to be booked in order to
                    recieve 1 on 1 tutoring, which can be conducted on a weekly
                    or bi-weekly basis.
                  </div>
                </Card.Text>
              </Card.Body>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button variant="warning">Start Learning Journey</Button>
              </OverlayTrigger>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img varient="top" src={require('..//images/1to1.jpg')} />

              <Card.Body>
                <Card.Title>Group Online Tutoring</Card.Title>
                <Card.Text style={{ padding: '10px' }}>
                  Our group sessions are <strong>$30 per hour</strong>{' '}
                  regardless of the subject. We offer discounts for booking a
                  bulk amount of sessions.
                  <div style={{ padding: '5px' }}></div>
                  <div>
                    We require a minimum of 6 sessions to be booked in order to
                    join our group tutoring sessions, which are conducted on a
                    weekly basis or bi-weekly basis.
                  </div>
                </Card.Text>
              </Card.Body>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button variant="warning">Start Learning Journey</Button>
              </OverlayTrigger>
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <div className="my-container">
            <h1 className="my-heading" style={{ marginBottom: '29px' }}>
              Reviews By Actual Students!
            </h1>
          </div>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Bryan said</Card.Title>
                <p>
                  We are extremly grateful to all the tutors for the help they
                  gave my group and I in our subjects of choice. I am happy to
                  see great results in my school grades. Thanks to{' '}
                  <Link to="/">"The Study Spot"</Link>.
                </p>
                <h4>Average Rating: {formattedRating}</h4>

                <ProgressBar
                  now={averageRating * 20}
                  label={`${formattedRating} stars`}
                />

                {Object.keys(ratingCounts).map((rating) => (
                  <div key={rating} className="rating-col">
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Carl said</Card.Title>
                <p>
                  I have been attending <Link to="/">"The Study Spot"</Link>{' '}
                  tutoring sessions for about eight months now and I have seen
                  significant improvement in my grades. The tutors make it easy
                  to learn and the website made it easy to sign-up for and get
                  informed! .
                </p>
                <h4>Average Rating: {formattedRating}</h4>

                <ProgressBar
                  now={averageRating * 20}
                  label={`${formattedRating} stars`}
                />

                {Object.keys(ratingCounts).map((rating) => (
                  <div key={rating} className="rating-col">
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Sally said</Card.Title>

                <p>
                  I have improved in my Math skills thanks to{' '}
                  <Link to="/">"The Study Spot"</Link>. I would highly recommend{' '}
                  <strong>The Study Spot</strong> to my friends!
                </p>
                <h4>Average Rating: {formattedRating}</h4>

                <ProgressBar
                  now={averageRating * 20}
                  label={`${formattedRating} stars`}
                />

                {Object.keys(ratingCounts).map((rating) => (
                  <div key={rating} className="rating-col">
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </Container>
  );
}
