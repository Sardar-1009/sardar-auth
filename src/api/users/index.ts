<<<<<<< HEAD
import { doc, getDoc, setDoc } from "firebase/firestore";
import { IProfile } from "../../types";
import { db } from "../../firebase";
=======
import { IProfile } from "../../types";
import {db} from '../../firebase'
import {doc, setDoc, getDoc} from 'firebase/firestore'


>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3

export const setUser = async (
    userId: string,
    userData: Omit<IProfile, "id" | "userId">
<<<<<<< HEAD
) => {
    try {
        const userDoc = doc(db, "users", userId);
        await setDoc(userDoc, {
        ...userData,
        createdAt: new Date(),
        userId: userId,
    });
    } catch (error) {
        console.error("Error creating user:", error);
        return null;
    }
};


export const getUserById = async (userId: string): Promise<IProfile | null> => {
    try {
        const userDoc = doc(db, "users", userId);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
            return {
                id: userSnapshot.id,
                ...userSnapshot.data(),
            } as IProfile;
        }
    return null;
        } catch (error) {
            console.error("Error getting user:", error);
            return null;
        }
    };
=======
    ) => {
    try {
    const userDoc = doc(db, "users", userId);
    await setDoc(userDoc, {
    ...userData,
    createdAt: new Date(),
    userId: userId,
    });
    } catch (error) {
    console.error("Error creating user:", error);
    return null;
    }
    };


    export const getUserById = async (userId: string): Promise<IProfile | null> => {
        try {
        const userDoc = doc(db, "users", userId);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
        return {
        id: userSnapshot.id,
        ...userSnapshot.data(),
        } as IProfile;
        }
        return null;
        } catch (error) {
        console.error("Error getting user:", error);
        return null;
        }
        };

>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
