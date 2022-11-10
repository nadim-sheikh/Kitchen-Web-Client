import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleFood = ({ food }) => {
    const { title, image, rating, details, price,_id } = food;
    return (
        <div className="border-2 cursor-pointer p-5 card w-96 bg-base-100 hover:shadow-2xl duration-300 mb-10">
            <figure>

                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className="rounded-md w-full" src={image} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>

            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{details.slice(0, 100) + '....'}</p>
                <p className='font-semibold text-gray-500'>Price: <span className='font-semibold text-orange-400'>{price}</span></p>
                <p className='font-semibold text-gray-500'>Rating:<span className='font-semibold text-orange-400'>{rating}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/food-items/${_id}`}><button className="bg-orange-400 hover:bg-orange-600  duration-300 py-3 px-5 rounded-md font-semibold text-white">Details</button></Link>
                </div>

            </div>
        </div>
    );
};

export default SingleFood;