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
    company,
    blog,
    email, 
    hireable,
    location,
    public_gists,
    twitter_username,
    updated_at,
    html_url,

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
            <p>{company ? company : "No company"}</p>
        </div>
        <div className="flex gap-2">
            <p className="font-bold">Bio</p>
            <p>{bio ? bio : "No Bio"}</p>
        </div>
        <div className="flex gap-2">
            <p className="font-bold">Find me at: </p>
            <p>
                <a href={`${html_url}`}>{html_url ? html_url : "No Link"}</a>
            </p>
        </div>
      </div>

      <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Public Repos:</p>
          <p className="bg-black w-10 h-10 rounded-full p-4 text-white flex justify-center items-center">
            {public_repos ? public_repos : "No Public Repos"}
          </p>
        </div>
        <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Followers:</p>
          <p className="bg-black w-10 h-10 rounded-full p-4 text-white flex justify-center items-center">
            {followers ? followers : "No followers"}
          </p>
        </div>
        <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Following:</p>
          <p className="bg-black w-10 h-10 rounded-full p-4 text-white flex justify-center items-center">
            {following ? following : "No following"}
          </p>
        </div>
        <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Blog:</p>
          <p className="">
            {blog ? blog : "No Blog"}
          </p>
        </div>
        <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Email:</p>
          <p >
            {email ? email : "No Email"}
          </p>
        </div>
        <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Hireable:</p>
          <p >
            {hireable ? hireable : "No Hireable"}
          </p>
        </div>
        <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Location:</p>
          <p >
            {location ? location : "No Location"}
          </p>
        </div>
        <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Public gists:</p>
          <p >
            {public_gists ? public_gists : "No Public gists"}
          </p>
        </div>
        <div className="flex gap-3 items-center my-4">
          <p className="font-bold">Twitter Username:</p>
          <p >
            {twitter_username ? twitter_username : "No Twitter username"}
          </p>
        </div>
    </div>
  );
}

export default User;
