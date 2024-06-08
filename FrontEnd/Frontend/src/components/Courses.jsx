import React from 'react';
import Cards from './Cards';
import list from "../../public/list.json";
import { Link } from 'react-router-dom';

function Courses() {
  return (
    <>
      <div className="w-full h-full max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            Explore the Beautiful <span className="text-pink-500">Odia Literature</span>
          </h1>
        </div>
        <div className='mt-5 items-center justify-center text-center'>
          <p className='text-xl font-medium md:text-xl'>
            "ଉଚ୍ଚ ହେବା ପାଇଁ କର ଯେବେ ଆଶା, ଉଚ୍ଚ କର ଆଗ ନିଜ ମାତୃଭାଷା"
          </p>
          <Link to={'/'}>
            <button className="mt-4 bg-pink-500 text-white px-4 py-3 rounded-md cursor-pointer hover:bg-pink-700">
              Go Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Courses;
