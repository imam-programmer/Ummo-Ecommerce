import { useMemo, useState } from "react";
import { useSelector } from "react-redux";


const Star = ({ filled, size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75l2.572 5.21 5.75.836-4.16 4.054.982 5.727L12 16.875l-5.144 2.702.982-5.727-4.16-4.054 5.75-.836L12 3.75z"
      />
    </svg>
  );
};

const RatingStars = ({ rating, size = 18 }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= Math.round(rating)} size={size} />
      ))}
    </div>
  );
};

const Review = ({ review }) => {
  return (
    <div className="border-b border-gray-200 py-6 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-jost text-sm font-medium text-primary">
            {review.reviewerName}
          </h4>
        </div>

        <RatingStars rating={review.rating} size={16} />
      </div>

      <p className="mt-3 font-jost text-sm leading-6 text-gray">
        {review.comment}
      </p>
    </div>
  );
};

export default function Reviews() {
    const detailsProduct = useSelector((state) => state.clickProductDetails.Details)
  const [reviews, setReviews] = useState(detailsProduct.reviews);

  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;

    const total = reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0);

    return total / reviews.length;
  }, [reviews]);



  return (
    <section className="w-full font-jost">
      {/* Rating Summary */}
      <div className="mb-10 border-b border-gray-200 pb-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Average Rating */}
          <div>
            <h3 className="mb-2 text-lg font-medium text-primary">
              Customer Reviews
            </h3>

            <div className="flex items-center gap-3">
              <span className="text-4xl font-medium text-primary">
                {averageRating.toFixed(1)}
              </span>

              <div>
                <RatingStars rating={averageRating} size={20} />

                <p className="mt-1 text-xs text-gray">
                  Based on {reviews.length}{" "}
                  {reviews.length === 1 ? "Review" : "Reviews"}
                </p>
              </div>
            </div>
          </div>

       
      
        </div>
      </div>

      {/* Reviews */}
      <div className="mb-12">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>

    </section>
  );
}
