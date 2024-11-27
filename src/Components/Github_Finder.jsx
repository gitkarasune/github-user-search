import React, { useState } from "react";
// import Data from "./Data";

const GithubFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchGithubUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
      setError(null);
    } catch (error) {
      setUserData(null);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-lg font-bold mt-10 grid place-content-center">
        Find Any Github Users
      </h1>
      <form className="flex items-center justify-center">
        <section className="mt-4 max-w-lg mb-14">
          {/* The form  */}
          <input
            type="text"
            placeholder="Enter Github Username"
            autoComplete="off"
            required
            className="border-none bg-black opacity-95 text-white py-3 px-20"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* The Button */}
          <button className="bg-black opacity-90 grid place-content-center shadow-xl mx-auto text-white py-2 px-6 text-sm rounded-full cursor-pointer" onClick={fetchGithubUser}>
            Search Now
          </button>
        </section>

        {/* Displaying the user data here if true */}
        { error && <p className="text-red-700 mt-3">{error}</p>}
        { userData && (
          <div>
            <img src={userData.avatar_url} alt={userData.login} />
            <h2>{userData.name || userData.login}</h2>
            <p>{userData.bio}</p>
            <p>{ userData.followers}</p>
            <p>{ userData.following}</p>
            <p>{ userData.following}</p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Github Profile Profile
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default GithubFinder;
