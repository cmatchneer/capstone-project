import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign in test</h1>
      <button onClick={logGoogleUser}> signin with google popop</button>
    </div>
  );
};

export default SignIn;
