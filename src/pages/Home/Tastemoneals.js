import React from 'react';
import qote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Reviews from './Reviews';

const Tastemoneals = () => {
    const reviews = [
        {
            _id: 1,
            name: 'winson Harry',
            reviews: '',
            img: people1
        },
        {
            _id: 2,
            name: 'winson Harry',
            reviews: '',
            img: people2
        },
        {
            _id: 3,
            name: 'winson Harry',
            reviews: '',
            img: people3
        },
    ]
    return (
        <section className='w-11/12 mx-auto'>
            <div className='flex justify-between mt-24'>
                <div>
                    <h4 className="text-secondary text-xl mb-2">Testimonial</h4>
                    <h4 className="text-accent text-4xl">What Our Patients Says</h4>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={qote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
                {
                    reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                }
            </div>
        </section>
            );
};

export default Tastemoneals;