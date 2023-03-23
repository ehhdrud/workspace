import React from "react";
// React Component!
// Follow <-> following

function FollowButton() {
  const [following, setFollowing] = React.useState(false);

  return (
    <div onClick={() => setFollowing(!following)}>
      {following ? "Following" : "Follow"}
    </div>
  );
}

export default FollowButton;
