import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFood from './SingleFood';

const FoodItems = () => {
    const foods = useLoaderData();
    return (
        <div>
             <h1 className='text-4xl text-center font-extrabold mt-5 text-orange-400'>Our Food Items</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-16'>
            {
             foods.map(food => <SingleFood 
                key={food._id}
                food={food}
             />)   
            }
        </div>
        </div>
    );
}

export default FoodItems;