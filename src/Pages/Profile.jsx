import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Profile = () => {
  const { user } = use(AuthContext);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-5">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <img
          src={
            user?.photoURL ||
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#6366f1]"
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {user?.displayName || "No Name Found"}
        </h2>
        <p className="text-gray-600 mb-4">{user?.email || "No Email Found"}</p>

        <button className="btn btn-primary w-full mt-4">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;




