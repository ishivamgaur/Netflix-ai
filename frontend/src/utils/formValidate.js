export const checkValidate = (name, email, password) => {
  //* When name is null then the nameValid return it true
  const nameValid = /^[A-Za-z\s]{4,}$/.test(name);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      password
    );

  if (!nameValid) return "Name must be at least 4 letters";
  if (!emailValid) return "Enter a valid email";
  if (!passwordValid)
    return "Password must be 6+ chars with uppercase, number & special char";

  return null;
};
