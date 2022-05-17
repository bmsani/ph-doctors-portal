import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import cogoToast from 'cogo-toast';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                cogoToast.success('Successful', { position: 'top-right', heading: 'Admin Added' });
            })
    }
    return (

        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>NO</th>
                        <th>email</th>
                        <th>Admin action</th>
                        <th>Remove action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th> {index + 1} </th>
                            <td> {user.email} </td>
                            <td>  {user.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} class="btn btn-xs">make admin</button>}
                            </td>
                            <td> <button class="btn btn-xs">remove user</button>
                            </td>

                        </tr>)
                    }


                </tbody>
            </table>
        </div>

    );
};

export default Users;