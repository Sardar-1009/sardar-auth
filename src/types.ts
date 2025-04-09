export interface IUser {
    email: string | null;
    id: string;
    name?: string;
}

export interface IProfile {
    id: string;
    userId: string;
    name: string;
    lastName: string;
    role: "admin" | "user";
    }


    export interface IPost {
        id: string;
        content: string;
        userId: string;
        email: string;
        createdAt: string;
    }