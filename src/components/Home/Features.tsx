const Features = () => {
  return (
    <div className="my-24 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            Something about the brand here
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
            A paragraph about the brand. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque rem aperiam, eaque
            ipsa quae. Sed ut unde omnis iste natus.
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-gray-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Trending</h6>
          <p className="mb-3 text-sm text-gray-900">
            Have a look at the latest sneakers that are trending on Flarion
            right now.
          </p>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-gray-700 cursor-pointer"
          >
            Check Out
          </a>
        </div>
        <div className="max-w-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-gray-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Latest Collection</h6>
          <p className="mb-3 text-sm text-gray-900">
            Check out the latest collection of sneakers from Flarion.
          </p>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-gray-700 cursor-pointer"
          >
            Check Out
          </a>
        </div>
        <div className="max-w-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-gray-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">About Us</h6>
          <p className="mb-3 text-sm text-gray-900">
            Know more about the talented team of developers &amp; designers
            behind Flarion.
          </p>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-gray-700 cursor-pointer"
          >
            Check Out
          </a>
        </div>
        <div className="max-w-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-gray-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">View Cart</h6>
          <p className="mb-3 text-sm text-gray-900">
            Have a look at the items in your cart
          </p>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-gray-700 cursor-pointer"
          >
            Check Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
