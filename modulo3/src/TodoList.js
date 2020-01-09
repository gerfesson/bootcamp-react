import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';

const TodoList = (props) => {
  const { todos, addTodo, removeTodo } = props;
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button type="button" onClick={() => removeTodo(todo.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => addTodo('Novo todo')}>Adicionar</button>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
