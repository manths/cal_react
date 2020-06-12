import React from 'react';
import ReactDOM from 'react-dom';

import Index from './calculator/index';


const App = ()=>{
  return(
    <div>
      <h1 style={{display:'flex',justifyContent:'center',marginRight:'100px'}}>Simple Calculator</h1>
      <Index/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

