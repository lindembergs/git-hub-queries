import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "./firebaseConnection";

export const authWithGitHub = async () => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
