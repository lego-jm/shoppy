import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { get, getDatabase, ref, remove, set } from "firebase/database";
import { v4 as uuid } from "uuid";

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

export function logout() {
  signOut(auth);
}

export function onAuthUserChanged(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await getAdminUid(user) : null;
    callback(updatedUser);
  });
}

async function getAdminUid(user) {
  return get(ref(database, `admins/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function addProduct(product) {
  const uid = uuid();
  set(ref(database, `products/${uid}`), {
    ...product,
    price: parseInt(product.price),
  });
}

export async function getAllProducts() {
  return get(ref(database, `products/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function addOrUpdateCart(uid, item) {
  set(ref(database, `carts/${uid}/${item.id}`), {
    ...item,
  });
}

export async function getCarts(uid) {
  return get(ref(database, `carts/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function removeItem(uid, itemId) {
  remove(ref(database, `carts/${uid}/${itemId}`));
}
