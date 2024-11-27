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

  useEffect(()=> {
    handleFetch();
  },[])

  const handleSubmit = () => {
    handleFetch()
  }


  return (
    <div>
      <div className='mb-10'>
        <input type="text" name='search-by-username' placeholder='Input Github Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleSubmit}>Search</button>
      </div>


      { userData !== null ? <User user={userData} /> : null }
    </div>
  )
}

export default GithubFinder