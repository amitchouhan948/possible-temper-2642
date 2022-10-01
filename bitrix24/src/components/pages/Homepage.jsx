import React from "react";
import {signOut} from "firebase/auth";
import {auth} from "../../config/Firebase";
import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
const Homepage = () => {

  const navigate = useNavigate();
  
  const [user] = useAuthState(auth);

  
  const signoutAuth = async () => {


    await signOut(auth);
    navigate("/Login");
  };


  return (
    <div>

      <h1>Homepage</h1>
      <button onClick={signoutAuth}>Signout</button>

      <div>
        <h1>{user?.displayName}</h1>
        <h2>{user?.email}</h2>
        <img src={user?.photoURL || "dd"} alt="" />
      </div>


    </div>
  );
};

export default Homepage;
