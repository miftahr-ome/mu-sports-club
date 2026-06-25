import React from 'react';
import { useForm } from '@inertiajs/react';
import Navbar from '../components/Navbar';

export default function RegisterForm({ events }) {
    // ইনার্শিয়া ফর্ম হ্যান্ডলার ডিফাইন
    const { data, setData, post, processing, errors, reset } = useForm({
        player_name: '',
        email: '',
        phone: '',
        event_name: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // লারাভেল ব্যাকএন্ডের POST রাউটে ডাটা পাঠানো হচ্ছে
        post('/register-event', {
            onSuccess: () => {
                alert('Registration Data Saved to Database Successfully! 🚀');
                reset();
            }
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-lg mx-auto p-8 mt-10 bg-white rounded-2xl shadow-sm border">
                <h2 className="text-2xl font-black text-slate-800 mb-2">Tournament Registration</h2>
                <p className="text-gray-500 text-sm mb-6">Fill up the form to save your spot in the database.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                        <input 
                            type="text" 
                            value={data.player_name} 
                            onChange={e => setData('player_name', e.target.value)} 
                            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-amber-500" 
                            placeholder="John Doe" 
                            required 
                        />
                        {errors.player_name && <p className="text-red-500 text-xs mt-1">{errors.player_name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            value={data.email} 
                            onChange={e => setData('email', e.target.value)} 
                            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-amber-500" 
                            placeholder="doe@example.com" 
                            required 
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                        <input 
                            type="text" 
                            value={data.phone} 
                            onChange={e => setData('phone', e.target.value)} 
                            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-amber-500" 
                            placeholder="017XXXXXXXX" 
                            required 
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Select Event / Tournament</label>
                        <select 
                            value={data.event_name} 
                            onChange={e => setData('event_name', e.target.value)} 
                            className="w-full p-3 border rounded-xl bg-white outline-none focus:ring-2 focus:ring-amber-500" 
                            required
                        >
                            <option value="">-- Choose an Event --</option>
                            {events && events.map((ev, i) => (
                                <option key={i} value={ev.title}>{ev.title}</option>
                            ))}
                        </select>
                        {errors.event_name && <p className="text-red-500 text-xs mt-1">{errors.event_name}</p>}
                    </div>

                    <button 
                        type="submit" 
                        disabled={processing} 
                        className="w-full bg-slate-900 text-white p-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-md"
                    >
                        {processing ? 'Saving to Database...' : 'Submit Registration 🚀'}
                    </button>
                </form>
            </div>
        </div>
    );
}