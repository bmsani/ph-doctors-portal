import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import cogoToast from 'cogo-toast';
import { el } from 'date-fns/locale';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const formattedDate = format(date, "PP")
        console.log(slot);
        const booking = {
            treatmentId: _id,
            treatment:name,
            date: formattedDate,
            slot,
            patient:user.email,
            patientName:user.displayName,
            phone: event.target.phone.value

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success){
                cogoToast.success(`Appoinment is set, ${formattedDate} at ${slot}`, { position: 'top-center', heading: 'Booking Successful' });
            }else{
                cogoToast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`, { position: 'top-center', heading: 'Booking Failed' });
            }
            refetch();
            setTreatment(null)
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-5'>
                        <input type="text" value={format(date || new Date(), 'PP')} placeholder="Type here" className="input input-bordered w-full" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots && slots.map((slot, index) => <option value={slot} key={index}> {slot} </option>)
                            }
                        </select>
                        <input type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full" />
                        <input type="email" disabled value={user.email || ''} className="input input-bordered w-full" />
                        <input type="number" placeholder="Phone Number" name='phone' className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;