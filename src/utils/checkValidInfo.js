const checkValidInfo = (email, password, name, confirmPassword, setErrorMessage, isSignIn) => {
  const passValue = password?.current?.value;
  const emailValue = email?.current?.value
  const nameValue = name?.current?.value
  const confirmPassValue = confirmPassword?.current?.value
  console.log(passValue, confirmPassValue)


    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
      setErrorMessage("Enter a valid email address")
      return
    }

    if (passValue?.length < 8 || passValue?.length > 20) {
      setErrorMessage("Password should be at least 8 and maximum 20 characters long.");
      return;
    }
    if (!/[a-z]/.test(passValue)) {
      setErrorMessage("Password should include at least one lowercase letter.");
      return;
    }
    if (!/[A-Z]/.test(passValue)) {
      setErrorMessage("Password should include at least one uppercase letter.");
      return;
    }
    if (!/\d/.test(passValue)) {
      setErrorMessage("Password should include at least one number.");
      return;
    }
    if (!/[!@#$%^&*]/.test(passValue)) {
      setErrorMessage("Password should include at least one special character.");
      return;
    }

    if(!isSignIn) {
      if (!/^[A-Za-z]+([ '][A-Za-z]+)*$/.test(nameValue)) {
        setErrorMessage("Enter a valid name")
        return
      }
      if (passValue !== confirmPassValue){
        setErrorMessage("Passwords do not match, please try again.")
        console.log(passValue, confirmPassValue)
        return
      }
    }

    setErrorMessage('');
    return true
}

export default checkValidInfo