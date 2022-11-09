import React from 'react';
const AddFoodItem = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const foodInfo = {
            title: e.target.title.value,
            image: e.target.image.value,
            details: e.target.details.value,
            price: e.target.price.value,
            rating: e.target.rating.value,
        };
        console.log(foodInfo);
        fetch('http://localhost:5000/FoodItem', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(foodInfo)})
            .then(res => res.json())
            .then(data => {
                alert('Added Food Item')
            }).catch(err => console.error(err))
    }
    return (
        <div className='mb-32 mt-20'>
            <div className="card w-96 m-auto bg-base-100 shadow-xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl">Food Title</span>
                        </label>
                        <input type="text" placeholder="Title" name='title' className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl">Food Image</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='image' className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Food Details</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" name='details' placeholder="Details"></textarea>
                        <label className="label">
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name='price' className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name='rating' className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        </label>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add Food</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFoodItem;