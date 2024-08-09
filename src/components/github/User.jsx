const User = ({ user }) => {
  const {
      avatar_url,
      followers,
      following,
      public_repos,
      name,
      login,
      created_at,
  } = user;

  return (
      <div className="user">
          <div>
              <img className="avatar" alt="User" src={avatar_url} />
          </div>
          <div>
              <a href={`https://github.com/${login}`}>{name || login}</a>
          </div>

          <div  className="details">

          <div>Followers: {followers}</div>
          <div>Following: {following}</div>
          <div>Public Repos: {public_repos}</div>
          <div>Joined: {new Date(created_at).toLocaleDateString()}</div>

          </div>
      </div>
  );
};

export default User;
