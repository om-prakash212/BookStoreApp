import React from 'react';

function Cards({ item }) {
  return (
    <div className="p-4">
      <div className="card w-full max-w-xs bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="p-4">
          <img className="w-full h-40 object-cover" src={item.image} alt="Books" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-sm">
            {item.title}
            <div className="badge badge-secondary bg-pink-600 ml-2">NEW</div>
          </h2>
          <p>{item.author}</p>
          <div className="card-actions flex justify-between mt-4">
            <div className="badge badge-outline cursor-pointer px-2 py-2">RS.{item.price}</div>
            <div className="badge badge-outline cursor-pointer px-3 py-2 hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
