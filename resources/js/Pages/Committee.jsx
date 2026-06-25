import React from 'react';
import Navbar from '../components/Navbar';

export default function Committee({ members }) {
    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <Navbar />
            <div className="max-w-7xl mx-auto p-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-800">Executive Committee</h1>
                    <p className="text-gray-500 mt-2">The driving force behind our professional sports club</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {members.map(member => (
                        <div key={member.id} className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition text-center p-6">
                            <img 
                                src={member.profile_picture ? `/storage/${member.profile_picture}` : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} 
                                alt={member.name} 
                                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-amber-400 mb-4"
                            />
                            <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                            <p className="text-amber-600 font-semibold text-xs uppercase tracking-wider mt-1">{member.committee_role}</p>
                            <div className="mt-4 pt-4 border-t text-left text-xs text-gray-500 space-y-1">
                                <p>📧 {member.email}</p>
                                <p>📞 {member.phone || 'N/A'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}