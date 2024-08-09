import { useEffect, useState } from 'react';
import User from './User';

export const Index = () => {
    const [username, setUsername] = useState('');
    const [userdata, setUserdata] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchProfile() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        console.log(data);

        if (data) {
            setUserdata(data);
            setLoading(false);
        }
    }

    function handleSubmit() {
        fetchProfile();
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    if (loading) {
        return <h1>Loading, please wait...</h1>;
    }

    return (
        <div className="profile-container">
            <div className="input-group">
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {userdata && <User user={userdata} />}
        </div>
    );
};
