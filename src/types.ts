export interface IUser {
    email: string | null;
    id: string;
    name?: string;
}

<<<<<<< HEAD
export interface IPost {
    id: string;
    content: string;
    userId: string;
    email: string;
    createdAt: string;
}

=======
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
export interface IProfile {
    id: string;
    userId: string;
    name: string;
    lastName: string;
    role: "admin" | "user";
<<<<<<< HEAD
}
=======
    }


    export interface IPost {
        id: string;
        content: string;
        userId: string;
        email: string;
        createdAt: string;
    }
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
