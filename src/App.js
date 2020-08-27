import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const name = 'Nayem Ibna Hossain'

  const brothers1 = ['Ibrahim','Ismail','Ripon','Nayem'];

  const brothers2 = [
    {name:'Ibrahim', age:20},
    {name:'Ismail', age:18},
    {name:'Ripon', age:30},
    {name:'Nayem', age:23},
    {name:'Munni', age:24},
    {name:'Sami', age:16}
  ];

  const brothers3 = {
    name:'Foysal',
    age: 28,
    profession: 'Banker'
  };

  return (
    <div className="App">
      <header className="App-header">
        <HtmlInJavaScript></HtmlInJavaScript>
        <Person></Person>
        <Person></Person>
        <PassHardCodeData name = 'Nayem Hossain' job = 'Hero of the year' borderShape={{border:'10px solid gray'}}></PassHardCodeData>
        <PassDynamicData relatives1 = {name}></PassDynamicData>
        <ArrayData relatives2= {brothers1[2]}></ArrayData>
        <MapArrayData mapRelatives2 = {brothers1}></MapArrayData>
        <ObjectData relatives2 = {brothers2[1]}></ObjectData>
        <ObjectData2 relatives3 = {brothers3}></ObjectData2>
        <ul>
          {
            brothers1.map(bro => <li>{bro}</li>)
          }
        </ul>
        <ul>
          {
            brothers2.map(bro => <DynamicComponent person = {bro}></DynamicComponent>)
          }
        </ul>
        <Count></Count>
        <Handler></Handler>
        <ShortCutHandler></ShortCutHandler>
        <UseEffectTest></UseEffectTest>

      </header>
    </div>
  );
};



  // (1) How to write html in javaScript (JSX, Dynamic content, Dynamic Style in React) ...

function HtmlInJavaScript(){
  const name = 'Munna Chowdhury'
  const userDetails = {
    name: 'Ishraq Chowdhury',
    age: 25,
    job: 'Union Group'
  };
  const personStyle = {
    border: '5px solid gray',
    backgroundColor: 'lightgray',
    borerRadius: '20px',
    height: '80px',
    width: '500px',
    display: 'float'
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>React Core Concepts...</p>
        <h3 style={{backgroundColor:'yellow',    color:'red'}}>Calculation: {(2+5)*2}</h3>
        <h2 style={personStyle}>Name: {name}</h2>
        <h2>{userDetails.name +' '+ userDetails.age + ' '+ userDetails.job}</h2>
      </header>
    </div>
  );
};

  // (2) Create Component, return multiple HTML from a component (similar in look)...

function Person(){
    const style = {
      border:'5px solid green', 
      margin:'10px', 
      padding:'10px'
    };
  return(
      <div style={{border:'5px solid yellow', margin:'10px', padding:'10px'}}>
      <p>This is person component with hardCode style.</p>
      <p style={style}>This is another person object component with Dynamic style.</p>
    </div>
  );
};

  // (3) Pass HardCode data to components by property (props) in react.

function PassHardCodeData(props){
  return(
    <div style = {props.borderShape}>
      <h1>Name: {props.name}</h1>
      <h3>job: {props.job}</h3>
    </div>
  );
};

  // (4) Dynamic data to components by property (props) in react.

function PassDynamicData(props){
  return(
    <div>
      <h3>Name: {props.relatives1}</h3>
    </div>
  );
};

  // (5) Passing data from Array...

function ArrayData(props){
  return(
    <div>
      <p>Data from array..</p>
      <h2>Name: {props.relatives2}</h2>
    </div>
  );
};

  // (6) Passing data from Array (used 'Map' function)...

function MapArrayData(props){
  return(
    <div>
     <p>Data from array using 'Map' function..</p>
      <ul>
        {
          props.mapRelatives2.map(bro => <li>{bro}</li>)
        }
      </ul>
    </div>
  );
};

  // (7) Passing data from array like Object...

function ObjectData(props){
  return(
    <div>
      <p>Data from array like Object..</p>
      <h3>Name: {props.relatives2.name}</h3>
      <h3>Age: {props.relatives2.age}</h3>
    </div>
  );
};

  // (8) Passing data from direct Object (used destructure)...

function ObjectData2(props){
  const personStyle = {
    border: '5px solid cyan',
    backgroundColor: 'gray',
    height: '300px',
    width: '400px'
  };
  const {name, age, profession} = props.relatives3;
  return(
    <div style = {personStyle}>
    <p>Data from direct Object..</p>
    <h3>Name: {name}</h3>
    <h3>Age: {age}</h3>
    <h3>Profession: {profession}</h3>
    </div>
  );
};

  // (9) Creating multiple components from an array of Objects..
  
function DynamicComponent(props){
  const {name, age} = props.person;
  return(
    <div>
      <p>DynamicComponent...</p>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};

  
  // (10) 'useState()' function declaration... 

function Count(){
  const [count, setCount] = useState();
  return(
    <div>
      <p>This is 'useState()' function...</p>
      <h1>Count: {count}</h1>
    </div>
  );
};

  // (11) 'useState()' evenHandler adding... 
  
function Handler(){
  const [count, setCount] = useState(0);
  const handleIncrease = ()=>{
    const newCount = count + 1;
    setCount(newCount);
  };

  return(
    <div>
      <p>This is 'useState()' function...</p>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Buy Now</button>
    </div>
  );
};

    // (11.1) 'useState()' ShortCutHandler evenHandler... 

function ShortCutHandler(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <p>This is 'useState()' function...</p>
      <h1>Count: {count}</h1>
      <button onMouseOver={()=>setCount(count + 1)}>Buy Now</button>
      <button onClick={()=>setCount(count - 1)}>Buy Now</button>
    </div>
  );
};

  // (12) 'useEffect()' function declaration...

function UseEffectTest(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);

  return(
    <div>
      <p>This is 'useEffectTest()' function...</p>
      <h2>User name: {users.length}</h2>
      {
        console.log(users)
      }
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  );
};

export default App;
