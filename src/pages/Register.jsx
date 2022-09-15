import { auth, storage, db } from '../firebase'
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import Add from '../img/addAvatar.png'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);

      console.log('Response:', response);
      
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email, 
              photoURL: downloadURL
            });
            await setDoc(doc(db, "userChats", response.user.uid), {})
            navigate('/');
          });
        }
      );
    }
    catch {
      setError(true);
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Display name' />
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <input style={{display: 'none'}} type="file" id='file' />
          <label htmlFor="file">
            <img src={Add}/>
            <span>Add an Avatar</span>
          </label>
          <button>SignUp</button>
          {
            error && <span>Something went wrong!</span>
          }
        </form>
        <p>Have an account? Login</p>
      </div>
    </div>
  )
}

export default Register