import React, { useEffect, useState } from "react";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <div>
      <footer className="text-gray-900 bg-teal-800 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center justify-between order-first">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font text-yellow-400 font-medium tracking-widest text-sm mb-3">
                Our Others Location
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">Dhaka</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Chattagram</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Sylhet</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Rajshahi</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
                Important Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">About Us</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Contact US</a>
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-400"
                  >
                    E-mail
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-green-900 focus:border-yellow-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-orange-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center"></p>
            </div> */}
          </div>
        </div>
        <div className="bg-teal-600 bg-opacity-75">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img
                src="https://i.ibb.co/tb2p8n7/expresstrip-logo2.png"
                alt=""
              />
            </a> */}
            <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
              All Rights Reserved By &copy;{" "}
              <span className=" md:text-orange-900  font-black text-orange-600 mx-1">
                FRUITS
              </span>{" "}
              <span className="text-white">-HUB</span>{" "}
              <span className="mx-2">||</span>
              <span className="mx-2">{date}</span>
              <a
                href="https://www.linkedin.com/in/mdanamerasul/"
                className="text-gray-900 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @MD ANAM E RASUL
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-900">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-800">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-800">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
