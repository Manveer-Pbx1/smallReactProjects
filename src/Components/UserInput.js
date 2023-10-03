import { useState } from "react";
export default function UserInput(){
    const [text, setText] = useState('');
    
    const handleInputChange = (e) =>{
        setText(e.target.value);
    };

return (
    <div>
        <input
        type="text"
        placeholder="Type anything..."
        value={text}
        onChange={handleInputChange}
        />
        <p>So you're typing: {text}</p>
        <h4
        style={{color: 'green'}}>The code is:</h4>
        <pre>{code}</pre>
    </div>
)
}
const code = `
import { useState } from "react";
export default function UserInput(){
    const [text, setText] = useState('');
    
    const handleInputChange = (e) =>{
        setText(e.target.value);
    };

return (
    <div>
        <input
        type="text"
        placeholder="Type anything..."
        value={text}
        onChange={handleInputChange}
        />
        <p>So you're typing: {text}</p>
    </div>
)
}
`