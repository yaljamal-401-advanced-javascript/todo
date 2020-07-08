import React, { useEffect, useState } from 'react';
import useForm from '../hooks/form-hook'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function TodoForm(props){
  // const [item,setItem] = useState({});
  const [item, handleInputChange, handleSubmit] = useForm(handleForm);
  function handleForm(item) {
    props.handleSubmit(item)
  }
  // const handleInputChange = e => {
  //     setItem( {...item, [e.target.name]: e.target.value  });
      
  // };

  // const  handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   props.handleSubmit(item);
  //   // const item1 = {};
  //   setItem({});
  // };
    return (
      <>
        <h3>Add Item</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Label>
            <span>To Do Item</span>
            <Form.Control
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </Form.Label>
          <Form.Label>
            <span>Difficulty Rating</span>
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </Form.Label>
          <Form.Label>
            <span>Assigned To</span>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Label>
          <Button variant="primary" type="submit">Add Item</Button>
        </Form>

    
        {/* <Form onSubmit={handleSubmit}>
        <h3>Add Item</h3>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>To Do Item</Form.Label>
    <Form.Control  name="text"
              placeholder="Add To Do List Item"/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Assigned To</Form.Label>
    <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Difficulty Rating</Form.Label>
    <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Add Item
  </Button>
</Form> */}
      </>
    );


}


// class TodoForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { item: {} };
//   }
//   handleInputChange = e => {
//     this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     this.props.handleSubmit(this.state.item);
//     const item = {};
//     this.setState({item});
//   };

//   render() {
//     return (
//       <>
//         <h3>Add Item</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <span>To Do Item</span>
//             <input
//               name="text"
//               placeholder="Add To Do List Item"
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label>
//             <span>Difficulty Rating</span>
//             <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} />
//           </label>
//           <label>
//             <span>Assigned To</span>
//             <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
//           </label>
//           <button>Add Item</button>
//         </form>
//       </>
//     );
//   }
// }

export default TodoForm;
