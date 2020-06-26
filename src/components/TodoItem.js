import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
 getStlye = () => {
  return{
      background: 'lightblue',
      padding: '10px',
      borderBottom: '1px #ccc groove',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
  }
 }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStlye()}>
        <p>
         <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
         {title}
         <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
      
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

  const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cusor: 'pointer',
    float:  'right'
  }

export default TodoItem
