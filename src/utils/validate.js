export const checkValidData = (email, password, fullName) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
    email,
  );

  //password regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

  const isPasswordValid = password.length >= 6;

  if(!isEmailValid){
    return "Invalid email format";
  }
  if(!isPasswordValid){
    return "Password must be at least 6 characters long";
  }

  // Validate fullName if provided (for sign up)
  if (fullName && fullName.trim().length === 0) {
    return "Full name is required";
  }
};
