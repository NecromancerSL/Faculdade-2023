// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//pega a autenticação do email e senha e vai exportar para a aplicação, pegando os dados do banco
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoF-u3t4VWtlf2Q9lZRKxDcrjpaLoMqOs",
  authDomain: "app-aula0522.firebaseapp.com",
  projectId: "app-aula0522",
  storageBucket: "app-aula0522.appspot.com",
  messagingSenderId: "862098561118",
  appId: "1:862098561118:web:712fe9c8654e9c1d6f3ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//exporta a autenticação
export const auth = getAuth(app);