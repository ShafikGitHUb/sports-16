export default async function ReviewSection() {
  const res = await fetch("http://localhost:5000/reviews");
  const reviews = await res.json();
  return (
    <div className="w-full bg-emerald-50/20 py-12 px-4 md:px-8">
<div className="text-center pb-14">
  <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 tracking-tight">
    Real Stories From Players
  </h1>

  <p className="text-gray-600 mt-3 text-base md:text-lg font-medium">
    Hear how athletes are improving their game with our platform
  </p>
</div>
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="card bg-white shadow-sm border border-gray-100 p-6 rounded-2xl flex flex-col justify-between"
            >
              <div className="flex text-amber-400 gap-1 mb-4 text-lg">
                {"★".repeat(review.rating)}
              </div>

              <p className="text-gray-600 italic text-sm font-medium leading-relaxed mb-6 flex-grow">
                {review.text}
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div className="avatar placeholder">
                  <div
                    className={`${review.avatarBg} text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold text-sm`}
                  >
                    {review.initials}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}