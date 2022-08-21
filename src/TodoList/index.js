import React from 'react';
import './TodoList.css';

function TodoList(props) {
  return (
    <section className="Todolist-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        !props.loading &&
        props.onEmptySearchResult(props.searchText)}

      {/* {props.seachedTodos.map((props.render))} forma corta*/}
      <ul>{props.searchedTodos.map((todo) => props.render(todo))}</ul>
    </section>
  );
}

export { TodoList };
