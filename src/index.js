import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let greeting = "";
const variant = {};
let currentTime = new Date();
currentTime = currentTime.getHours();
if(currentTime >= 1 && currentTime < 12){
        greeting = "Good Morning";
        variant.color = "Green";
}

else if(currentTime >= 12  && currentTime < 19){
    greeting = "Good Afternoon";
    variant.color = "Orange";
}

else{
    greeting = "Good Night";
    variant.color = "Purple";
}
ReactDOM.render(
    <>
    <div className="Greeting">
    <h1>Hello Sir, <span style={variant}> {greeting}</span></h1>
    </div>
    </>,document.getElementById("root"));