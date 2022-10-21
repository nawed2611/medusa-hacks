import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <div className="flex justify-center  items-center relative mt-16 bg-gray-500">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-500"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className=" justify-between flex gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:md:w-screen">

              <div className="mt-6">
                <p className=" text-lg">
                  Join our newsletter to stay up to date on features and
                  releases.
                </p>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="border-2 w-96 border-gray-100 rounded-sm p-2 mt-2"
                />
                <button className="bg-gray-100 text-gray-500 rounded-sm p-2 ml-2">
                  Subscribe
                </button>
                <p className="my-3 max-w-lg">
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </p>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-gray-100 py-3">
                Follow Us
              </span>
              <div className="flex flex-col">
                <span className="text-gray-100 flex space-x-2">
                  <AiFillFacebook className="text-4xl text-gray-100" />
                  <p className=" mt-2">

                  Facebook
                  </p>
                </span>
                <span className="text-gray-100  flex space-x-2">
                  <AiFillInstagram className="text-4xl text-gray-100" />
                  <p className=" mt-2">

                  Instagram
                  </p>
                </span>
                <span className="text-gray-100  flex space-x-2">
                  <AiFillTwitterCircle className="text-4xl text-gray-100" />
                  <p className=" mt-2">

                  Twitter
                  </p>
                </span>
                <span className="text-gray-100  flex space-x-2">
                  <AiFillLinkedin className="text-4xl text-gray-100" />
                  <p className=" mt-2">

                  Linkedin
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="text-center pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-100">©2022, All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
