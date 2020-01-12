import React from 'react';
// import { Link } from 'react-router-dom';

const Settings = ({ currentUser, logout }) => {
    const personalSettings = () => (
        <div>
            <h3>Personal Settings</h3>
            <br />
            <input type="submit" onClick={logout}>Log out</input>
        </div>
    );
};

export default Settings;