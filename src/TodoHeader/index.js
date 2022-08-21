import React from 'react';

const TodoHeader = ({ children, loading }) => {
  return (
    <header>
      {/* Crea un array con los elementos hijo, los recorre con map y cambia la propiedad loading */}
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}
    </header>
  );
};

export default TodoHeader;
