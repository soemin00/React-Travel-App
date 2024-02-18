import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    departureDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-small-yellow-plane_23-2148487073.jpg?size=626&ext=jpg&ga=GA1.2.862882757.1693687493&semt=ais")', // Use PUBLIC_URL to ensure the correct path
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <div style={backgroundStyle}>
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={10}>
          <h1 className="text-center">BOOK YOUR TRIP</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="destination">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="departureDate">
              <Form.Label>Departure Date</Form.Label>
              <Form.Control
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="returnDate">
              <Form.Label>Return Date</Form.Label>
              <Form.Control
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="text-center my-4">
              <Button variant="warning" type="submit">
                Book Now
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default BookingForm;
