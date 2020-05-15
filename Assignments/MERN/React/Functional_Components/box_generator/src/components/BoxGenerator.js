import React, { useState } from 'react'

const BoxGenerator = (props) =>{
    const [color,setColor] =useState("");
    const [item, setItem] = useState([]);

    const handleColor = (e) =>{
        e.preventDefault();
        const newColor = {color};
        item.push(newColor);
        setColor('');
    }
    return(
        <>
            <form onSubmit={handleColor}>
                <div>
                    <label>Color</label>
                    <input type="text" onChange={(e)=>setColor(e.target.value)} value={color}></input>
                    <input type="submit" value="Add" />
                </div>
            </form>
            { item.map((items, idx) => {//items=key, idx=value, i.e. "red":1
                const boxStyle = {
                    backgroundColor: items.color,
                    display: "inline-block",
                    outlinestyle: "solid",
                    outlinecolor: "black",
                    marginLeft: '50px',
                    height: '100px',
                    width: '100px', 
                }
                return(
                    <div style={boxStyle} key={idx}/>
                )     
            })}
        </> 
    );
}   
export default BoxGenerator;
