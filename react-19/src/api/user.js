const testCreds = {
  username: "user",
  password: "pass@123",
};

export const loginUser = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === testCreds.username && password === testCreds.password) {
        resolve({
          success: true,
          data: {
            username,
            email: "user@tempmail.com",
            token: "eyJ0eXAiOGciO.DAxMGFhODEJ9.BRv_nD6v",
          },
        });
      } else {
        reject({ success: false, error: "Invalid username or password" });
      }
    }, 3000);
  });
};
