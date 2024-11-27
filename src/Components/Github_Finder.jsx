import React, { useEffect, useState } from 'react'
import User from './user';

const GithubFinder = () => {
  const [ username, setUsername ] = useState("gitKarasune");
  const [ userData, setUserData ] = useState(null);
  //loading

  const handleFetch = async () => {
    // setLoading true
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

    if (data) {
      setUserData(data);
      // setLoading false 
      setUsername("");
    }

    console.log(data)
  }

  return (
    <div>
      <div className='mb-10 flex justify-between p-2 gap-6 items-center'>
        <input type="text" className='py-4 bg-black text-white rounded-full w-full' name='search-by-username' placeholder='Input Github Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleFetch} className='bg-black text-white rounded-full px-5 py-4'>Search</button>
      </div>

      { userData !== null ? <User user={userData} /> : null }
    </div>
  )
}

export default GithubFinder