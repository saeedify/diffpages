import { useContext } from 'react';
import { useState } from 'react';
import { CrazyBoy } from '../App';

export const ChangeProfile = () => {
    const { setUsername } = useContext(CrazyBoy);
    
    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            <input onChange={(event) => setNewUsername(event.target.value)}/>
            <button onClick={() => setUsername(newUsername)} >Change profile</button>
        </div>
    );
};