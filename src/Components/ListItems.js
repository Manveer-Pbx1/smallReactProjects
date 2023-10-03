import { useState } from "react";
export default function List(){
    const[items, setItems] = useState([]);
    const[newItem, setNewItem] = useState('');

    const addItem  = ()=>{
        if(newItem.trim() != ''){
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const handleInputKeyPress = (e) =>{
        if(e.key === 'Enter'){
            addItem();
        }
    };

    const handleInputKeyPressDelete = (e) =>{
        if(e.key === 'Backspace' && newItem === '' && items.length > 0){
            removeItem(items.length - 1);
        }
    };

    const deleteEverything = (e) =>{
        if(e.key === 'Ctrl + Backspace' && newItem === ''){
            removeItem();
        }
    }
 
    const removeItem = (index) =>{
        const updatedItems = items.filter((_, i)=> i!= index);
        setItems(updatedItems);
    };

    return(
        <div>
            <input
            type = "text"
            placeholder="Add an item..."
            value = {newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={handleInputKeyPress}
            onKeyDown={handleInputKeyPressDelete}
            onKeyDownCapture={deleteEverything}
            />

            <button onClick={addItem}>Add</button>
            <label>Press Enter to enter items and Backspace to delete them</label>
            <ul>
                {items.map((item,index)=>(
                    <li key = {index}>
                        {item}
                        <button onClick={()=> removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h4
            style={{color: 'green'}}>The code is: </h4>
            <pre>{code}</pre>
        </div>
    )
}

const code = `  
import { useState } from "react";
export default function List(){
    const[items, setItems] = useState([]);
    const[newItem, setNewItem] = useState('');

    const addItem  = ()=>{
        if(newItem.trim() != ''){
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const handleInputKeyPress = (e) =>{
        if(e.key === 'Enter'){
            addItem();
        }
    };

    const handleInputKeyPressDelete = (e) =>{
        if(e.key === 'Backspace' && newItem === '' && items.length > 0){
            removeItem(items.length - 1);
        }
    };

    const removeItem = (index) =>{
        const updatedItems = items.filter((_, i)=> i!= index);
        setItems(updatedItems);
    };

    return(
        <div>
            <input
            type = "text"
            placeholder="Add an item..."
            value = {newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={handleInputKeyPress}
            onKeyDown={handleInputKeyPressDelete}
            
            />

            <button onClick={addItem}>Add</button>
            <label>Press Enter to enter items and Backspace to delete them</label>
            <ul>
                {items.map((item,index)=>(
                    <li key = {index}>
                        {item}
                        <button onClick={()=> removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h4
            style={{color: 'green'}}>The code is: </h4>
            <pre>{code}</pre>
        </div>
    )
}
`