import {useContext} from 'react';
import {CrazyBoy} from '../App.js' 

export const Home = () => {
    const {username} = useContext(CrazyBoy);
    
    return <h1>Welcome to the homepage, {username}</h1>
}