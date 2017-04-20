import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const data = {
  users: [{ id: 1, author: 'Pete Hunt', text: 'This is one comment' },
          { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' },
         ],
};

ReactDOM.render(
  <div>
    <App data={data} />
  </div>,
  document.getElementById('root')
);
