import React from 'react';
import { Link } from 'react-router-dom';

const BestFood = () => {
    return (
       <div className='grid grid-cols-2 items-center'>
        <div>
            <h4 className='text-xl'>Our Best Food</h4>
            <h1 className='text-5xl font-bold'>Pizza</h1>
            <p className="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Non natus optio soluta cumque incidunt eum ratione <br /> sunt voluptate voluptas facere?</p>
        <Link to='/food-items'><button className="bg-orange-400 hover:bg-orange-600  duration-300 py-3 px-5 rounded-md font-semibold text-white">Details</button></Link>
        </div>
        <div>
            <img className='w-full rounded-md' src="https://i.postimg.cc/ncV8D76t/pizza-2.jpg" alt="" />
        </div>
       </div>
    );
};

export default BestFood;