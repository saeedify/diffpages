import { useContext } from 'react';
import { CrazyBoy } from '../App.js'

import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = () => {
    const { username } = useContext(CrazyBoy);

    return (
        <div>
            <h1>User Profile:{username}</h1>
            <ChangeProfile />
        </div>
    );
}