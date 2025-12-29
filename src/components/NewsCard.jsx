import { FaEye, FaStar } from 'react-icons/fa';
import { BsBookmark, BsShare } from 'react-icons/bs';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    thumbnail_url,
    author,
    rating,
    total_view,
    tags,
    others,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <div className="card bg-base-100 shadow-lg border">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-xl text-gray-500">
          <BsBookmark className="cursor-pointer hover:text-primary" />
          <BsShare className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p className="text-gray-600">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link
                to={`/news-details/${id}`}
                className="text-secondary font-semibold cursor-pointer hover:underline"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-sm">
              #{tag}
            </span>
          ))}
        </div>

        <hr className="my-3" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: rating.number }).map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 text-sm text-gray-600">{rating.number}</span>

            {rating.badge && (
              <span className="badge badge-warning badge-sm ml-2">
                {rating.badge}
              </span>
            )}
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>

        {/* Highlights */}
        {(others.is_today_pick || others.is_trending) && (
          <div className="mt-3 flex gap-2">
            {others.is_today_pick && (
              <span className="badge badge-success">Today’s Pick</span>
            )}
            {others.is_trending && (
              <span className="badge badge-error">Trending</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
