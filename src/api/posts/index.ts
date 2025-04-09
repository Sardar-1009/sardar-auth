import { collection, addDoc, query, orderBy, where, getDocs } from "firebase/firestore"
import { IPost } from "../../types"
import {db} from "../../firebase"

export const createPost = async (post: Omit<IPost, 'id'>) => {
    const postCollection = collection(db, 'posts');
    const docRef  = await addDoc(postCollection, post)

    return {...post, id: docRef.id}
}

export const getPosts = async (userId?: string): Promise<IPost[]> => {
    const postCollection = collection(db, 'posts')
    let q = query(postCollection, orderBy('createAt', 'desc'))
    if (userId) {
        try {
            q = query(
                postCollection,
                where('userId', '==', userId),
                orderBy('createAt', 'desc')
            )
            const querySnapshot = await getDocs(q)

            return querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })) as IPost[];
        } catch {
            console.error();
        }

    }

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs)
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as IPost[];
}