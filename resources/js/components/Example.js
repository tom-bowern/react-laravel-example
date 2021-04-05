import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (

        <div className="card">
            <div className="card-header">React Component</div>

            <div className="card-body">I'm an example component! head to \resources\js\components\Example.js to see this components code</div>
            
        </div>
     
    );
}

export default Example;

if (document.getElementById('exampleReactComponent')) {
    ReactDOM.render(<Example />, document.getElementById('exampleReactComponent'));
}
