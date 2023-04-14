// React Component!
// Follow <-> following
function FollowButton() {
  const [following, setFollowing] = React.useState(false);
  return React.createElement(
    "div",
    {
      onClick: () => setFollowing(!following),
    },
    following ? "Following" : "Follow"
  );
}

const domContainer = document.querySelector("#follow_button_container");
ReactDOM.createRoot(domContainer).render(React.createElement(FollowButton));
// ReactDOM.render(React.createElement(FollowButton), domContainer);
// 이걸 사용하면, 최신 문법이 아니기 때문에
// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
// 라는 경고가 뜸. 최신 문법에 익숙해지자 ~
