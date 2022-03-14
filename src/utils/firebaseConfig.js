import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAx5Zd4qjlKoa1yL-m5g9xId6btA9vTvgE',
  authDomain: 'ecommerce-58c35.firebaseapp.com',
  projectId: 'ecommerce-58c35',
  storageBucket: 'ecommerce-58c35.appspot.com',
  messagingSenderId: '228283784485',
  appId: '1:228283784485:web:ee2de6a98d820bec578ecc',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
