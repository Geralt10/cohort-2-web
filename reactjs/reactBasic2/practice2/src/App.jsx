import React from 'react'
import Card from './components/card'
function App() {
const users = [
  {
    profileImage: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    coverImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    fullName: "Aarav Sharma",
    description: "Frontend developer | React lover",
    likeCount: 1200,
    followersCount: 560,
    postCount: 45,
    followed: true
  },
  {
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    fullName: "Priya Verma",
    description: "Travel | Lifestyle | Blogger",
    likeCount: 3400,
    followersCount: 2100,
    postCount: 132,
    followed: false
  },
  {
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    fullName: "Rohit Mehta",
    description: "Backend Engineer | Node.js",
    likeCount: 980,
    followersCount: 430,
    postCount: 29,
    followed: true
  },
  {
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    coverImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    fullName: "Ananya Singh",
    description: "UI/UX Designer ✨",
    likeCount: 2100,
    followersCount: 1500,
    postCount: 78,
    followed: false
  },
 
  {
    profileImage: "https://images.unsplash.com/photo-1548142813-c348350df52b",
    coverImage: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
    fullName: "Neha Gupta",
    description: "Content Creator 🎥",
    likeCount: 1800,
    followersCount: 900,
    postCount: 64,
    followed: false
  },
  {
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    coverImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    fullName: "Aditya Rao",
    description: "Full Stack Developer",
    likeCount: 760,
    followersCount: 380,
    postCount: 22,
    followed: true
  },
  {
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    coverImage: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1",
    fullName: "Simran Kaur",
    description: "Fashion | Styling | Trends",
    likeCount: 2900,
    followersCount: 1800,
    postCount: 95,
    followed: true
  },
  {
    profileImage: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    fullName: "Vikram Joshi",
    description: "Photographer 📸",
    likeCount: 4100,
    followersCount: 2600,
    postCount: 160,
    followed: false
  },
  
];



  return (
    <div className="w-full flex flex-wrap justify-evenly  bg-black px-2 py-2">
      {users.map((elem)=>{
          return <Card {...elem}/>
      })}
    </div>
  )
}

export default App
