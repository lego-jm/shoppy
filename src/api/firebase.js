import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase();

export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      return user;
    })
    .catch((error) => console.error(error));
}

export async function logout() {
  signOut(auth);
}

export async function onAuthUserChanged(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user
      ? await getAdminUid(user).then((res) => res)
      : null;

    callback(updatedUser);
  });
}

async function getAdminUid(user) {
  return get(ref(database, `admins/`))
    .then((snapshot) => {
      if (snapshot.exists() && snapshot.val().includes(user.uid)) {
        return { ...user, isAdmin: true };
      }
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}
