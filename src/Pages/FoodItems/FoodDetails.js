import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const foodDetails = useLoaderData()
    const { title, image, rating, details, price } = foodDetails;
    return (
        <div className="grid grid-cols-2 my-20 p-5 border bg-base-100 rounded-md shadow-xl">
    <img className='w-full rounded-md' src={image} alt="Album"/>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p className='font-semibold text-gray-500'>Price: <span className='font-semibold text-orange-400'>{price}</span></p>
                <p className='font-semibold text-gray-500'>Rating:<span className='font-semibold text-orange-400'>{rating}</span></p>
          <div className="card-actions justify-end">
            <Link><button className="btn btn-primary">Bye Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default FoodDetails;