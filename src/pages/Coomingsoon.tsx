// import React from "react";

// const ComingSoonPage: React.FC = () => {
//   const launchDate = "April 10, 2026 10:10:10";
//   const currentYear = new Date().getFullYear();

//   return (
//     <div className="font-sans antialiased min-h-screen flex flex-col justify-between bg-gray-50">
//       <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-14">
//         {/* Company Logo */}
//         <div className="mb-6">
//           <img
//             src="/favicon.ico"
//             alt="Company Logo"
//             className="w-24 h-24 mx-auto rounded-full object-cover"
//           />
//         </div>

//         {/* Company Name */}
//         <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
//           Voltanex
//         </h2>

//         {/* Main Message */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//           We Will Be Opening Soon
//         </h1>
//         <p className="text-lg md:text-xl mb-6 text-gray-700">
//           Our website is getting ready for launch. Stay tuned!
//         </p>

//         {/* Launch Date */}
//         <p className="text-blue-600 font-semibold text-lg">
//           Launching on {launchDate}
//         </p>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 py-12 text-white py-12">
//         <div className="text-center mb-4">
//           {/* <img
//             src="https://via.placeholder.com/50x50.png?text=Logo"
//             alt="Company Logo"
//             className="w-12 h-12 mx-auto rounded-full object-cover mb-2"
//           /> */}
//           <span className="text-xl font-bold">Voltanex</span>
//         </div>

//         <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
//           &copy; {currentYear} Voltanex. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ComingSoonPage;

import React, { useState, useEffect } from "react";

const ComingSoonPage: React.FC = () => {
  const launchDateStr = "April 10, 2026 10:10:10";
  const launchDate = new Date(launchDateStr).getTime();
  const currentYear = new Date().getFullYear();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      4
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="font-sans antialiased min-h-screen flex flex-col justify-between bg-gray-50">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-14 pb-14">
        {/* Company Logo */}
        <div className="mb-6">
          <img
            src="/favicon.ico"
            alt="Company Logo"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
        </div>

        {/* Company Name */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Voltanex
        </h2>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          We Will Be Opening Soon
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Our website is getting ready for launch. Stay tuned!
        </p>

        {/* Launch Date */}
        <p className="text-blue-600 font-semibold text-lg mb-6">
          Launching on {launchDateStr}
        </p>

        {/* Countdown Timer */}
        <div className="flex gap-4 text-gray-900 text-xl font-semibold">
          <div className="bg-white px-4 py-2 rounded shadow">
            {timeLeft.days} <span className="text-sm">Days</span>
          </div>
          <div className="bg-white px-4 py-2 rounded shadow">
            {timeLeft.hours} <span className="text-sm">Hours</span>
          </div>
          <div className="bg-white px-4 py-2 rounded shadow">
            {timeLeft.minutes} <span className="text-sm">Minutes</span>
          </div>
          <div className="bg-white px-4 py-2 rounded shadow">
            {timeLeft.seconds} <span className="text-sm">Seconds</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        {/* <div className="text-center mb-4">
          <span className="text-xl font-bold">Voltanex</span>
        </div> */}

        <div className=" border-gray-800 pt-8 text-center text-gray-500">
          &copy; {currentYear} Voltanex. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonPage;