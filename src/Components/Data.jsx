import React from "react";

const Data = ({ user }) => {
  const {
    avatar_url,
    followers,
    location,
    company,
    bio,
    twitter_username,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const date = new Date(created_at);
  return (
    <div>
      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
        <img width={200} height={200} src={avatar_url} alt="user" className="" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>name: {name || login}</a>
        <p>
          {name} joined on {" "}
          { `${date.getDate()} ${date.toLocaleDateString("en-us", {
            month: "short",
          })} ${date.getFullYear()}`}
        </p>
      </div>

          
      <div>
        <p>Followers</p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Following</p>
        <p>{following}</p>
      </div>
      <div>
        <p>Public Repository</p>
        <p>{public_repos}</p>
      </div>
      
    </div>
  );
};

export default Data;
