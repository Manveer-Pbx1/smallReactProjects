import ToggleButton from './Components/Toggle' 
import ToggleClick from './Components/ToggleClick'
import {DynamicCounter} from './Components/Counter'
import UserInput from './Components/UserInput'
import List from './Components/ListItems'
export default function App(){
  return(
    <div>
    <h1
    style={{color: 'indigo', textAlign: 'center'}}
    >Learn React!</h1>
    <h2
    style = {{color: 'darksalmon'}}
    >Learn about states</h2>
    <h3>When you click this button, it will turn on/off upon clicking</h3>
    <ToggleClick/>
    <h3>When you click this button, it will turn on/off upon holding</h3>
    <ToggleButton/>
    <h3>When you hold this button, it will increment the values</h3>
    <DynamicCounter/>
    <h3>Dynamic typer🔥</h3>
    <UserInput/>
    <h3>Add Lists:</h3>
    <List/>  {/* make this such that it adds a new list upon pressing enter */}
    <h2
    style = {{color: 'darksalmon'}}
    >Learn about props</h2>
    <h3>Not much practicality to show here, but</h3>
    <h4
        style={{color: 'green'}}>The code is:</h4>  
    <pre>{code}</pre>
    </div>
  )
}
const code = `import React from 'react';

function ProductCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ${`props.price`}</p>
    </div>
  );
}

<ProductCard name="Smartphone" price="399.99" />
`