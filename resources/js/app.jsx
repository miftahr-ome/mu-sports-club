// import './bootstrap';
// import '../css/app.css';

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { createRoot } from 'react-dom/client';

// const ADMIN_PASSWORD = 'musc2026admin';

// function useCountUp(target, duration = 2000, start = false) {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         if (!start) return;
//         let startTime = null;
//         const step = (timestamp) => {
//             if (!startTime) startTime = timestamp;
//             const progress = Math.min((timestamp - startTime) / duration, 1);
//             const eased = 1 - Math.pow(1 - progress, 3);
//             setCount(Math.floor(eased * target));
//             if (progress < 1) requestAnimationFrame(step);
//         };
//         requestAnimationFrame(step);
//     }, [target, duration, start]);
//     return count;
// }

// function useInView(threshold = 0.2) {
//     const ref = useRef(null);
//     const [inView, setInView] = useState(false);
//     useEffect(() => {
//         const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
//         if (ref.current) obs.observe(ref.current);
//         return () => obs.disconnect();
//     }, [threshold]);
//     return [ref, inView];
// }

// function StatCard({ count, suffix = '', label, icon, dark, delay = 0, trigger }) {
//     const num = useCountUp(count, 2000, trigger);
//     return (
//         <div className={`stat-card p-6 rounded-2xl border text-center shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-lg`}
//             style={{ animationDelay: `${delay}ms`, '--card-bg': dark ? '#0f172a' : '#fff' }}>
//             <span className="text-2xl block mb-1">{icon}</span>
//             <span className={`text-3xl md:text-4xl font-black block stat-number ${dark ? 'text-amber-400' : 'text-blue-900'}`}>
//                 {num}{suffix}
//             </span>
//             <span className={`text-[10px] font-black uppercase tracking-wider block mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</span>
//         </div>
//     );
// }

// function Toast({ message, type, onClose }) {
//     useEffect(() => { const t = setTimeout(onClose, 3500); return () => clearTimeout(t); }, [onClose]);
//     return (
//         <div className={`fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-sm font-bold transition-all animate-slide-up
//             ${type === 'success' ? 'bg-emerald-500 text-white' : type === 'error' ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}>
//             <span>{type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
//             <span>{message}</span>
//             <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100 font-black">×</button>
//         </div>
//     );
// }

// const testimonials = [
//     { name: "SH AH AN", dept: "CSE 61, MU", text: "MU Sports Club transformed my university experience. The tournaments are world-class and the executive team is incredibly professional.", avatar: "SH" },
//     { name: "AVIZITH", dept: "CSE 61, MU", text: "The energy during INTRA-FUTSAL was absolutely electric!", avatar: "AV" },
//     { name: "MANNA", dept: "CSE 62, MU", text: "The indoor games season is brilliantly organized. Carrom and Chess tournaments with proper brackets and scheduling — loved every moment.", avatar: "MN" },
//     { name: "SALEH", dept: "English, MU", text: "From futsal to cricket, every event is managed with so much passion and dedication. Proud to be part of this family.", avatar: "SL" },
// ];

// function TestimonialCarousel({ dark }) {
//     const [active, setActive] = useState(0);
//     useEffect(() => {
//         const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4000);
//         return () => clearInterval(t);
//     }, []);
//     const t = testimonials[active];
//     return (
//         <div className={`rounded-3xl border p-8 md:p-12 relative overflow-hidden transition-all duration-500 ${dark ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-br from-blue-950 to-indigo-950'}`}>
//             <div className="absolute top-0 left-0 w-48 h-48 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
//             <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
//             <div className="text-amber-400 text-5xl font-black mb-4 leading-none">"</div>
//             <p className="text-white text-base md:text-lg leading-relaxed font-medium max-w-2xl mb-8 relative z-10">{t.text}</p>
//             <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-slate-950 text-sm shadow-lg">{t.avatar}</div>
//                 <div>
//                     <p className="text-white font-black text-sm">{t.name}</p>
//                     <p className="text-blue-300 text-xs font-medium">{t.dept}</p>
//                 </div>
//             </div>
//             <div className="flex gap-2 mt-6">
//                 {testimonials.map((_, i) => (
//                     <button key={i} onClick={() => setActive(i)}
//                         className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-amber-400' : 'w-3 bg-white/20 hover:bg-white/40'}`} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// const sportsCategories = [
//     { icon: "⚽", name: "Football", desc: "Inter-university 9-a-side leagues and futsal tournaments", tag: "League M · Futsal" },
//     { icon: "🏏", name: "Cricket", desc: "Grand cricket tournaments under international standard rules", tag: "UPL · MPL-15" },
//     { icon: "♟️ 🎯", name: "Chess,Carrom...", desc: "Strategic mind games targeting MUSC member brackets", tag: "Indoor Season" },
//     { icon: "🏸", name: "Badminton", desc: "Fast-paced court action in seasonal knockout cups", tag: "Coming Soon" },
//     { icon: "🎮", name: "Esports", desc: "Level up the arena with next-generation Esports battles, where strategy, reflex, and digital dominance create tomorrow's champions.⚡", tag: "Coming Soon" },
//     { icon: "🏋️", name: "Athletics", desc: "Track, field and endurance events for campus athletes", tag: "Coming Soon" },
// ];

// const EMPTY_MEMBER = { name: '', email: '', phone: '', committee_role: '', system_role: 'member', profile_picture: '' };

// function AdminPanel({ onLogout, dark }) {
//     const [adminTab, setAdminTab] = useState('registrations');
//     const [registrations, setRegistrations] = useState([]);
//     const [members, setMembers] = useState([]);
//     const [events, setEvents] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [eventForm, setEventForm] = useState({ title: '', type: 'Tournament', date: '', details: '' });
//     const [editingEvent, setEditingEvent] = useState(null);
//     const [memberForm, setMemberForm] = useState(EMPTY_MEMBER);
//     const [editingMember, setEditingMember] = useState(null);
//     const [toast, setToast] = useState(null);

//     const showToast = (msg, type = 'success') => setToast({ message: msg, type });

//     const csrfToken = () => document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';

//     const fetchRegistrations = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch('/admin/registrations', {
//                 headers: { 'X-Admin-Key': ADMIN_PASSWORD }
//             });
//             const data = await res.json();
//             if (data.success) setRegistrations(data.data);
//         } catch { showToast('Failed to load registrations', 'error'); }
//         setLoading(false);
//     };

//     const fetchMembers = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch('/admin/members', {
//                 headers: { 'X-Admin-Key': ADMIN_PASSWORD }
//             });
//             const data = await res.json();
//             if (data.success) setMembers(data.data);
//         } catch { showToast('Failed to load members', 'error'); }
//         setLoading(false);
//     };

//     const fetchEvents = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch('/admin/events', {
//                 headers: { 'X-Admin-Key': ADMIN_PASSWORD }
//             });
//             const data = await res.json();
//             if (data.success) setEvents(data.data);
//         } catch { showToast('Failed to load events', 'error'); }
//         setLoading(false);
//     };

//     const deleteRegistration = async (id) => {
//         if (!confirm('Delete this registration?')) return;
//         try {
//             const res = await fetch(`/admin/registrations/${id}`, {
//                 method: 'DELETE',
//                 headers: { 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() }
//             });
//             const data = await res.json();
//             if (data.success) { showToast('Deleted!'); fetchRegistrations(); }
//         } catch { showToast('Delete failed', 'error'); }
//     };

//     const saveEvent = async () => {
//         if (!eventForm.title || !eventForm.date) { showToast('Title and date are required', 'error'); return; }
//         const url = editingEvent ? `/admin/events/${editingEvent.id}` : '/admin/events';
//         const method = editingEvent ? 'PUT' : 'POST';
//         try {
//             const res = await fetch(url, {
//                 method,
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-Admin-Key': ADMIN_PASSWORD,
//                     'X-CSRF-TOKEN': csrfToken()
//                 },
//                 body: JSON.stringify(eventForm)
//             });
//             const data = await res.json();
//             if (data.success) {
//                 showToast(editingEvent ? 'Event updated!' : 'Event added!');
//                 setEventForm({ title: '', type: 'Tournament', date: '', details: '' });
//                 setEditingEvent(null);
//                 fetchEvents();
//             } else {
//                 showToast('Save failed', 'error');
//             }
//         } catch { showToast('Save failed', 'error'); }
//     };

//     const deleteEvent = async (id) => {
//         if (!confirm('Delete this event?')) return;
//         try {
//             const res = await fetch(`/admin/events/${id}`, {
//                 method: 'DELETE',
//                 headers: { 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() }
//             });
//             const data = await res.json();
//             if (data.success) { showToast('Event deleted!'); fetchEvents(); }
//         } catch { showToast('Delete failed', 'error'); }
//     };

