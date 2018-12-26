// import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create React component


const App = () => {

const buttonText =' Click Me! '
const labelText = {label:'Enter Name: '}

    return (
        <div>
            <label className="label"  htmlFor="name">{labelText.label}</label>
            <input type="text" id="name"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
        </div>
    
    )
};



// take the react component and show it on the scrin

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);