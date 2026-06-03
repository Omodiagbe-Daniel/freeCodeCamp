function generatePassword(passwdlength) {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let newPasswd = "";
  for (let i = 0; i < passwdlength; i++) {
    newPasswd += str[Math.floor(Math.random() * str.length)]
  }
  return newPasswd;
}

const password = generatePassword(10);
console.log("Generated password:" + password);
