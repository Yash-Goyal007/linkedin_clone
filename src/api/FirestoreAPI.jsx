import { addDoc, collection, onSnapshot } from "firebase/firestore"
import { toast } from "react-toastify";
import { firestore } from "../firebaseConfig";

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");

export const PostStatus = object => {
    addDoc(postsRef, object)
        .then(() => {
            toast.success('Post has been created successfully');
        })
        .catch(err => {
            console.log(err);
        })
}

export const getStatus = (setAllStatus) => {
    onSnapshot(postsRef, (response) => {
        setAllStatus(response.docs.map((docs) => {
            return { ...docs.data(), id: docs.id };
        }));
    });
};

export const postUserData = object => {
    addDoc(userRef, object)
        .then(() => {

        }).catch(err => {
            console.log(err);
        });
};

export const getCurrentUserData = (setCurrentUser) => {
    onSnapshot(userRef, response => {
        setCurrentUser(response.docs.map(docs => {
            return { ...docs.data(), userID: docs.id };
            }).filter(item => {
                return item.email === localStorage.getItem("userEmail");
            })[0]
        );
    });
};