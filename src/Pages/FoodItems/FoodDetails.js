import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewsTable from '../MyReviews/ReviewsTable';
import FoodReview from './FoodReview';

const FoodDetails = () => {
  const foodDetails = useLoaderData()
  const { title, image, rating, details, price, _id } = foodDetails;
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const manImage = user?.photoURL;
    const email = user?.email;
    const name = user?.displayName;
    const id = _id;
    const foodName = title;
    const foodImage = image;
    const reviewInfo = {
      foodId: id,
      food: foodName,
      foodImage: foodImage,
      name: name,
      review: e.target.review.value,
      manImage: manImage,
      email: email
    };
    console.log(reviewInfo);
    fetch('https://rifat-kitchen-server.vercel.app/review', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(reviewInfo)
    })
      .then(res => res.json())
      .then(data => {
        alert('Added Food Review')
      }).catch(err => console.error(err))
  }
  const [foodReviews, setReview] = useState([]);

  useEffect(() => {
    fetch('https://rifat-kitchen-server.vercel.app/review')
      .then(res => res.json())
      .then(data => setReview(data))
  }, [])

  const [allReview, setAllReview] = useState([]);
  useEffect(() => {
    fetch(`https://rifat-kitchen-server.vercel.app/review?email=${user.email}`)
      .then(res => res.json())
      .then(data => setAllReview(data))
  }, [user?.email])

  return (
    <div>
      <div className="grid lg:grid-cols-2 my-20 p-5 border bg-base-100 rounded-md shadow-xl">
        <img className='w-full rounded-md' src={image} alt="Album" />
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
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-10 justify-around items-center my-5'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-xl font-semibold mb-2'>Add Your Reviews</h1>
          <textarea className="textarea textarea-warning w-[100%] h-40" name='review' placeholder="Review"></textarea>
          <button className="text-orange-400 bg-white  px-4 py-3 text-xl font-semibold rounded-md">Add Review</button>
        </form>
        <div>
          {
            allReview.map(table => <FoodReview key={table._id} table={table} />)}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;