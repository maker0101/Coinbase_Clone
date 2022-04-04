import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyASa_N9o8jH4DVb2jA2b5VG-yW7wJh7JRA',
  authDomain: 'coinbase-clone-0101.firebaseapp.com',
  projectId: 'coinbase-clone-0101',
  storageBucket: 'coinbase-clone-0101.appspot.com',
  messagingSenderId: '737129325620',
  appId: '1:737129325620:web:3b12cdd66bfb2956255661',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
