import React from 'react';

const Blog = () => {
    return (
       <div>
            <h1 className='text-4xl text-center font-extrabold mt-5 text-orange-400'>Blog</h1>
         <div className='md:ml-0 lg:ml-0 ml-20 my-14'>
            <div>
                <h1 className='text-2xl font-semibold'>1. Difference between SQL and NoSQL?</h1>
                <p className='mt-2 text-xl'><span className='font-bold'>Answer:</span> SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                </p>
            </div>
            <div className='md:ml-0 lg:ml-0 ml-20 my-10'>
                <h1 className='text-2xl font-semibold'>2. What is JWT, and how does it work?</h1>
                <p className='mt-2 text-xl'><span className='font-bold'>Answer:</span> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                </p>
            </div>
            <div className='md:ml-0 lg:ml-0 ml-20 my-10'>
                <h1 className='text-2xl font-semibold'>3. What is the difference between javascript and NodeJS?</h1>
                <p className='mt-2 text-xl'><span className='font-bold'>Answer:</span> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                </p>
            </div>
            <div className='md:ml-0 lg:ml-0 ml-20 my-10'>
                <h1 className='text-2xl font-semibold'>4. How does NodeJS handle multiple requests at the same time?</h1>
                <p className='mt-2 text-xl'><span className='font-bold'>Answer:</span> How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>
        </div>
       </div>
    );
};

export default Blog;