export default function Hero() {
  return (
    <>
      <div className="container px-4 mx-auto lg:px-24">
        <div
          className="h-[80vh] hero rounded-2xl"
          style={{
            backgroundImage: "url(https://i.ibb.co/dgqXvjK/banner-image.jpg)",
          }}
        >
          <div className="bg-opacity-50 hero-overlay rounded-2xl"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="lg:px-24 text">
              <h1 className="mb-5 text-4xl font-bold text-white md:text-5xl">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="mb-5">
                Explore a diverse range of cuisines, from international delights
                to local favorites, guided by expert chefs who are passionate
                about sharing their knowledge and expertise.
              </p>
              <div className="flex items-center justify-center gap-2 ">
                <button className="border-customPrimary btn bg-customPrimary rounded-3xl px-6 text-[#150B2B] font-semibold ">
                  Explore Now
                </button>
                <button className="btn bg-transparent border border-[#fff] rounded-3xl px-6 text-[#fff] font-semibold ">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
