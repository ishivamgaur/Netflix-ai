export const checkValidate = (name, email, password) => {
  //* When name is null then the nameValid return it true
  const nameValid = /^[A-Za-z\s]{4,}$/.test(name);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      password
    );

  if (!nameValid) return "Name is not valid";
  if (!emailValid) return "Email ID is not valid";
  if (!passwordValid) return "Password is not valid";

  return null;
};
