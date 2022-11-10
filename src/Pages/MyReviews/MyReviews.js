import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewsTable from './ReviewsTable';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [allReview, setAllReview] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAllReview(data))
    }, [user?.email])


    return (
            <div className='mt-10'>
            <h1 className='text-5xl font-extrabold text-center'>Your Foods Review</h1>
            {
                allReview.map(table => <ReviewsTable key={table._id} table={table} />)}
            </div>

    );
};

export default MyReviews;