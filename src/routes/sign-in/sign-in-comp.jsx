import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

import {
  auth,
  signInWithGooglePopup,
  createUserDocAuth,
  signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocAuth(response.user);
    }
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocAuth(user);

    // console.log(user.uid);
  };

  return (
    <div>
      <h1>Sign in test</h1>
      <button onClick={logGoogleUser}> signin with google popop</button>
      <button onClick={signInWithGoogleRedirect}>
        signin with google redirect
      </button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