//     const startEdit = (ev) => {
//         setEditingEvent(ev);
//         setEventForm({ title: ev.title, type: ev.type || 'Tournament', date: ev.event_date || ev.date || '', details: ev.details || '' });
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const saveMember = async () => {
//         if (!memberForm.name || !memberForm.email) { showToast('Name and email are required', 'error'); return; }
//         const url = editingMember ? `/admin/members/${editingMember.id}` : '/admin/members';
//         const method = editingMember ? 'PUT' : 'POST';
//         try {
//             const res = await fetch(url, {
//                 method,
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-Admin-Key': ADMIN_PASSWORD,
//                     'X-CSRF-TOKEN': csrfToken()
//                 },
//                 body: JSON.stringify(memberForm)
//             });
//             const data = await res.json();
//             if (data.success) {
//                 showToast(editingMember ? 'Member updated!' : 'Member added!');
//                 setMemberForm(EMPTY_MEMBER);
//                 setEditingMember(null);
//                 fetchMembers();
//             } else {
//                 showToast('Save failed', 'error');
//             }
//         } catch { showToast('Save failed', 'error'); }
//     };

//     const deleteMember = async (id) => {
//         if (!confirm('Remove this member?')) return;
//         try {
//             const res = await fetch(`/admin/members/${id}`, {
//                 method: 'DELETE',
//                 headers: { 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() }
//             });
//             const data = await res.json();
//             if (data.success) { showToast('Member removed!'); fetchMembers(); }
//         } catch { showToast('Delete failed', 'error'); }
//     };

//     const startEditMember = (m) => {
//         setEditingMember(m);
//         setMemberForm({
//             name: m.name || '',
//             email: m.email || '',
//             phone: m.phone || '',
//             committee_role: m.committee_role || '',
//             system_role: m.system_role || 'member',
//             profile_picture: m.profile_picture || '',
//         });
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const cancelMemberEdit = () => { setEditingMember(null); setMemberForm(EMPTY_MEMBER); };

//     useEffect(() => {
//         if (adminTab === 'registrations') fetchRegistrations();
//         else if (adminTab === 'members') fetchMembers();
//         else if (adminTab === 'events') fetchEvents();
//     }, [adminTab]);

//     const d = dark;

//     return (
//         <div className={`min-h-screen ${d ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
//             <nav className="bg-slate-900 border-b border-amber-500/20 sticky top-0 z-50">
//                 <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//                     <div className="flex items-center gap-3">
//                         <span className="text-2xl">🛡️</span>
//                         <div>
//                             <p className="text-white font-black text-sm tracking-wider">MUSC ADMIN PANEL</p>
//                             <p className="text-amber-400 text-[9px] font-bold uppercase tracking-widest">Management Dashboard</p>
//                         </div>
//                     </div>
//                     <button onClick={onLogout}
//                         className="text-xs font-black bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-xl transition-colors">
//                         🚪 Logout
//                     </button>
//                 </div>
//             </nav>

//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 <div className="flex gap-3 mb-8 flex-wrap">
//                     {[
//                         { key: 'registrations', label: '📋 Registrations' },
//                         { key: 'members', label: '👥 Members' },
//                         { key: 'events', label: '🏆 Events' },
//                     ].map(tab => (
//                         <button key={tab.key} onClick={() => setAdminTab(tab.key)}
//                             className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${adminTab === tab.key
//                                 ? 'bg-amber-500 text-slate-950'
//                                 : (d ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200')}`}>
//                             {tab.label}
//                         </button>
//                     ))}
//                 </div>

//                 {adminTab === 'registrations' && (
//                     <div>
//                         <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
//                             <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-blue-950'}`}>
//                                 All Registrations <span className="text-amber-500">({registrations.length})</span>
//                             </h2>
//                             <button onClick={fetchRegistrations} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl">
//                                 🔄 Refresh
//                             </button>
//                         </div>

//                         {loading ? (
//                             <div className="text-center py-20 text-slate-400 font-black">Loading...</div>
//                         ) : registrations.length === 0 ? (
//                             <div className={`text-center py-20 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
//                                 <p className="text-4xl mb-3">📭</p>
//                                 <p className={`font-black ${d ? 'text-slate-400' : 'text-slate-500'}`}>No registrations yet</p>
//                             </div>
//                         ) : (
//                             <div className="overflow-x-auto rounded-2xl border shadow-sm -mx-4 px-4 sm:mx-0 sm:px-0">
//                                 <table className={`w-full text-sm ${d ? 'bg-slate-900 border-slate-800' : 'bg-white'}`}>
//                                     <thead>
//                                         <tr className={`text-[10px] font-black uppercase tracking-wider ${d ? 'bg-slate-800 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
//                                             <th className="px-4 py-3 text-left">#</th>
//                                             <th className="px-4 py-3 text-left">Name</th>
//                                             <th className="px-4 py-3 text-left">Email</th>
//                                             <th className="px-4 py-3 text-left">Phone</th>
//                                             <th className="px-4 py-3 text-left">Event</th>
//                                             <th className="px-4 py-3 text-left">Dept</th>
//                                             <th className="px-4 py-3 text-left">Date</th>
//                                             <th className="px-4 py-3 text-left">Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {registrations.map((r, i) => (
//                                             <tr key={r.id} className={`border-t ${d ? 'border-slate-800 hover:bg-slate-800/50' : 'border-slate-100 hover:bg-slate-50'}`}>
//                                                 <td className={`px-4 py-3 font-black text-xs ${d ? 'text-slate-500' : 'text-slate-400'}`}>{i + 1}</td>
//                                                 <td className={`px-4 py-3 font-bold whitespace-nowrap ${d ? 'text-white' : 'text-slate-800'}`}>{r.player_name}</td>
//                                                 <td className={`px-4 py-3 whitespace-nowrap ${d ? 'text-slate-300' : 'text-slate-600'}`}>{r.email}</td>
//                                                 <td className={`px-4 py-3 whitespace-nowrap ${d ? 'text-slate-300' : 'text-slate-600'}`}>{r.phone}</td>
//                                                 <td className="px-4 py-3">
//                                                     <span className="bg-amber-100 text-amber-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg whitespace-nowrap">{r.event_name}</span>
//                                                 </td>
//                                                 <td className={`px-4 py-3 whitespace-nowrap ${d ? 'text-slate-300' : 'text-slate-600'}`}>{r.department || '—'}</td>
//                                                 <td className={`px-4 py-3 text-xs whitespace-nowrap ${d ? 'text-slate-400' : 'text-slate-500'}`}>
//                                                     {r.created_at ? new Date(r.created_at).toLocaleDateString() : '—'}
//                                                 </td>
//                                                 <td className="px-4 py-3">
//                                                     <button onClick={() => deleteRegistration(r.id)}
//                                                         className="text-[10px] font-black bg-red-100 hover:bg-red-200 text-red-700 px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap">
//                                                         🗑 Delete
//                                                     </button>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         )}
//                     </div>
//                 )}

//                 {adminTab === 'members' && (
//                     <div className="space-y-8">
//                         <div className={`p-6 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
//                             <h3 className={`font-black text-base mb-5 ${d ? 'text-white' : 'text-blue-950'}`}>
//                                 {editingMember ? '✏️ Edit Member' : '➕ Add New Member'}
//                             </h3>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                                 <input type="text" placeholder="Full Name *" value={memberForm.name}
//                                     onChange={e => setMemberForm({ ...memberForm, name: e.target.value })}
//                                     className={`p-3 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`} />
//                                 <input type="email" placeholder="Email *" value={memberForm.email}
//                                     onChange={e => setMemberForm({ ...memberForm, email: e.target.value })}
//                                     className={`p-3 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`} />
//                                 <input type="text" placeholder="Phone" value={memberForm.phone}
//                                     onChange={e => setMemberForm({ ...memberForm, phone: e.target.value })}
//                                     className={`p-3 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`} />
//                                 <input type="text" placeholder="Committee Role (e.g. PRESIDENT)" value={memberForm.committee_role}
//                                     onChange={e => setMemberForm({ ...memberForm, committee_role: e.target.value })}
//                                     className={`p-3 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`} />
//                                 <select value={memberForm.system_role} onChange={e => setMemberForm({ ...memberForm, system_role: e.target.value })}
//                                     className={`p-3 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`}>
//                                     <option value="member">Member</option>
//                                     <option value="admin">Admin</option>
//                                 </select>
//                                 <input type="text" placeholder="Profile Picture URL" value={memberForm.profile_picture}
//                                     onChange={e => setMemberForm({ ...memberForm, profile_picture: e.target.value })}
//                                     className={`p-3 border rounded-xl text-sm outline-none sm:col-span-2 ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`} />
//                             </div>
//                             <div className="flex gap-3">
//                                 <button onClick={saveMember}
//                                     className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition-colors">
//                                     {editingMember ? '💾 Update Member' : '➕ Add Member'}
//                                 </button>
//                                 {editingMember && (
//                                     <button onClick={cancelMemberEdit}
//                                         className={`px-6 py-2.5 font-black text-xs rounded-xl transition-colors ${d ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-700'}`}>
//                                         Cancel
//                                     </button>
//                                 )}
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
//                                 <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-blue-950'}`}>
//                                     All Members <span className="text-amber-500">({members.length})</span>
//                                 </h2>
//                                 <button onClick={fetchMembers} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl">
//                                     🔄 Refresh
//                                 </button>
//                             </div>

//                             {loading ? (
//                                 <div className="text-center py-20 text-slate-400 font-black">Loading...</div>
//                             ) : members.length === 0 ? (
//                                 <div className={`text-center py-20 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
//                                     <p className="text-4xl mb-3">👥</p>
//                                     <p className={`font-black ${d ? 'text-slate-400' : 'text-slate-500'}`}>No members found</p>
//                                 </div>
//                             ) : (
//                                 <div className="overflow-x-auto rounded-2xl border shadow-sm -mx-4 px-4 sm:mx-0 sm:px-0">
//                                     <table className={`w-full text-sm ${d ? 'bg-slate-900 border-slate-800' : 'bg-white'}`}>
//                                         <thead>
//                                             <tr className={`text-[10px] font-black uppercase tracking-wider ${d ? 'bg-slate-800 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
//                                                 <th className="px-4 py-3 text-left">#</th>
//                                                 <th className="px-4 py-3 text-left">Name</th>
//                                                 <th className="px-4 py-3 text-left">Email</th>
//                                                 <th className="px-4 py-3 text-left">Role</th>
//                                                 <th className="px-4 py-3 text-left">Phone</th>
//                                                 <th className="px-4 py-3 text-left">Actions</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {members.map((m, i) => (
//                                                 <tr key={m.id} className={`border-t ${d ? 'border-slate-800 hover:bg-slate-800/50' : 'border-slate-100 hover:bg-slate-50'}`}>
//                                                     <td className={`px-4 py-3 font-black text-xs ${d ? 'text-slate-500' : 'text-slate-400'}`}>{i + 1}</td>
//                                                     <td className={`px-4 py-3 font-bold whitespace-nowrap ${d ? 'text-white' : 'text-slate-800'}`}>{m.name}</td>
//                                                     <td className={`px-4 py-3 whitespace-nowrap ${d ? 'text-slate-300' : 'text-slate-600'}`}>{m.email}</td>
//                                                     <td className="px-4 py-3">
//                                                         <span className="bg-blue-100 text-blue-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg whitespace-nowrap">
//                                                             {m.committee_role || m.system_role || 'Member'}
//                                                         </span>
//                                                     </td>
//                                                     <td className={`px-4 py-3 whitespace-nowrap ${d ? 'text-slate-300' : 'text-slate-600'}`}>{m.phone || '—'}</td>
//                                                     <td className="px-4 py-3 flex gap-2">
//                                                         <button onClick={() => startEditMember(m)}
//                                                             className="text-[10px] font-black bg-blue-100 hover:bg-blue-200 text-blue-700 px-2.5 py-1 rounded-lg whitespace-nowrap">
//                                                             ✏️ Edit
//                                                         </button>
//                                                         <button onClick={() => deleteMember(m.id)}
//                                                             className="text-[10px] font-black bg-red-100 hover:bg-red-200 text-red-700 px-2.5 py-1 rounded-lg whitespace-nowrap">
//                                                             🗑 Remove
//                                                         </button>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}

//                 {adminTab === 'events' && (
//                     <div className="space-y-8">
//                         <div className={`p-6 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
//                             <h3 className={`font-black text-base mb-5 ${d ? 'text-white' : 'text-blue-950'}`}>
//                                 {editingEvent ? '✏️ Edit Event' : '➕ Add New Event'}
//                             </h3>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                                 <input type="text" placeholder="Event Title *" value={eventForm.title}
//                                     onChange={e => setEventForm({ ...eventForm, title: e.target.value })}
//                                     className={`p-3 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`} />
//                                 <select value={eventForm.type} onChange={e => setEventForm({ ...eventForm, type: e.target.value })}
//                                     className={`p-3 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`}>
//                                     <option>Tournament</option>
//                                     <option>Indoor Tournament</option>
//                                     <option>League Match</option>
//                                     <option>Domestic Tournament</option>
//                                 </select>
//                                 <input type="date" value={eventForm.date}
//                                     onChange={e => setEventForm({ ...eventForm, date: e.target.value })}
//                                     className={`p-3 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`} />
//                                 <input type="text" placeholder="Details" value={eventForm.details}
//                                     onChange={e => setEventForm({ ...eventForm, details: e.target.value })}
//                                     className={`p-3 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`} />
//                             </div>
//                             <div className="flex gap-3">
//                                 <button onClick={saveEvent}
//                                     className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition-colors">
//                                     {editingEvent ? '💾 Update Event' : '➕ Add Event'}
//                                 </button>
//                                 {editingEvent && (
//                                     <button onClick={() => { setEditingEvent(null); setEventForm({ title: '', type: 'Tournament', date: '', details: '' }); }}
//                                         className={`px-6 py-2.5 font-black text-xs rounded-xl transition-colors ${d ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-700'}`}>
//                                         Cancel
//                                     </button>
//                                 )}
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
//                                 <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-blue-950'}`}>
//                                     All Events <span className="text-amber-500">({events.length})</span>
//                                 </h2>
//                                 <button onClick={fetchEvents} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl">
//                                     🔄 Refresh
//                                 </button>
//                             </div>

//                             {loading ? (
//                                 <div className="text-center py-20 text-slate-400 font-black">Loading...</div>
//                             ) : events.length === 0 ? (
//                                 <div className={`text-center py-20 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
//                                     <p className="text-4xl mb-3">🏆</p>
//                                     <p className={`font-black ${d ? 'text-slate-400' : 'text-slate-500'}`}>No events yet — add one above!</p>
//                                 </div>
//                             ) : (
//                                 <div className="overflow-x-auto rounded-2xl border shadow-sm -mx-4 px-4 sm:mx-0 sm:px-0">
//                                     <table className={`w-full text-sm ${d ? 'bg-slate-900' : 'bg-white'}`}>
//                                         <thead>
//                                             <tr className={`text-[10px] font-black uppercase tracking-wider ${d ? 'bg-slate-800 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
//                                                 <th className="px-4 py-3 text-left">#</th>
//                                                 <th className="px-4 py-3 text-left">Title</th>
//                                                 <th className="px-4 py-3 text-left">Type</th>
//                                                 <th className="px-4 py-3 text-left">Date</th>
//                                                 <th className="px-4 py-3 text-left">Details</th>
//                                                 <th className="px-4 py-3 text-left">Actions</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {events.map((ev, i) => (
//                                                 <tr key={ev.id} className={`border-t ${d ? 'border-slate-800 hover:bg-slate-800/50' : 'border-slate-100 hover:bg-slate-50'}`}>
//                                                     <td className={`px-4 py-3 font-black text-xs ${d ? 'text-slate-500' : 'text-slate-400'}`}>{i + 1}</td>
//                                                     <td className={`px-4 py-3 font-bold whitespace-nowrap ${d ? 'text-white' : 'text-slate-800'}`}>{ev.title}</td>
//                                                     <td className="px-4 py-3">
//                                                         <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg whitespace-nowrap">{ev.type}</span>
//                                                     </td>
//                                                     <td className={`px-4 py-3 text-xs whitespace-nowrap ${d ? 'text-slate-300' : 'text-slate-600'}`}>{ev.event_date || ev.date || '—'}</td>
//                                                     <td className={`px-4 py-3 text-xs max-w-xs truncate ${d ? 'text-slate-400' : 'text-slate-500'}`}>{ev.details || '—'}</td>
//                                                     <td className="px-4 py-3 flex gap-2">
//                                                         <button onClick={() => startEdit(ev)}
//                                                             className="text-[10px] font-black bg-blue-100 hover:bg-blue-200 text-blue-700 px-2.5 py-1 rounded-lg whitespace-nowrap">
//                                                             ✏️ Edit
//                                                         </button>
//                                                         <button onClick={() => deleteEvent(ev.id)}
//                                                             className="text-[10px] font-black bg-red-100 hover:bg-red-200 text-red-700 px-2.5 py-1 rounded-lg whitespace-nowrap">
//                                                             🗑 Delete
//                                                         </button>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
//         </div>
//     );
// }

// function AdminLogin({ onLogin, dark }) {
//     const [pw, setPw] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = () => {
//         if (pw === ADMIN_PASSWORD) {
//             onLogin();
//         } else {
//             setError('Wrong password. Try again.');
//             setPw('');
//         }
//     };

//     const d = dark;
//     return (
//         <div className={`min-h-screen flex items-center justify-center px-4 ${d ? 'bg-slate-950' : 'bg-slate-100'}`}>
//             <div className={`w-full max-w-sm p-8 rounded-3xl border shadow-xl ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
//                 <div className="text-center mb-8">
//                     <span className="text-5xl block mb-3">🛡️</span>
//                     <h2 className={`text-2xl font-black ${d ? 'text-white' : 'text-blue-950'}`}>Admin Access</h2>
//                     <p className={`text-xs mt-1 ${d ? 'text-slate-400' : 'text-slate-500'}`}>MU Sports Club Dashboard</p>
//                 </div>
//                 <div className="space-y-4">
//                     <input
//                         type="password"
//                         placeholder="Enter admin password"
//                         value={pw}
//                         onChange={e => { setPw(e.target.value); setError(''); }}
//                         onKeyDown={e => e.key === 'Enter' && handleLogin()}
//                         className={`w-full p-3.5 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500'}`}
//                     />
//                     {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
//                     <button onClick={handleLogin}
//                         className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl transition-all">
//                         Login →
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function MUSportsClubApp() {
//     const dbEvents = window.backendEvents || [];
//     const dbUsers = window.backendUsers || [];

//     const [currentTab, setCurrentTab] = useState('home');
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);
//     const [toast, setToast] = useState(null);
//     const [lightboxImg, setLightboxImg] = useState(null);
//     const [collabForm, setCollabForm] = useState({ name: '', org: '', note: '' });
//     const [attachedFile, setAttachedFile] = useState(null);
//     const [formData, setFormData] = useState({ player_name: '', email: '', phone: '', event_name: '', department: '' });
//     const [isSaving, setIsSaving] = useState(false);
//     const [statsRef, statsInView] = useInView(0.3);
//     const [activeFilter, setActiveFilter] = useState('All');
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [showAdminLogin, setShowAdminLogin] = useState(false);

//     const showToast = useCallback((message, type = 'success') => setToast({ message, type }), []);

//     useEffect(() => {
//         document.documentElement.classList.toggle('dark', darkMode);
//     }, [darkMode]);

//     useEffect(() => {
//         if (window.location.hash === '#admin') {
//             setShowAdminLogin(true);
//         }
//     }, []);

//     const goTo = (tab) => { setCurrentTab(tab); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };

//     const handleFileChange = (e) => {
//         const f = e.target.files?.[0];
//         if (f) { setAttachedFile(f); showToast(`"${f.name}" attached!`, 'success'); }
//     };

//     const handleSayHello = (e) => {
//         e.preventDefault();
//         const sub = encodeURIComponent(`MU Sports Club Collaboration - ${collabForm.org || 'Proposal'}`);
//         const body = encodeURIComponent(`Hi MU Sports Club,\n\nI am ${collabForm.name} from ${collabForm.org || 'N/A'}.\n\nMessage:\n${collabForm.note}`);
//         window.location.href = `mailto:sports.club@mu.edu?subject=${sub}&body=${body}`;
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         setIsSaving(true);
//         try {
//             const res = await fetch('/register-event', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json',
//                     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
//                 },
//                 body: JSON.stringify(formData)
//             });
//             const result = await res.json();
//             if (res.ok && result.success) {
//                 showToast('Registration successful! 🎯', 'success');
//                 setFormData({ player_name: '', email: '', phone: '', event_name: '', department: '' });
//                 goTo('events');
//             } else {
//                 showToast(result.message || 'Registration failed.', 'error');
//             }
//         } catch {
//             showToast('Database connection failed!', 'error');
//         } finally {
//             setIsSaving(false);
//         }
//     };

//     const defaultCommittee = [
//         { id: 'c1', name: "Abu Sufian", committee_role: "PRESIDENT", email: "president@mu.edu", phone: "01741197388", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/503150460_4049824781929787_6892879632643073192_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH5hS8SG9Yr-FII0z2MH_4ERRp_ONRoSPtFGn841GhI-zn2LsgQpII3Kz64QQHN7xEr671NYzKDtKqOBg-F2hf_&_nc_ohc=x3m7tI3hzdUQ7kNvwGmUsZX&_nc_oc=AdpQBJRVYs93INxRt8nwFbWcTvuaDwnP2yhjafpgk_A8dgp7Nbj9yHW_6t9Q9NkzHK8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=DonhVO38m-hAEJPr7Wq3Ww&_nc_ss=7b2a8&oh=00_Af-QP3-ysWTPC6obmvGqC_MOis-L-hxtDXNG77sOqmWHSQ&oe=6A40A402" },
//         { id: 'c2', name: "Shahriyar Rifat", committee_role: "GENERAL SECRETARY", email: "gs.sports@mu.edu", phone: "01308893939", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/655709272_2092664634800547_1015161797952192305_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGPv1QV0UOJ60bvffq7wLaal7QxW74pvqiXtDFbvim-qGfY5HNTcLLO6PM-1xiDOpoap-bupfwC5iPjyRWC5ZO2&_nc_ohc=NBTrF1_-3OYQ7kNvwFnIxHj&_nc_oc=AdoLn4s0oQLPJD3mo3pzw_LNb-IhLtvX2ZGQHs_eJDqIrzw5IRV0_SooivijtwK0hWo&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=M3877ep7paQA7E7p6ecScg&_nc_ss=7b2a8&oh=00_Af9R-shvdCoh0QB6B6fAJ_t4Z3cqnC8qp-T6mGSHTBAyEg&oe=6A40D138" },
//         { id: 'c3', name: "Abdullah Jabid", committee_role: "ORGANISING SECRETARY", email: "organizer@mu.edu", phone: "01317242586", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/636944439_2514557168941395_109792837164866248_n.jpg?stp=dst-jpg_tt6&cstp=mx2040x2048&ctp=s2040x2048&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEto4w9UPiQjaXrFn8JZhGD5fQB77QGrRnl9AHvtAatGXDPgJeAqjXU-psHiUozBeiRx7QYWZyXVqpFFvoUcGz4&_nc_ohc=8WSXHtYupkUQ7kNvwFst4E4&_nc_oc=Adqs-grXxU9i-emXJPn3e7idp2b_pXiSyYSE61e-bs3T6Eysaq6ReWAYd7RzhpB_nFQ&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=Rfgiz-NP6zH1rxpiBdZJ_g&_nc_ss=7b2a8&oh=00_Af_mkc6hyCAworaGcHmXHc1bTyXB_0tU_21KiVwYl_zkbQ&oe=6A40D2C8" },
//         { id: 'c4', name: "MD.Saiful Islam", committee_role: "ORGANISING SECRETARY", email: "oyon@mu.edu", phone: "01607896330", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t51.82787-15/615276663_18092496719489692_6663784768538851935_n.webp?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGhh11_rd7HabzYw7OUwrPlm3agS9XHs_ubdqBL1cez-y-11QkMwyWTcmSOOFxI5EL305EClZVw4wwIxfExKH0a&_nc_ohc=Nndgs9IrfH8Q7kNvwFNH4JG&_nc_oc=Adr_83iA73aYZXVzOOXp2SEaFL8tM5DWRBnwEkW87LbSJc38YC03iQnkq2hnVzFCztQ&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=C8JtvTyZ9jYNp6ftBKzluw&_nc_ss=7b2a8&oh=00_Af9WIXZPc5COM0NGgkX_Ote-SJMZL1XKtbZeqasG4nsIUA&oe=6A40CD00" },
//         { id: 'c5', name: "MD.Salman", committee_role: "ORGANISING SECRETARY", email: "salman@mu.edu", phone: "01737599603", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/514280458_1735593600661307_8270103835630323832_n.jpg?stp=dst-jpg_tt6&cstp=mx1242x1452&ctp=s1242x1452&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE52RS9VzgA-ziRBDIi0oFDFMFd_jJCIZ8UwV3-MkIhn2zt5G-uVUBSFJItd1O4xdUDBfT6ds67azbxq0pW8CKE&_nc_ohc=Xer3V1aDOzcQ7kNvwFArjN6&_nc_oc=AdqaiK_LE6SsxydbJYZSYD721xJ1EWFYowIVIB3i2D8IHfXCx3LUqTe7syB7iw106j8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=p8YXeoFCV8jA2XZnR7qOrA&_nc_ss=7b2a8&oh=00_Af8rliIWZdU4KugEqvsqEJ_Ft6bg62Foi45b_Ceq9U-Y3A&oe=6A40ABAE" },
//         { id: 'c6', name: "Adnan Wahdi", committee_role: "THE GREAT TREASURER", email: "treasurer@mu.edu", phone: "01724926802", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t51.75761-15/487452849_18343963657156059_8013629657132169764_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEJjhGoo0xdXmTCfdHMXnpsspOp419H8Qiyk6njX0fxCEDmtu3Sz4avxlp417W44ucI6-n5q8YxDuvBSUYQ05D5&_nc_ohc=ckgjnWiUQ_4Q7kNvwGiLF_Q&_nc_oc=Adp5wEKK86EHmZlgV5goe11t77GZajOLsEOR6CshzSpOyJl6okKzCS54q85soeksJU8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=NNweY7Vs8JLaUGbEZ6HPZA&_nc_ss=7b2a8&oh=00_Af9BTfe92R9rkeKwY0jTmMJRsFZCXb0YsUOCPit6CQFShg&oe=6A40B335" },
//         { id: 'c7', name: "Syed Hassan", committee_role: "EVENT COORDINATOR", email: "hassan@mu.edu", phone: "01957636327", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/615086623_2337705286674902_2308975441158817751_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1535&ctp=s2048x1535&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH8rP1x0yuzGrd4-avR8G55QkbZH2caYg5CRtkfZxpiDkK8bz46hpsCt88lqDWes1c_YN3SCs1DgEFKzUgfxJ7H&_nc_ohc=ZJh55WfFRuUQ7kNvwGpMTny&_nc_oc=Ado2-imNLVuRhRixjBh1mkIsblLdwncgrrekSWUyUP0CoEuwuucx8wlkzdz_sj4iXNc&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=CYl3C_1frO2j-2LYyMyUvA&_nc_ss=7b2a8&oh=00_Af-_ce_XutoOpR5AYEaNGCNCOpm4Q7b-jb1Ag1HGT5fpcg&oe=6A40C07A" },
//         { id: 'c8', name: "MD.Sodrul Hasan Sohi", committee_role: "OFFICE SECRETARY", email: "sohi@mu.edu", phone: "01316586392", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/496008790_1848890432557187_7153082079078757147_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1277&ctp=s1280x1277&_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFkN30ifDmqINN7_bJnpfhQSJqzRi2y_JVImrNGLbL8lWtthV6MFpR_Gdo0mZgd2_KiDSsYINWscVOKkjp0cbyG&_nc_ohc=xpNW_qdzyOQQ7kNvwFvvkFC&_nc_oc=Adrn63x6KgoOAJgijcC-9LjKQRXhRlpSomIr8vC1p7AEZex-vvikDxCc7AEdNRfjUTk&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=H1eKmTsau7-Q4JHRWdrQ3g&_nc_ss=7b2a8&oh=00_Af8dypcFw0XrpPlI3o89mBWjnt60IxR7PVu3ASX-Xv-ptw&oe=6A40A98D" },
//         { id: 'c9', name: "Md.Mahiyan Noor Mahi", committee_role: "PRESS SECRETARY", email: "motu@mu.edu", phone: "01756510942", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/541591829_1328192965595500_5345473691480325870_n.jpg?stp=dst-jpg_tt6&cstp=mx960x1280&ctp=s960x1280&_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGEfG0OIi9nOrp4UN708NQF_GW1NdtDLAf8ZbU120MsB327E5RO9wkqP6luI9-r2ljvs1Z1KwqpF65XulEh-tpj&_nc_ohc=Ua1NFG-tOloQ7kNvwGau3rg&_nc_oc=Adr5ghAyJslRVmwEoU27Zmtb8rl_lMKAVzbzZrH1iu5694g1Ezz8bcLgIasiiU6doiQ&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=SCt7TgV2yIbVACf7YJLhnQ&_nc_ss=7b2a8&oh=00_Af9IkWVqYmxtuc3rH1z27ZuEmlyw24eyfoYzALtARyqhxQ&oe=6A40C895" },
//         { id: 'c10', name: "Miftahur Rahman Omi", committee_role: "CHIEF PHOTOGRAPHER", email: "leo@mu.edu", phone: "01887457293", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/494788140_643333422028875_6621256742388626645_n.jpg?stp=dst-jpg_tt6&cstp=mx1331x1330&ctp=s1331x1330&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFsbe_DrxQRtmqgbKJJ4vIcYKkGnmI7cCtgqQaeYjtwK5z-j3-oyO1kYYTghlFmWhY1IySz23faNbPFzxhgCJm7&_nc_ohc=WEIfaiBkX4cQ7kNvwHwBlVm&_nc_oc=AdqG8XkIIPOwCL5KXnVroMBwzWxWi-7pptUfSRKgBQSi8tXEtgkoUK3chsuKk1t-tSY&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=ozq06bFjN2tYkQM2LDpTaw&_nc_ss=7b2a8&oh=00_Af_Pj36Za4yWX-Ffn9TmjakHK_lMxjowjwEYTtzCHp2EPA&oe=6A40CEC6" },
//     ];

//     const defaultEmails = new Set(defaultCommittee.map(m => m.email));
// const extraMembers = dbUsers.filter(u => !defaultEmails.has(u.email));
// const committeeList = [...defaultCommittee, ...extraMembers];

//     const clubEvents = dbEvents.length >= 6 ? dbEvents : [
//         { title: "INDOOR GAMES SEASON-15", type: "Indoor Tournament", date: "July 5, 2026", details: "Annual ultimate indoor showdown for enthusiasts at MU Lounge." },
//         { title: "INTRA-MUSC FUTSAL", type: "Indoor Tournament", date: "August 15, 2026", details: "Strategic mind games tournament targeting MUSC members brackets." },
//         { title: "LEAGUE M", type: "League Match", date: "Sep 02, 2026", details: "Premium inter-university 9-a-side main football league." },
//         { title: "INTRA FUTSAL", type: "League Match", date: "Oct 20, 2026", details: "The ultimate futsal competition." },
//         { title: "UPL", type: "Domestic Tournament", date: "Nov 15, 2026", details: "The grand cricket tournament under international standard rules." },
//         { title: "MPL-15", type: "Tournament", date: "Jan 20, 2027", details: "Inter-university level grand cricket event." }
//     ];

//     const galleryImages = [
//         { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/626331988_1313951187425703_3795850859671558213_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s1920x1080&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGfKZKxBhUkxshIv0MLqNsX5vVj678KACvm9WPrvwoAK_eOrkTMWMH01cqcd1GjE6YNcNnRRK7AOIQRMA7QM7px&_nc_ohc=V5_lUO_g7DIQ7kNvwECe9yJ&_nc_oc=AdpKO67a3GM6P6QSjQj3cb0YMvX3DR9RKfPWBe0pgh0qzXQlvazn3RB1C3yU7qdIvzw&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=WJslUUbN2hf_h-FYaxpZ3g&_nc_ss=7b2a8&oh=00_Af-hTbY22ijzzJncUWTzbfk16iUoIIG_Az5RAw-votkguw&oe=6A408A7F", label: "MPL Champions 2026" },
//         { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/617090785_1295051429315679_6213409423227020079_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x960&ctp=s1280x960&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEj090S2l12tydczuAd8kJEt6X1WXet48C3pfVZd63jwCo0Ikx4630tODBF1wj-Org-lUUsqRN9B9cbzS4UrcZ7&_nc_ohc=ND9frAJfSWkQ7kNvwHZnGPE&_nc_oc=Ado5vWMDc2RyAl2TX9A3pqTcQgqLqKLKP2yADxWcZSRtXEgBmkybM0e8ItY2GNadUIs&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=OMKrLJwlHD-X0Q6jzyA7Ew&_nc_ss=7b2a8&oh=00_Af-zXomqDiBiPyTwiVMVxOlHTpopt5howwAjaJODERf3-w&oe=6A421D4C", label: "BBQ Night 2026" },
//         { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/619334737_1299774662176689_3518894522302526164_n.jpg?stp=dst-jpg_tt6&cstp=mx960x503&ctp=s960x503&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFOl9eDDuyA9kMmuHTlwNMfXra_aN3yAodetr9o3fICh-ujj4-A8kj_3b1WhNYzBaWLJxkir1grjvwYGpQMEuZb&_nc_ohc=ugqPf0tUVx8Q7kNvwENxCL-&_nc_oc=AdopBLDw6YSaWg52Mu_A4CZSrg-Q1Kgv6CTeh-P7xXWymycdBE3MyT6MnVk_DSrt51k&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=pybPjK7orcttmXa8XuKvRA&_nc_ss=7b2a8&oh=00_Af_PZ8MDq_ql2wWKRKv5qHSIkkw29Z2CugSHeza3Pc2T2w&oe=6A4219AE", label: "Committee Handover(2024-2025)" },
//         { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/618882277_1299774898843332_4609512799048176452_n.jpg?stp=dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGYQ6vCDI47XalNseXi_iSr-RKQn8dcABv5EpCfx1wAG_zcAxxB9x4cKJd5OeSkTFgYO1Cky4QbbfbC59ooRl3M&_nc_ohc=QTOAzR98FQIQ7kNvwElXHGq&_nc_oc=AdpNN7a9c2flZGUuJZAmobdjFJIbANhYSvZWN3xtzDw2BA_S_5mG3GVOKg3NjILV5lM&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=SnCsuH4kh0ezzeX4Y7M3cg&_nc_ss=7b2a8&oh=00_Af8W8LSI3rHkwSzAmrTBanhQgIaZbJ-JFs-iHFq5Qy3mLg&oe=6A420041", label: "Farewell of MR.president(24-25)" },
//         { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/575188965_1233925582094931_5998660472661711882_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGZebmeiz0KG2lvbgmqbszEvvMdYyIgEtm-8x1jIiAS2eRHKq1zcR6tzLmzSjez3DUtefz9c8iUi255yYXBV6A5&_nc_ohc=6DPtcRKpJXAQ7kNvwF30puP&_nc_oc=AdrdAqw4DU7FF16GLKWxJ77s60Cipw1EpYWNWaZorguBa9MYsrscOps764Rc2M7BgI8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=DiZ518oWMc-poXXSgPraOQ&_nc_ss=7b2a8&oh=00_Af965S4SYg1HJq1h-BBburFWkzgEV4DdFUUmiwlL9wzW7A&oe=6A40AB24", label: "Arrival of MR.15" },
//         { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/558671734_1215392863948203_254053450087788206_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1280&ctp=s1024x1280&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEgCJDpjlGsXG5BNscswPfjy6RMhWhgZP_LpEyFaGBk_0RUf0HxbGyaLyUQ0cq3nFedmNIjMqDbzB2LkK9a3Zsn&_nc_ohc=yM8pgS4htxcQ7kNvwEiGAYA&_nc_oc=Adrv0AUMjIZ5tmsH25sh6ZY-Fvrg9q6vn7GUd4vOwjV4y9qHicmHWhXAR6E9VfMBrX8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=mNjS-q6OtT1-nNHh8rTfIA&_nc_ss=7b2a8&oh=00_Af8JXkG566il-FdY67E2jogTBsl37vlqTq-JGlTy6h5eYQ&oe=6A408703", label: "League M Champions 2025" },
//     ];

//     const eventTypes = ['All', ...Array.from(new Set(clubEvents.map(e => e.type || 'Tournament')))];
//     const filteredEvents = activeFilter === 'All' ? clubEvents : clubEvents.filter(e => (e.type || 'Tournament') === activeFilter);

//     const roleColors = {
//         'PRESIDENT': 'from-amber-500 to-amber-700',
//         'GENERAL SECRETARY': 'from-blue-600 to-blue-800',
//         'ORGANISING SECRETARY': 'from-indigo-500 to-indigo-700',
//         'THE GREAT TREASURER': 'from-emerald-500 to-emerald-700',
//         'EVENT COORDINATOR': 'from-purple-500 to-purple-700',
//         'OFFICE SECRETARY': 'from-rose-500 to-rose-700',
//         'PRESS SECRETARY': 'from-cyan-500 to-cyan-700',
//         'CHIEF PHOTOGRAPHER': 'from-emerald-500 to-emerald-700',
//         'Executive Member': 'from-slate-500 to-slate-700',
//     };

//     const d = darkMode;

//     if (showAdminLogin && !isAdmin) {
//         return <AdminLogin dark={d} onLogin={() => setIsAdmin(true)} />;
//     }
//     if (isAdmin) {
//         return <AdminPanel dark={d} onLogout={() => { setIsAdmin(false); setShowAdminLogin(false); window.location.hash = ''; }} />;
//     }

//     return (
//         <>
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bebas+Neue&display=swap');
//                 * { box-sizing: border-box; }
//                 body { font-family: 'Inter', sans-serif; margin: 0; }
//                 @keyframes fadeInUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
//                 @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
//                 @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); } 50% { box-shadow: 0 0 20px 4px rgba(245,158,11,0.25); } }
//                 @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
//                 @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
//                 @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//                 .animate-fade-in-up  { animation: fadeInUp 0.6s ease both; }
//                 .animate-slide-up    { animation: slideUp  0.4s ease both; }
//                 .animate-float       { animation: float    3s ease-in-out infinite; }
//                 .animate-pulse-glow  { animation: pulse-glow 2s ease-in-out infinite; }
//                 .animate-spin-slow   { animation: spin-slow 12s linear infinite; }
//                 .hero-gradient { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #0f172a 100%); }
//                 .hero-gradient-dark { background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #020617 100%); }
//                 .gold-shimmer { background: linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
//                 .glass-card { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); }
//                 .stat-card { background: var(--card-bg, #fff); animation: fadeInUp 0.6s ease both; }
//                 .nav-link { position: relative; padding-bottom: 2px; }
//                 .nav-link::after { content: ''; position: absolute; left: 0; bottom: -2px; width: 0; height: 2px; background: #f59e0b; transition: width 0.25s ease; border-radius: 2px; }
//                 .nav-link:hover::after, .nav-link.active::after { width: 100%; }
//                 .sport-card:hover .sport-icon { animation: float 1.5s ease-in-out infinite; }
//                 .gallery-item:hover img { transform: scale(1.08); }
//                 .gallery-item img { transition: transform 0.4s ease; }
//                 .committee-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
//                 .committee-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
//                 .event-card:hover { transform: translateY(-4px); }
//                 .event-card { transition: all 0.3s ease; }
//                 ::-webkit-scrollbar { width: 6px; }
//                 ::-webkit-scrollbar-track { background: transparent; }
//                 ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
//                 .membership-benefit:hover .benefit-icon { transform: scale(1.15) rotate(-5deg); }
//                 .benefit-icon { transition: transform 0.3s ease; }
//             `}</style>

//             <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${d ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>

//                 <nav className={`shadow-2xl sticky top-0 z-50 border-b transition-colors duration-300 ${d ? 'bg-slate-900/95 border-slate-800' : 'bg-slate-950/95 border-amber-500/20'}`}
//                     style={{ backdropFilter: 'blur(20px)' }}>
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="flex justify-between h-20">
//                             <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => goTo('home')}>
//                                 <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-amber-500/20 group-hover:shadow-amber-400/40 transition-shadow">
//                                     <img src="https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/469504888_979335607553931_871846207987255438_n.jpg?stp=dst-jpg_tt6&cstp=mx1579x1579&ctp=s1579x1579&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH0shj4KjfBHVniiJRf1ACVuTeY0gI1ruG5N5jSAjWu4e9K7cwmngnLfL8XfJk3GwvnufgJ2EUQ76hV5eVgRoio&_nc_ohc=Lrb2sHs5_9IQ7kNvwEWz_dt&_nc_oc=AdpnYJRS6XxWb1IVMEcSPo7unJlxZW0PVuoZ4tLLfqzHJ_TZWG5ln8l5qTvqQH9gzYw&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=Uo9KpgJyYpabe_Hrl_MDNw&_nc_ss=7b2a8&oh=00_Af-dOO7BI57lOBpMfZJKa9Uvn693TpVdJtE8rJ8dijaN9g&oe=6A408D3E" alt="Logo" className="w-full h-full object-cover" />
//                                 </div>
//                                 <div>
//                                     <span className="text-lg font-black tracking-widest block text-white leading-tight">MU SPORTS CLUB</span>
//                                     <span className="text-[9px] tracking-[0.22em] font-extrabold uppercase bg-gradient-to-r from-red-500 via-red-200 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(96,165,250,0.35)]"> Metropolitan University,Sylhet</span>
//                                 </div>
//                             </div>
//                             <div className="hidden md:flex items-center space-x-7 text-sm font-bold text-white">
//                                 {['home','about','committee','events'].map(tab => (
//                                     <button key={tab} onClick={() => goTo(tab)}
//                                         className={`nav-link capitalize hover:text-amber-400 transition-colors duration-200 ${currentTab === tab ? 'text-amber-400 active' : ''}`}>
//                                         {tab === 'committee' ? 'Executive Panel' : tab === 'events' ? 'Tournaments' : tab.charAt(0).toUpperCase() + tab.slice(1)}
//                                     </button>
//                                 ))}
//                                 <button onClick={() => setDarkMode(!d)}
//                                     className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all text-white text-base">
//                                     {d ? '☀️' : '🌙'}
//                                 </button>
//                                 <button onClick={() => goTo('register')}
//                                     className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-5 py-2.5 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all font-black text-[11px] uppercase tracking-wider shadow-lg shadow-amber-500/20 animate-pulse-glow">
//                                     Register Now
//                                 </button>
//                             </div>

//                             <div className="flex items-center space-x-3 md:hidden">
//                                 <button onClick={() => setDarkMode(!d)} className="p-2 bg-slate-800 rounded-xl text-white">{d ? '☀️' : '🌙'}</button>
//                                 <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white p-2">
//                                     <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         {isMenuOpen
//                                             ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//                                             : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />}
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {isMenuOpen && (
//                         <div className="md:hidden bg-slate-900/98 border-t border-slate-800 px-4 pt-3 pb-5 space-y-1 text-base font-semibold text-white"
//                             style={{ backdropFilter: 'blur(20px)' }}>
//                             {[['home','Home'],['about','About'],['committee','Executive Panel'],['events','Tournaments']].map(([tab,label]) => (
//                                 <button key={tab} onClick={() => goTo(tab)}
//                                     className={`block w-full text-left py-2.5 px-3 rounded-lg transition-colors ${currentTab === tab ? 'text-amber-400 bg-amber-400/10' : 'hover:text-amber-400 hover:bg-white/5'}`}>
//                                     {label}
//                                 </button>
//                             ))}
//                             <button onClick={() => goTo('register')}
//                                 className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black py-3 rounded-xl mt-3 shadow-lg">
//                                 Register Now 🚀
//                             </button>
//                         </div>
//                     )}
//                 </nav>

//                 <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

//                     {currentTab === 'home' && (
//                         <div className="space-y-20">
//                             <div className={`relative rounded-3xl overflow-hidden text-center text-white py-20 md:py-28 px-6 ${d ? 'hero-gradient-dark' : 'hero-gradient'}`}>
//                                 <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-spin-slow"></div>
//                                 <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
//                                 <div className="relative z-10 space-y-6">
//                                     <span className="inline-block bg-gradient-to-r from-red-600/20 via-blue-700/20 to-cyan-500/20 border border-red-400/40 text-white text-[10px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full backdrop-blur-2xl shadow-[0_0_25px_rgba(37,99,235,0.45)]">🏆 Official Sports Arena · Metropolitan University</span>
//                                     <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
//                                         <span className="block text-white">Born To Rule</span>
//                                         <span className="block gold-shimmer">Over The Game</span>
//                                     </h1>
//                                     <p className="text-blue-100/70 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
//                                         <span className="block text-white">Welcome to the Royal Club</span>
//                                         We cultivate elite sportsmanship, celebrate strategic campus victories, and manage athletic leagues with honour at Metropolitan University, Sylhet.
//                                     </p>
//                                     <div className="flex flex-wrap justify-center gap-4 pt-4">
//                                         <button onClick={() => goTo('events')} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-8 py-4 rounded-2xl text-[11px] uppercase tracking-wider transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/30">Explore Tournaments🏆</button>
//                                         <button onClick={() => goTo('register')} className="glass-card hover:bg-white/10 text-white font-bold px-7 py-4 rounded-2xl text-[11px] uppercase tracking-wider transition-all hover:scale-105">Register Now →</button>
//                                         <button onClick={() => goTo('committee')} className="glass-card hover:bg-white/10 text-white font-bold px-7 py-4 rounded-2xl text-[11px] uppercase tracking-wider transition-all hover:scale-105">Executive Board 👥</button>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                 <StatCard count={350} suffix="+" label="Athletes Enrolled" icon="🏃‍♂️" dark={d} delay={0}   trigger={statsInView} />
//                                 <StatCard count={6}   suffix="+"  label="Active Events"     icon="🔥" dark={d} delay={100}  trigger={statsInView} />
//                                 <StatCard count={11}  suffix=""   label="Panel Members"     icon="👑" dark={d} delay={200}  trigger={statsInView} />
//                                 <StatCard count={99.99} suffix="%" label="Fair Play"         icon="🛡️" dark={d} delay={300} trigger={statsInView} />
//                             </div>

//                             <div className="space-y-6">
//                                 <div className="text-center">
//                                     <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>What We Play</p>
//                                     <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Sports Categories</h2>
//                                 </div>
//                                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//                                     {sportsCategories.map((sp, i) => (
//                                         <div key={i} className={`sport-card p-6 rounded-2xl border group cursor-pointer animate-fade-in-up transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl ${d ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-blue-100 hover:bg-blue-50/50 hover:shadow-blue-100'}`} style={{ animationDelay: `${i * 80}ms` }}>
//                                             <div className="sport-icon text-4xl mb-3 block w-fit">{sp.icon}</div>
//                                             <h3 className={`font-black text-base ${d ? 'text-white' : 'text-blue-950'}`}>{sp.name}</h3>
//                                             <p className={`text-xs mt-1 leading-relaxed ${d ? 'text-slate-400' : 'text-slate-500'}`}>{sp.desc}</p>
//                                             <span className={`inline-block mt-3 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${d ? 'bg-blue-950 text-blue-400 border border-blue-900' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>{sp.tag}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="space-y-6">
//                                 <div className="flex justify-between items-end">
//                                     <div>
//                                         <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>On The Calendar</p>
//                                         <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Upcoming Events</h2>
//                                     </div>
//                                     <button onClick={() => goTo('events')} className={`text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border transition-colors ${d ? 'border-slate-700 text-slate-300 hover:border-amber-400 hover:text-amber-400' : 'border-blue-200 text-blue-700 hover:border-blue-600 hover:text-blue-600'}`}>View All →</button>
//                                 </div>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                                     {clubEvents.slice(0, 3).map((ev, i) => (
//                                         <div key={i} className={`event-card rounded-2xl border p-6 ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100 shadow-sm'}`}>
//                                             <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${ev.type?.includes('Indoor') ? (d ? 'bg-blue-950 text-blue-400' : 'bg-blue-50 text-blue-700') : (d ? 'bg-emerald-950 text-emerald-400' : 'bg-emerald-50 text-emerald-700')}`}>{ev.type}</span>
//                                             <h3 className={`font-black text-base mt-3 ${d ? 'text-white' : 'text-blue-950'}`}>{ev.title}</h3>
//                                             <p className={`text-xs mt-2 leading-relaxed ${d ? 'text-slate-400' : 'text-slate-500'}`}>{ev.details}</p>
//                                             <div className={`mt-5 pt-4 border-t flex justify-between items-center ${d ? 'border-slate-800' : 'border-blue-50'}`}>
//                                                 <span className={`text-xs font-bold ${d ? 'text-slate-300' : 'text-slate-600'}`}>📅 {ev.date || ev.event_date}</span>
//                                                 <button onClick={() => { setFormData(prev => ({ ...prev, event_name: ev.title })); goTo('register'); }} className="text-[10px] font-black bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1.5 rounded-lg transition-colors">Join →</button>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className={`rounded-3xl p-8 md:p-12 border ${d ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-br from-blue-950 to-indigo-950 text-white'}`}>
//                                 <div className="text-center mb-10">
//                                     <p className="text-xs font-black tracking-widest uppercase mb-2 text-amber-400">Why Join Us</p>
//                                     <h2 className="text-3xl font-black tracking-tight uppercase text-white">Membership Benefits</h2>
//                                 </div>
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                                     {[
//                                         { icon: "🏆", title: "Exclusive Tournaments", desc: "Priority access to all MUSC events and inter-university championships." },
//                                         { icon: "👕", title: "Official Kit Access", desc: "Official merchandise at member rates." },
//                                         { icon: "🤝", title: "Networking Hub", desc: "Connect with 350+ athletes across all departments at MU." },
//                                         { icon: "📊", title: "Skill Development", desc: "Coaching sessions, workshops, and strategic sports training events." },
//                                         { icon: "📸", title: "Media Coverage", desc: "Professional photography and press coverage." },
//                                         { icon: "🎖️", title: "Recognition & Awards", desc: "Annual MVP titles, trophies, and certificates for top performers." },
//                                     ].map((b, i) => (
//                                         <div key={i} className="membership-benefit flex gap-4 items-start group animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
//                                             <span className="benefit-icon text-3xl flex-shrink-0">{b.icon}</span>
//                                             <div>
//                                                 <h4 className="font-black text-white text-sm">{b.title}</h4>
//                                                 <p className="text-blue-200/70 text-xs mt-1 leading-relaxed">{b.desc}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="space-y-4">
//                                 <div className="text-center">
//                                     <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>What Members Say?</p>
//                                     <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Member Reviews!</h2>
//                                 </div>
//                                 <TestimonialCarousel dark={d} />
//                             </div>

//                             <div className="space-y-6">
//                                 <div className="text-center">
//                                     <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>Legacy Moments...</p>
//                                     <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Club Gallery</h2>
//                                 </div>
//                                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
//                                     {galleryImages.map((img, i) => (
//                                         <div key={i} className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer border ${i === 0 || i === 3 ? 'md:col-span-1 h-56' : 'h-44'} ${d ? 'border-slate-800' : 'border-blue-100'}`} onClick={() => setLightboxImg(img)}>
//                                             <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
//                                             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
//                                                 <span className="text-white text-[10px] font-black uppercase tracking-wider">{img.label}</span>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className={`rounded-3xl text-center py-14 px-6 border ${d ? 'bg-slate-900 border-slate-800' : 'bg-blue-950 border-blue-900'}`}>
//                                 <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3">Ready to Compete?</h2>
//                                 <p className="text-blue-200/70 text-sm mb-8 max-w-lg mx-auto">Join 350+ athletes at MU's most prestigious sports club. Register for an active tournament slot today.</p>
//                                 <button onClick={() => goTo('register')} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-10 py-4 rounded-2xl text-xs uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/30">Register 🚀</button>
//                             </div>
//                         </div>
//                     )}

//                     {currentTab === 'about' && (
//                         <div className="max-w-4xl mx-auto space-y-12">
//                             <div className={`p-8 md:p-10 rounded-3xl border shadow-md space-y-6 animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}>
//                                 <div className="border-l-4 border-amber-500 pl-5">
//                                     <h2 className={`text-2xl font-black uppercase ${d ? 'text-white' : 'text-blue-950'}`}>MU Sports Legacy</h2>
//                                     <p className="text-xs text-amber-500 uppercase tracking-widest font-black mt-1">Our Story · Connect · Track Us</p>
//                                 </div>
//                                 <p className={`text-sm leading-relaxed font-medium ${d ? 'text-slate-300' : 'text-slate-600'}`}>MU Sports Club is the central athletic authority of Metropolitan University, Sylhet. We build teams that challenge boundaries, organize competitive championships, and maintain active external communication for regional athletic events. Since our founding, we've grown into a community of over 350 athletes across all faculties — united by a love for competition and fair play.</p>
//                                 <div className="flex items-center gap-4 pt-2">
//                                     <a href="https://www.facebook.com/MetropolitanUniversity.Sports.Club" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 transition-all border group ${d ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-blue-100 hover:border-blue-400'}`} title="Facebook">
//                                         <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-6 h-6 object-contain" alt="Facebook" />
//                                     </a>
//                                     <a href="https://www.instagram.com/sportsclubmu/" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 transition-all border group ${d ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-blue-100 hover:border-pink-400'}`} title="Instagram">
//                                         <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-6 h-6 object-contain" alt="Instagram" />
//                                     </a>
//                                     <a href="mailto:sports.club@mu.edu" className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 transition-all border text-xl ${d ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-blue-100 hover:border-amber-400'}`} title="Email Us">📧</a>
//                                 </div>
//                             </div>

//                             <div className="space-y-4">
//                                 <h3 className={`text-xl font-black tracking-tight ${d ? 'text-white' : 'text-blue-950'}`}>🏆 Legacy Moments</h3>
//                                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                                     {galleryImages.slice(0, 3).map((img, i) => (
//                                         <div key={i} className={`h-44 rounded-2xl overflow-hidden relative border cursor-pointer group ${d ? 'border-slate-700' : 'border-blue-100'}`} onClick={() => setLightboxImg(img)}>
//                                             <img src={img.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" alt={img.label} />
//                                             <span className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-wider">{img.label}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className={`p-8 rounded-3xl border shadow-md animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-blue-50/60 border-blue-100'}`}>
//                                 <div className="mb-6">
//                                     <h3 className={`text-xl font-black ${d ? 'text-amber-400' : 'text-blue-950'}`}>🤝 Want to Collaborate?</h3>
//                                     <p className={`text-xs mt-1 font-medium ${d ? 'text-slate-300' : 'text-slate-600'}`}>Power the spirit of champions by partnering with MU Sports Club in regional competitions, tournament hosting, sports-tech initiatives, and youth athletic development.🚀</p>
//                                 </div>
//                                 <div className="space-y-4">
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                         <input type="text" placeholder="Name" value={collabForm.name} onChange={e => setCollabForm({ ...collabForm, name: e.target.value })} className={`p-3.5 border rounded-xl text-sm outline-none transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} required />
//                                         <input type="text" placeholder="Organization Name" value={collabForm.org} onChange={e => setCollabForm({ ...collabForm, org: e.target.value })} className={`p-3.5 border rounded-xl text-sm outline-none transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} />
//                                     </div>
//                                     <textarea placeholder="Describe your collaboration proposal briefly..." rows="4" value={collabForm.note} onChange={e => setCollabForm({ ...collabForm, note: e.target.value })} className={`w-full p-3.5 border rounded-xl text-sm outline-none transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} required></textarea>
//                                     <div className={`p-4 rounded-xl border border-dashed flex flex-col sm:flex-row justify-between items-center gap-3 ${d ? 'bg-slate-950 border-slate-700' : 'bg-white border-blue-200'}`}>
//                                         <div>
//                                             <span className={`text-xs font-black block ${d ? 'text-slate-200' : 'text-slate-700'}`}>Attach Proposal Layout / Identity Image</span>
//                                             <span className="text-[10px] text-slate-400 block mt-0.5">Supports PNG, JPG (Max 5MB)</span>
//                                         </div>
//                                         <input type="file" id="collab-file" accept="image/*" onChange={handleFileChange} className="hidden" />
//                                         <label htmlFor="collab-file" className={`text-[11px] px-5 py-2.5 rounded-xl font-black cursor-pointer transition-colors ${d ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-blue-950 text-white hover:bg-blue-800'}`}>
//                                             {attachedFile ? '🔄 Change File' : '📁 Choose File'}
//                                         </label>
//                                     </div>
//                                     <button onClick={handleSayHello} className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg ${d ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-amber-500/20' : 'bg-blue-950 text-white hover:bg-blue-800'}`}>Send Proposal ✉️</button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {currentTab === 'committee' && (
//                         <div className="space-y-10">
//                             <div className="text-center animate-fade-in-up">
//                                 <p className={`text-xs font-black tracking-widest uppercase mb-2 ${d ? 'text-blue-400' : 'text-blue-600'}`}>The ChangeMakers</p>
//                                 <h1 className={`text-3xl md:text-4xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Executive Steering Committee 👑</h1>
//                                 <p className={`text-xs font-bold tracking-widest uppercase mt-2 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Official Designation Hierarchy — Session 2025–26</p>
//                             </div>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                                 {committeeList.map((user, idx) => {
//                                     const imgSrc = user.profile_picture?.trim()
//                                         ? (user.profile_picture.startsWith('http') ? user.profile_picture : `/storage/${user.profile_picture}`)
//                                         : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1E3A8A&color=FFFFFF&bold=true`;
//                                     const grad = roleColors[user.committee_role] || 'from-slate-500 to-slate-700';
//                                     return (
//                                         <div key={user.id} className={`committee-card rounded-2xl border overflow-hidden animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`} style={{ animationDelay: `${idx * 60}ms` }}>
//                                             <div className={`h-1.5 w-full bg-gradient-to-r ${grad}`}></div>
//                                             <div className="p-6 text-center">
//                                                 <div className="relative inline-block mb-4">
//                                                     <div className={`w-24 h-24 rounded-2xl overflow-hidden border-2 shadow-lg mx-auto bg-blue-50 dark:bg-slate-800 ${d ? 'border-slate-700' : 'border-blue-100'}`}>
//                                                         <img src={imgSrc} className="w-full h-full object-cover block" alt="" onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1E3A8A&color=FFFFFF&bold=true`; }} />
//                                                     </div>
//                                                     <div className={`absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${grad} flex items-center justify-center shadow-md`}>
//                                                         <span className="text-white text-[10px] font-black">#</span>
//                                                     </div>
//                                                 </div>
//                                                 <h3 className={`font-black text-[15px] leading-tight ${d ? 'text-white' : 'text-blue-950'}`}>{user.name}</h3>
//                                                 <span className={`inline-block mt-2 bg-gradient-to-r ${grad} text-white font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm`}>{user.committee_role}</span>
//                                             </div>
//                                             <div className={`px-5 pb-5 border-t text-left text-xs space-y-2 pt-4 ${d ? 'border-slate-800' : 'border-blue-50'}`}>
//                                                 <a href={`mailto:${user.email}`} className={`flex items-center gap-2 truncate group hover:text-amber-500 transition-colors ${d ? 'text-slate-400' : 'text-slate-500'}`}>
//                                                     <span>📧</span><span className="truncate group-hover:underline font-medium">{user.email}</span>
//                                                 </a>
//                                                 <p className={`flex items-center gap-2 ${d ? 'text-slate-400' : 'text-slate-500'} font-medium`}>
//                                                     <span>📞</span><span>{user.phone || 'N/A'}</span>
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     )}

//                     {currentTab === 'events' && (
//                         <div className="space-y-8">
//                             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fade-in-up">
//                                 <div>
//                                     <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>Season 2025–26</p>
//                                     <h1 className={`text-2xl md:text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Events Calendar</h1>
//                                 </div>
//                                 <button onClick={() => goTo('register')} className={`flex-shrink-0 text-[11px] px-5 py-2.5 rounded-xl font-black uppercase tracking-wider transition-colors shadow-md ${d ? 'bg-amber-500 text-slate-950 hover:bg-amber-400' : 'bg-blue-950 text-white hover:bg-blue-800'}`}>Book a Slot →</button>
//                             </div>
//                             <div className="flex flex-wrap gap-2">
//                                 {eventTypes.map(type => (
//                                     <button key={type} onClick={() => setActiveFilter(type)} className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${activeFilter === type ? (d ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-blue-950 text-white border-blue-950') : (d ? 'border-slate-700 text-slate-400 hover:border-slate-500' : 'border-blue-200 text-slate-500 hover:border-blue-400')}`}>{type}</button>
//                                 ))}
//                             </div>
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                 {filteredEvents.map((ev, i) => (
//                                     <div key={i} className={`event-card rounded-2xl border overflow-hidden animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100 shadow-sm'}`} style={{ animationDelay: `${i * 60}ms` }}>
//                                         <div className={`h-1 w-full ${ev.type?.includes('Indoor') ? 'bg-gradient-to-r from-blue-500 to-blue-700' : 'bg-gradient-to-r from-emerald-500 to-emerald-700'}`}></div>
//                                         <div className="p-6">
//                                             <span className={`inline-block px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider ${ev.type?.includes('Indoor') ? (d ? 'bg-blue-950 text-blue-400 border border-blue-900' : 'bg-blue-50 text-blue-700 border border-blue-200') : (d ? 'bg-emerald-950 text-emerald-400 border border-emerald-900' : 'bg-emerald-50 text-emerald-700 border border-emerald-200')}`}>{ev.type || 'Tournament'}</span>
//                                             <h3 className={`text-xl font-black mt-3 leading-tight ${d ? 'text-white' : 'text-blue-950'}`}>{ev.title}</h3>
//                                             <p className={`text-xs mt-2 leading-relaxed line-clamp-3 ${d ? 'text-slate-400' : 'text-slate-500'}`}>{ev.details}</p>
//                                             <div className={`mt-6 pt-4 border-t flex justify-between items-center ${d ? 'border-slate-800' : 'border-blue-50'}`}>
//                                                 <span className={`text-xs font-bold ${d ? 'text-slate-300' : 'text-slate-700'}`}>📅 {ev.date || ev.event_date}</span>
//                                                 <button onClick={() => { setFormData(prev => ({ ...prev, event_name: ev.title })); goTo('register'); }} className="text-[10px] font-black bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl transition-all hover:scale-105 shadow-sm">Join →</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {currentTab === 'register' && (
//                         <div className={`max-w-lg mx-auto p-8 md:p-10 rounded-3xl border shadow-xl animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}>
//                             <div className="mb-8">
//                                 <span className={`text-[10px] font-black uppercase tracking-widest ${d ? 'text-blue-400' : 'text-blue-600'}`}>External Participants</span>
//                                 <h2 className={`text-2xl font-black tracking-tight mt-1 ${d ? 'text-white' : 'text-blue-900'}`}>Participant registration</h2>
//                                 <p className={`text-xs mt-2 leading-relaxed ${d ? 'text-slate-400' : 'text-slate-500'}`}>Fill out this form to book your slot for an upcoming MUSC tournament. Confirmation will be sent to your email.</p>
//                             </div>
//                             <form onSubmit={handleFormSubmit} className="space-y-5">
//                                 <div>
//                                     <label className={`block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Full Name *</label>
//                                     <input type="text" value={formData.player_name} onChange={e => setFormData({ ...formData, player_name: e.target.value })} className={`w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} placeholder="e.g. Leo Messi" required />
//                                 </div>
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                     <div>
//                                         <label className={`block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Email *</label>
//                                         <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={`w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} placeholder="you@example.com" required />
//                                     </div>
//                                     <div>
//                                         <label className={`block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Phone *</label>
//                                         <input type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className={`w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} placeholder="018XXXXXXXX" required />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className={`block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Department / Institution *</label>
//                                     <input type="text" value={formData.department} onChange={e => setFormData({ ...formData, department: e.target.value })} className={`w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} placeholder="e.g. CSE, MU" required />
//                                 </div>
//                                 <div>
//                                     <label className={`block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Target Tournament *</label>
//                                     <select value={formData.event_name} onChange={e => setFormData({ ...formData, event_name: e.target.value })} className={`w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} required>
//                                         <option value="">-- Select Active Tournament --</option>
//                                         {clubEvents.map((ev, i) => <option key={i} value={ev.title}>{ev.title} · {ev.date || ev.event_date}</option>)}
//                                     </select>
//                                 </div>
//                                 <button type="submit" disabled={isSaving} className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl mt-2 ${isSaving ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-2xl'} ${d ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-amber-500/20' : 'bg-gradient-to-r from-blue-800 to-blue-950 text-white shadow-blue-900/30'}`}>
//                                     {isSaving ? '⏳ Processing...' : 'Submit 🚀'}
//                                 </button>
//                             </form>
//                         </div>
//                     )}

//                 </main>

//                 <footer className={`mt-20 border-t ${d ? 'bg-slate-900 border-slate-800' : 'bg-slate-950 border-amber-500/10'}`}>
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                             <div>
//                                 <div className="flex items-center gap-3 mb-4">
//                                     <div className="w-10 h-10 rounded-xl overflow-hidden">
//                                         <img src="https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/469504888_979335607553931_871846207987255438_n.jpg?stp=dst-jpg_tt6&cstp=mx1579x1579&ctp=s1579x1579&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH0shj4KjfBHVniiJRf1ACVuTeY0gI1ruG5N5jSAjWu4e9K7cwmngnLfL8XfJk3GwvnufgJ2EUQ76hV5eVgRoio&_nc_ohc=Lrb2sHs5_9IQ7kNvwEWz_dt&_nc_oc=AdpnYJRS6XxWb1IVMEcSPo7unJlxZW0PVuoZ4tLLfqzHJ_TZWG5ln8l5qTvqQH9gzYw&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=Uo9KpgJyYpabe_Hrl_MDNw&_nc_ss=7b2a8&oh=00_Af-dOO7BI57lOBpMfZJKa9Uvn693TpVdJtE8rJ8dijaN9g&oe=6A408D3E" alt="logo" className="w-full h-full object-cover" />
//                                     </div>
//                                     <div>
//                                         <p className="text-white font-black text-sm tracking-wider">MU SPORTS CLUB</p>
//                                         <p className="text-amber-400 text-[9px] font-bold uppercase tracking-widest">Metropolitan University, Sylhet</p>
//                                     </div>
//                                 </div>
//                                 <p className="text-slate-400 text-xs leading-relaxed">The official sports authority of Metropolitan University. Cultivating elite athletes since day one.</p>
//                             </div>
//                             <div>
//                                 <p className="text-white font-black text-xs uppercase tracking-wider mb-4">Quick Links</p>
//                                 <div className="space-y-2">
//                                     {[['home','Home'],['about','About'],['committee','Executive Panel'],['events','Tournaments'],['register','Register']].map(([tab,label]) => (
//                                         <button key={tab} onClick={() => goTo(tab)} className="block text-slate-400 hover:text-amber-400 text-xs font-medium transition-colors">{label}</button>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div>
//                                 <p className="text-white font-black text-xs uppercase tracking-wider mb-4">Contact Us</p>
//                                 <div className="space-y-2 text-slate-400 text-xs font-medium">
//                                     <a href="mailto:sports.club@mu.edu" className="block hover:text-amber-400 transition-colors">📧 sports.club@mu.edu</a>
//                                     <p>📍 Metropolitan University, Sylhet, Bangladesh</p>
//                                     <div className="flex gap-3 pt-2">
//                                         <a href="https://www.facebook.com/MetropolitanUniversity.Sports.Club" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
//                                             <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-6 h-6 object-contain" alt="FB" />
//                                         </a>
//                                         <a href="https://www.instagram.com/sportsclubmu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
//                                             <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-6 h-6 object-contain" alt="IG" />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="border-t border-slate-800 mt-10 pt-6 text-center">
//                             <p className="text-slate-500 text-[11px]">© 2025–26 MU Sports Club · Metropolitan University, Sylhet · All rights reserved.</p>
//                             <button onClick={() => setShowAdminLogin(true)} className="text-slate-800 hover:text-slate-600 text-[10px] mt-2 transition-colors">⚙</button>
//                         </div>
//                     </div>
//                 </footer>

//                 {lightboxImg && (
//                     <div className="fixed inset-0 z-[9998] bg-slate-950/95 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
//                         <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
//                             <button onClick={() => setLightboxImg(null)} className="absolute -top-10 right-0 text-white text-3xl font-black hover:text-amber-400 transition-colors z-10">×</button>
//                             <img src={lightboxImg.src} alt={lightboxImg.label} className="w-full rounded-2xl shadow-2xl" />
//                             <p className="text-center text-white font-black text-sm mt-3 uppercase tracking-wider">{lightboxImg.label}</p>
//                         </div>
//                     </div>
//                 )}

//                 {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
//             </div>
//         </>
//     );
// }

// const rootElement = document.getElementById('app');
// if (rootElement) {
//     const root = createRoot(rootElement);
//     root.render(<MUSportsClubApp />);
// }

import './bootstrap';
import '../css/app.css';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

const ADMIN_PASSWORD = 'musc2026admin';

function useCountUp(target, duration = 2000, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

function useInView(threshold = 0.2) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

function StatCard({ count, suffix = '', label, icon, dark, delay = 0, trigger }) {
    const num = useCountUp(count, 2000, trigger);
    return (
        <div className="stat-card p-6 rounded-2xl border text-center shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-lg"
            style={{ animationDelay: `${delay}ms`, '--card-bg': dark ? '#0f172a' : '#fff' }}>
            <span className="text-2xl block mb-1">{icon}</span>
            <span className={`text-3xl md:text-4xl font-black block ${dark ? 'text-amber-400' : 'text-blue-900'}`}>{num}{suffix}</span>
            <span className={`text-[10px] font-black uppercase tracking-wider block mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</span>
        </div>
    );
}

function Toast({ message, type, onClose }) {
    useEffect(() => { const t = setTimeout(onClose, 4000); return () => clearTimeout(t); }, [onClose]);
    return (
        <div className={`fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-sm font-bold animate-slide-up max-w-sm
            ${type === 'success' ? 'bg-emerald-500 text-white' : type === 'error' ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}>
            <span>{type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
            <span className="flex-1">{message}</span>
            <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100 font-black text-lg">×</button>
        </div>
    );
}

const testimonials = [
    { name: "SH AH AN", dept: "CSE 61, MU", text: "MU Sports Club transformed my university experience. The tournaments are world-class and the executive team is incredibly professional.", avatar: "SH" },
    { name: "AVIZITH", dept: "CSE 61, MU", text: "The energy during INTRA-FUTSAL was absolutely electric!", avatar: "AV" },
    { name: "MANNA", dept: "CSE 62, MU", text: "The indoor games season is brilliantly organized. Carrom and Chess tournaments with proper brackets — loved every moment.", avatar: "MN" },
    { name: "SALEH", dept: "English, MU", text: "From futsal to cricket, every event is managed with so much passion and dedication. Proud to be part of this family.", avatar: "SL" },
];

function TestimonialCarousel({ dark }) {
    const [active, setActive] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4000);
        return () => clearInterval(t);
    }, []);
    const t = testimonials[active];
    return (
        <div className={`rounded-3xl border p-8 md:p-12 relative overflow-hidden ${dark ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-br from-blue-950 to-indigo-950'}`}>
            <div className="absolute top-0 left-0 w-48 h-48 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="text-amber-400 text-5xl font-black mb-4 leading-none">"</div>
            <p className="text-white text-base md:text-lg leading-relaxed font-medium max-w-2xl mb-8 relative z-10">{t.text}</p>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-slate-950 text-sm shadow-lg">{t.avatar}</div>
                <div>
                    <p className="text-white font-black text-sm">{t.name}</p>
                    <p className="text-blue-300 text-xs font-medium">{t.dept}</p>
                </div>
            </div>
            <div className="flex gap-2 mt-6">
                {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-amber-400' : 'w-3 bg-white/20 hover:bg-white/40'}`} />
                ))}
            </div>
        </div>
    );
}

const sportsCategories = [
    { icon: "⚽", name: "Football", desc: "Inter-university 9-a-side leagues and futsal tournaments", tag: "League M · Futsal" },
    { icon: "🏏", name: "Cricket", desc: "Grand cricket tournaments under international standard rules", tag: "UPL · MPL-15" },
    { icon: "♟️", name: "Chess & Carrom", desc: "Strategic mind games targeting MUSC member brackets", tag: "Indoor Season" },
    { icon: "🏸", name: "Badminton", desc: "Fast-paced court action in seasonal knockout cups", tag: "Indoor Season" },
    { icon: "🎮", name: "Esports", desc: "Next-generation Esports battles — strategy, reflex, dominance ⚡", tag: "Coming Soon" },
    { icon: "🏋️", name: "Athletics", desc: "Track, field and endurance events for campus athletes", tag: "Coming Soon" },
];

const TEAM_TOURNAMENTS = ['LEAGUE M', 'INTRA-MUSC FUTSAL', 'INTRA FUTSAL', 'UPL', 'MPL-15'];
const INDOOR_TOURNAMENTS = ['INDOOR GAMES SEASON-15'];

const DEFAULT_INDOOR_GAMES = [
    { id: 1, game_name: 'Chess', game_icon: '♟️', entry_type: 'solo' },
    { id: 2, game_name: 'Carrom', game_icon: '🎯', entry_type: 'solo' },
    { id: 4, game_name: 'Badminton', game_icon: '🏸', entry_type: 'solo' },
    { id: 6, game_name: 'Ludo', game_icon: '🎲', entry_type: 'team' },
    { id: 7, game_name: 'Dart', game_icon: '🎯', entry_type: 'solo' },
    { id: 9, game_name: 'eFootball', game_icon: '🎮', entry_type: 'solo' },
    { id: 10, game_name: 'fifa26', game_icon: '🎮', entry_type: 'solo' },
];

// ─── Registration Page ─────────────────────────────────────────────────────────
function RegistrationPage({ dark, clubEvents, showToast, goTo }) {
    const [regTab, setRegTab] = useState('tournament');
    const d = dark;
    const csrfToken = () => document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';

    const [formData, setFormData] = useState({ player_name: '', email: '', phone: '', event_name: '', game_name: '', department: '' });
    const [isSaving, setIsSaving] = useState(false);
    const [indoorGames, setIndoorGames] = useState([]);
    const [loadingGames, setLoadingGames] = useState(false);

    const selectedEvent = clubEvents.find(e => e.title === formData.event_name);
    const isIndoor = selectedEvent && formData.event_name.toUpperCase().includes('INDOOR');

    useEffect(() => {
        if (!formData.event_name) return;
        if (formData.event_name.toUpperCase().includes('INDOOR')) {
            setLoadingGames(true);
            fetch(`/tournament-games/${encodeURIComponent(formData.event_name)}`)
                .then(r => r.json())
                .then(d => { setIndoorGames(d.data?.length > 0 ? d.data : DEFAULT_INDOOR_GAMES); })
                .catch(() => setIndoorGames(DEFAULT_INDOOR_GAMES))
                .finally(() => setLoadingGames(false));
        }
    }, [formData.event_name]);

    const handleSoloSubmit = async (e) => {
        e.preventDefault();
        if (isIndoor && !formData.game_name) return showToast('Please select a game!', 'error');
        setIsSaving(true);
        try {
            const res = await fetch('/register-event', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-CSRF-TOKEN': csrfToken() },
                body: JSON.stringify(formData)
            });
            const result = await res.json();
            if (res.ok && result.success) {
                showToast('Registration successful! 🎯', 'success');
                setFormData({ player_name: '', email: '', phone: '', event_name: '', game_name: '', department: '' });
                goTo('events');
            } else {
                showToast(result.message || 'Registration failed.', 'error');
            }
        } catch { showToast('Connection failed!', 'error'); }
        finally { setIsSaving(false); }
    };

    const [teamForm, setTeamForm] = useState({
        tournament_name: '', team_name: '', captain_name: '',
        captain_phone: '', captain_email: '', department: '',
        players: Array(11).fill('').map((_, i) => ({ name: '', role: i === 0 ? 'Captain' : '' }))
    });
    const [isTeamSaving, setIsTeamSaving] = useState(false);

    const teamTournaments = clubEvents.filter(e => TEAM_TOURNAMENTS.includes(e.title));
    const selectedTeamEvent = clubEvents.find(e => e.title === teamForm.tournament_name);
    const isCricket = selectedTeamEvent?.title?.includes('UPL') || selectedTeamEvent?.title?.includes('MPL');
    const playerCount = isCricket ? 11 : 5;

    const handleTeamSubmit = async (e) => {
        e.preventDefault();
        const filledPlayers = teamForm.players.slice(0, playerCount).filter(p => p.name.trim());
        if (filledPlayers.length < 3) return showToast('Please add at least 3 players!', 'error');
        setIsTeamSaving(true);
        try {
            const res = await fetch('/register-team', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-CSRF-TOKEN': csrfToken() },
                body: JSON.stringify({ ...teamForm, players: filledPlayers })
            });
            const result = await res.json();
            if (res.ok && result.success) {
                showToast('Team registered successfully! 🏆', 'success');
                setTeamForm({ tournament_name: '', team_name: '', captain_name: '', captain_phone: '', captain_email: '', department: '', players: Array(11).fill('').map((_, i) => ({ name: '', role: i === 0 ? 'Captain' : '' })) });
                goTo('events');
            } else {
                showToast(result.message || 'Team registration failed.', 'error');
            }
        } catch { showToast('Connection failed!', 'error'); }
        finally { setIsTeamSaving(false); }
    };

    const [memberForm, setMemberForm] = useState({ name: '', student_id: '', department: '', semester: '', phone: '', email: '' });
    const [isMemberSaving, setIsMemberSaving] = useState(false);

    const handleMemberSubmit = async (e) => {
        e.preventDefault();
        setIsMemberSaving(true);
        try {
            const res = await fetch('/register-member', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-CSRF-TOKEN': csrfToken() },
                body: JSON.stringify(memberForm)
            });
            const result = await res.json();
            if (res.ok && result.success) {
                showToast('Welcome to MU Sports Club! 🎉', 'success');
                setMemberForm({ name: '', student_id: '', department: '', semester: '', phone: '', email: '' });
            } else {
                showToast(result.message || 'Registration failed.', 'error');
            }
        } catch { showToast('Connection failed!', 'error'); }
        finally { setIsMemberSaving(false); }
    };

    const inputCls = `w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`;
    const labelCls = `block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`;

    return (
        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in-up">
            <div className="text-center">
                <p className={`text-xs font-black uppercase tracking-widest mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>MU Sports Club</p>
                <h1 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Registration Portal</h1>
                <p className={`text-xs mt-2 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Choose what you'd like to sign up for</p>
            </div>

            <div className={`flex rounded-2xl p-1.5 gap-1.5 ${d ? 'bg-slate-800' : 'bg-slate-100'}`}>
                {[
                    { key: 'member', label: '🎽 Join as Member', desc: 'New club member' },
                    { key: 'tournament', label: '🏅 Solo Tournament', desc: 'Individual entry' },
                    { key: 'team', label: '🏆 Team Entry', desc: 'Football / Cricket' },
                ].map(tab => (
                    <button key={tab.key} onClick={() => setRegTab(tab.key)}
                        className={`flex-1 py-3 px-2 rounded-xl text-center transition-all ${regTab === tab.key
                            ? (d ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-white text-blue-950 shadow-md')
                            : (d ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700')}`}>
                        <span className="block text-xs font-black">{tab.label}</span>
                        <span className={`block text-[9px] mt-0.5 ${regTab === tab.key ? 'opacity-70' : 'opacity-50'}`}>{tab.desc}</span>
                    </button>
                ))}
            </div>

            {regTab === 'member' && (
                <div className={`p-7 rounded-3xl border shadow-xl ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">🎽</span>
                        <div>
                            <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-blue-950'}`}>Club Member Registration</h2>
                            <p className={`text-xs ${d ? 'text-slate-400' : 'text-slate-500'}`}>Join MUSC as an official member of Metropolitan University</p>
                        </div>
                    </div>
                    <form onSubmit={handleMemberSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className={labelCls}>Full Name *</label>
                                <input type="text" value={memberForm.name} onChange={e => setMemberForm({ ...memberForm, name: e.target.value })} className={inputCls} placeholder="Your full name" required />
                            </div>
                            <div>
                                <label className={labelCls}>Student ID *</label>
                                <input type="text" value={memberForm.student_id} onChange={e => setMemberForm({ ...memberForm, student_id: e.target.value })} className={inputCls} placeholder="e.g. 011223456" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className={labelCls}>Department *</label>
                                <select value={memberForm.department} onChange={e => setMemberForm({ ...memberForm, department: e.target.value })} className={inputCls} required>
                                    <option value="">Select Department</option>
                                    {['CSE', 'EEE', 'BBA', 'English', 'Law', 'Architecture', 'Civil', 'Pharmacy', 'Economics', 'Sociology'].map(dep => (
                                        <option key={dep} value={dep}>{dep}</option>
                                    ))}
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelCls}>Semester *</label>
                                <select value={memberForm.semester} onChange={e => setMemberForm({ ...memberForm, semester: e.target.value })} className={inputCls} required>
                                    <option value="">Select Semester</option>
                                    {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'].map(s => (
                                        <option key={s} value={s}>{s} Semester</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className={labelCls}>Phone *</label>
                                <input type="text" value={memberForm.phone} onChange={e => setMemberForm({ ...memberForm, phone: e.target.value })} className={inputCls} placeholder="018XXXXXXXX" required />
                            </div>
                            <div>
                                <label className={labelCls}>Email *</label>
                                <input type="email" value={memberForm.email} onChange={e => setMemberForm({ ...memberForm, email: e.target.value })} className={inputCls} placeholder="you@example.com" required />
                            </div>
                        </div>
                        <button type="submit" disabled={isMemberSaving}
                            className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl mt-2 ${isMemberSaving ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.02]'} ${d ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950' : 'bg-gradient-to-r from-blue-800 to-blue-950 text-white'}`}>
                            {isMemberSaving ? '⏳ Processing...' : '🎽 Join MU Sports Club'}
                        </button>
                    </form>
                </div>
            )}

            {regTab === 'tournament' && (
                <div className={`p-7 rounded-3xl border shadow-xl ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">🏅</span>
                        <div>
                            <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-blue-950'}`}>Tournament Registration</h2>
                            <p className={`text-xs ${d ? 'text-slate-400' : 'text-slate-500'}`}>Individual entry for solo and indoor events</p>
                        </div>
                    </div>
                    <form onSubmit={handleSoloSubmit} className="space-y-4">
                        <div>
                            <label className={labelCls}>Full Name *</label>
                            <input type="text" value={formData.player_name} onChange={e => setFormData({ ...formData, player_name: e.target.value })} className={inputCls} placeholder="e.g. Leo Messi" required />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className={labelCls}>Email *</label>
                                <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={inputCls} placeholder="you@example.com" required />
                            </div>
                            <div>
                                <label className={labelCls}>Phone *</label>
                                <input type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className={inputCls} placeholder="018XXXXXXXX" required />
                            </div>
                        </div>
                        <div>
                            <label className={labelCls}>Department / Institution *</label>
                            <input type="text" value={formData.department} onChange={e => setFormData({ ...formData, department: e.target.value })} className={inputCls} placeholder="e.g. CSE, MU" required />
                        </div>
                        <div>
                            <label className={labelCls}>Select Tournament *</label>
                            <select value={formData.event_name} onChange={e => setFormData({ ...formData, event_name: e.target.value, game_name: '' })} className={inputCls} required>
                                <option value="">-- Select Tournament --</option>
                                {clubEvents.filter(ev => !TEAM_TOURNAMENTS.includes(ev.title)).map((ev, i) => (
                                    <option key={i} value={ev.title}>{ev.title} · {ev.date || ev.event_date}</option>
                                ))}
                            </select>
                        </div>

                        {isIndoor && (
                            <div className="space-y-3">
                                <label className={labelCls}>Select Your Game *</label>
                                {loadingGames ? (
                                    <div className="flex items-center gap-2 py-4">
                                        <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                                        <span className={`text-sm ${d ? 'text-slate-400' : 'text-slate-500'}`}>Loading games...</span>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {indoorGames.map((game) => (
                                            <button type="button" key={game.id}
                                                onClick={() => setFormData({ ...formData, game_name: game.game_name })}
                                                className={`p-3 rounded-xl border-2 text-center transition-all hover:scale-105 ${formData.game_name === game.game_name
                                                    ? (d ? 'border-amber-500 bg-amber-500/20' : 'border-blue-600 bg-blue-50')
                                                    : (d ? 'border-slate-700 hover:border-slate-500 bg-slate-800' : 'border-slate-200 hover:border-blue-300 bg-white')}`}>
                                                <span className="text-2xl block mb-1">{game.game_icon}</span>
                                                <span className={`text-[10px] font-black uppercase tracking-wider block ${formData.game_name === game.game_name ? (d ? 'text-amber-400' : 'text-blue-700') : (d ? 'text-slate-300' : 'text-slate-600')}`}>{game.game_name}</span>
                                                <span className={`text-[9px] mt-0.5 block ${d ? 'text-slate-500' : 'text-slate-400'}`}>{game.entry_type === 'team' ? '👥 Team' : '👤 Solo'}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                                {formData.game_name && (
                                    <div className={`flex items-center gap-2 p-3 rounded-xl ${d ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-blue-50 border border-blue-200'}`}>
                                        <span className="text-lg">{indoorGames.find(g => g.game_name === formData.game_name)?.game_icon}</span>
                                        <span className={`text-xs font-black ${d ? 'text-amber-400' : 'text-blue-700'}`}>Selected: {formData.game_name}</span>
                                        <button type="button" onClick={() => setFormData({ ...formData, game_name: '' })} className="ml-auto text-slate-400 hover:text-red-500 text-sm">×</button>
                                    </div>
                                )}
                            </div>
                        )}

                        {formData.event_name && TEAM_TOURNAMENTS.includes(formData.event_name) && (
                            <div className={`p-4 rounded-xl border ${d ? 'bg-blue-950 border-blue-900' : 'bg-blue-50 border-blue-200'}`}>
                                <p className={`text-xs font-black ${d ? 'text-blue-300' : 'text-blue-700'}`}>⚽ This is a team tournament! Please use the <strong>Team Entry</strong> tab instead.</p>
                                <button type="button" onClick={() => setRegTab('team')} className="mt-2 text-xs font-black bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-500 transition-colors">
                                    Switch to Team Entry →
                                </button>
                            </div>
                        )}

                        <button type="submit" disabled={isSaving || TEAM_TOURNAMENTS.includes(formData.event_name)}
                            className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl ${(isSaving || TEAM_TOURNAMENTS.includes(formData.event_name)) ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.02]'} ${d ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950' : 'bg-gradient-to-r from-blue-800 to-blue-950 text-white'}`}>
                            {isSaving ? '⏳ Processing...' : '🏅 Submit Registration'}
                        </button>
                    </form>
                </div>
            )}

            {regTab === 'team' && (
                <div className={`p-7 rounded-3xl border shadow-xl ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">🏆</span>
                        <div>
                            <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-blue-950'}`}>Team Registration</h2>
                            <p className={`text-xs ${d ? 'text-slate-400' : 'text-slate-500'}`}>Register your team for Football, Futsal or Cricket</p>
                        </div>
                    </div>
                    <form onSubmit={handleTeamSubmit} className="space-y-5">
                        <div>
                            <label className={labelCls}>Select Tournament *</label>
                            <select value={teamForm.tournament_name} onChange={e => setTeamForm({ ...teamForm, tournament_name: e.target.value })} className={inputCls} required>
                                <option value="">-- Select Team Tournament --</option>
                                {teamTournaments.map((ev, i) => (
                                    <option key={i} value={ev.title}>{ev.title} · {ev.date || ev.event_date}</option>
                                ))}
                            </select>
                        </div>

                        {teamForm.tournament_name && (
                            <div className={`p-3 rounded-xl ${d ? 'bg-slate-800 border border-slate-700' : 'bg-blue-50 border border-blue-100'}`}>
                                <p className={`text-xs font-black ${d ? 'text-blue-400' : 'text-blue-700'}`}>
                                    {isCricket ? '🏏 Cricket — Register full squad (11 players + subs)' : '⚽ Football/Futsal — Register your team (min 5 players)'}
                                </p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className={labelCls}>Team Name *</label>
                                <input type="text" value={teamForm.team_name} onChange={e => setTeamForm({ ...teamForm, team_name: e.target.value })} className={inputCls} placeholder="e.g. Thunder FC" required />
                            </div>
                            <div>
                                <label className={labelCls}>Department / Institution *</label>
                                <input type="text" value={teamForm.department} onChange={e => setTeamForm({ ...teamForm, department: e.target.value })} className={inputCls} placeholder="e.g. CSE, MU" required />
                            </div>
                        </div>

                        <div className={`p-4 rounded-2xl border space-y-3 ${d ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                            <p className={`text-xs font-black uppercase tracking-wider ${d ? 'text-amber-400' : 'text-blue-700'}`}>👑 Captain Information</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div>
                                    <label className={labelCls}>Captain Name *</label>
                                    <input type="text" value={teamForm.captain_name} onChange={e => setTeamForm({ ...teamForm, captain_name: e.target.value })} className={inputCls} placeholder="Captain's name" required />
                                </div>
                                <div>
                                    <label className={labelCls}>Captain Phone *</label>
                                    <input type="text" value={teamForm.captain_phone} onChange={e => setTeamForm({ ...teamForm, captain_phone: e.target.value })} className={inputCls} placeholder="018XXXXXXXX" required />
                                </div>
                                <div>
                                    <label className={labelCls}>Captain Email *</label>
                                    <input type="email" value={teamForm.captain_email} onChange={e => setTeamForm({ ...teamForm, captain_email: e.target.value })} className={inputCls} placeholder="captain@example.com" required />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className={`text-xs font-black uppercase tracking-wider ${d ? 'text-amber-400' : 'text-blue-700'}`}>
                                👥 Squad Players ({isCricket ? '11 players + subs' : 'up to ' + playerCount + ' players'})
                            </p>
                            <div className="space-y-2">
                                {Array.from({ length: isCricket ? 15 : 9 }, (_, i) => (
                                    <div key={i} className="flex gap-2 items-center">
                                        <span className={`text-[10px] font-black w-6 flex-shrink-0 text-center ${d ? 'text-slate-500' : 'text-slate-400'}`}>{i + 1}</span>
                                        <input
                                            type="text"
                                            value={teamForm.players[i]?.name || ''}
                                            onChange={e => {
                                                const newPlayers = [...teamForm.players];
                                                newPlayers[i] = { ...newPlayers[i], name: e.target.value };
                                                setTeamForm({ ...teamForm, players: newPlayers });
                                            }}
                                            className={`flex-1 p-2.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500' : 'border-slate-200 focus:border-blue-400'}`}
                                            placeholder={i === 0 ? 'Player 1 (Captain)' : i < (isCricket ? 11 : playerCount) ? `Player ${i + 1}` : `Sub ${i - (isCricket ? 10 : playerCount - 1)}`}
                                        />
                                        {i < (isCricket ? 11 : playerCount) && (
                                            <select
                                                value={teamForm.players[i]?.role || ''}
                                                onChange={e => {
                                                    const newPlayers = [...teamForm.players];
                                                    newPlayers[i] = { ...newPlayers[i], role: e.target.value };
                                                    setTeamForm({ ...teamForm, players: newPlayers });
                                                }}
                                                className={`w-28 p-2.5 border rounded-xl outline-none text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700' : 'border-slate-200'}`}>
                                                <option value="">Role</option>
                                                {isCricket
                                                    ? ['Batsman', 'Bowler', 'All-rounder', 'Wicketkeeper', 'Captain', 'Vice Captain'].map(r => <option key={r} value={r}>{r}</option>)
                                                    : ['Forward', 'Midfielder', 'Defender', 'Goalkeeper', 'Captain'].map(r => <option key={r} value={r}>{r}</option>)
                                                }
                                            </select>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button type="submit" disabled={isTeamSaving}
                            className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl ${isTeamSaving ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.02]'} ${d ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950' : 'bg-gradient-to-r from-blue-800 to-blue-950 text-white'}`}>
                            {isTeamSaving ? '⏳ Registering Team...' : '🏆 Register Team'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

// ─── Admin Panel ──────────────────────────────────────────────────────────────
const EMPTY_MEMBER = { name: '', email: '', phone: '', committee_role: '' };

function AdminPanel({ onLogout, dark }) {
    const [adminTab, setAdminTab] = useState('registrations');
    const [registrations, setRegistrations] = useState([]);
    const [members, setMembers] = useState([]);
    const [clubMembers, setClubMembers] = useState([]);
    const [teamRegs, setTeamRegs] = useState([]);
    const [events, setEvents] = useState([]);
    const [tournamentGames, setTournamentGames] = useState([]);
    const [newsItems, setNewsItems] = useState([]);
    const [galleryPhotos, setGalleryPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [eventForm, setEventForm] = useState({ title: '', type: 'Tournament', date: '', details: '' });
    const [editingEvent, setEditingEvent] = useState(null);
    const [gameForm, setGameForm] = useState({ tournament_name: '', game_name: '', game_icon: '🎯', entry_type: 'solo', max_players: 1 });
    const [memberForm, setMemberForm] = useState(EMPTY_MEMBER);
    const [editingMember, setEditingMember] = useState(null);
    const [newsForm, setNewsForm] = useState({ title: '', content: '', is_pinned: false });
    const [editingNews, setEditingNews] = useState(null);
    const [galleryForm, setGalleryForm] = useState({ tournament_name: '', image_url: '', caption: '' });

    const showToast = (msg, type = 'success') => setToast({ message: msg, type });
    const csrfToken = () => document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';

    // fetcher now checks response.ok and surfaces the real error instead of a generic failure
    const fetcher = async (url) => {
        const res = await fetch(url, { headers: { 'X-Admin-Key': ADMIN_PASSWORD } });
        if (!res.ok) {
            let msg = `Request failed (${res.status})`;
            try { const errData = await res.json(); if (errData.error) msg = errData.error; } catch {}
            throw new Error(msg);
        }
        return res.json();
    };

    const fetchData = async (tab) => {
        setLoading(true);
        try {
            if (tab === 'registrations') { const d = await fetcher('/admin/registrations'); if (d.success) setRegistrations(d.data); }
            else if (tab === 'members') { const d = await fetcher('/admin/members'); if (d.success) setMembers(d.data); }
            else if (tab === 'club-members') { const d = await fetcher('/admin/club-members'); if (d.success) setClubMembers(d.data); }
            else if (tab === 'teams') { const d = await fetcher('/admin/team-registrations'); if (d.success) setTeamRegs(d.data); }
            else if (tab === 'events') { const d = await fetcher('/admin/events'); if (d.success) setEvents(d.data); }
            else if (tab === 'games') { const d = await fetcher('/admin/tournament-games'); if (d.success) setTournamentGames(d.data); }
            else if (tab === 'news') { const d = await fetcher('/admin/news'); if (d.success) setNewsItems(d.data); }
            else if (tab === 'gallery') { const d = await fetcher('/admin/match-gallery'); if (d.success) setGalleryPhotos(d.data); }
        } catch (err) {
            showToast(err.message || 'Failed to load data', 'error');
        }
        setLoading(false);
    };

    useEffect(() => { fetchData(adminTab); setSidebarOpen(false); }, [adminTab]);

    const deleteReg = async (id) => {
        if (!confirm('Delete?')) return;
        await fetch(`/admin/registrations/${id}`, { method: 'DELETE', headers: { 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() } });
        fetchData('registrations');
        showToast('Deleted!');
    };

    const saveEvent = async () => {
        const url = editingEvent ? `/admin/events/${editingEvent.id}` : '/admin/events';
        const method = editingEvent ? 'PUT' : 'POST';
        await fetch(url, { method, headers: { 'Content-Type': 'application/json', 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() }, body: JSON.stringify(eventForm) });
        showToast(editingEvent ? 'Updated!' : 'Added!');
        setEventForm({ title: '', type: 'Tournament', date: '', details: '' });
        setEditingEvent(null);
        fetchData('events');
    };

    const deleteEvent = async (id) => {
        if (!confirm('Delete event?')) return;
        await fetch(`/admin/events/${id}`, { method: 'DELETE', headers: { 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() } });
        showToast('Deleted!');
        fetchData('events');
    };

    const saveGame = async () => {
        await fetch('/admin/tournament-games', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() }, body: JSON.stringify(gameForm) });
        showToast('Game added!');
        setGameForm({ tournament_name: '', game_name: '', game_icon: '🎯', entry_type: 'solo', max_players: 1 });
        fetchData('games');
    };

    const deleteGame = async (id) => {
        if (!confirm('Delete game?')) return;
        await fetch(`/admin/tournament-games/${id}`, { method: 'DELETE', headers: { 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() } });
        showToast('Deleted!');
        fetchData('games');
    };

    const saveMember = async () => {
        if (!memberForm.name || !memberForm.email) return showToast('Name and email required', 'error');
        const url = editingMember ? `/admin/members/${editingMember.id}` : '/admin/members';
        const method = editingMember ? 'PUT' : 'POST';
        const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json', 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() }, body: JSON.stringify(memberForm) });
        const data = await res.json();
        if (data.success) {
            showToast(editingMember ? 'Member updated!' : 'Member added!');
            setMemberForm(EMPTY_MEMBER); setEditingMember(null);
            fetchData('members');
        } else showToast('Save failed', 'error');
    };

    const deleteMember = async (id) => {
        if (!confirm('Remove this member?')) return;
        await fetch(`/admin/members/${id}`, { method: 'DELETE', headers: { 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() } });
        showToast('Removed!'); fetchData('members');
    };

    const startEditMember = (m) => {
        setEditingMember(m);
        setMemberForm({ name: m.name || '', email: m.email || '', phone: m.phone || '', committee_role: m.committee_role || '' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const saveNews = async () => {
        if (!newsForm.title || !newsForm.content) return showToast('Title and content required', 'error');
        const url = editingNews ? `/admin/news/${editingNews.id}` : '/admin/news';
        const method = editingNews ? 'PUT' : 'POST';
        const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json', 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() }, body: JSON.stringify(newsForm) });
        const data = await res.json();
        if (data.success) {
            showToast(editingNews ? 'News updated!' : 'News posted!');
            setNewsForm({ title: '', content: '', is_pinned: false });
            setEditingNews(null);
            fetchData('news');
        } else showToast('Save failed', 'error');
    };

    const deleteNews = async (id) => {
        if (!confirm('Delete this news post?')) return;
        await fetch(`/admin/news/${id}`, { method: 'DELETE', headers: { 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() } });
        showToast('Deleted!'); fetchData('news');
    };

    const startEditNews = (n) => {
        setEditingNews(n);
        setNewsForm({ title: n.title, content: n.content, is_pinned: !!n.is_pinned });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const saveGalleryPhoto = async () => {
        if (!galleryForm.tournament_name || !galleryForm.image_url) return showToast('Tournament and image URL required', 'error');
        await fetch('/admin/match-gallery', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() }, body: JSON.stringify(galleryForm) });
        showToast('Photo added!'); setGalleryForm({ tournament_name: '', image_url: '', caption: '' }); fetchData('gallery');
    };

    const deleteGalleryPhoto = async (id) => {
        if (!confirm('Delete this photo?')) return;
        await fetch(`/admin/match-gallery/${id}`, { method: 'DELETE', headers: { 'X-Admin-Key': ADMIN_PASSWORD, 'X-CSRF-TOKEN': csrfToken() } });
        showToast('Deleted!'); fetchData('gallery');
    };

    const d = dark;

    const tabs = [
        { key: 'registrations', label: 'Solo Registrations', icon: '📋', count: registrations.length },
        { key: 'teams', label: 'Team Registrations', icon: '⚽', count: teamRegs.length },
        { key: 'club-members', label: 'Club Members', icon: '🎽', count: clubMembers.length },
        { key: 'members', label: 'Committee', icon: '👥', count: members.length },
        { key: 'events', label: 'Events', icon: '🏆', count: events.length },
        { key: 'games', label: 'Tournament Games', icon: '🎮', count: tournamentGames.length },
        { key: 'news', label: 'News', icon: '📰', count: newsItems.length },
        { key: 'gallery', label: 'Match Gallery', icon: '📸', count: galleryPhotos.length },
    ];

    const inputCls = `p-3 border rounded-xl text-sm outline-none w-full ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-400 text-slate-800 bg-white'}`;

    const filteredReg = registrations.filter(r =>
        r.player_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.event_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <style>{`
            @keyframes adminFadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
            .animate-fade-in-up { animation: adminFadeUp 0.45s ease both; }
            .admin-btn { transition: transform 0.15s ease, opacity 0.15s ease; }
            .admin-btn:active { transform: scale(0.95); }
        `}</style>
        <div className={`min-h-screen ${d ? 'bg-slate-950' : 'bg-slate-100'}`}>
            <nav className="bg-slate-900 border-b border-amber-500/20 sticky top-0 z-50 shadow-xl">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-white p-1.5 bg-slate-800 rounded-lg admin-btn">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {sidebarOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                        <span className="text-xl">🛡️</span>
                        <div>
                            <p className="text-white font-black text-sm tracking-wider">MUSC ADMIN</p>
                            <p className="text-amber-400 text-[9px] uppercase tracking-widest hidden sm:block">Management Dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="hidden sm:block text-xs font-bold px-3 py-1 rounded-full bg-emerald-900 text-emerald-400">🟢 Online</span>
                        <button onClick={onLogout} className="text-xs font-black bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-xl transition-colors admin-btn">🚪 Logout</button>
                    </div>
                </div>
                {sidebarOpen && (
                    <div className="md:hidden bg-slate-800 border-t border-slate-700 px-4 py-3 space-y-1 animate-fade-in-up">
                        {tabs.map(tab => (
                            <button key={tab.key} onClick={() => setAdminTab(tab.key)}
                                className={`w-full text-left px-4 py-3 rounded-xl font-black text-sm flex items-center justify-between transition-all admin-btn ${adminTab === tab.key ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:bg-slate-700'}`}>
                                <span>{tab.icon} {tab.label}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${adminTab === tab.key ? 'bg-slate-950/30' : 'bg-slate-600 text-slate-300'}`}>{tab.count}</span>
                            </button>
                        ))}
                        <div className="grid grid-cols-4 gap-2 pt-2">
                            {[
                                { label: 'Solo', value: registrations.length },
                                { label: 'Teams', value: teamRegs.length },
                                { label: 'Members', value: clubMembers.length },
                                { label: 'Events', value: events.length },
                            ].map((s, i) => (
                                <div key={i} className="bg-slate-900 rounded-lg p-2 text-center">
                                    <p className="text-amber-400 font-black text-sm">{s.value}</p>
                                    <p className="text-slate-400 text-[9px] uppercase font-bold">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex flex-col md:flex-row gap-4 md:gap-6">
                <aside className="hidden md:flex flex-col w-56 flex-shrink-0 space-y-2">
                    <div className={`p-4 rounded-2xl border mb-2 ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                        <p className={`text-[10px] font-black uppercase tracking-widest mb-3 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Navigation</p>
                        {tabs.map(tab => (
                            <button key={tab.key} onClick={() => setAdminTab(tab.key)}
                                className={`w-full text-left px-3 py-2.5 rounded-xl font-black text-xs flex items-center justify-between mb-1 transition-all admin-btn ${adminTab === tab.key ? 'bg-amber-500 text-slate-950 shadow-md' : (d ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100')}`}>
                                <span>{tab.icon} {tab.label}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${adminTab === tab.key ? 'bg-slate-950/20' : (d ? 'bg-slate-700 text-slate-400' : 'bg-slate-200 text-slate-500')}`}>{tab.count}</span>
                            </button>
                        ))}
                    </div>
                    <div className={`p-4 rounded-2xl border space-y-2 ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                        <p className={`text-[10px] font-black uppercase tracking-widest ${d ? 'text-slate-400' : 'text-slate-500'}`}>Quick Stats</p>
                        {[
                            { label: 'Solo Signups', value: registrations.length, color: 'text-amber-500' },
                            { label: 'Team Entries', value: teamRegs.length, color: 'text-emerald-500' },
                            { label: 'Club Members', value: clubMembers.length, color: 'text-blue-500' },
                            { label: 'Active Events', value: events.length, color: 'text-purple-500' },
                        ].map((s, i) => (
                            <div key={i} className="flex justify-between items-center">
                                <span className={`text-xs ${d ? 'text-slate-400' : 'text-slate-500'}`}>{s.label}</span>
                                <span className={`font-black text-sm ${s.color}`}>{s.value}</span>
                            </div>
                        ))}
                    </div>
                </aside>

                <div className="flex-1 min-w-0 space-y-5">

                    {adminTab === 'registrations' && (
                        <div className="animate-fade-in-up space-y-4">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-slate-800'}`}>Solo Registrations <span className="text-amber-500">({filteredReg.length})</span></h2>
                                <button onClick={() => fetchData('registrations')} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl admin-btn">🔄 Refresh</button>
                            </div>
                            <input type="text" placeholder="🔍 Search by name, email, event..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className={`w-full p-3 border rounded-xl text-sm outline-none ${d ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-amber-500' : 'bg-white border-slate-200 text-slate-800 focus:border-blue-400'}`} />
                            {loading ? <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>
                            : filteredReg.length === 0 ? <div className={`text-center py-20 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}><p className="text-5xl mb-3">📭</p><p className={`font-black text-sm ${d ? 'text-slate-400' : 'text-slate-500'}`}>No registrations yet</p></div>
                            : (
                                <>
                                    <div className="md:hidden space-y-3">
                                        {filteredReg.map((r, i) => (
                                            <div key={r.id} className={`p-4 rounded-2xl border animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`} style={{ animationDelay: `${i * 40}ms` }}>
                                                <div className="flex justify-between items-start mb-2">
                                                    <div><p className={`font-black text-sm ${d ? 'text-white' : 'text-slate-800'}`}>{r.player_name}</p><p className={`text-xs ${d ? 'text-slate-400' : 'text-slate-500'}`}>{r.email}</p></div>
                                                    <button onClick={() => deleteReg(r.id)} className="text-[10px] font-black bg-red-100 text-red-700 px-2 py-1 rounded-lg admin-btn">🗑</button>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="bg-amber-100 text-amber-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg">{r.event_name}</span>
                                                    {r.game_name && <span className="bg-blue-100 text-blue-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg">{r.game_name}</span>}
                                                    <span className={`text-[9px] font-bold px-2 py-1 rounded-lg ${d ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>{r.department}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`hidden md:block overflow-x-auto rounded-2xl border ${d ? 'border-slate-800' : 'border-slate-200'}`}>
                                        <table className={`w-full text-sm ${d ? 'bg-slate-900' : 'bg-white'}`}>
                                            <thead><tr className={`text-[10px] font-black uppercase tracking-wider ${d ? 'bg-slate-800 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
                                                {['#', 'Name', 'Email', 'Phone', 'Tournament', 'Game', 'Dept', 'Date', ''].map(h => <th key={h} className="px-4 py-3 text-left">{h}</th>)}
                                            </tr></thead>
                                            <tbody>{filteredReg.map((r, i) => (
                                                <tr key={r.id} className={`border-t ${d ? 'border-slate-800 hover:bg-slate-800/50' : 'border-slate-100 hover:bg-slate-50'}`}>
                                                    <td className={`px-4 py-3 text-xs font-black ${d ? 'text-slate-500' : 'text-slate-400'}`}>{i + 1}</td>
                                                    <td className={`px-4 py-3 font-bold ${d ? 'text-white' : 'text-slate-800'}`}>{r.player_name}</td>
                                                    <td className={`px-4 py-3 text-xs ${d ? 'text-slate-300' : 'text-slate-600'}`}>{r.email}</td>
                                                    <td className={`px-4 py-3 text-xs ${d ? 'text-slate-300' : 'text-slate-600'}`}>{r.phone}</td>
                                                    <td className="px-4 py-3"><span className="bg-amber-100 text-amber-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg">{r.event_name}</span></td>
                                                    <td className="px-4 py-3">{r.game_name && <span className="bg-blue-100 text-blue-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg">{r.game_name}</span>}</td>
                                                    <td className={`px-4 py-3 text-xs ${d ? 'text-slate-300' : 'text-slate-600'}`}>{r.department}</td>
                                                    <td className={`px-4 py-3 text-xs ${d ? 'text-slate-400' : 'text-slate-500'}`}>{r.created_at ? new Date(r.created_at).toLocaleDateString() : '—'}</td>
                                                    <td className="px-4 py-3"><button onClick={() => deleteReg(r.id)} className="text-[10px] font-black bg-red-100 hover:bg-red-200 text-red-700 px-2.5 py-1 rounded-lg admin-btn">🗑</button></td>
                                                </tr>
                                            ))}</tbody>
                                        </table>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {adminTab === 'teams' && (
                        <div className="animate-fade-in-up space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-slate-800'}`}>Team Registrations <span className="text-amber-500">({teamRegs.length})</span></h2>
                                <button onClick={() => fetchData('teams')} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl admin-btn">🔄 Refresh</button>
                            </div>
                            {loading ? <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>
                            : teamRegs.length === 0 ? <div className={`text-center py-20 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}><p className="text-5xl mb-3">⚽</p><p className={`font-black text-sm ${d ? 'text-slate-400' : 'text-slate-500'}`}>No team registrations yet</p></div>
                            : (
                                <div className="space-y-4">
                                    {teamRegs.map((t, i) => {
                                        let players = [];
                                        try { players = typeof t.players === 'string' ? JSON.parse(t.players) : t.players || []; } catch {}
                                        return (
                                            <div key={t.id} className={`p-5 rounded-2xl border animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`} style={{ animationDelay: `${i * 40}ms` }}>
                                                <div className="flex justify-between items-start mb-3">
                                                    <div>
                                                        <p className={`font-black text-base ${d ? 'text-white' : 'text-slate-800'}`}>{t.team_name}</p>
                                                        <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg">{t.tournament_name}</span>
                                                    </div>
                                                    <span className={`text-xs ${d ? 'text-slate-400' : 'text-slate-500'}`}>{t.created_at ? new Date(t.created_at).toLocaleDateString() : '—'}</span>
                                                </div>
                                                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-3 p-3 rounded-xl ${d ? 'bg-slate-800' : 'bg-slate-50'}`}>
                                                    <p className={d ? 'text-slate-300' : 'text-slate-600'}><span className="font-black">Captain:</span> {t.captain_name}</p>
                                                    <p className={d ? 'text-slate-300' : 'text-slate-600'}><span className="font-black">Phone:</span> {t.captain_phone}</p>
                                                    <p className={d ? 'text-slate-300' : 'text-slate-600'}><span className="font-black">Dept:</span> {t.department}</p>
                                                </div>
                                                {players.length > 0 && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {players.filter(p => p.name).map((p, pi) => (
                                                            <span key={pi} className={`text-[9px] font-bold px-2 py-1 rounded-lg ${d ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                                                                {pi + 1}. {p.name} {p.role && `(${p.role})`}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}

                    {adminTab === 'club-members' && (
                        <div className="animate-fade-in-up space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-slate-800'}`}>Club Members <span className="text-amber-500">({clubMembers.length})</span></h2>
                                <button onClick={() => fetchData('club-members')} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl admin-btn">🔄 Refresh</button>
                            </div>
                            {loading ? <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>
                            : clubMembers.length === 0 ? <div className={`text-center py-20 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}><p className="text-5xl mb-3">🎽</p><p className={`font-black text-sm ${d ? 'text-slate-400' : 'text-slate-500'}`}>No club members yet</p></div>
                            : (
                                <div className="space-y-3">
                                    {clubMembers.map((m, i) => (
                                        <div key={m.id} className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center gap-3 animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`} style={{ animationDelay: `${i * 40}ms` }}>
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                                                {m.name?.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <p className={`font-black text-sm ${d ? 'text-white' : 'text-slate-800'}`}>{m.name}</p>
                                                <p className={`text-xs ${d ? 'text-slate-400' : 'text-slate-500'}`}>{m.email} · {m.phone}</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-blue-100 text-blue-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg">{m.department}</span>
                                                <span className={`text-[9px] font-bold px-2 py-1 rounded-lg ${d ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>{m.semester} Sem</span>
                                                <span className={`text-[9px] font-bold px-2 py-1 rounded-lg ${d ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>ID: {m.student_id}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {adminTab === 'members' && (
                        <div className="animate-fade-in-up space-y-5">
                            <div className={`p-4 sm:p-5 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                                <h3 className={`font-black text-base mb-4 ${d ? 'text-white' : 'text-slate-800'}`}>{editingMember ? '✏️ Edit Member' : '➕ Add Committee Member'}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                    <input type="text" placeholder="Full Name *" value={memberForm.name} onChange={e => setMemberForm({ ...memberForm, name: e.target.value })} className={inputCls} />
                                    <input type="email" placeholder="Email *" value={memberForm.email} onChange={e => setMemberForm({ ...memberForm, email: e.target.value })} className={inputCls} />
                                    <input type="text" placeholder="Phone" value={memberForm.phone} onChange={e => setMemberForm({ ...memberForm, phone: e.target.value })} className={inputCls} />
                                    <input type="text" placeholder="Committee Role (e.g. PRESIDENT)" value={memberForm.committee_role} onChange={e => setMemberForm({ ...memberForm, committee_role: e.target.value })} className={inputCls} />
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    <button onClick={saveMember} className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl admin-btn">{editingMember ? '💾 Update' : '➕ Add'}</button>
                                    {editingMember && <button onClick={() => { setEditingMember(null); setMemberForm(EMPTY_MEMBER); }} className={`px-5 py-2.5 font-black text-xs rounded-xl admin-btn ${d ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-700'}`}>Cancel</button>}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-slate-800'}`}>Committee <span className="text-amber-500">({members.length})</span></h2>
                                <button onClick={() => fetchData('members')} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl admin-btn">🔄 Refresh</button>
                            </div>
                            {loading ? <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>
                            : (
                                <>
                                    <div className="md:hidden space-y-3">
                                        {members.map((m, i) => (
                                            <div key={m.id} className={`p-4 rounded-2xl border animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`} style={{ animationDelay: `${i * 40}ms` }}>
                                                <div className="flex justify-between items-start mb-2">
                                                    <div><p className={`font-black text-sm ${d ? 'text-white' : 'text-slate-800'}`}>{m.name}</p><p className={`text-xs ${d ? 'text-slate-400' : 'text-slate-500'}`}>{m.email}</p></div>
                                                    <div className="flex gap-1">
                                                        <button onClick={() => startEditMember(m)} className="text-[10px] font-black bg-blue-100 text-blue-700 px-2 py-1 rounded-lg admin-btn">✏️</button>
                                                        <button onClick={() => deleteMember(m.id)} className="text-[10px] font-black bg-red-100 text-red-700 px-2 py-1 rounded-lg admin-btn">🗑</button>
                                                    </div>
                                                </div>
                                                <span className="bg-blue-100 text-blue-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg">{m.committee_role || m.system_role || 'Member'}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`hidden md:block overflow-x-auto rounded-2xl border ${d ? 'border-slate-800' : 'border-slate-200'}`}>
                                        <table className={`w-full text-sm ${d ? 'bg-slate-900' : 'bg-white'}`}>
                                            <thead><tr className={`text-[10px] font-black uppercase tracking-wider ${d ? 'bg-slate-800 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
                                                {['#', 'Name', 'Email', 'Role', 'Phone', 'Actions'].map(h => <th key={h} className="px-4 py-3 text-left">{h}</th>)}
                                            </tr></thead>
                                            <tbody>{members.map((m, i) => (
                                                <tr key={m.id} className={`border-t ${d ? 'border-slate-800 hover:bg-slate-800/50' : 'border-slate-100 hover:bg-slate-50'}`}>
                                                    <td className={`px-4 py-3 text-xs font-black ${d ? 'text-slate-500' : 'text-slate-400'}`}>{i + 1}</td>
                                                    <td className={`px-4 py-3 font-bold ${d ? 'text-white' : 'text-slate-800'}`}>{m.name}</td>
                                                    <td className={`px-4 py-3 text-xs ${d ? 'text-slate-300' : 'text-slate-600'}`}>{m.email}</td>
                                                    <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg">{m.committee_role || m.system_role || 'Member'}</span></td>
                                                    <td className={`px-4 py-3 text-xs ${d ? 'text-slate-300' : 'text-slate-600'}`}>{m.phone || '—'}</td>
                                                    <td className="px-4 py-3 flex gap-2">
                                                        <button onClick={() => startEditMember(m)} className="text-[10px] font-black bg-blue-100 hover:bg-blue-200 text-blue-700 px-2.5 py-1 rounded-lg admin-btn">✏️</button>
                                                        <button onClick={() => deleteMember(m.id)} className="text-[10px] font-black bg-red-100 hover:bg-red-200 text-red-700 px-2.5 py-1 rounded-lg admin-btn">🗑</button>
                                                    </td>
                                                </tr>
                                            ))}</tbody>
                                        </table>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {adminTab === 'events' && (
                        <div className="animate-fade-in-up space-y-5">
                            <div className={`p-4 sm:p-5 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                                <h3 className={`font-black text-base mb-4 ${d ? 'text-white' : 'text-slate-800'}`}>{editingEvent ? '✏️ Edit Event' : '➕ Add Event'}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                    <input type="text" placeholder="Event Title *" value={eventForm.title} onChange={e => setEventForm({ ...eventForm, title: e.target.value })} className={inputCls} />
                                    <select value={eventForm.type} onChange={e => setEventForm({ ...eventForm, type: e.target.value })} className={inputCls}>
                                        {['Tournament', 'Indoor Tournament', 'League Match', 'Domestic Tournament'].map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                    <input type="date" value={eventForm.date} onChange={e => setEventForm({ ...eventForm, date: e.target.value })} className={inputCls} />
                                    <input type="text" placeholder="Details" value={eventForm.details} onChange={e => setEventForm({ ...eventForm, details: e.target.value })} className={inputCls} />
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    <button onClick={saveEvent} className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl admin-btn">{editingEvent ? '💾 Update' : '➕ Add'}</button>
                                    {editingEvent && <button onClick={() => { setEditingEvent(null); setEventForm({ title: '', type: 'Tournament', date: '', details: '' }); }} className={`px-5 py-2.5 font-black text-xs rounded-xl admin-btn ${d ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-700'}`}>Cancel</button>}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-slate-800'}`}>All Events <span className="text-amber-500">({events.length})</span></h2>
                                <button onClick={() => fetchData('events')} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl admin-btn">🔄 Refresh</button>
                            </div>
                            {loading ? <div className="flex justify-center py-10"><div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>
                            : <div className="space-y-3">{events.map((ev, i) => (
                                <div key={ev.id} className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center gap-3 animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`} style={{ animationDelay: `${i * 40}ms` }}>
                                    <div className="flex-1">
                                        <p className={`font-black text-sm ${d ? 'text-white' : 'text-slate-800'}`}>{ev.title}</p>
                                        <div className="flex gap-2 mt-1">
                                            <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase px-2 py-0.5 rounded-lg">{ev.type}</span>
                                            <span className={`text-[9px] ${d ? 'text-slate-400' : 'text-slate-500'}`}>📅 {ev.event_date || ev.date || '—'}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={() => { setEditingEvent(ev); setEventForm({ title: ev.title, type: ev.type || 'Tournament', date: ev.event_date || ev.date || '', details: ev.details || '' }); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-[10px] font-black bg-blue-100 hover:bg-blue-200 text-blue-700 px-2.5 py-1 rounded-lg admin-btn">✏️</button>
                                        <button onClick={() => deleteEvent(ev.id)} className="text-[10px] font-black bg-red-100 hover:bg-red-200 text-red-700 px-2.5 py-1 rounded-lg admin-btn">🗑</button>
                                    </div>
                                </div>
                            ))}</div>}
                        </div>
                    )}

                    {adminTab === 'games' && (
                        <div className="animate-fade-in-up space-y-5">
                            <div className={`p-4 sm:p-5 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                                <h3 className={`font-black text-base mb-4 ${d ? 'text-white' : 'text-slate-800'}`}>➕ Add Game to Tournament</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                    <input type="text" placeholder="Tournament Name (exact)" value={gameForm.tournament_name} onChange={e => setGameForm({ ...gameForm, tournament_name: e.target.value })} className={inputCls} />
                                    <input type="text" placeholder="Game Name" value={gameForm.game_name} onChange={e => setGameForm({ ...gameForm, game_name: e.target.value })} className={inputCls} />
                                    <input type="text" placeholder="Icon emoji 🎯" value={gameForm.game_icon} onChange={e => setGameForm({ ...gameForm, game_icon: e.target.value })} className={inputCls} />
                                    <select value={gameForm.entry_type} onChange={e => setGameForm({ ...gameForm, entry_type: e.target.value })} className={inputCls}>
                                        <option value="solo">Solo</option>
                                        <option value="team">Team</option>
                                    </select>
                                </div>
                                <button onClick={saveGame} className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl admin-btn">➕ Add Game</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-slate-800'}`}>Tournament Games <span className="text-amber-500">({tournamentGames.length})</span></h2>
                                <button onClick={() => fetchData('games')} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl admin-btn">🔄 Refresh</button>
                            </div>
                            {loading ? <div className="flex justify-center py-10"><div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>
                            : <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{tournamentGames.map((g, i) => (
                                <div key={g.id} className={`p-4 rounded-2xl border flex items-center gap-3 animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`} style={{ animationDelay: `${i * 40}ms` }}>
                                    <span className="text-2xl">{g.game_icon}</span>
                                    <div className="flex-1">
                                        <p className={`font-black text-sm ${d ? 'text-white' : 'text-slate-800'}`}>{g.game_name}</p>
                                        <p className={`text-[9px] ${d ? 'text-slate-400' : 'text-slate-500'}`}>{g.tournament_name}</p>
                                        <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded ${g.entry_type === 'team' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>{g.entry_type}</span>
                                    </div>
                                    <button onClick={() => deleteGame(g.id)} className="text-[10px] font-black bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded-lg admin-btn">🗑</button>
                                </div>
                            ))}</div>}
                        </div>
                    )}

                    {adminTab === 'news' && (
                        <div className="animate-fade-in-up space-y-5">
                            <div className={`p-4 sm:p-5 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                                <h3 className={`font-black text-base mb-4 ${d ? 'text-white' : 'text-slate-800'}`}>{editingNews ? '✏️ Edit News' : '📰 Post News'}</h3>
                                <input type="text" placeholder="Title *" value={newsForm.title} onChange={e => setNewsForm({ ...newsForm, title: e.target.value })} className={`${inputCls} mb-3`} />
                                <textarea placeholder="Content *" rows="3" value={newsForm.content} onChange={e => setNewsForm({ ...newsForm, content: e.target.value })} className={`${inputCls} mb-3`}></textarea>
                                <label className="flex items-center gap-2 text-xs mb-3">
                                    <input type="checkbox" checked={newsForm.is_pinned} onChange={e => setNewsForm({ ...newsForm, is_pinned: e.target.checked })} />
                                    <span className={d ? 'text-slate-300' : 'text-slate-600'}>📌 Pin this post</span>
                                </label>
                                <div className="flex gap-3 flex-wrap">
                                    <button onClick={saveNews} className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl admin-btn">{editingNews ? '💾 Update' : '➕ Post News'}</button>
                                    {editingNews && <button onClick={() => { setEditingNews(null); setNewsForm({ title: '', content: '', is_pinned: false }); }} className={`px-5 py-2.5 font-black text-xs rounded-xl admin-btn ${d ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-700'}`}>Cancel</button>}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-slate-800'}`}>All News <span className="text-amber-500">({newsItems.length})</span></h2>
                                <button onClick={() => fetchData('news')} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl admin-btn">🔄 Refresh</button>
                            </div>
                            {loading ? <div className="flex justify-center py-10"><div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>
                            : newsItems.length === 0 ? <div className={`text-center py-16 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}><p className="text-4xl mb-2">📰</p><p className={`font-black text-sm ${d ? 'text-slate-400' : 'text-slate-500'}`}>No news posted yet</p></div>
                            : (
                                <div className="space-y-3">
                                    {newsItems.map((n, i) => (
                                        <div key={n.id} className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`} style={{ animationDelay: `${i * 40}ms` }}>
                                            <div className="flex-1 min-w-0">
                                                {n.is_pinned && <span className="bg-amber-100 text-amber-800 text-[9px] font-black uppercase px-2 py-0.5 rounded-lg mr-2">📌 Pinned</span>}
                                                <span className={`font-black text-sm ${d ? 'text-white' : 'text-slate-800'}`}>{n.title}</span>
                                                <p className={`text-xs mt-1 ${d ? 'text-slate-400' : 'text-slate-500'}`}>{n.content}</p>
                                            </div>
                                            <div className="flex gap-2 flex-shrink-0">
                                                <button onClick={() => startEditNews(n)} className="text-[10px] font-black bg-blue-100 hover:bg-blue-200 text-blue-700 px-2.5 py-1 rounded-lg admin-btn">✏️ Edit</button>
                                                <button onClick={() => deleteNews(n.id)} className="text-[10px] font-black bg-red-100 hover:bg-red-200 text-red-700 px-2.5 py-1 rounded-lg admin-btn">🗑</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {adminTab === 'gallery' && (
                        <div className="animate-fade-in-up space-y-5">
                            <div className={`p-4 sm:p-5 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                                <h3 className={`font-black text-base mb-4 ${d ? 'text-white' : 'text-slate-800'}`}>📸 Add Match Photo</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                    <input type="text" placeholder="Tournament Name (exact)" value={galleryForm.tournament_name} onChange={e => setGalleryForm({ ...galleryForm, tournament_name: e.target.value })} className={inputCls} />
                                    <input type="text" placeholder="Image URL (imgbb link)" value={galleryForm.image_url} onChange={e => setGalleryForm({ ...galleryForm, image_url: e.target.value })} className={inputCls} />
                                    <input type="text" placeholder="Caption" value={galleryForm.caption} onChange={e => setGalleryForm({ ...galleryForm, caption: e.target.value })} className={`${inputCls} sm:col-span-2`} />
                                </div>
                                <button onClick={saveGalleryPhoto} className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl admin-btn">➕ Add Photo</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <h2 className={`text-xl font-black ${d ? 'text-white' : 'text-slate-800'}`}>Gallery Photos <span className="text-amber-500">({galleryPhotos.length})</span></h2>
                                <button onClick={() => fetchData('gallery')} className="text-xs font-black bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl admin-btn">🔄 Refresh</button>
                            </div>
                            {loading ? <div className="flex justify-center py-10"><div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>
                            : galleryPhotos.length === 0 ? <div className={`text-center py-16 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}><p className="text-4xl mb-2">📸</p><p className={`font-black text-sm ${d ? 'text-slate-400' : 'text-slate-500'}`}>No photos yet</p></div>
                            : (
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {galleryPhotos.map((p, i) => (
                                        <div key={p.id} className={`rounded-2xl border overflow-hidden relative animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`} style={{ animationDelay: `${i * 40}ms` }}>
                                            <img src={p.image_url} className="w-full h-24 object-cover" alt={p.caption} />
                                            <button onClick={() => deleteGalleryPhoto(p.id)} className="absolute top-1 right-1 text-[10px] font-black bg-red-600 text-white px-2 py-0.5 rounded-lg admin-btn">🗑</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </div>
        </>
    );
}

function AdminLogin({ onLogin, dark }) {
    const [pw, setPw] = useState('');
    const [error, setError] = useState('');
    const d = dark;
    const handleLogin = () => { if (pw === ADMIN_PASSWORD) onLogin(); else { setError('Wrong password.'); setPw(''); } };
    return (
        <div className={`min-h-screen flex items-center justify-center p-4 ${d ? 'bg-slate-950' : 'bg-slate-100'}`}>
            <div className={`w-full max-w-sm p-8 rounded-3xl border shadow-2xl animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-center mb-8">
                    <span className="text-5xl block mb-3 animate-float">🛡️</span>
                    <h2 className={`text-2xl font-black ${d ? 'text-white' : 'text-blue-950'}`}>Admin Access</h2>
                    <p className={`text-xs mt-1 ${d ? 'text-slate-400' : 'text-slate-500'}`}>MU Sports Club Dashboard</p>
                </div>
                <div className="space-y-4">
                    <input type="password" placeholder="Enter admin password" value={pw} onChange={e => { setPw(e.target.value); setError(''); }} onKeyDown={e => e.key === 'Enter' && handleLogin()}
                        className={`w-full p-3.5 border rounded-xl text-sm outline-none transition-all ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-slate-200 focus:border-blue-500 text-slate-800'}`} />
                    {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
                    <button onClick={handleLogin} className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl transition-all hover:scale-[1.02] shadow-lg">
                        Access Dashboard →
                    </button>
                </div>
            </div>
        </div>
    );
}

function DigitalIDCard({ dark }) {
    const [identifier, setIdentifier] = useState('');
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const d = dark;

    const lookupMember = async () => {
        if (!identifier.trim()) return;
        setLoading(true); setError('');
        try {
            const res = await fetch(`/member-card/${encodeURIComponent(identifier)}`);
            const data = await res.json();
            if (data.success) setMember(data.data);
            else { setError('No member found with that Student ID or Email'); setMember(null); }
        } catch { setError('Connection failed'); }
        setLoading(false);
    };

    const qrUrl = member ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(member.student_id + '|' + member.name)}` : '';

    return (
        <div className="max-w-md mx-auto space-y-6 animate-fade-in-up">
            <div className="text-center">
                <p className={`text-xs font-black uppercase tracking-widest mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>Member Services</p>
                <h1 className={`text-2xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Digital ID Card</h1>
                <p className={`text-xs mt-2 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Enter your Student ID or Email to view your card</p>
            </div>
            <div className="flex gap-2">
                <input type="text" value={identifier} onChange={e => setIdentifier(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && lookupMember()}
                    placeholder="Student ID or Email"
                    className={`flex-1 p-3.5 border rounded-xl outline-none text-sm ${d ? 'bg-slate-800 border-slate-700 text-white focus:border-amber-500' : 'border-blue-100 focus:border-blue-500'}`} />
                <button onClick={lookupMember} disabled={loading}
                    className="px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition-all">
                    {loading ? '⏳' : '🔍 Find'}
                </button>
            </div>
            {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
            {member && (
                <div className="rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
                    <div className="p-6 text-white relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest text-amber-400">Official Member Card</p>
                                <p className="text-lg font-black tracking-wider">MU SPORTS CLUB</p>
                            </div>
                            <span className="text-2xl">🎽</span>
                        </div>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-black text-xl flex-shrink-0">
                                {member.name?.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-black text-base truncate">{member.name}</p>
                                <p className="text-blue-300 text-xs">{member.department} · {member.semester} Semester</p>
                                <p className="text-blue-300 text-xs">ID: {member.student_id}</p>
                            </div>
                            <div className="w-16 h-16 bg-white rounded-lg p-1 flex-shrink-0">
                                <img src={qrUrl} alt="QR Code" className="w-full h-full" />
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-[10px] text-blue-300 relative z-10">
                            <span>📧 {member.email}</span>
                            <span>📞 {member.phone}</span>
                        </div>
                    </div>
                    <div className="bg-amber-500 text-slate-950 text-center py-2 text-[10px] font-black uppercase tracking-widest">
                        Metropolitan University, Sylhet
                    </div>
                </div>
            )}
        </div>
    );
}

function MatchGallery({ dark, clubEvents }) {
    const [selectedTournament, setSelectedTournament] = useState('All');
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lightbox, setLightbox] = useState(null);
    const d = dark;

    useEffect(() => {
        setLoading(true);
        const url = selectedTournament === 'All' ? '/match-gallery' : `/match-gallery/${encodeURIComponent(selectedTournament)}`;
        fetch(url).then(r => r.json()).then(d => setPhotos(d.data || [])).catch(() => setPhotos([])).finally(() => setLoading(false));
    }, [selectedTournament]);

    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="text-center">
                <p className={`text-xs font-black uppercase tracking-widest mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>Captured Moments</p>
                <h1 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Match Gallery</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {['All', ...clubEvents.map(e => e.title)].map(t => (
                    <button key={t} onClick={() => setSelectedTournament(t)}
                        className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${selectedTournament === t
                            ? (d ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-blue-950 text-white border-blue-950')
                            : (d ? 'border-slate-700 text-slate-400' : 'border-blue-200 text-slate-500')}`}>
                        {t}
                    </button>
                ))}
            </div>
            {loading ? (
                <div className="flex justify-center py-20"><div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>
            ) : photos.length === 0 ? (
                <div className={`text-center py-20 rounded-2xl border ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <p className="text-5xl mb-3">📸</p>
                    <p className={`font-black text-sm ${d ? 'text-slate-400' : 'text-slate-500'}`}>No photos yet for this tournament</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {photos.map((p, i) => (
                        <div key={p.id} className="gallery-item relative rounded-2xl overflow-hidden cursor-pointer border h-40 animate-fade-in-up"
                            style={{ animationDelay: `${i * 40}ms` }} onClick={() => setLightbox(p)}>
                            <img src={p.image_url} alt={p.caption} className="w-full h-full object-cover" />
                            {p.caption && (
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-2">
                                    <span className="text-white text-[9px] font-black">{p.caption}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            {lightbox && (
                <div className="fixed inset-0 z-[9998] bg-slate-950/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
                    <div className="relative max-w-2xl w-full" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setLightbox(null)} className="absolute -top-10 right-0 text-white text-3xl font-black">×</button>
                        <img src={lightbox.image_url} alt={lightbox.caption} className="w-full rounded-2xl" />
                        {lightbox.caption && <p className="text-center text-white text-sm mt-3">{lightbox.caption}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

function NewsFeed({ dark }) {
    const [news, setNews] = useState([]);
    useEffect(() => { fetch('/news').then(r => r.json()).then(d => setNews(d.data || [])).catch(() => {}); }, []);
    const d = dark;
    if (news.length === 0) return (
        <div className="text-center py-16">
            <p className="text-4xl mb-3">📰</p>
            <p className={`font-black text-sm ${d ? 'text-slate-400' : 'text-slate-500'}`}>No news posted yet — check back soon!</p>
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="text-center">
                <p className={`text-xs font-black uppercase tracking-widest mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>Stay Updated</p>
                <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Latest News</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {news.map((n, i) => (
                    <div key={n.id} className={`p-5 rounded-2xl border animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100 shadow-sm'}`} style={{ animationDelay: `${i * 60}ms` }}>
                        {n.is_pinned && <span className="inline-block bg-amber-100 text-amber-800 text-[9px] font-black uppercase px-2 py-1 rounded-lg mb-2">📌 Pinned</span>}
                        <h3 className={`font-black text-base ${d ? 'text-white' : 'text-blue-950'}`}>{n.title}</h3>
                        <p className={`text-xs mt-2 leading-relaxed ${d ? 'text-slate-400' : 'text-slate-500'}`}>{n.content}</p>
                        <p className={`text-[10px] mt-3 ${d ? 'text-slate-500' : 'text-slate-400'}`}>{new Date(n.created_at).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
function MUSportsClubApp() {
    const dbEvents = window.backendEvents || [];
    const dbUsers = window.backendUsers || [];

    const [currentTab, setCurrentTab] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [toast, setToast] = useState(null);
    const [lightboxImg, setLightboxImg] = useState(null);
    const [collabForm, setCollabForm] = useState({ name: '', org: '', note: '' });
    const [attachedFile, setAttachedFile] = useState(null);
    const [statsRef, statsInView] = useInView(0.3);
    const [activeFilter, setActiveFilter] = useState('All');
    const [isAdmin, setIsAdmin] = useState(false);
    const [showAdminLogin, setShowAdminLogin] = useState(false);

    const showToast = useCallback((message, type = 'success') => setToast({ message, type }), []);

    useEffect(() => { document.documentElement.classList.toggle('dark', darkMode); }, [darkMode]);
    useEffect(() => { if (window.location.hash === '#admin') setShowAdminLogin(true); }, []);

    const goTo = (tab) => { setCurrentTab(tab); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };

    const handleFileChange = (e) => {
        const f = e.target.files?.[0];
        if (f) { setAttachedFile(f); showToast(`"${f.name}" attached!`, 'success'); }
    };

    const handleSayHello = (e) => {
        e.preventDefault();
        const sub = encodeURIComponent(`MU Sports Club Collaboration - ${collabForm.org || 'Proposal'}`);
        const body = encodeURIComponent(`Hi MU Sports Club,\n\nI am ${collabForm.name} from ${collabForm.org || 'N/A'}.\n\nMessage:\n${collabForm.note}`);
        window.location.href = `mailto:sports.club@mu.edu?subject=${sub}&body=${body}`;
    };

    const defaultCommittee = [
        { id: 'c1', name: "Abu Sufian", committee_role: "PRESIDENT", email: "president@mu.edu", phone: "01741197388", profile_picture: "https://imgur.com/JKxNhUe.jpg" },
        { id: 'c2', name: "Shahriyar Rifat", committee_role: "GENERAL SECRETARY", email: "gs.sports@mu.edu", phone: "01308893939", profile_picture: "https://imgur.com/g2U3xIF.jpg" },
        { id: 'c3', name: "Abdullah Jabid", committee_role: "ORGANISING SECRETARY", email: "organizer@mu.edu", phone: "01317242586", profile_picture: "https://imgur.com/ToF8tAU.jpg" },
        { id: 'c4', name: "MD.Saiful Islam", committee_role: "ORGANISING SECRETARY", email: "oyon@mu.edu", phone: "01607896330", profile_picture: "https://imgur.com/xXCKpLf.jpg" },
        { id: 'c5', name: "MD.Salman", committee_role: "ORGANISING SECRETARY", email: "salman@mu.edu", phone: "01737599603", profile_picture: "https://imgur.com/VQY5Xt6.jpg" },
        { id: 'c6', name: "Adnan Wahdi", committee_role: "THE GREAT TREASURER", email: "treasurer@mu.edu", phone: "01724926802", profile_picture: "https://imgur.com/cUx7PjL.jpg" },
        { id: 'c7', name: "Syed Hassan", committee_role: "EVENT COORDINATOR", email: "hassan@mu.edu", phone: "01957636327", profile_picture: "https://imgur.com/46oGbg7.jpg" },
        { id: 'c8', name: "MD.Sodrul Hasan Sohi", committee_role: "OFFICE SECRETARY", email: "sohi@mu.edu", phone: "01316586392", profile_picture: "https://imgur.com/p5UAaHB.jpg" },
        { id: 'c9', name: "Muhtasim Labib", committee_role: "Esports Event Coordinator", email: "labib@mu.edu", phone: "", profile_picture: "https://imgur.com/zNFGArI.jpg" },
        { id: 'c10', name: "Mifrat Hussain Chahat", committee_role: "Public Relations Secretary", email: "chahat@mu.edu", phone: "", profile_picture: "https://imgur.com/CrHZ8B8.jpg" },
        { id: 'c11', name: "Tajul Islam", committee_role: "PRESS SECRETARY", email: "taj@mu.edu", phone: "", profile_picture: "https://imgur.com/wYFDVb4.jpg" },
        { id: 'c13', name: "Md.Mahiyan Noor Mahi", committee_role: "PRESS SECRETARY", email: "motu@mu.edu", phone: "01756510942", profile_picture: "https://imgur.com/PIsCE4u.jpg" },
        { id: 'c14', name: "Miftahur Rahman Omi", committee_role: "CHIEF PHOTOGRAPHER", email: "leo@mu.edu", phone: "01887457293", profile_picture: "https://imgur.com/sgjKYoV.jpg" },
        { id: 'c15', name: "Bijay Paul", committee_role: "Logistics Secretary", email: "paul@mu.edu", phone: "", profile_picture: "https://imgur.com/9TeyKxy.jpg" },
        { id: 'c16', name: "Samir Ahmed", committee_role: "Executive for Design", email: "samir@mu.edu", phone: "", profile_picture: "https://imgur.com/py1LVG5.jpg" },
        { id: 'c17', name: "Mansur Rahman Manna", committee_role: "Volunteer Coordinator", email: "manna@mu.edu", phone: "", profile_picture: "https://imgur.com/iUVviQ7.jpg" },
    ];
    const committeeList = [...defaultCommittee, ...dbUsers];

    const clubEvents = dbEvents.length >= 6 ? dbEvents : [
        { title: "INDOOR GAMES SEASON-15", type: "Indoor Tournament", date: "July 5, 2026", details: "Annual ultimate indoor showdown — Chess, Carrom, Table Tennis, Badminton & more at MU Lounge." },
        { title: "INTRA-MUSC FUTSAL", type: "Indoor Tournament", date: "August 15, 2026", details: "Strategic futsal tournament targeting MUSC members. Team-based knockout format." },
        { title: "LEAGUE M", type: "League Match", date: "Sep 02, 2026", details: "Premium inter-university 9-a-side main football league." },
        { title: "INTRA FUTSAL", type: "League Match", date: "Oct 20, 2026", details: "The ultimate futsal competition for all MU students." },
        { title: "UPL", type: "Domestic Tournament", date: "Nov 15, 2026", details: "The grand cricket tournament under international standard rules." },
        { title: "MPL-15", type: "Tournament", date: "Jan 20, 2027", details: "Inter-university level grand cricket event. Full squad registration required." },
    ];

    const galleryImages = [
        { src: "https://imgur.com/WA9AgTj.jpg", label: "MPL Champions 2026" },
        { src: "https://imgur.com/jq26MPc.jpg", label: "BBQ Night 2026" },
        { src: "https://imgur.com/Ce6pAoN.jpg", label: "Committee Handover 2024-25" },
        { src: "https://imgur.com/v3jndUb.jpg", label: "Farewell MR.President 24-25" },
        { src: "https://imgur.com/vR6QBef.jpg", label: "Arrival of MR.15" },
        { src: "https://imgur.com/UJwcCaC.jpg", label: "League M Champions 2025" },
    ];

    const eventTypes = ['All', ...Array.from(new Set(clubEvents.map(e => e.type || 'Tournament')))];
    const filteredEvents = activeFilter === 'All' ? clubEvents : clubEvents.filter(e => (e.type || 'Tournament') === activeFilter);

    const roleColors = {
        'PRESIDENT': 'from-amber-500 to-amber-700',
        'GENERAL SECRETARY': 'from-blue-600 to-blue-800',
        'ORGANISING SECRETARY': 'from-indigo-500 to-indigo-700',
        'THE GREAT TREASURER': 'from-emerald-500 to-emerald-700',
        'EVENT COORDINATOR': 'from-purple-500 to-purple-700',
        'OFFICE SECRETARY': 'from-rose-500 to-rose-700',
        'PRESS SECRETARY': 'from-cyan-500 to-cyan-700',
        'CHIEF PHOTOGRAPHER': 'from-orange-500 to-orange-700',
        'Executive Member': 'from-slate-500 to-slate-700',
    };

    const d = darkMode;

    if (showAdminLogin && !isAdmin) return <AdminLogin dark={d} onLogin={() => setIsAdmin(true)} />;
    if (isAdmin) return <AdminPanel dark={d} onLogout={() => { setIsAdmin(false); setShowAdminLogin(false); window.location.hash = ''; }} />;

    const navItems = [
        { key: 'home', label: 'Home' },
        { key: 'about', label: 'About' },
        { key: 'committee', label: 'Executive Panel' },
        { key: 'events', label: 'Tournaments' },
        { key: 'news', label: 'News' },
        { key: 'gallery', label: 'Match Gallery' },
    ];

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bebas+Neue&display=swap');
            * { box-sizing: border-box; }
            body { font-family: 'Inter', sans-serif; margin: 0; }
            @keyframes fadeInUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
            @keyframes slideUp  { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
            @keyframes pulse-glow { 0%,100% { box-shadow:0 0 0 0 rgba(245,158,11,0); } 50% { box-shadow:0 0 24px 6px rgba(245,158,11,.3); } }
            @keyframes float  { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
            @keyframes shimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
            @keyframes spin-slow { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
            @keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
            @keyframes softGlow { 0%,100% { opacity:0.5; } 50% { opacity:1; } }
            .animate-fade-in-up  { animation:fadeInUp .6s ease both; }
            .animate-slide-up    { animation:slideUp  .4s ease both; }
            .animate-float       { animation:float    3s ease-in-out infinite; }
            .animate-pulse-glow  { animation:pulse-glow 2.2s ease-in-out infinite; }
            .animate-spin-slow   { animation:spin-slow 12s linear infinite; }
            .animate-spin        { animation:spin .8s linear infinite; }
            .hero-gradient      { background:linear-gradient(135deg,#0f172a 0%,#1e3a8a 45%,#0f172a 100%); }
            .hero-gradient-dark { background:linear-gradient(135deg,#020617 0%,#0f172a 50%,#020617 100%); }
            .gold-shimmer { background:linear-gradient(90deg,#f59e0b,#fbbf24,#f59e0b); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 3s linear infinite; }
            .glass-card { backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); }
            .stat-card { background:var(--card-bg,#fff); animation:fadeInUp .6s ease both; }
            .nav-link { position:relative; padding-bottom:2px; }
            .nav-link::after { content:''; position:absolute; left:0; bottom:-2px; width:0; height:2px; background:#f59e0b; transition:width .25s ease; border-radius:2px; }
            .nav-link:hover::after,.nav-link.active::after { width:100%; }
            .sport-card:hover .sport-icon { animation:float 1.5s ease-in-out infinite; }
            .gallery-item:hover img { transform:scale(1.08); }
            .gallery-item img { transition:transform .4s ease; }
            .committee-card { transition:transform .3s ease,box-shadow .3s ease; }
            .committee-card:hover { transform:translateY(-6px); box-shadow:0 20px 40px rgba(0,0,0,.15); }
            .event-card { transition:all .3s ease; }
            .event-card:hover { transform:translateY(-4px); }
            ::-webkit-scrollbar { width:6px; }
            ::-webkit-scrollbar-track { background:transparent; }
            ::-webkit-scrollbar-thumb { background:#334155; border-radius:3px; }
            .membership-benefit:hover .benefit-icon { transform:scale(1.15) rotate(-5deg); }
            .benefit-icon { transition:transform .3s ease; }
            .logo-badge { transition: box-shadow 0.3s ease, transform 0.3s ease; }
.logo-badge:hover { transform: scale(1.06); }
            .brand-divider { width: 1px; background: linear-gradient(to bottom, transparent, rgba(148,163,184,0.3), transparent); }
        `}</style>

        <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${d ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>

            {/* ── PREMIUM HEADER ── */}
            <nav className={`shadow-2xl sticky top-0 z-50 border-b transition-colors duration-300 ${d ? 'bg-slate-900/95 border-slate-800' : 'bg-slate-950/95 border-amber-500/20'}`} style={{ backdropFilter: 'blur(20px)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center gap-3">

                       {/* Left — Club Brand */}
{/* Left — Club Brand */}
<div className="flex items-center gap-3 cursor-pointer group min-w-0 shrink-0" onClick={() => goTo('home')}>
<div className="logo-badge w-11 h-11 md:w-12 md:h-12 rounded-full shrink-0 bg-blue-50 p-1.5 shadow-lg shadow-amber-500/10 ring-1 ring-white/10">
    <img src="https://i.imgur.com/RBtBKlX.jpg" alt="Club Logo" className="w-full h-full object-contain rounded-full" />
</div>
   <div className="min-w-0 block">
    <span className="text-sm md:text-lg font-black tracking-widest block text-white leading-none whitespace-nowrap">MU SPORTS CLUB</span>
                <span className="text-red-500">METROPOLITAN</span> <span className="text-white">UNIVERSITY . Sylhet</span>
</div>
</div>

                        {/* Center — Nav Links (desktop) */}
                        <div className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-gray-300 flex-1 justify-center">
                            {navItems.map(item => (
                                <button key={item.key} onClick={() => goTo(item.key)}
                                    className={`nav-link transition ${currentTab === item.key ? 'text-amber-400 active' : 'hover:text-white'}`}>
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Right — Actions + MU Logo */}
                 <div className="flex items-center gap-3 shrink-0">
    <button onClick={() => setDarkMode(!d)} className="hidden sm:block text-amber-400 text-base hover:scale-110 transition-transform">
        {d ? '☀️' : '🌙'}
    </button>
    <button onClick={() => goTo('register')} className="hidden sm:inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-[10px] md:text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20 animate-pulse-glow">
        Register!
    </button>

    <div className="brand-divider h-9 hidden sm:block"></div>

    <div className="hidden sm:flex items-center gap-2.5">
        <div className="flex flex-col items-end leading-none">
            <span className="text-[8px] md:text-[9px] tracking-[.15em] font-black uppercase whitespace-nowrap">
                <span className="text-red-500">METROPOLITAN</span> <span className="text-white">UNIVERSITY</span>
            </span>
            <span className="text-[7px] md:text-[8px] tracking-[.25em] text-slate-400 font-semibold mt-0.5">SYLHET</span>
        </div>
        <div className="logo-badge w-11 h-11 md:w-12 md:h-12 rounded-full shrink-0 bg-blue-50 p-1.5 shadow-md ring-1 ring-white/10">
            <img src="https://i.imgur.com/SGXqF5C.jpg" alt="MU Logo" className="w-full h-full object-contain rounded-full" />
        </div>
    </div>

    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2 -mr-2 flex-shrink-0">
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
    </button>
</div>
                    </div>
                </div>

    {isMenuOpen && (
    <div className="lg:hidden bg-slate-900/98 border-t border-slate-800 px-4 pt-3 pb-5 space-y-1 text-base font-semibold text-white" style={{ backdropFilter: 'blur(20px)' }}>
        {navItems.map(item => (
            <button key={item.key} onClick={() => goTo(item.key)}
                className={`block w-full text-left py-2.5 px-3 rounded-lg transition-colors ${currentTab === item.key ? 'text-amber-400 bg-amber-400/10' : 'hover:text-amber-400 hover:bg-white/5'}`}>
                {item.label}
            </button>
        ))}
        <button onClick={() => setDarkMode(!d)}
            className="flex items-center justify-between w-full text-left py-2.5 px-3 rounded-lg transition-colors hover:text-amber-400 hover:bg-white/5">
            <span>{d ? 'Light Mode' : 'Dark Mode'}</span>
            <span className="text-lg">{d ? '☀️' : '🌙'}</span>
        </button>
        <button onClick={() => goTo('register')}
            className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black py-3 rounded-xl mt-3 shadow-lg">
            Register Now 🚀
        </button>
    </div>
)}
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {currentTab === 'home' && (
                    <div className="space-y-20">
                        <div className={`relative rounded-3xl overflow-hidden text-center text-white py-20 md:py-28 px-6 animate-fade-in-up ${d ? 'hero-gradient-dark' : 'hero-gradient'}`}>
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-spin-slow"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative z-10 space-y-6">
                                <span className="inline-block bg-gradient-to-r from-red-600/20 via-blue-700/20 to-cyan-500/20 border border-red-400/40 text-white text-[10px] font-black uppercase tracking-[.25em] px-5 py-2 rounded-full backdrop-blur-2xl">🏆 Official Sports Arena · Metropolitan University</span>
                                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase" style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '.02em' }}>
                                    <span className="block text-white">Born To Rule</span>
                                    <span className="block gold-shimmer">Over The Game</span>
                                </h1>
                                <p className="text-blue-100/70 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                                    <span className="block text-white font-black">Welcome to the Royal Club</span>
                                    We cultivate elite sportsmanship, celebrate strategic campus victories, and manage athletic leagues with honour at Metropolitan University, Sylhet.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 pt-4">
                                    <button onClick={() => goTo('events')} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-8 py-4 rounded-2xl text-[11px] uppercase tracking-wider transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/30">Explore Tournaments 🏆</button>
                                    <button onClick={() => goTo('register')} className="glass-card hover:bg-white/10 text-white font-bold px-7 py-4 rounded-2xl text-[11px] uppercase tracking-wider transition-all hover:scale-105">Register Now →</button>
                                    <button onClick={() => goTo('committee')} className="glass-card hover:bg-white/10 text-white font-bold px-7 py-4 rounded-2xl text-[11px] uppercase tracking-wider transition-all hover:scale-105">Executive Board 👥</button>
                                </div>
                            </div>
                        </div>

                        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <StatCard count={350} suffix="+" label="Athletes Enrolled" icon="🏃‍♂️" dark={d} delay={0} trigger={statsInView} />
                            <StatCard count={6} suffix="+" label="Active Events" icon="🔥" dark={d} delay={100} trigger={statsInView} />
                            <StatCard count={11} suffix="" label="Panel Members" icon="👑" dark={d} delay={200} trigger={statsInView} />
                            <StatCard count={99} suffix="%" label="Fair Play" icon="🛡️" dark={d} delay={300} trigger={statsInView} />
                        </div>

                        <div className="space-y-6">
                            <div className="text-center">
                                <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>What We Play</p>
                                <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Sports Categories</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                {sportsCategories.map((sp, i) => (
                                    <div key={i} className={`sport-card p-6 rounded-2xl border group cursor-pointer animate-fade-in-up transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl ${d ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-blue-100 hover:bg-blue-50/50'}`} style={{ animationDelay: `${i * 80}ms` }}>
                                        <div className="sport-icon text-4xl mb-3 block w-fit">{sp.icon}</div>
                                        <h3 className={`font-black text-base ${d ? 'text-white' : 'text-blue-950'}`}>{sp.name}</h3>
                                        <p className={`text-xs mt-1 leading-relaxed ${d ? 'text-slate-400' : 'text-slate-500'}`}>{sp.desc}</p>
                                        <span className={`inline-block mt-3 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${d ? 'bg-blue-950 text-blue-400 border border-blue-900' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>{sp.tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>On The Calendar</p>
                                    <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Upcoming Events</h2>
                                </div>
                                <button onClick={() => goTo('events')} className={`text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border transition-colors ${d ? 'border-slate-700 text-slate-300 hover:border-amber-400 hover:text-amber-400' : 'border-blue-200 text-blue-700 hover:border-blue-600'}`}>View All →</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {clubEvents.slice(0, 3).map((ev, i) => (
                                    <div key={i} className={`event-card rounded-2xl border p-6 ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100 shadow-sm'}`}>
                                        <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${ev.type?.includes('Indoor') ? (d ? 'bg-blue-950 text-blue-400' : 'bg-blue-50 text-blue-700') : (d ? 'bg-emerald-950 text-emerald-400' : 'bg-emerald-50 text-emerald-700')}`}>{ev.type}</span>
                                        <h3 className={`font-black text-base mt-3 ${d ? 'text-white' : 'text-blue-950'}`}>{ev.title}</h3>
                                        <p className={`text-xs mt-2 leading-relaxed line-clamp-2 ${d ? 'text-slate-400' : 'text-slate-500'}`}>{ev.details}</p>
                                        <div className={`mt-5 pt-4 border-t flex justify-between items-center ${d ? 'border-slate-800' : 'border-blue-50'}`}>
                                            <span className={`text-xs font-bold ${d ? 'text-slate-300' : 'text-slate-600'}`}>📅 {ev.date || ev.event_date}</span>
                                            <button onClick={() => goTo('register')} className="text-[10px] font-black bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1.5 rounded-lg transition-colors">Join →</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`rounded-3xl p-8 md:p-12 border ${d ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-br from-blue-950 to-indigo-950'}`}>
                            <div className="text-center mb-10">
                                <p className="text-xs font-black tracking-widest uppercase mb-2 text-amber-400">Why Join Us</p>
                                <h2 className="text-3xl font-black tracking-tight uppercase text-white">Membership Benefits</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { icon: "🏆", title: "Exclusive Tournaments", desc: "Priority access to all MUSC events and inter-university championships." },
                                    { icon: "👕", title: "Official Kit Access", desc: "Official merchandise at member rates." },
                                    { icon: "🤝", title: "Networking Hub", desc: "Connect with 350+ athletes across all departments at MU." },
                                    { icon: "📊", title: "Skill Development", desc: "Coaching sessions, workshops, and strategic sports training events." },
                                    { icon: "📸", title: "Media Coverage", desc: "Professional photography and press coverage of all your matches." },
                                    { icon: "🎖️", title: "Recognition & Awards", desc: "Annual MVP titles, trophies, and certificates for top performers." },
                                ].map((b, i) => (
                                    <div key={i} className="membership-benefit flex gap-4 items-start animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                                        <span className="benefit-icon text-3xl flex-shrink-0">{b.icon}</span>
                                        <div>
                                            <h4 className="font-black text-white text-sm">{b.title}</h4>
                                            <p className="text-blue-200/70 text-xs mt-1 leading-relaxed">{b.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="text-center">
                                <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>What Members Say?</p>
                                <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Member Reviews!</h2>
                            </div>
                            <TestimonialCarousel dark={d} />
                        </div>

                        <div className="space-y-6">
                            <div className="text-center">
                                <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>Legacy Moments</p>
                                <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Club Gallery</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                {galleryImages.map((img, i) => (
                                    <div key={i} className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer border ${i === 0 || i === 3 ? 'md:col-span-1 h-56' : 'h-44'} ${d ? 'border-slate-800' : 'border-blue-100'}`} onClick={() => setLightboxImg(img)}>
                                        <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                                            <span className="text-white text-[10px] font-black uppercase tracking-wider">{img.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`rounded-3xl text-center py-14 px-6 border ${d ? 'bg-slate-900 border-slate-800' : 'bg-blue-950 border-blue-900'}`}>
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3">Ready to Compete?</h2>
                            <p className="text-blue-200/70 text-sm mb-8 max-w-lg mx-auto">Join 350+ athletes at MU's most prestigious sports club. Register for an active tournament slot today.</p>
                            <button onClick={() => goTo('register')} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-10 py-4 rounded-2xl text-xs uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/30">Register Now 🚀</button>
                        </div>
                    </div>
                )}

                {currentTab === 'about' && (
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className={`p-8 md:p-10 rounded-3xl border shadow-md space-y-6 animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}>
                            <div className="border-l-4 border-amber-500 pl-5">
                                <h2 className={`text-2xl font-black uppercase ${d ? 'text-white' : 'text-blue-950'}`}>MU Sports Legacy</h2>
                                <p className="text-xs text-amber-500 uppercase tracking-widest font-black mt-1">Our Story · Connect · Track Us</p>
                            </div>
                            <p className={`text-sm leading-relaxed font-medium ${d ? 'text-slate-300' : 'text-slate-600'}`}>MU Sports Club is the central athletic authority of Metropolitan University, Sylhet. We build teams that challenge boundaries, organize competitive championships, and maintain active external communication for regional athletic events. Since our founding, we've grown into a community of over 350 athletes across all faculties — united by a love for competition and fair play.</p>
                            <div className="flex items-center gap-4 pt-2">
                                <a href="https://www.facebook.com/MetropolitanUniversity.Sports.Club" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 transition-all border ${d ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-blue-100 hover:border-blue-400'}`}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-6 h-6 object-contain" alt="Facebook" />
                                </a>
                                <a href="https://www.instagram.com/sportsclubmu/" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 transition-all border ${d ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-blue-100 hover:border-pink-400'}`}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-6 h-6 object-contain" alt="Instagram" />
                                </a>
                                <a href="mailto:sports.club@mu.edu" className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 transition-all border text-xl ${d ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-blue-100 hover:border-amber-400'}`}>📧</a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className={`text-xl font-black tracking-tight ${d ? 'text-white' : 'text-blue-950'}`}>🏆 Legacy Moments</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {galleryImages.slice(0, 3).map((img, i) => (
                                    <div key={i} className={`h-44 rounded-2xl overflow-hidden relative border cursor-pointer group ${d ? 'border-slate-700' : 'border-blue-100'}`} onClick={() => setLightboxImg(img)}>
                                        <img src={img.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={img.label} />
                                        <span className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-wider">{img.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`p-8 rounded-3xl border shadow-md animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-blue-50/60 border-blue-100'}`}>
                            <div className="mb-6">
                                <h3 className={`text-xl font-black ${d ? 'text-amber-400' : 'text-blue-950'}`}>🤝 Want to Collaborate?</h3>
                                <p className={`text-xs mt-1 font-medium ${d ? 'text-slate-300' : 'text-slate-600'}`}>Partner with MU Sports Club for regional athletic events, sponsorships, or friendly league fixtures.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Name" value={collabForm.name} onChange={e => setCollabForm({ ...collabForm, name: e.target.value })} className={`p-3.5 border rounded-xl text-sm outline-none transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500' : 'border-blue-100 focus:border-blue-500'}`} />
                                    <input type="text" placeholder="Organization" value={collabForm.org} onChange={e => setCollabForm({ ...collabForm, org: e.target.value })} className={`p-3.5 border rounded-xl text-sm outline-none transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500' : 'border-blue-100 focus:border-blue-500'}`} />
                                </div>
                                <textarea placeholder="Describe your collaboration proposal..." rows="4" value={collabForm.note} onChange={e => setCollabForm({ ...collabForm, note: e.target.value })} className={`w-full p-3.5 border rounded-xl text-sm outline-none transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none ${d ? 'border-slate-700 focus:border-amber-500' : 'border-blue-100 focus:border-blue-500'}`}></textarea>
                                <div className={`p-4 rounded-xl border border-dashed flex flex-col sm:flex-row justify-between items-center gap-3 ${d ? 'bg-slate-950 border-slate-700' : 'bg-white border-blue-200'}`}>
                                    <div>
                                        <span className={`text-xs font-black block ${d ? 'text-slate-200' : 'text-slate-700'}`}>Attach Proposal / Identity Image</span>
                                        <span className="text-[10px] text-slate-400 block mt-0.5">PNG, JPG (Max 5MB)</span>
                                    </div>
                                    <input type="file" id="collab-file" accept="image/*" onChange={handleFileChange} className="hidden" />
                                    <label htmlFor="collab-file" className={`text-[11px] px-5 py-2.5 rounded-xl font-black cursor-pointer transition-colors ${d ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-blue-950 text-white hover:bg-blue-800'}`}>
                                        {attachedFile ? '🔄 Change File' : '📁 Choose File'}
                                    </label>
                                </div>
                                <button onClick={handleSayHello} className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg ${d ? 'bg-amber-500 text-slate-950 hover:bg-amber-400' : 'bg-blue-950 text-white hover:bg-blue-800'}`}>Send Proposal ✉️</button>
                            </div>
                        </div>
                    </div>
                )}

                {currentTab === 'committee' && (
                    <div className="space-y-10">
                        <div className="text-center animate-fade-in-up">
                            <p className={`text-xs font-black tracking-widest uppercase mb-2 ${d ? 'text-blue-400' : 'text-blue-600'}`}>The ChangeMakers</p>
                            <h1 className={`text-3xl md:text-4xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Executive Steering Committee 👑</h1>
                            <p className={`text-xs font-bold tracking-widest uppercase mt-2 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Official Designation Hierarchy — Session 2025–26</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {committeeList.map((user, idx) => {
                                const imgSrc = user.profile_picture?.trim()
                                    ? (user.profile_picture.startsWith('http') ? user.profile_picture : `/storage/${user.profile_picture}`)
                                    : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1E3A8A&color=FFFFFF&bold=true`;
                                const grad = roleColors[user.committee_role] || 'from-slate-500 to-slate-700';
                                return (
                                    <div key={user.id} className={`committee-card rounded-2xl border overflow-hidden animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`} style={{ animationDelay: `${idx * 60}ms` }}>
                                        <div className={`h-1.5 w-full bg-gradient-to-r ${grad}`}></div>
                                        <div className="p-6 text-center">
                                            <div className="relative inline-block mb-4">
                                                <div className={`w-24 h-24 rounded-2xl overflow-hidden border-2 shadow-lg mx-auto ${d ? 'border-slate-700 bg-slate-800' : 'border-blue-100 bg-blue-50'}`}>
                                                    <img src={imgSrc} className="w-full h-full object-cover block" alt="" onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1E3A8A&color=FFFFFF&bold=true`; }} />
                                                </div>
                                                <div className={`absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${grad} flex items-center justify-center shadow-md`}>
                                                    <span className="text-white text-[10px] font-black">#</span>
                                                </div>
                                            </div>
                                            <h3 className={`font-black text-[15px] leading-tight ${d ? 'text-white' : 'text-blue-950'}`}>{user.name}</h3>
                                            <span className={`inline-block mt-2 bg-gradient-to-r ${grad} text-white font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm`}>{user.committee_role}</span>
                                        </div>
                                        <div className={`px-5 pb-5 border-t text-left text-xs space-y-2 pt-4 ${d ? 'border-slate-800' : 'border-blue-50'}`}>
                                            <a href={`mailto:${user.email}`} className={`flex items-center gap-2 truncate hover:text-amber-500 transition-colors ${d ? 'text-slate-400' : 'text-slate-500'}`}>
                                                <span>📧</span><span className="truncate font-medium">{user.email}</span>
                                            </a>
                                            <p className={`flex items-center gap-2 ${d ? 'text-slate-400' : 'text-slate-500'} font-medium`}>
                                                <span>📞</span><span>{user.phone || 'N/A'}</span>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {currentTab === 'events' && (
                    <div className="space-y-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fade-in-up">
                            <div>
                                <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>Season 2025–27</p>
                                <h1 className={`text-2xl md:text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Events Calendar</h1>
                            </div>
                            <button onClick={() => goTo('register')} className={`flex-shrink-0 text-[11px] px-5 py-2.5 rounded-xl font-black uppercase tracking-wider transition-colors shadow-md ${d ? 'bg-amber-500 text-slate-950 hover:bg-amber-400' : 'bg-blue-950 text-white hover:bg-blue-800'}`}>Book a Slot →</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {eventTypes.map(type => (
                                <button key={type} onClick={() => setActiveFilter(type)} className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${activeFilter === type ? (d ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-blue-950 text-white border-blue-950') : (d ? 'border-slate-700 text-slate-400 hover:border-slate-500' : 'border-blue-200 text-slate-500 hover:border-blue-400')}`}>{type}</button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredEvents.map((ev, i) => (
                                <div key={i} className={`event-card rounded-2xl border overflow-hidden animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100 shadow-sm'}`} style={{ animationDelay: `${i * 60}ms` }}>
                                    <div className={`h-1 w-full ${ev.type?.includes('Indoor') ? 'bg-gradient-to-r from-blue-500 to-blue-700' : 'bg-gradient-to-r from-emerald-500 to-emerald-700'}`}></div>
                                    <div className="p-6">
                                        <span className={`inline-block px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider ${ev.type?.includes('Indoor') ? (d ? 'bg-blue-950 text-blue-400 border border-blue-900' : 'bg-blue-50 text-blue-700 border border-blue-200') : (d ? 'bg-emerald-950 text-emerald-400 border border-emerald-900' : 'bg-emerald-50 text-emerald-700 border border-emerald-200')}`}>{ev.type || 'Tournament'}</span>
                                        <h3 className={`text-xl font-black mt-3 leading-tight ${d ? 'text-white' : 'text-blue-950'}`}>{ev.title}</h3>
                                        <p className={`text-xs mt-2 leading-relaxed line-clamp-3 ${d ? 'text-slate-400' : 'text-slate-500'}`}>{ev.details}</p>
                                        {ev.title?.toUpperCase().includes('INDOOR') && (
                                            <div className="mt-3 flex flex-wrap gap-1">
                                                {DEFAULT_INDOOR_GAMES.slice(0, 5).map(g => (
                                                    <span key={g.id} className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${d ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>{g.game_icon} {g.game_name}</span>
                                                ))}
                                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${d ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>+5 more</span>
                                            </div>
                                        )}
                                        {TEAM_TOURNAMENTS.includes(ev.title) && (
                                            <div className={`mt-3 flex items-center gap-1.5 text-[9px] font-black uppercase ${d ? 'text-amber-400' : 'text-amber-600'}`}>
                                                <span>👥</span><span>Team Registration Required</span>
                                            </div>
                                        )}
                                        <div className={`mt-5 pt-4 border-t flex justify-between items-center ${d ? 'border-slate-800' : 'border-blue-50'}`}>
                                            <span className={`text-xs font-bold ${d ? 'text-slate-300' : 'text-slate-700'}`}>📅 {ev.date || ev.event_date}</span>
                                            <button onClick={() => goTo('register')} className="text-[10px] font-black bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl transition-all hover:scale-105 shadow-sm">
                                                {TEAM_TOURNAMENTS.includes(ev.title) ? '⚽ Team Entry' : '🏅 Join →'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {currentTab === 'gallery' && <MatchGallery dark={d} clubEvents={clubEvents} />}
                {currentTab === 'idcard' && <DigitalIDCard dark={d} />}
                {currentTab === 'news' && <div className="max-w-3xl mx-auto"><NewsFeed dark={d} /></div>}

                {currentTab === 'register' && (
                    <RegistrationPage dark={darkMode} clubEvents={clubEvents} showToast={showToast} goTo={goTo} />
                )}
            </main>

           <footer className={`mt-20 border-t ${d ? 'bg-slate-900 border-slate-800' : 'bg-slate-950 border-amber-500/10'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-amber-400/30 bg-blue-50 p-1 shrink-0">
                        <img src="https://i.imgur.com/RBtBKlX.jpg" alt="Club Logo" className="w-full h-full object-contain rounded-full" />
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-amber-400/30 bg-blue-50 p-1 shrink-0">
                        <img src="https://i.imgur.com/SGXqF5C.jpg" alt="MU Logo" className="w-full h-full object-contain rounded-full" />
                    </div>
                    <div>
                        <p className="text-white font-black text-sm tracking-wider">MU SPORTS CLUB</p>
                        <p className="text-amber-400 text-[9px] font-bold uppercase tracking-widest">Metropolitan University,Sylhet</p>
                    </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">The official sports authority of Metropolitan University. Cultivating elite athletes since day one.</p>
            </div>
            <div>
                <p className="text-white font-black text-xs uppercase tracking-wider mb-4">Quick Links..</p>
                <div className="space-y-2">
                    {[['home', 'Home'], ['about', 'About'], ['committee', 'Executive Panel'], ['events', 'Tournaments'], ['register', 'Register']].map(([tab, label]) => (
                        <button key={tab} onClick={() => goTo(tab)} className="block text-slate-400 hover:text-amber-400 text-xs font-medium transition-colors">{label}</button>
                    ))}
                </div>
            </div>
            <div>
                <p className="text-white font-black text-xs uppercase tracking-wider mb-4">Contact us</p>
                <div className="space-y-2 text-slate-400 text-xs font-medium">
                    <a href="mailto:sports.club@mu.edu" className="block hover:text-amber-400 transition-colors">📧 sports.club@mu.edu</a>
                    <p>📍 Metropolitan University, Sylhet, Bangladesh</p>
                    <div className="flex gap-3 pt-2">
                        <a href="https://www.facebook.com/MetropolitanUniversity.Sports.Club" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-6 h-6 object-contain" alt="FB" />
                        </a>
                        <a href="https://www.instagram.com/sportsclubmu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-6 h-6 object-contain" alt="IG" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
            <p className="text-slate-500 text-[11px]">© 2025–26 MU Sports Club · Metropolitan University, Sylhet · All rights reserved.</p>
            <button onClick={() => setShowAdminLogin(true)} className="text-slate-800 hover:text-slate-600 text-[10px] mt-2 transition-colors">⚙</button>
        </div>
    </div>
</footer>
            {lightboxImg && (
                <div className="fixed inset-0 z-[9998] bg-slate-950/95 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
                    <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setLightboxImg(null)} className="absolute -top-10 right-0 text-white text-3xl font-black hover:text-amber-400 transition-colors z-10">×</button>
                        <img src={lightboxImg.src} alt={lightboxImg.label} className="w-full rounded-2xl shadow-2xl" />
                        <p className="text-center text-white font-black text-sm mt-3 uppercase tracking-wider">{lightboxImg.label}</p>
                    </div>
                </div>
            )}

            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </div>
        </>
    );
}

const rootElement = document.getElementById('app');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<MUSportsClubApp />);
}