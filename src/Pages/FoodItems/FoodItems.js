import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFood from './SingleFood';

const FoodItems = () => {
    const foods = useLoaderData();
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 my-16'>
            {
             foods.map(food => <SingleFood 
                key={food._id}
                food={food}
             />)   
            }
        </div>
    );
}

export default FoodItems;