import { useState } from 'react';
import axios from 'axios';
const todoAPI = 'https://api-testtt.herokuapp.com/api/v1/todo';

const useAjax = () => {
  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item.due = new Date();
    axios({
      url: todoAPI,
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(item)
    })
      .then(response => {
        setList([...list, response.data])

      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = item.complete === 'complete' ? 'pending' : 'complete';

      let url = `${todoAPI}/${id}`;

      axios({
        method: 'put',
        url: url,
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(item)
      })
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem.data : listItem));

        })
        .catch(console.error);
    }
  };
  const deleteItem = id => {

    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      let url = `${todoAPI}/${id}`;

      axios({
        url: url,
        method: 'delete',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(() => {
          setList(list.filter(listItem => listItem._id != item._id));

        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {

    axios.get(todoAPI)
      .then(response => {

        setList(response.data.result)
      })

  };

  return [list, _addItem, _toggleComplete, _getTodoItems, deleteItem]

}


export default useAjax;
