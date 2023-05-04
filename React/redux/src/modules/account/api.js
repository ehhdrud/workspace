export const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve({ name: "seodongkyeong", email: "ehhdrud@naver.com" }),
      2000
    );
  });
};
