import React from "react";
import { useParams, Link } from "react-router-dom";

const courseData = {
  web: {
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React, and modern frontend tools to build real-world web applications.",
    duration: "6 Months",
    level: "Beginner to Advanced",
  },
  dsa: {
    title: "Data Structures & Algorithms",
    description:
      "Master arrays, linked lists, trees, graphs, and algorithms for interviews and problem solving.",
    duration: "4 Months",
    level: "Intermediate",
  },
  backend: {
    title: "Backend Development",
    description:
      "Build scalable APIs using Node.js, Express, MongoDB, authentication, and deployment.",
    duration: "5 Months",
    level: "Intermediate",
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
        <Link to="/courses" className="text-blue-500 underline">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-6">{course.title}</h1>

      <p className="text-xl text-gray-600 mb-8 max-w-2xl text-center">
        {course.description}
      </p>

      <div className="flex gap-8 mb-10">
        <div className="text-lg">
          <strong>Duration:</strong> {course.duration}
        </div>
        <div className="text-lg">
          <strong>Level:</strong> {course.level}
        </div>
      </div>

      <Link
        to="/courses"
        className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
      >
        Back to Courses
      </Link>
    </div>
  );
};

export default CourseDetail;
