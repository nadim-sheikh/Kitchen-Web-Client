import React from 'react';

const FoodReview = ({table}) => {

    let reviews;

   


    return (
        <div>
      <div className="card lg:card-side w-[90%] mb-10 bg-base-100 shadow-xl">
        <figure><img className='rounded-md w-96' src={table.foodImage} alt="Album" /></figure>
        <div className="card-body">
          <div className="avatar mb-5">
            <div className="w-24 rounded-full">
              <img src={table.manImage} alt='' />
            </div>
            <h2 className="card-title ml-5">{table.name}</h2>
          </div>

          <h2 className="card-title">{table.food}</h2>
          <p>{table.review}</p>
        </div>
      </div>
    </div>
    );
};

export default FoodReview;