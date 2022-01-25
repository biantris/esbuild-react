import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  message: string;
};

const App = (props: Props) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count - 1), [count]);

  return (
    <>
    <h1>Hello Word Esbuild + React + TypeScript </h1>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

ReactDOM.render(
<App message="Hello, world!" />, 
document.getElementById('root')
);