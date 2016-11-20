const React = require('react');
const ReactDOM = require('react-dom');

const DumbComponent = require('./components/DumbComponent');
const DumberComponent = require('./components/DumberComponent');

function hello() {
  console.log('hello')
}

ReactDOM.render(
  <div>
    <DumbComponent />
    <DumberComponent handleClick={hello} />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // leave this in!
