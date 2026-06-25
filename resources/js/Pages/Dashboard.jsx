import React from 'react';
import Navbar from '../components/Navbar';

export default function Dashboard({ totalMembers, upcomingEvents }) {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto p-8">
                <h1 className="text-3xl font-black text-slate-800 mb-6">Club Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl border shadow-sm">
                        <h3 className="text-gray-500 font-bold text-sm uppercase">Total Club Members</h3>
                        <p className="text-4xl font-black text-slate-900 mt-2">{totalMembers}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}