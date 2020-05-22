import React, {useState} from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'

export default ()=>{
    // const [allPirates, setAllPirates]=useState(null)
    const [name, setName]=useState('');
    const [image, setImage]=useState('');
    const [treasure, setTreasure]=useState("");
    const [phrase, setPhrase]=useState('');
    const [position, setPosition]=useState('');
    const [leg, setLeg]=useState(true);
    const [eye, setEye]=useState(true);
    const [hand, setHand]=useState(true);
    const [errors, setErrors]=useState([]);
    
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/pirate')
    //     .then(res=>setAllPirates(res.data))
    // },[allPirates]);
    
    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        axios.post('http://localhost:8000/api/pirate', {
            name,
            image,
            treasure,
            phrase,
            position,
            leg,
            eye,
            hand
        })
        .then(response=>navigate('/pirate/'+response.data._id))
        .catch(err=>{
            const errs=[];
            const errorObj=err.response.data.errors;
            
            for (const key in errorObj){
                errs.push(errorObj[key].message);
            }
            setErrors(errs);
        })
    }
    return(
        <div>
            {errors.map((err,i)=>(
                <p key={i} style={{color:'red'}}>{err}</p>
            ))}
            <button onClick={()=>navigate('/')}>Crew Board</button>
            <h1>Add Pirate</h1>
            <form onSubmit={handleSubmit}>
                <label>Pirate Name:</label>
                <input type='text' onChange={(e)=>setName(e.target.value)}/><br/>
                <label>Image Url:</label>
                <input type='text' onChange={(e)=>setImage(e.target.value)}/><br/>
                <label># of Treasure Chests:</label>
                    <select name="treasure" onChange={(e)=>setTreasure(e.target.value)}>
                        <option style={{display:"none"}}/>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select><br/>
                <label>Pirate Catch Phrase:</label>
                <input type='text' onChange={(e)=>setPhrase(e.target.value)}/><br/>
                <label>Crew Position</label>
                    <select name="position" onChange={(e)=>setPosition(e.target.value)}>
                        <option style={{display:"none"}}/>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select><br/>
                <label>Peg Leg</label>
                <input type='checkbox' checked={leg} onChange={(e)=>setLeg(e.target.checked)}/><br/>
                <label>Eye Patch</label>
                <input type='checkbox' checked={eye} onChange={(e)=>setEye(e.target.checked)}/><br/>
                <label>Hook Hand</label>
                <input type='checkbox' checked={hand} onChange={(e)=>setHand(e.target.checked)}/><br/>
                {/* {allPirates.map(pirate=> ( */}
                <div>
                    {/* <button onClick={()=>navigate('/pirate/'+pirate._id)}>Add Pirate</button> */}
                    <button>Add Pirate</button>
                    <button onClick={()=>navigate('/')}>Cancel</button>
                </div>
                 {/* ))} */}

            </form>

        </div>
    )
}