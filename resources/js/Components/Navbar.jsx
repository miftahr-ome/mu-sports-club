import React from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <nav className="bg-slate-900 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-black tracking-wider text-amber-400">⚡ LEOSPORTS</Link>
                <div className="space-x-6 text-sm font-semibold">
                    <Link href="/" className="hover:text-amber-400 transition">Dashboard</Link>
                    <Link href="/committee" className="hover:text-amber-400 transition">Committee</Link>
                    <Link href="/events" className="hover:text-amber-400 transition">Events</Link>
                    <Link href="/register-event" className="bg-amber-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-amber-400 transition">Join Tournament</Link>
                </div>
            </div>
        </nav>
    );
}