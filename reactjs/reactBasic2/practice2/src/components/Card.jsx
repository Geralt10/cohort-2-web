/** @format */

import React from "react";

const Card = (users) => {
  return (
    <div className='relative w-80 h-100 flex flex-col  items-center bg-cyan-50 m-2 rounded-2xl overflow-hidden'>
      <div>
        <img
          className='w-80 h-35 object-cover '
          src={users.coverImage}
          alt=''
        />
      </div>
      <img
        className='absolute top-30 w-25 h-25 object-cover rounded-full '
        src={users.profileImage}
        alt=''
      />
      <div className="mt-20  text-center ">
        <h1 className="text-2xl font-semibold mb-2">{users.fullName}</h1>
        <p className="text-base">{users.description}</p>
      </div>
      <div className="w-70 h-20 flex gap-2 justify-evenly items-center  mt-5  rounded-3xl bg-[#ece4e4] shadow-md shadow-gray-400/40">
        <div className="flex flex-col gap-1/2">
             <h2 className="text-xl text-center font-semibold">{users.likeCount}</h2>
             <h4 className="text-center text-sm">Likes</h4>
        </div>
        <div className="flex flex-col items-center gap-1/2">
             <h2 className="text-xl text-center font-semibold">{users.followersCount}</h2>
             <h4 className="text-center text-sm">Followers</h4>
        </div>
        <div className="flex flex-col gap-1/2">
             <h2 className="text-xl text-center font-semibold">{users.postCount}</h2>
             <h4 className="text-center text-sm">Posts</h4>
        </div>
      </div>
    </div>
  ); 
};

export default Card;
