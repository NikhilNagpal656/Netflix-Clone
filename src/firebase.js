
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCNM-OVfQcl61LjZm1qCUTFN3Sh_mVmehU",
  authDomain: "netflix-clone-ddebc.firebaseapp.com",
  projectId: "netflix-clone-ddebc",
  storageBucket: "netflix-clone-ddebc.firebasestorage.app",
  messagingSenderId: "657044337249",
  appId: "1:657044337249:web:1d748b77690b8752423020"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name , email, password)=>{
        try{
            const res = await createUserWithEmailAndPassword(auth,email,password);
            const user = res.user;
            await addDoc(collection(db,"user"),{
                uid:user.uid,
                name,
                authProvider:"local",
                email,
            });
        }catch(error){
            console.log(error);
            toast.error(error.code.split('/'[1].split('-').join(" ")));
            
        }
}


const login = async(email,password)=>{
    try{
       await signInWithEmailAndPassword(auth, email,password)
    }catch(error){
            console.log(error);
            toast.error(error.code.split('/'[1].split('-').join(" ")));
            
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};