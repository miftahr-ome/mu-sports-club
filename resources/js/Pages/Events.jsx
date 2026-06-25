import React from 'react';
import Navbar from '../components/Navbar';

export default function Events({ events }) {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-5xl mx-auto p-8">
                <h1 className="text-3xl font-black text-slate-800 mb-6">Upcoming Tournaments & Leagues</h1>
                <div className="space-y-4">
                    {events.map(event => (
                        <div key={event.id} className="bg-white p-6 rounded-xl border shadow-sm flex justify-between items-center">
                            <div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${event.type === 'Indoor' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                    {event.type}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mt-2">{event.title}</h3>
                                <p className="text-gray-500 text-sm mt-1">{event.details}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-slate-700">📅 {event.event_date}</p>
                                <a href="/register-event" className="mt-3 inline-block bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-800">Register Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}