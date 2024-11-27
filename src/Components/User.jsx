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
    bio,
    company
  } = user;

  const date = new Date(created_at);
  return (
    <div className="p-7 flex flex-col items-center justify-center">
      <div className="">
        <div className="w-40 h-40">
          <img className="rounded-full" src={avatar_url} alt={User} />
        </div>
        <div>
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
        <div className="flex gap-2">
            <p className="font-bold">Company:</p>
            <p>{company}</p>
        </div>
        <div className="flex gap-2">
            <p className="font-bold">Bio</p>
            <p>{bio}</p>
        </div>
      </div>

      <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Public Repos:</p>
          <p className="bg-black w-10 h-10 rounded-full p-4 text-white flex justify-center items-center">
            {public_repos}
          </p>
        </div>
        <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Followers:</p>
          <p className="bg-black w-10 h-10 rounded-full p-4 text-white flex justify-center items-center">
            {followers}
          </p>
        </div>
        <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Following:</p>
          <p className="bg-black w-10 h-10 rounded-full p-4 text-white flex justify-center items-center">
            {following}
          </p>
        </div>
    </div>
  );
}

export default User;
