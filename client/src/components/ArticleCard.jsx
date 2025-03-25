import React from "react";
import arrow4 from "../images/arrow4.png";
import { Link } from "react-router-dom";
const ArticleCard = ({ post, className }) => {
  return (
    <div className={` rounded-xl overflow-hidden md:mb-24 ${className}`}>
      <Link to={`/details/${post.id} `}>
        <img
          src={post.image}
          alt="article1"
          className="w-full object-cover object-center h-[200px]  "
        />
      </Link>

      <div className="p-5 ">
        <p className="font-inter font-normal text-primary sm:text-[12px] text-[9px] ">
          {post.user.name} | {new Date(post.createdAt).getDate()}{" "}
          {new Date(post.createdAt).toLocaleString("default", {
            month: "long",
          })}{" "}
          {new Date(post.createdAt).getFullYear()}
        </p>
        <div>
          {" "}
          <Link to={`/details/${post.id}`}>
            <div className="">
              <p className="  font-inter font-semibold sm:w-[334px]   sm:text-[24px] text-[16px] text-black1   ">
                {post.title}{" "}
              </p>
              <p className=" md:mt-8  font-inter font-normal text-black md:w-[334px] sm:h-[69px] md:text-[14px] text-[10px]  ">
                {post.caption}
              </p>
            </div>
          </Link>
          <div className="block mt-[35px]">
            <Link to={`/details/${post.id}`}>
              <button className="flex md:ml-0 ml-[4px] items-center  text-[12px]  ">
                <span className=" mr-10 font-inter font-normal">Read more</span>
                <i className="fas fa-chevron-right">
                  <img
                    src={arrow4}
                    alt="whitearrow"
                    className="md:w-[70%] w-[50%] md:h-[70%] h-[50%]"
                  />
                </i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
