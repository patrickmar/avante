import React from 'react';
import article1 from '../images/article1.png';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSinglePost } from '../services/index/post';

const NewsExplicit = () => {
  const postId = useParams();

  console.log(postId);
  console.log(postId.id);

  const { data } = useQuery({
    queryFn: () => getSinglePost(postId.id),

    queryKey: ['details', postId.id],

    onSuccess: (data) => {
      console.log(data);
      console.log(data.image);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  if (data !== undefined) {
    return (
      <div>
        <div>
          <img
            src={data.image}
            alt="learn more"
            className="sm:w-full w-[414px] sm:h-[500px] h-[282.58px]"
          />
        </div>

        <div className="flex sm:flex-row flex-col sm:mt-20  sm:py-16 py-6 ">
          <div className="  flex-[1.0] flex justify-center items-start flex-col  sm:ml-24 mx-4">
            <div className=" flex items-center justify-center   mb-4  ">
              <h4 className=" font-inter font-normal md:text-[12px] text-[9px]   ">
                AVANTE @10! |{new Date(data.createdAt).getDate()}{' '}
                {new Date(data.createdAt).toLocaleString('default', {
                  month: 'long',
                })}{' '}
                {new Date(data.createdAt).getFullYear()}
              </h4>{' '}
            </div>
            <div className="flex items-center justify-center ">
              <p
                className="block font-inter font-normal sm:text-[14px] text-[12px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] sm:mt-2 sm:mb-8 mb-4
"
              >
                Posted by {data.user.name}
              </p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: data.description }}
              className={` font-inter font-normal text-black2 sm:text-[14px] text-[12px] sm:leading-[25.8px] leading-[25.8px] sm:min-w-[470px] min-w-[310px] mt-5 mb-5 sm:w-[773px] w-[200px] `}
            ></div>
          </div>
          <div
            className={`flex-1 flex justify-center items-start flex-col  mt-[-80px] sm:ml-44 `}
          >
            <div className={`rounded-xl ml-8  mt-8`}>
              <p className="text-secondary font-inter font-normal sm:text-[18px] sm:mb-4 mb-4 mt-12 ml-4">
                Latest post
              </p>
              <img
                src={article1}
                alt="article1"
                className="sm:w-[300px] w-[250px] sm:mx-0 mx-4 object-cover object-center h-auto  "
              />
              <div className="p-5 sm:w-[280px] min-w-[300px]">
                <h2 className="font-inter font-semibold  sm:h-[69px] sm:text-[14px] text-[16px] text-black1 w-full">
                  Avante 10 Years History
                </h2>
                <p className="font-inter font-normal text-black  sm:h-[69px] sm:-mt-12 sm:text-[12px] text-[10px]">
                  Avante 10 years history 10 years of continuous improvement and
                  growth in business.
                </p>
              </div>
            </div>{' '}
            <div className={`rounded-xl ml-8 `}>
              <h3 className="text-secondary font-inter font-normal sm:text-[18px] sm:mb-4 mb-4 mt-12 ml-4">
                Recommended For You{' '}
              </h3>
              <img
                src={article1}
                alt="article1"
                className="sm:w-[300px] w-[250px] sm:mx-0 mx-4 object-cover object-center h-auto "
              />
              <div className="p-5 sm:w-[280px] min-w-[300px]">
                <h2 className="font-inter font-semibold  sm:h-[69px] sm:text-[14px] text-[16px] text-black1 w-full">
                  Avante 10 Years History
                </h2>
                <p className="font-inter font-normal text-black  sm:h-[69px] sm:-mt-12 sm:text-[12px] text-[10px]">
                  Avante 10 years history 10 years of continuous improvement and
                  growth in business.
                </p>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
    );
  }
};
export default NewsExplicit;
