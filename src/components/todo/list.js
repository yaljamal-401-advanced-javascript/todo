import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './style.scss';
import { ToggleContext } from '../context/hideShow';
import { PaginationContext } from '../context/pagination-context'
function TodoList(props) {

  const toggleContext = useContext(ToggleContext);
  const pagination = useContext(PaginationContext);
  return (

    <ListGroup>
      {pagination.currentItem.map(item => (
        <Card
          className={`complete-${item.complete} complete-${item.complete}-${toggleContext.status} card`}
          key={item._id}
        >
          <Card.Header>
            <Badge className={`status-${item.complete}`} onClick={() => props.handleComplete(item._id)} variant="success">{item.complete}</Badge>{' '} {item.assignee}
            <Button variant="light" className='delete' onClick={() => props.handleDelete(item._id)}>X</Button></Card.Header>
          <Card.Text >
            {item.text}  {item.difficulty}
          </Card.Text>


        </Card>
      ))}
    </ListGroup>
  );
}


export default TodoList;
