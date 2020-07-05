import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function TodoForm(props) {
  const [item, setItem] = useState({});
  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
    console.log(item);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
    console.log(item);
  };
  return (
    <>
      <Card className="p-5 mr-5">
        <Card.Title>Add Item</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Form.Label>
                <span>To Do Item</span>
                <Form.Control
                  name="text"
                  placeholder="Add To Do List Item"
                  onChange={handleInputChange}
                />
              </Form.Label>
            </Row>
            <Row>
              <Form.Label>
                <span>Assigned To</span>
                <Form.Control
                  type="text"
                  name="assignee"
                  placeholder="Assigned To"
                  onChange={handleInputChange}
                />
              </Form.Label>
            </Row>
            <Row>
              <Form.Label>
                <span>Difficulty Rating</span>
                <Form.Control
                  className="w-5"
                  onChange={handleInputChange}
                  type="range"
                  min="1"
                  max="5"
                  name="difficulty"
                />
              </Form.Label>
            </Row>
            <Button variant="primary" type="submit">
              Add Item
            </Button>
          </Container>
        </Form>
      </Card>
    </>
  );
}

export default TodoForm;
