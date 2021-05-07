import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCYoFXeULSKSsSAWSjXiQDBNV8SPQyGYPk",
	authDomain: "netflix-clone-83a79.firebaseapp.com",
	projectId: "netflix-clone-83a79",
	storageBucket: "netflix-clone-83a79.appspot.com",
	messagingSenderId: "760192082697",
	appId: "1:760192082697:web:f75363bb534c89ac2969d8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
