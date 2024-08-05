import FAQ from '@/components/donation/FAQS';
import {
  FaLeaf,
  FaGraduationCap,
  FaMedal,
  FaHandsHelping,
  FaRegSmile,
  FaCheckCircle,
  FaInfoCircle,
  FaCoins,
  FaCreditCard,
} from 'react-icons/fa';

const Layout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-white p-6 md:p-12">
        {/* Image and Payment Option */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          {/* Image */}
          <div
            className="relative w-full h-80 md:h-96 bg-cover bg-center rounded-lg border-4 border-white shadow-xl mb-6"
            style={{ backgroundImage: "url('/image.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-25"></div>
          </div>

          {/* Payment Option */}
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">Membership Fee</h2>
          <p className="text-gray-700 text-base">₹500</p>
          <button className="bg-indigo-600 mt-5 mb-10 text-white py-2 px-4 text-lg font-bold rounded-3xl hover:bg-indigo-700 flex items-center"><FaCreditCard className='mr-2' />Pay Now</button>

          {/* Refund Process */}
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-indigo-700 flex items-center">
            <FaCheckCircle className="mr-3 text-indigo-600" /> Refund Process
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-base">
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-green-700" /> Complete a Social Internship and participate in events or conferences.</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-green-700" /> Submit your "Participation Certificate" along with the completion certificate provided by our organization.</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-green-700" /> Receive a refund of your fee upon verification of your participation.</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-2xl overflow-y-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-indigo-800 flex items-center">
            <FaGraduationCap className="mr-3 text-indigo-600 animate-bounce" /> Learn What School Doesn't Teach You
          </h1>
          <p className="text-gray-700 mb-4 text-base">
            At UN Francisco, you can gain practical knowledge and learn real-world skills that will help you transform your life at work, school, and home.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 flex items-center">
            <FaMedal className="mr-3 text-indigo-600" /> Benefits of Membership
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-base">
            <li className="flex items-center"><FaLeaf className="mr-2 text-green-700" /> Access to over ₹2 lakh worth of premium resources at no cost.</li>
            <li className="flex items-center"><FaRegSmile className="mr-2 text-yellow-700" /> Internships through CAF.</li>
            <li className="flex items-center"><FaGraduationCap className="mr-2 text-blue-700" /> Premium courses, software, Career Track, and Uni AI.</li>
            <li className="flex items-center"><FaInfoCircle className="mr-2 text-purple-700" /> Free access to major events, competitions, and conferences.</li>
            <li className="flex items-center"><FaCheckCircle className="mr-2 text-green-700" /> Certification for every activity and participation, with opportunities for international certification through conferences.</li>
            <li className="flex items-center"><FaHandsHelping className="mr-2 text-red-700" /> Free access to the Common Application Form (CAF) for internships.</li>
            <li className="flex items-center"><FaCoins className="mr-2 text-yellow-700" /> Free access to the Help Desk for any resources or assistance.</li>
            <li className="flex items-center"><FaRegSmile className="mr-2 text-pink-700" /> And many more benefits!</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-indigo-700 flex items-center">
            <FaInfoCircle className="mr-3 text-indigo-600" /> How It Works
          </h2>
          <p className="text-gray-700 mb-4 text-base">
            Many students, content creators, mentors, and startups donate their premium resources to help the organization work more effectively in the areas of environment, education, and poverty.
          </p>
          <p className="text-gray-700 mb-4 text-base">
            You can also suggest any premium course, software, or notes you need, and we'll list it in the donor portal. If a donor has it, they can provide it to you.
          </p>
          <p className="text-gray-700 mb-4 text-base">
            We have a Talent Hunt Alliance where we identify skilled members and list them in the Startups Portal, giving them more opportunities.
          </p>
        </div>
      </div>

      {/* Why Membership Fees */}
      <div className='flex items-center justify-center'>
      <div className="p-6 bg-white w-full max-w-screen-md rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 flex items-center">
          <FaCoins className="mr-3 text-indigo-600" /> Why Membership Fees?
        </h2>
        <ul className="list-disc space-y-3 text-gray-800 text-base">
          <li className="flex items-center justify-center align-middle">Initially, we provided free membership in exchange for a promise that members would participate in our social events by planting trees, donating old clothes and food, and engaging in social internships.</li>
          <li className="flex items-center justify-center align-middle">We found that 90% of the premium resources were underutilized and social commitments were not fulfilled.</li>
          <li className="flex items-center justify-center align-middle">To ensure active participation, we introduced a refundable membership fee, which is returned after members engage in social activities.</li>
        </ul>
      </div>
      </div>

      <FAQ />
    </>
  );
};

export default Layout;
