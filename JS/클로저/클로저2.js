function getPassword() {
  const password = "mySuperSecretPassword123";

  function getPasswordClosure() {
    return password;
  }

  return getPasswordClosure;
}

console.log(getPassword()); // [Function: getPasswordClosure]

const getPasswordFunction = getPassword();
console.log(getPasswordFunction()); // "mySuperSecretPassword123"
