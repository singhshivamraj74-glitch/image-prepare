"use client";

import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsXw3UwaPDUm2_oGIJ9Wk3yXRqTBx879E",

  authDomain: "image-prepare.firebaseapp.com",

  projectId: "image-prepare",

  storageBucket: "image-prepare.appspot.com",

  messagingSenderId: "694155835531",

  appId: "1:694155835531:web:95c9c9acd5ec93d059bc8e",

  measurementId: "G-MH6HSDH2VV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();

export default app;