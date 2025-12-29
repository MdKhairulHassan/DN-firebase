import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  // console.log(news);
  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-3xl font-bold">{news.title}</h2>
      <p>{news.details}</p>
      <div className="inline-block">
        <Link
          to={`/category/${news.category_id}`}
          className="bg-[#D72050] text-white text-lg font-medium px-4 py-2 flex items-center gap-2"
        >
          <FaArrowLeftLong /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
