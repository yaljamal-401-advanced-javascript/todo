import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
function TodoList(props) {
  return (
    <>
      <ul>
        {props.list.map(item => (
          <Card
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <Card.Header>{item.complete}  {item.assignee}</Card.Header>
            <Card.Text onClick={() => props.handleComplete(item._id)}>
              {item.text}
              <br></br> Difficulty : {item.difficulty}
            </Card.Text>
            <Button variant="danger" className='delete' onClick={() => props.handleDelete(item._id)}>X</Button>
          </Card>
        ))}
      </ul>
      <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button variant="secondary">1</Button>{' '}
          <Button variant="secondary">2</Button>{' '}
          <Button variant="secondary">3</Button>{' '}
          <Button variant="secondary">4</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
}
export default TodoList;
