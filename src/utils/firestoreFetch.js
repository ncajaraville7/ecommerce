import { query, orderBy, where, collection, getDocs } from '@firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'
import db from './firebaseConfig'

export const firestoreFetch = async (categoryId) => {
    let q;
    if(categoryId) {
        q = query(collection(db, "category"), where('categoryId', '==', categoryId));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
        return {
            id: id,
            ...docSnap.data()
        }
    } else {
        console.log('No such Document!')
    }
}