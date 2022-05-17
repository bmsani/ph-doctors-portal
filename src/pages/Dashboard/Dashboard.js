import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                    <Outlet></Outlet>
                    

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>Appointments</Link></li>
                        <li><Link to='/dashboard/review'>Review</Link></li>
                        <li><Link to='/dashboard/history'>History</Link></li>
                        <li><Link to='/dashboard/users'>Users</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;