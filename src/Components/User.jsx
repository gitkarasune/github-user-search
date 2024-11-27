import React from "react";

function User({ user }) {
  const {
    avatar_url,
    name,
    login,
    followers,
    created_at,
    following,
    public_repos,
  } = user;

  const date = new Date(created_at);
  return (
    <div className=" p-7 flex justify-between">
      <div className="w-40 h-40">
        <img className="rounded-full" src={avatar_url} alt={User} />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div >
          <a href={`https://github.com/${login}`} className="font-bold">
            {name || login}
          </a>
          <p>
            {name} joined on{" "}
            {`${date.getDate()} ${date.toLocaleDateString("en-us", {
              month: "short",
            })} ${date.getFullYear()}`}
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-bold">Public Repos:</p>
          <p>{public_repos}</p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-bold">Followers:</p>
          <p>{followers}</p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-bold">Following:</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
