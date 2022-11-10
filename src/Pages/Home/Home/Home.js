import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BestFood from '../BestFood';
import FoodItemHome from '../FoodItemHome';
import OurKItchen from '../OurKItchen';

const Home = () => {
     const [foodsItem, setFoodItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/limitFoodItem')
            .then(res => res.json())
            .then(data => setFoodItem(data))
    }, [])

    return (
        <div className='my-20'>
            {/* Banner Start*/}
            <div>
                <img className='rounded-xl m-auto w-full' src="https://i.postimg.cc/BQJ1QvcK/Wow-Kitchen-Banner-02-copy.jpg" alt="" />
            </div>
            {/* Banner End */}
            <div className='my-20'>
            <div className='mb-10'>
            <h1 className='text-4xl text-center font-bold text-orange-400'>Our Food Items</h1>
            </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center'>
                {
                    foodsItem.map(foodItem => <FoodItemHome
                    key={foodItem._id}
                    foodItem={foodItem}
                    />)
                }
                </div>
                <Link to='/food-items' className='text-orange-400 hover:text-orange-600  duration-300 text-center'>See More...</Link>
            </div>
            <div className='my-20'>
                <BestFood/>
            </div>
           <div>
           <h1 className='text-4xl text-center font-bold text-orange-400 mb-5'>Contact US</h1>
            <div className='text-center bg-orange-300 rounded-md py-20'>
                <OurKItchen/>
            </div>
           </div>
        </div>
    );
};

export default Home;