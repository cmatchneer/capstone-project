import {
  signInWithGooglePopup,
  createUserDocAuth
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocAuth(user);
    // console.log(user.uid);
  };

  return (
    <div>
      <h1>Sign in test</h1>
      <button onClick={logGoogleUser}> signin with google popop</button>
    </div>
  );
};

export default SignIn;
