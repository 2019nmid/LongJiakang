const good = "hello";
import React from 'react';
import ReactDom from 'react-dom';
import HelloReact from './HelloReact.jsx';

import img1 from './img/top_ico.png';
import img2 from './img/usa.gif';

import './test.scss';

// async function sayHello() {
//     const result = await fetch(SERVICE_URL);
//     console.log(result);
// }
// sayHello();

ReactDom.render(<HelloReact />, document.getElementById('good'));