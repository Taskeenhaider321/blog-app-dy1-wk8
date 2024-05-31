"use client";
import React, { useEffect } from "react";
import useBlogStore from "@/zustand/blog.zustand";

const MyBlog = () => {
  const { getAllBlogs, blogs } = useBlogStore();
  useEffect(() => {
    const fetchBlogs = async () => {
      await getAllBlogs();
    };
    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
    <div className="text-center">
      <p className="md:text-5xl pt-10 pb-4 bg-gradient-to-r from-blue-400 via-[#0CB8DF] to-[#0CC9D6] text-transparent bg-clip-text text-4xl font-bold">
        MY BLOGS
      </p>
      <div className="bg-[#E8EDF5] border border-slate-300 hover:border-white md:mx-48 my-10"></div>
      <div className="flex justify-center items-center my-3">
        <div className="flex justify-center text-center bg-white max-w-5xl p-3 rounded-lg">
          <div className="py-6 flex md:flex-row sm:flex-row flex-col gap-5">
            <div className="flex gap-3 flex-col">
              <p className="font-bold text-[#344161] hover:text-blue-400 md:text-3xl text-left md:w-[500px]">
                Are You Ready To Go Home After The Sunset View?
              </p>
              <p className="text-left text-[15px] md:w-[550px] sm:w-96">
                Embrace remote work success with these invaluable tips and
                tricks for freelancers seeking productivity and work-life
                balance in their home offices
              </p>
              <div className="flex gap-3 justify-center">
                <button className="bg-black text-white px-3 py-1 rounded">
                  Delete
                </button>
                <button className="bg-blue-400 text-white px-3 py-1 rounded">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
