// import './bootstrap';
// import '../css/app.css';

// import React, { useState, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';

// function MUSportsClubApp() {

//     const dbEvents = window.backendEvents || [];
//     const dbUsers = window.backendUsers || [];


//     const [currentTab, setCurrentTab] = useState('home');
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);


//     const [collabForm, setCollabForm] = useState({ name: '', org: '', note: '' });
//     const [attachedFile, setAttachedFile] = useState(null);


//     const [formData, setFormData] = useState({ player_name: '', email: '', phone: '', event_name: '', department: '' });
//     const [isSaving, setIsSaving] = useState(false);


//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [darkMode]);


//     const handleFileChange = (e) => {
//         if (e.target.files ? e.target.files[0] : null) {
//             setAttachedFile(e.target.files[0]);
//             alert(`📸 "${e.target.files[0].name}" attached successfully to your hello request!`);
//         }
//     };


//     const handleSayHello = (e) => {
//         e.preventDefault();
//         const emailSubject = encodeURIComponent(`MU Sports Club Collaboration - ${collabForm.org || 'Proposal'}`);
//         const emailBody = encodeURIComponent(`Hi MU Sports Club,\n\nI am ${collabForm.name} from ${collabForm.org || 'N/A'}.\n\nMessage:\n${collabForm.note}\n\n[Note: Please verify the image manually if attached in the web panel]`);
//         window.location.href = `mailto:sports.club@mu.edu?subject=${emailSubject}&body=${emailBody}`;
//     };


//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         setIsSaving(true);
//         try {
//             const response = await fetch('/register-event', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json',
//                     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
//                 },
//                 body: JSON.stringify(formData)
//             });
//             const result = await response.json();
//             if (response.ok && result.success) {
//                 alert('🎯 Registration Successful! Live data posted to registrations table.');
//                 setFormData({ player_name: '', email: '', phone: '', event_name: '', department: '' });
//                 setCurrentTab('events');
//             } else {
//                 alert('Error: ' + result.message);
//             }
//         } catch (error) {
//             console.error(error);
//             alert('Database connection failed!');
//         } finally {
//             setIsSaving(false);
//         }
//     };


//     const defaultCommittee = [
//     { 
//         id: 'c1', 
//         name: "Abu Sufian", 
//         committee_role: "PRESIDENT", 
//         email: "president@mu.edu", 
//         phone: "01741197388",
//         profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/503150460_4049824781929787_6892879632643073192_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH5hS8SG9Yr-FII0z2MH_4ERRp_ONRoSPtFGn841GhI-zn2LsgQpII3Kz64QQHN7xEr671NYzKDtKqOBg-F2hf_&_nc_ohc=x3m7tI3hzdUQ7kNvwGmUsZX&_nc_oc=AdpQBJRVYs93INxRt8nwFbWcTvuaDwnP2yhjafpgk_A8dgp7Nbj9yHW_6t9Q9NkzHK8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=DonhVO38m-hAEJPr7Wq3Ww&_nc_ss=7b2a8&oh=00_Af-QP3-ysWTPC6obmvGqC_MOis-L-hxtDXNG77sOqmWHSQ&oe=6A40A402" 
//     },
//     { 
//         id: 'c2', 
//         name: "Shahriyar Rifat", 
//         committee_role: "GENERAL SECRETARY", 
//         email: "gs.sports@mu.edu", 
//         phone: "01308893939",
//         profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/655709272_2092664634800547_1015161797952192305_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGPv1QV0UOJ60bvffq7wLaal7QxW74pvqiXtDFbvim-qGfY5HNTcLLO6PM-1xiDOpoap-bupfwC5iPjyRWC5ZO2&_nc_ohc=NBTrF1_-3OYQ7kNvwFnIxHj&_nc_oc=AdoLn4s0oQLPJD3mo3pzw_LNb-IhLtvX2ZGQHs_eJDqIrzw5IRV0_SooivijtwK0hWo&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=M3877ep7paQA7E7p6ecScg&_nc_ss=7b2a8&oh=00_Af9R-shvdCoh0QB6B6fAJ_t4Z3cqnC8qp-T6mGSHTBAyEg&oe=6A40D138"
//     },
//     { 
//         id: 'c3', 
//         name: "Abdullah Jabid", 
//         committee_role: "ORGANISING SECRETARY", 
//         email: "organizer@mu.edu", 
//         phone: "01317242586",
//         profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/636944439_2514557168941395_109792837164866248_n.jpg?stp=dst-jpg_tt6&cstp=mx2040x2048&ctp=s2040x2048&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEto4w9UPiQjaXrFn8JZhGD5fQB77QGrRnl9AHvtAatGXDPgJeAqjXU-psHiUozBeiRx7QYWZyXVqpFFvoUcGz4&_nc_ohc=8WSXHtYupkUQ7kNvwFst4E4&_nc_oc=Adqs-grXxU9i-emXJPn3e7idp2b_pXiSyYSE61e-bs3T6Eysaq6ReWAYd7RzhpB_nFQ&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=Rfgiz-NP6zH1rxpiBdZJ_g&_nc_ss=7b2a8&oh=00_Af_mkc6hyCAworaGcHmXHc1bTyXB_0tU_21KiVwYl_zkbQ&oe=6A40D2C8"
//     },
//     { 
//         id: 'c4', 
//         name: "MD.Saiful Islam", 
//         committee_role: "ORGANISING SECRETARY", 
//         email: "oyon@mu.edu", 
//         phone: "01607896330",
//         profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t51.82787-15/615276663_18092496719489692_6663784768538851935_n.webp?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGhh11_rd7HabzYw7OUwrPlm3agS9XHs_ubdqBL1cez-y-11QkMwyWTcmSOOFxI5EL305EClZVw4wwIxfExKH0a&_nc_ohc=Nndgs9IrfH8Q7kNvwFNH4JG&_nc_oc=Adr_83iA73aYZXVzOOXp2SEaFL8tM5DWRBnwEkW87LbSJc38YC03iQnkq2hnVzFCztQ&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=C8JtvTyZ9jYNp6ftBKzluw&_nc_ss=7b2a8&oh=00_Af9WIXZPc5COM0NGgkX_Ote-SJMZL1XKtbZeqasG4nsIUA&oe=6A40CD00"
//     },
//     { 
//         id: 'c5', 
//         name: "MD.Salman", 
//         committee_role: "ORGANISING SECRETARY", 
//         email: "salman@mu.edu", 
//         phone: "01737599603",
//         profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/514280458_1735593600661307_8270103835630323832_n.jpg?stp=dst-jpg_tt6&cstp=mx1242x1452&ctp=s1242x1452&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE52RS9VzgA-ziRBDIi0oFDFMFd_jJCIZ8UwV3-MkIhn2zt5G-uVUBSFJItd1O4xdUDBfT6ds67azbxq0pW8CKE&_nc_ohc=Xer3V1aDOzcQ7kNvwFArjN6&_nc_oc=AdqaiK_LE6SsxydbJYZSYD721xJ1EWFYowIVIB3i2D8IHfXCx3LUqTe7syB7iw106j8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=p8YXeoFCV8jA2XZnR7qOrA&_nc_ss=7b2a8&oh=00_Af8rliIWZdU4KugEqvsqEJ_Ft6bg62Foi45b_Ceq9U-Y3A&oe=6A40ABAE"
//     },
//     { 
//         id: 'c6', 
//         name: "Adnan Wahdi", 
//         committee_role: "THE GREAT TREASURER", 
//         email: "treasurer@mu.edu", 
//         phone: "01724926802",
//         profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t51.75761-15/487452849_18343963657156059_8013629657132169764_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEJjhGoo0xdXmTCfdHMXnpsspOp419H8Qiyk6njX0fxCEDmtu3Sz4avxlp417W44ucI6-n5q8YxDuvBSUYQ05D5&_nc_ohc=ckgjnWiUQ_4Q7kNvwGiLF_Q&_nc_oc=Adp5wEKK86EHmZlgV5goe11t77GZajOLsEOR6CshzSpOyJl6okKzCS54q85soeksJU8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=NNweY7Vs8JLaUGbEZ6HPZA&_nc_ss=7b2a8&oh=00_Af9BTfe92R9rkeKwY0jTmMJRsFZCXb0YsUOCPit6CQFShg&oe=6A40B335"
//     },
//     { 
//         id: 'c7', 
//         name: "Syed Hassan", 
//         committee_role: "EVENT COORDINATOR", 
//         email: "hassan@mu.edu", 
//         phone: "01957636327",
//         profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/615086623_2337705286674902_2308975441158817751_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1535&ctp=s2048x1535&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH8rP1x0yuzGrd4-avR8G55QkbZH2caYg5CRtkfZxpiDkK8bz46hpsCt88lqDWes1c_YN3SCs1DgEFKzUgfxJ7H&_nc_ohc=ZJh55WfFRuUQ7kNvwGpMTny&_nc_oc=Ado2-imNLVuRhRixjBh1mkIsblLdwncgrrekSWUyUP0CoEuwuucx8wlkzdz_sj4iXNc&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=CYl3C_1frO2j-2LYyMyUvA&_nc_ss=7b2a8&oh=00_Af-_ce_XutoOpR5AYEaNGCNCOpm4Q7b-jb1Ag1HGT5fpcg&oe=6A40C07A"
//     },
//     { 
//         id: 'c8', 
//         name: "MD.Sodrul Hasan Sohi", 
//         committee_role: "OFFICE SECRETARY", 
//         email: "sohi@mu.edu", 
//         phone: "01316586392",
//         profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/496008790_1848890432557187_7153082079078757147_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1277&ctp=s1280x1277&_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFkN30ifDmqINN7_bJnpfhQSJqzRi2y_JVImrNGLbL8lWtthV6MFpR_Gdo0mZgd2_KiDSsYINWscVOKkjp0cbyG&_nc_ohc=xpNW_qdzyOQQ7kNvwFvvkFC&_nc_oc=Adrn63x6KgoOAJgijcC-9LjKQRXhRlpSomIr8vC1p7AEZex-vvikDxCc7AEdNRfjUTk&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=H1eKmTsau7-Q4JHRWdrQ3g&_nc_ss=7b2a8&oh=00_Af8dypcFw0XrpPlI3o89mBWjnt60IxR7PVu3ASX-Xv-ptw&oe=6A40A98D"
//     },
//     { 
//         id: 'c9', 
//         name: "Md.Mahiyan Noor Mahi", 
//         committee_role: "PRESS SECRETARY", 
//         email: "motu@mu.edu", 
//         phone: "01756510942",
//         profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/541591829_1328192965595500_5345473691480325870_n.jpg?stp=dst-jpg_tt6&cstp=mx960x1280&ctp=s960x1280&_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGEfG0OIi9nOrp4UN708NQF_GW1NdtDLAf8ZbU120MsB327E5RO9wkqP6luI9-r2ljvs1Z1KwqpF65XulEh-tpj&_nc_ohc=Ua1NFG-tOloQ7kNvwGau3rg&_nc_oc=Adr5ghAyJslRVmwEoU27Zmtb8rl_lMKAVzbzZrH1iu5694g1Ezz8bcLgIasiiU6doiQ&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=SCt7TgV2yIbVACf7YJLhnQ&_nc_ss=7b2a8&oh=00_Af9IkWVqYmxtuc3rH1z27ZuEmlyw24eyfoYzALtARyqhxQ&oe=6A40C895"
//     },
//     { 
//         id: 'c10', 
//         name: "Miftahur Rahman Omi", 
//         committee_role: "CHIEF PHOTOGRAPHER", 
//         email: "leo@mu.edu", 
//         phone: "01887457293",
//         profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/494788140_643333422028875_6621256742388626645_n.jpg?stp=dst-jpg_tt6&cstp=mx1331x1330&ctp=s1331x1330&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFsbe_DrxQRtmqgbKJJ4vIcYKkGnmI7cCtgqQaeYjtwK5z-j3-oyO1kYYTghlFmWhY1IySz23faNbPFzxhgCJm7&_nc_ohc=WEIfaiBkX4cQ7kNvwHwBlVm&_nc_oc=AdqG8XkIIPOwCL5KXnVroMBwzWxWi-7pptUfSRKgBQSi8tXEtgkoUK3chsuKk1t-tSY&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=ozq06bFjN2tYkQM2LDpTaw&_nc_ss=7b2a8&oh=00_Af_Pj36Za4yWX-Ffn9TmjakHK_lMxjowjwEYTtzCHp2EPA&oe=6A40CEC6"
//     },
//     { 
//         id: 'c11', 
//         name: "A.S.M Nafiu Iqbal", 
//         committee_role: "Executive Member", 
//         email: "nafiu@mu.edu", 
//         phone: "01234567890",
//         profile_picture: "file:///Users/miftahr.ome/Library/Group%20Containers/group.net.whatsapp.WhatsApp.shared/Message/Media/166558865338619@lid/2/a/2a3d5c0e-fff1-459e-862e-465ec5f96b9a.jpg"
//     }
// ];

//     const committeeList = dbUsers.length > 1 ? dbUsers : defaultCommittee;

//     const clubEvents = dbEvents.length >= 6 ? dbEvents : [
//         { title: "INDOOR GAMES SEASON-15", type: "Indoor Tournament", date: "July 5, 2026", details: "Annual ultimate indoor showdown for enthusiasts at MU Lounge." },
//         { title: "INTRA-MUSC FUTSAL", type: "Indoor Tournament", date: "August 15, 2026", details: "Strategic mind games tournament targeting MUSC members brackets." },
//         { title: "LEAGUE M", type: "League Match", date: "Sep 02, 2026", details: "Premium inter-university 9-a-side main football league." },
//         { title: "INTRA FUTSAL", type: "League Match", date: "Oct 20, 2026", details: "The ultimate futsal competition." },
//         { title: "UPL", type: "Domestic Tournament", date: "Nov 15, 2026", details: "The grand cricket tournament under international standard rules." },
//         { title: "MPL-15", type: "Tournament", date: "Jan 120, 2027", details: "Inter-university level grand cricket event." }
//     ];

//     return (
//         <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
            

//             <nav className={`shadow-xl sticky top-0 z-50 border-b ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-950 text-white border-amber-500/20'}`}>
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-20">
                        

//                         <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentTab('home')}>

// <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-amber-500/20">
//     <img 
//         src="https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/469504888_979335607553931_871846207987255438_n.jpg?stp=dst-jpg_tt6&cstp=mx1579x1579&ctp=s1579x1579&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH0shj4KjfBHVniiJRf1ACVuTeY0gI1ruG5N5jSAjWu4e9K7cwmngnLfL8XfJk3GwvnufgJ2EUQ76hV5eVgRoio&_nc_ohc=Lrb2sHs5_9IQ7kNvwEWz_dt&_nc_oc=AdpnYJRS6XxWb1IVMEcSPo7unJlxZW0PVuoZ4tLLfqzHJ_TZWG5ln8l5qTvqQH9gzYw&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=Uo9KpgJyYpabe_Hrl_MDNw&_nc_ss=7b2a8&oh=00_Af-dOO7BI57lOBpMfZJKa9Uvn693TpVdJtE8rJ8dijaN9g&oe=6A408D3E" 
//         alt="MU Sports Club Logo" 
//     />
// </div>
//                             <div>
//                                 <span className={`text-lg font-black tracking-widest block ${darkMode ? 'text-white' : 'text-white'}`}> MU SPORTS CLUB</span>
//                                 <span className="text-[10px] tracking-widest text-amber-400 block -mt-1 font-bold uppercase">Metropolitan University,Sylhet</span>
//                             </div>
//                         </div>


//                         <div className="hidden md:flex items-center space-x-6 text-sm font-bold">
//                             <button onClick={() => setCurrentTab('home')} className={`hover:text-amber-400 transition-colors ${currentTab === 'home' ? 'text-amber-400' : ''}`}>Home</button>
//                             <button onClick={() => setCurrentTab('about')} className={`hover:text-amber-400 transition-colors ${currentTab === 'about' ? 'text-amber-400' : ''}`}>About</button>
//                             <button onClick={() => setCurrentTab('committee')} className={`hover:text-amber-400 transition-colors ${currentTab === 'committee' ? 'text-amber-400' : ''}`}>Executive Panel</button>
//                             <button onClick={() => setCurrentTab('events')} className={`hover:text-amber-400 transition-colors ${currentTab === 'events' ? 'text-amber-400' : ''}`}>Tournaments</button>
//                             {/* <button onClick={() => setCurrentTab('dashboard')} className={`hover:text-amber-400 text-xs uppercase tracking-wider font-medium opacity-70 ${currentTab === 'dashboard' ? 'text-amber-400' : ''}`}>⚙️ Dashboard</button> */}
                            

//                             <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-slate-800 dark:bg-slate-700 rounded-xl hover:text-amber-400 transition-all text-white">
//                                 {darkMode ? '☀️' : '🌙'}
                                
//                             </button>

//                             <button onClick={() => setCurrentTab('register')} className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-4 py-2.5 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all font-black text-xs uppercase tracking-wider">
//                                 Register Now
//                             </button>
//                         </div>

//                         <div className="flex items-center space-x-4 md:hidden">
//                             <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-slate-800 rounded-xl text-white">
//                                 {darkMode ? '☀️' : '🌙'}
//                             </button>
//                             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white p-2">
//                                 <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />}
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>


//                 {isMenuOpen && (
//                     <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-2 text-base font-semibold text-white">
//                         <button onClick={() => { setCurrentTab('home'); setIsMenuOpen(false); }} className="block w-full text-left py-2 hover:text-amber-400">Home</button>
//                         <button onClick={() => { setCurrentTab('about'); setIsMenuOpen(false); }} className="block w-full text-left py-2 hover:text-amber-400">About</button>
//                         <button onClick={() => { setCurrentTab('committee'); setIsMenuOpen(false); }} className="block w-full text-left py-2 hover:text-amber-400">Executive Panel</button>
//                         <button onClick={() => { setCurrentTab('events'); setIsMenuOpen(false); }} className="block w-full text-left py-2 hover:text-amber-400">Tournaments</button>
//                         {/* <button onClick={() => { setCurrentTab('dashboard'); setIsMenuOpen(false); }} className="block w-full text-left py-2 text-xs opacity-60">⚙️ Dashboard</button> */}
//                         <button onClick={() => { setCurrentTab('register'); setIsMenuOpen(false); }} className="block w-full text-center bg-amber-500 text-slate-950 font-black py-2.5 rounded-lg mt-3">Register Now</button>
//                     </div>
//                 )}
//             </nav>

//             <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
//                                 {currentTab === 'home' && (
//                     <div className="space-y-12 transition-all duration-300">
//                         <div className={`p-8 md:p-16 rounded-3xl text-center space-y-5 shadow-2xl relative overflow-hidden border ${
//                             darkMode 
//                                 ? 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-slate-800/80 text-white shadow-blue-950/30' 
//                                 : 'bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white border-blue-950 shadow-blue-900/20'
//                         }`}>
//                             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
                            
//                             <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
//                                 Official Sports Arena
//                             </span>
//                             <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase text-white max-w-4xl mx-auto">
//                                 Born to Rule<br className="sm:hidden" /> Over the Game.
//                             </h1>
//                             <p className="text-blue-100/80 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
//                                 Welcome to the ROYAL Club. We cultivate elite sportsmanship, celebrate strategic campus victories, and manage tier-1 athletic leagues with honor.
//                             </p>
//                             <div className="pt-4 flex flex-wrap justify-center gap-4">
//                                 <button onClick={() => setCurrentTab('events')} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all transform hover:scale-105 shadow-xl">
//                                     Explore Tournaments 🏆
//                                 </button>
//                                 <button onClick={() => setCurrentTab('committee')} className="bg-transparent hover:bg-white/10 text-white border-2 border-white/20 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all">
//                                     Executive Board 👥
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {[
//                                 { count: "6+", label: "Active Events", icon: "🔥" },
//                                 { count: "350+", label: "Athletes Enrolled", icon: "🏃‍♂️" },
//                                 { count: "10+", label: "Panel Members", icon: "👑" },
//                                 { count: "100%", label: "Fair Play", icon: "🛡️" }
//                             ].map((stat, idx) => (
//                                 <div key={idx} className={`p-5 rounded-2xl border text-center shadow-sm transition-all ${
//                                     darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-blue-100 text-slate-800'
//                                 }`}>
//                                     <span className="text-xl block mb-1">{stat.icon}</span>
//                                     <span className={`text-2xl md:text-3xl font-black block ${darkMode ? 'text-amber-400' : 'text-blue-900'}`}>{stat.count}</span>
//                                     <span className={`text-[10px] font-black uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</span>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                             <div className={`p-6 rounded-2xl border shadow-sm transition-all hover:shadow-md ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-blue-100 text-slate-800'}`}>
//                                 <div className="text-3xl mb-2">🏅</div>
//                                 <h3 className="font-black text-lg text-amber-500 dark:text-amber-400">Premium Athletics</h3>
//                                 <p className={`text-xs mt-2 leading-relaxed font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>From intensive indoor games like Carrom and Chess to massive full-scale outdoor cricket blasts.</p>
//                             </div>
                            
//                             <div className={`p-6 rounded-2xl border shadow-sm transition-all hover:shadow-md ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-blue-100 text-slate-800'}`}>
//                                 <div className="text-3xl mb-2">🤝</div>
//                                 <h3 className="font-bold text-lg text-amber-500 dark:text-amber-400">Student Leadership</h3>
//                                 <p className={`text-xs mt-2 leading-relaxed font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>100% student council driven board management with structured specific executive roles.</p>
//                             </div>
                            
//                             <div className={`p-6 rounded-2xl border shadow-sm transition-all hover:shadow-md ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-blue-100 text-slate-800'}`}>
//                                 <div className="text-3xl mb-2">📢</div>
//                                 <h3 className="font-bold text-lg text-amber-500 dark:text-amber-400">Live Notice Board</h3>
//                                 <p className={`text-xs mt-2 leading-relaxed font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Registration for external non-member players is officially open for 6 key seasonal university tournaments.</p>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                                 {currentTab === 'about' && (
//                     <div className="max-w-4xl mx-auto space-y-12 transition-all duration-300">
//                         <div className={`p-8 rounded-3xl border shadow-md space-y-6 ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-blue-100 text-slate-800'}`}>
//                             <div className="border-l-4 border-amber-500 pl-4">
//                                 <h2 className={`text-2xl font-black uppercase ${darkMode ? 'text-white' : 'text-blue-950'}`}>MU Sports Legacy</h2>
//                                 <p className="text-xs text-amber-500 uppercase tracking-widest font-bold">Connect & Track Us</p>
//                             </div>
//                             <p className={`text-sm leading-relaxed font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
//                                 MU Sports Club is the central athletic authority of Metropolitan University. We build teams that challenge boundaries, organize competitive championships, and maintain active external communication for regional athletic events.
//                             </p>
                            
//                             <div className="flex items-center gap-5 pt-3">
//                                 <a 
//                                     href="https://www.facebook.com/MetropolitanUniversity.Sports.Club" 
//                                     target="_blank" 
//                                     rel="noopener noreferrer"
//                                     className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 hover:shadow-blue-500/20 transition-all border ${darkMode ? 'bg-slate-800 border-slate-700/60' : 'bg-slate-50 border-blue-100'}`}
//                                     title="Follow our Facebook Page"
//                                 >
//                                     <img 
//                                         src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
//                                         className="w-6 h-6 object-contain" 
//                                         alt="Facebook Logo" 
//                                     />
//                                 </a>

//                                 <a 
//                                     href="https://www.instagram.com/sportsclubmu/" 
//                                     target="_blank" 
//                                     rel="noopener noreferrer"
//                                     className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 hover:shadow-pink-500/20 transition-all border ${darkMode ? 'bg-slate-800 border-slate-700/60' : 'bg-slate-50 border-blue-100'}`}
//                                     title="Follow our Instagram Feed"
//                                 >
//                                     <img 
//                                         src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" 
//                                         className="w-6 h-6 object-contain" 
//                                         alt="Instagram Logo" 
//                                     />
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="space-y-4">
//                             <h3 className={`text-xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-blue-950'}`}>🏆 Legacy Moments...</h3>
//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                                 <div className={`h-40 rounded-2xl overflow-hidden relative border ${darkMode ? 'bg-slate-800 border-slate-700/50' : 'bg-slate-100 border-blue-100'}`}>
//                                     <img src="https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/626331988_1313951187425703_3795850859671558213_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s1920x1080&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGfKZKxBhUkxshIv0MLqNsX5vVj678KACvm9WPrvwoAK_eOrkTMWMH01cqcd1GjE6YNcNnRRK7AOIQRMA7QM7px&_nc_ohc=V5_lUO_g7DIQ7kNvwECe9yJ&_nc_oc=AdpKO67a3GM6P6QSjQj3cb0YMvX3DR9RKfPWBe0pgh0qzXQlvazn3RB1C3yU7qdIvzw&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=WJslUUbN2hf_h-FYaxpZ3g&_nc_ss=7b2a8&oh=00_Af-hTbY22ijzzJncUWTzbfk16iUoIIG_Az5RAw-votkguw&oe=6A408A7F" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Cricket Match" />
//                                     <span className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">MPL Champions 2026</span>
//                                 </div>
//                                 <div className={`h-40 rounded-2xl overflow-hidden relative border ${darkMode ? 'bg-slate-800 border-slate-700/50' : 'bg-slate-100 border-blue-100'}`}>
//                                     <img src="https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/575188965_1233925582094931_5998660472661711882_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGZebmeiz0KG2lvbgmqbszEvvMdYyIgEtm-8x1jIiAS2eRHKq1zcR6tzLmzSjez3DUtefz9c8iUi255yYXBV6A5&_nc_ohc=6DPtcRKpJXAQ7kNvwF30puP&_nc_oc=AdrdAqw4DU7FF16GLKWxJ77s60Cipw1EpYWNWaZorguBa9MYsrscOps764Rc2M7BgI8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=DiZ518oWMc-poXXSgPraOQ&_nc_ss=7b2a8&oh=00_Af965S4SYg1HJq1h-BBburFWkzgEV4DdFUUmiwlL9wzW7A&oe=6A40AB24" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Football Turf" />
//                                     <span className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Arrival of MR.15</span>
//                                 </div>
//                                 <div className={`h-40 rounded-2xl overflow-hidden relative border ${darkMode ? 'bg-slate-800 border-slate-700/50' : 'bg-slate-100 border-blue-100'}`}>
//                                     <img src="https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/558671734_1215392863948203_254053450087788206_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1280&ctp=s1024x1280&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEgCJDpjlGsXG5BNscswPfjy6RMhWhgZP_LpEyFaGBk_0RUf0HxbGyaLyUQ0cq3nFedmNIjMqDbzB2LkK9a3Zsn&_nc_ohc=yM8pgS4htxcQ7kNvwEiGAYA&_nc_oc=Adrv0AUMjIZ5tmsH25sh6ZY-Fvrg9q6vn7GUd4vOwjV4y9qHicmHWhXAR6E9VfMBrX8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=mNjS-q6OtT1-nNHh8rTfIA&_nc_ss=7b2a8&oh=00_Af8JXkG566il-FdY67E2jogTBsl37vlqTq-JGlTy6h5eYQ&oe=6A408703" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Carrom Board" />
//                                     <span className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">League M Champions 2025</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className={`p-8 rounded-3xl border shadow-md transition-colors duration-300 ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-blue-50/60 border-blue-100 text-slate-800'}`}>
//                             <div className="mb-4">
//                                 <h3 className={`text-xl font-black ${darkMode ? 'text-amber-400' : 'text-blue-950'}`}>🤝 Want to Collab?</h3>
//                                 <p className={`text-xs mt-1 font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Partnership with MU Sports Club for regional athletic events, sponsorships, or friendly league fixtures.</p>
//                             </div>
//                             <form onSubmit={handleSayHello} className="space-y-4">
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                     <input type="text" placeholder="Name" value={collabForm.name} onChange={e => setCollabForm({...collabForm, name: e.target.value})} className={`p-3 border rounded-xl text-sm outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${darkMode ? 'border-slate-700 focus:ring-2 focus:ring-amber-500' : 'border-blue-100 focus:ring-2 focus:ring-blue-500'}`} required />
//                                     <input type="text" placeholder="Organization Name" value={collabForm.org} onChange={e => setCollabForm({...collabForm, org: e.target.value})} className={`p-3 border rounded-xl text-sm outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${darkMode ? 'border-slate-700 focus:ring-2 focus:ring-amber-500' : 'border-blue-100 focus:ring-2 focus:ring-blue-500'}`} />
//                                 </div>
//                                 <textarea placeholder="Describe your collaboration proposal briefly..." rows="3" value={collabForm.note} onChange={e => setCollabForm({...collabForm, note: e.target.value})} className={`w-full p-3 border rounded-xl text-sm outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${darkMode ? 'border-slate-700 focus:ring-2 focus:ring-amber-500' : 'border-blue-100 focus:ring-2 focus:ring-blue-500'}`} required></textarea>
                                
//                                 <div className={`p-4 rounded-xl border border-dashed flex flex-col sm:flex-row justify-between items-center gap-2 ${darkMode ? 'bg-slate-950 border-slate-700' : 'bg-white border-blue-200'}`}>
//                                     <div>
//                                         <span className={`text-xs font-bold block ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Attach Proposal Layout / Identity Image</span>
//                                         <span className="text-[10px] text-gray-400 block">Supports PNG, JPG (Max 5MB)</span>
//                                     </div>
//                                     <input type="file" id="collab-file" accept="image/*" onChange={handleFileChange} className="hidden" />
//                                     <label htmlFor="collab-file" className={`text-xs px-4 py-2 rounded-lg font-bold cursor-pointer transition-colors ${darkMode ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-blue-950 text-white hover:bg-blue-900'}`}>
//                                         {attachedFile ? '🔄 Change Attached Image' : '📁 Choose Image File'}
//                                     </label>
//                                 </div>

//                                 <button type="submit" className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-colors shadow ${darkMode ? 'bg-amber-500 text-slate-950 hover:bg-amber-400' : 'bg-blue-950 text-white hover:bg-blue-900'}`}>
//                                     Send Proposal ✉️
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 )}


//                 {currentTab === 'committee' && (
//                     <div className="space-y-10">
//                         <div className="text-center mb-12">
//                             <h1 className={`text-3xl font-black tracking-tight uppercase ${darkMode ? 'text-white' : 'text-blue-900'}`}>
//                                 Executive Steering Committee
//                             </h1>
//                             <p className={`text-xs font-bold tracking-widest uppercase mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
//                                 Official Designation Hierarchy
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                             {committeeList.map((user) => {
//                                 const imgSrc = user.profile_picture && user.profile_picture.trim() !== ""
//                                     ? (user.profile_picture.startsWith('http') ? user.profile_picture : `/storage/${user.profile_picture}`)
//                                     : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1E3A8A&color=FFFFFF&bold=true`;

//                                 return (
//                                     <div 
//                                         key={user.id} 
//                                         className={`rounded-2xl border p-6 text-center flex flex-col justify-between hover:scale-[1.02] transition-transform shadow-md ${
//                                             darkMode 
//                                                 ? 'bg-slate-900 border-slate-800 text-white shadow-blue-950/20' 
//                                                 : 'bg-white border-blue-100 text-slate-800 shadow-blue-100/50'
//                                         }`}
//                                     >
//                                         <div className="flex flex-col items-center">
//                                             <div className="w-24 h-24 mb-4 relative rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-500 shadow-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center">
//                                                 <img 
//                                                     src={imgSrc} 
//                                                     className="w-full h-full object-cover block" 
//                                                     alt="" 
//                                                     onError={(e) => {
//                                                         e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1E3A8A&color=FFFFFF&bold=true`;
//                                                     }}
//                                                 />
//                                             </div>
                                            
//                                             <h3 className={`font-black text-base leading-tight line-clamp-1 ${darkMode ? 'text-white' : 'text-blue-950'}`}>
//                                                 {user.name}
//                                             </h3>
//                                             <span className="inline-block bg-blue-600 text-white dark:bg-blue-500 font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mt-2 shadow-sm">
//                                                 {user.committee_role}
//                                             </span>
//                                         </div>
                                        
//                                         <div className={`mt-5 pt-4 border-t text-left text-xs space-y-1 font-medium ${darkMode ? 'border-slate-800 text-slate-400' : 'border-blue-50 text-slate-600'}`}>
//                                             <p className="truncate">📧 {user.email}</p>
//                                             <p>📞 {user.phone || 'N/A'}</p>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 )}

//                 {currentTab === 'events' && (
//                     <div>
//                         <div className="flex justify-between items-center mb-8">
//                             <div>
//                                 <h1 className={`text-2xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-blue-900'}`}>Official Tournament Calendar</h1>
//                                 {/* <p className={`text-xs font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>6 active slots loaded for immediate booking</p> */}
//                             </div>
//                             <button onClick={() => setCurrentTab('register')} className={`text-xs px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-colors ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-950 text-white hover:bg-blue-900'}`}>Booking?</button>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {clubEvents.map((event, index) => (
//                                 <div key={index} className={`rounded-2xl border p-6 flex flex-col justify-between hover:shadow-md transition-shadow ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-blue-100 shadow-sm'}`}>
//                                     <div>
//                                         <span className={`inline-block px-2.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider ${event.type?.includes('Indoor') ? (darkMode ? 'bg-blue-950 text-blue-400 border border-blue-900' : 'bg-blue-50 text-blue-700 border border-blue-200') : (darkMode ? 'bg-emerald-950 text-emerald-400 border border-emerald-900' : 'bg-emerald-50 text-emerald-700 border border-emerald-200')}`}>{event.type || 'Tournament Slot'}</span>
//                                         <h3 className={`text-lg font-black mt-3 leading-tight ${darkMode ? 'text-white' : 'text-blue-950'}`}>{event.title}</h3>
//                                         <p className={`text-xs mt-2 line-clamp-3 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{event.details}</p>
//                                     </div>
//                                     <div className={`mt-6 pt-4 border-t flex justify-between items-center ${darkMode ? 'border-slate-800' : 'border-blue-50'}`}>
//                                         <span className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>📅 {event.date || event.event_date}</span>
//                                         <button onClick={() => { setFormData({...formData, event_name: event.title}); setCurrentTab('register'); }} className="text-xs font-black bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1.5 rounded-lg transition-colors shadow-sm">Join Slot</button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* {currentTab === 'dashboard' && (
//                     <div className="space-y-6">
//                         <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-blue-100 shadow-sm'}`}>
//                             <h2 className={`text-xl font-black ${darkMode ? 'text-white' : 'text-blue-900'}`}>⚙️ Executive Analytics</h2>
//                             <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Live tracking states of users and available events tables.</p>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                             <div className="bg-blue-950 border border-blue-900 text-white p-6 rounded-2xl shadow-md">
//                                 <h4 className="text-xs uppercase tracking-wider text-blue-300 font-bold">Total Registered Board Executives</h4>
//                                 <p className="text-4xl font-black mt-2 text-amber-400">{dbUsers.length || 1}</p>
//                             </div>
//                             <div className={`p-6 rounded-2xl border shadow-md ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-blue-100 text-slate-800'}`}>
//                                 <h4 className={`text-xs uppercase tracking-wider font-bold ${darkMode ? 'text-slate-400' : 'text-blue-600'}`}>Total Events Synced</h4>
//                                 <p className={`text-4xl font-black mt-2 ${darkMode ? 'text-white' : 'text-blue-950'}`}>{dbEvents.length}</p>
//                             </div>
//                         </div>
//                     </div>
//                 )} */}

//                 {currentTab === 'register' && (
//                     <div className={`max-w-xl mx-auto p-8 rounded-3xl border shadow-lg ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-blue-100 text-slate-800'}`}>
//                         <div className="mb-6">
//                             <h2 className={`text-2xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-blue-900'}`}>Non-Member Player Registration</h2>
//                             <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>External participants must fill out this panel for event confirmation.</p>
//                         </div>
//                         <form onSubmit={handleFormSubmit} className="space-y-4">
//                             <div>
//                                 <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Full Name</label>
//                                 <input type="text" value={formData.player_name} onChange={e => setFormData({...formData, player_name: e.target.value})} className={`w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${darkMode ? 'border-slate-700' : 'border-blue-100'}`} placeholder="e.g. Leo Messi" required />
//                             </div>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Email Address</label>
//                                     <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${darkMode ? 'border-slate-700' : 'border-blue-100'}`} placeholder="leo@example.com" required />
//                                 </div>
//                                 <div>
//                                     <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Contact Phone</label>
//                                     <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={`w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${darkMode ? 'border-slate-700' : 'border-blue-100'}`} placeholder="018XXXXXXXX" required />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Department / Institution</label>
//                                 <input type="text" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className={`w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${darkMode ? 'border-slate-700' : 'border-blue-100'}`} placeholder="e.g. CSE," required />
//                             </div>
//                             <div>
//                                 <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Target Tournament Slot</label>
//                                 <select value={formData.event_name} onChange={e => setFormData({...formData, event_name: e.target.value})} className={`w-full p-3 border rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 text-sm ${darkMode ? 'border-slate-700' : 'border-blue-100'}`} required>
//                                     <option value="">-- Select Active Slot --</option>
//                                     {clubEvents.map((ev, i) => <option key={i} value={ev.title}>{ev.title}</option>)}
//                                 </select>
//                             </div>
//                             <button type="submit" disabled={isSaving} className="w-full bg-blue-900 text-white dark:bg-amber-500 dark:text-slate-950 p-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:opacity-90 transition shadow-md">
//                                 {isSaving ? 'Processing Registration...' : 'Submit 🚀'}
//                             </button>
//                         </form>
//                     </div>
//                 )}

//             </main>
//         </div>
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
        <div className={`stat-card p-6 rounded-2xl border text-center shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-lg`}
            style={{ animationDelay: `${delay}ms`, '--card-bg': dark ? '#0f172a' : '#fff' }}>
            <span className="text-2xl block mb-1">{icon}</span>
            <span className={`text-3xl md:text-4xl font-black block stat-number ${dark ? 'text-amber-400' : 'text-blue-900'}`}>
                {num}{suffix}
            </span>
            <span className={`text-[10px] font-black uppercase tracking-wider block mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</span>
        </div>
    );
}

function Toast({ message, type, onClose }) {
    useEffect(() => { const t = setTimeout(onClose, 3500); return () => clearTimeout(t); }, [onClose]);
    return (
        <div className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-sm font-bold transition-all animate-slide-up
            ${type === 'success' ? 'bg-emerald-500 text-white' : type === 'error' ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}>
            <span>{type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
            <span>{message}</span>
            <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100 font-black">×</button>
        </div>
    );
}

const testimonials = [
    { name: "SH AH AN", dept: "CSE 61, MU", text: "MU Sports Club transformed my university experience. The tournaments are world-class and the executive team is incredibly professional.", avatar: "SH" },
    { name: "AVIZITH", dept: "CSE 61, MU", text: "The energy during INTRA-FUTSAL was absolutely electric!", avatar: "AV" },
    { name: "MANNA", dept: "CSE 62, MU", text: "The indoor games season is brilliantly organized. Carrom and Chess tournaments with proper brackets and scheduling — loved every moment.", avatar: "MN" },
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
        <div className={`rounded-3xl border p-8 md:p-12 relative overflow-hidden transition-all duration-500 ${dark ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-br from-blue-950 to-indigo-950'}`}>
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
    { icon: "♟️ 🎯", name: "Chess,Carrom...", desc: "Strategic mind games targeting MUSC member brackets", tag: "Indoor Season" },
    { icon: "🏸", name: "Badminton", desc: "Fast-paced court action in seasonal knockout cups", tag: "Coming Soon" },
    { icon: "🎮", name: "Esports", desc: "Level up the arena with next-generation Esports battles, where strategy, reflex, and digital dominance create tomorrow’s champions.⚡", tag: "Coming Soon" },
    { icon: "🏋️", name: "Athletics", desc: "Track, field and endurance events for campus athletes", tag: "Coming Soon" },
];

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
    const [formData, setFormData] = useState({ player_name: '', email: '', phone: '', event_name: '', department: '' });
    const [isSaving, setIsSaving] = useState(false);
    const [statsRef, statsInView] = useInView(0.3);
    const [activeFilter, setActiveFilter] = useState('All');

    const showToast = useCallback((message, type = 'success') => setToast({ message, type }), []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const res = await fetch('/register-event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                },
                body: JSON.stringify(formData)
            });
            const result = await res.json();
            if (res.ok && result.success) {
                showToast('Registration successful! 🎯', 'success');
                setFormData({ player_name: '', email: '', phone: '', event_name: '', department: '' });
                goTo('events');
            } else {
                showToast(result.message || 'Registration failed.', 'error');
            }
        } catch {
            showToast('Database connection failed!', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const defaultCommittee = [
        { id: 'c1', name: "Abu Sufian", committee_role: "PRESIDENT", email: "president@mu.edu", phone: "01741197388", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/503150460_4049824781929787_6892879632643073192_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH5hS8SG9Yr-FII0z2MH_4ERRp_ONRoSPtFGn841GhI-zn2LsgQpII3Kz64QQHN7xEr671NYzKDtKqOBg-F2hf_&_nc_ohc=x3m7tI3hzdUQ7kNvwGmUsZX&_nc_oc=AdpQBJRVYs93INxRt8nwFbWcTvuaDwnP2yhjafpgk_A8dgp7Nbj9yHW_6t9Q9NkzHK8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=DonhVO38m-hAEJPr7Wq3Ww&_nc_ss=7b2a8&oh=00_Af-QP3-ysWTPC6obmvGqC_MOis-L-hxtDXNG77sOqmWHSQ&oe=6A40A402" },
        { id: 'c2', name: "Shahriyar Rifat", committee_role: "GENERAL SECRETARY", email: "gs.sports@mu.edu", phone: "01308893939", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/655709272_2092664634800547_1015161797952192305_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGPv1QV0UOJ60bvffq7wLaal7QxW74pvqiXtDFbvim-qGfY5HNTcLLO6PM-1xiDOpoap-bupfwC5iPjyRWC5ZO2&_nc_ohc=NBTrF1_-3OYQ7kNvwFnIxHj&_nc_oc=AdoLn4s0oQLPJD3mo3pzw_LNb-IhLtvX2ZGQHs_eJDqIrzw5IRV0_SooivijtwK0hWo&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=M3877ep7paQA7E7p6ecScg&_nc_ss=7b2a8&oh=00_Af9R-shvdCoh0QB6B6fAJ_t4Z3cqnC8qp-T6mGSHTBAyEg&oe=6A40D138" },
        { id: 'c3', name: "Abdullah Jabid", committee_role: "ORGANISING SECRETARY", email: "organizer@mu.edu", phone: "01317242586", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/636944439_2514557168941395_109792837164866248_n.jpg?stp=dst-jpg_tt6&cstp=mx2040x2048&ctp=s2040x2048&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEto4w9UPiQjaXrFn8JZhGD5fQB77QGrRnl9AHvtAatGXDPgJeAqjXU-psHiUozBeiRx7QYWZyXVqpFFvoUcGz4&_nc_ohc=8WSXHtYupkUQ7kNvwFst4E4&_nc_oc=Adqs-grXxU9i-emXJPn3e7idp2b_pXiSyYSE61e-bs3T6Eysaq6ReWAYd7RzhpB_nFQ&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=Rfgiz-NP6zH1rxpiBdZJ_g&_nc_ss=7b2a8&oh=00_Af_mkc6hyCAworaGcHmXHc1bTyXB_0tU_21KiVwYl_zkbQ&oe=6A40D2C8" },
        { id: 'c4', name: "MD.Saiful Islam", committee_role: "ORGANISING SECRETARY", email: "oyon@mu.edu", phone: "01607896330", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t51.82787-15/615276663_18092496719489692_6663784768538851935_n.webp?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGhh11_rd7HabzYw7OUwrPlm3agS9XHs_ubdqBL1cez-y-11QkMwyWTcmSOOFxI5EL305EClZVw4wwIxfExKH0a&_nc_ohc=Nndgs9IrfH8Q7kNvwFNH4JG&_nc_oc=Adr_83iA73aYZXVzOOXp2SEaFL8tM5DWRBnwEkW87LbSJc38YC03iQnkq2hnVzFCztQ&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=C8JtvTyZ9jYNp6ftBKzluw&_nc_ss=7b2a8&oh=00_Af9WIXZPc5COM0NGgkX_Ote-SJMZL1XKtbZeqasG4nsIUA&oe=6A40CD00" },
        { id: 'c5', name: "MD.Salman", committee_role: "ORGANISING SECRETARY", email: "salman@mu.edu", phone: "01737599603", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/514280458_1735593600661307_8270103835630323832_n.jpg?stp=dst-jpg_tt6&cstp=mx1242x1452&ctp=s1242x1452&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE52RS9VzgA-ziRBDIi0oFDFMFd_jJCIZ8UwV3-MkIhn2zt5G-uVUBSFJItd1O4xdUDBfT6ds67azbxq0pW8CKE&_nc_ohc=Xer3V1aDOzcQ7kNvwFArjN6&_nc_oc=AdqaiK_LE6SsxydbJYZSYD721xJ1EWFYowIVIB3i2D8IHfXCx3LUqTe7syB7iw106j8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=p8YXeoFCV8jA2XZnR7qOrA&_nc_ss=7b2a8&oh=00_Af8rliIWZdU4KugEqvsqEJ_Ft6bg62Foi45b_Ceq9U-Y3A&oe=6A40ABAE" },
        { id: 'c6', name: "Adnan Wahdi", committee_role: "THE GREAT TREASURER", email: "treasurer@mu.edu", phone: "01724926802", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t51.75761-15/487452849_18343963657156059_8013629657132169764_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEJjhGoo0xdXmTCfdHMXnpsspOp419H8Qiyk6njX0fxCEDmtu3Sz4avxlp417W44ucI6-n5q8YxDuvBSUYQ05D5&_nc_ohc=ckgjnWiUQ_4Q7kNvwGiLF_Q&_nc_oc=Adp5wEKK86EHmZlgV5goe11t77GZajOLsEOR6CshzSpOyJl6okKzCS54q85soeksJU8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=NNweY7Vs8JLaUGbEZ6HPZA&_nc_ss=7b2a8&oh=00_Af9BTfe92R9rkeKwY0jTmMJRsFZCXb0YsUOCPit6CQFShg&oe=6A40B335" },
        { id: 'c7', name: "Syed Hassan", committee_role: "EVENT COORDINATOR", email: "hassan@mu.edu", phone: "01957636327", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/615086623_2337705286674902_2308975441158817751_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1535&ctp=s2048x1535&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH8rP1x0yuzGrd4-avR8G55QkbZH2caYg5CRtkfZxpiDkK8bz46hpsCt88lqDWes1c_YN3SCs1DgEFKzUgfxJ7H&_nc_ohc=ZJh55WfFRuUQ7kNvwGpMTny&_nc_oc=Ado2-imNLVuRhRixjBh1mkIsblLdwncgrrekSWUyUP0CoEuwuucx8wlkzdz_sj4iXNc&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=CYl3C_1frO2j-2LYyMyUvA&_nc_ss=7b2a8&oh=00_Af-_ce_XutoOpR5AYEaNGCNCOpm4Q7b-jb1Ag1HGT5fpcg&oe=6A40C07A" },
        { id: 'c8', name: "MD.Sodrul Hasan Sohi", committee_role: "OFFICE SECRETARY", email: "sohi@mu.edu", phone: "01316586392", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/496008790_1848890432557187_7153082079078757147_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1277&ctp=s1280x1277&_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFkN30ifDmqINN7_bJnpfhQSJqzRi2y_JVImrNGLbL8lWtthV6MFpR_Gdo0mZgd2_KiDSsYINWscVOKkjp0cbyG&_nc_ohc=xpNW_qdzyOQQ7kNvwFvvkFC&_nc_oc=Adrn63x6KgoOAJgijcC-9LjKQRXhRlpSomIr8vC1p7AEZex-vvikDxCc7AEdNRfjUTk&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=H1eKmTsau7-Q4JHRWdrQ3g&_nc_ss=7b2a8&oh=00_Af8dypcFw0XrpPlI3o89mBWjnt60IxR7PVu3ASX-Xv-ptw&oe=6A40A98D" },
        { id: 'c9', name: "Md.Mahiyan Noor Mahi", committee_role: "PRESS SECRETARY", email: "motu@mu.edu", phone: "01756510942", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/541591829_1328192965595500_5345473691480325870_n.jpg?stp=dst-jpg_tt6&cstp=mx960x1280&ctp=s960x1280&_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGEfG0OIi9nOrp4UN708NQF_GW1NdtDLAf8ZbU120MsB327E5RO9wkqP6luI9-r2ljvs1Z1KwqpF65XulEh-tpj&_nc_ohc=Ua1NFG-tOloQ7kNvwGau3rg&_nc_oc=Adr5ghAyJslRVmwEoU27Zmtb8rl_lMKAVzbzZrH1iu5694g1Ezz8bcLgIasiiU6doiQ&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=SCt7TgV2yIbVACf7YJLhnQ&_nc_ss=7b2a8&oh=00_Af9IkWVqYmxtuc3rH1z27ZuEmlyw24eyfoYzALtARyqhxQ&oe=6A40C895" },
        { id: 'c10', name: "Miftahur Rahman Omi", committee_role: "CHIEF PHOTOGRAPHER", email: "leo@mu.edu", phone: "01887457293", profile_picture: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/494788140_643333422028875_6621256742388626645_n.jpg?stp=dst-jpg_tt6&cstp=mx1331x1330&ctp=s1331x1330&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFsbe_DrxQRtmqgbKJJ4vIcYKkGnmI7cCtgqQaeYjtwK5z-j3-oyO1kYYTghlFmWhY1IySz23faNbPFzxhgCJm7&_nc_ohc=WEIfaiBkX4cQ7kNvwHwBlVm&_nc_oc=AdqG8XkIIPOwCL5KXnVroMBwzWxWi-7pptUfSRKgBQSi8tXEtgkoUK3chsuKk1t-tSY&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=ozq06bFjN2tYkQM2LDpTaw&_nc_ss=7b2a8&oh=00_Af_Pj36Za4yWX-Ffn9TmjakHK_lMxjowjwEYTtzCHp2EPA&oe=6A40CEC6" },
        // { id: 'c11', name: "A.S.M Nafiu Iqbal", committee_role: "Executive Member", email: "nafiu@mu.edu", phone: "01234567890", profile_picture: "" }
    ];

    const committeeList = dbUsers.length > 1 ? dbUsers : defaultCommittee;

    const clubEvents = dbEvents.length >= 6 ? dbEvents : [
        { title: "INDOOR GAMES SEASON-15", type: "Indoor Tournament", date: "July 5, 2026", details: "Annual ultimate indoor showdown for enthusiasts at MU Lounge." },
        { title: "INTRA-MUSC FUTSAL", type: "Indoor Tournament", date: "August 15, 2026", details: "Strategic mind games tournament targeting MUSC members brackets." },
        { title: "LEAGUE M", type: "League Match", date: "Sep 02, 2026", details: "Premium inter-university 9-a-side main football league." },
        { title: "INTRA FUTSAL", type: "League Match", date: "Oct 20, 2026", details: "The ultimate futsal competition." },
        { title: "UPL", type: "Domestic Tournament", date: "Nov 15, 2026", details: "The grand cricket tournament under international standard rules." },
        { title: "MPL-15", type: "Tournament", date: "Jan 20, 2027", details: "Inter-university level grand cricket event." }
    ];

    const galleryImages = [
        { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/626331988_1313951187425703_3795850859671558213_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s1920x1080&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGfKZKxBhUkxshIv0MLqNsX5vVj678KACvm9WPrvwoAK_eOrkTMWMH01cqcd1GjE6YNcNnRRK7AOIQRMA7QM7px&_nc_ohc=V5_lUO_g7DIQ7kNvwECe9yJ&_nc_oc=AdpKO67a3GM6P6QSjQj3cb0YMvX3DR9RKfPWBe0pgh0qzXQlvazn3RB1C3yU7qdIvzw&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=WJslUUbN2hf_h-FYaxpZ3g&_nc_ss=7b2a8&oh=00_Af-hTbY22ijzzJncUWTzbfk16iUoIIG_Az5RAw-votkguw&oe=6A408A7F", label: "MPL Champions 2026" },
        { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/617090785_1295051429315679_6213409423227020079_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x960&ctp=s1280x960&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEj090S2l12tydczuAd8kJEt6X1WXet48C3pfVZd63jwCo0Ikx4630tODBF1wj-Org-lUUsqRN9B9cbzS4UrcZ7&_nc_ohc=ND9frAJfSWkQ7kNvwHZnGPE&_nc_oc=Ado5vWMDc2RyAl2TX9A3pqTcQgqLqKLKP2yADxWcZSRtXEgBmkybM0e8ItY2GNadUIs&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=OMKrLJwlHD-X0Q6jzyA7Ew&_nc_ss=7b2a8&oh=00_Af-zXomqDiBiPyTwiVMVxOlHTpopt5howwAjaJODERf3-w&oe=6A421D4C", label: "BBQ Night 2026" },
        { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/619334737_1299774662176689_3518894522302526164_n.jpg?stp=dst-jpg_tt6&cstp=mx960x503&ctp=s960x503&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFOl9eDDuyA9kMmuHTlwNMfXra_aN3yAodetr9o3fICh-ujj4-A8kj_3b1WhNYzBaWLJxkir1grjvwYGpQMEuZb&_nc_ohc=ugqPf0tUVx8Q7kNvwENxCL-&_nc_oc=AdopBLDw6YSaWg52Mu_A4CZSrg-Q1Kgv6CTeh-P7xXWymycdBE3MyT6MnVk_DSrt51k&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=pybPjK7orcttmXa8XuKvRA&_nc_ss=7b2a8&oh=00_Af_PZ8MDq_ql2wWKRKv5qHSIkkw29Z2CugSHeza3Pc2T2w&oe=6A4219AE", label: "Committee Handover(2024-2025)" },
        { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/618882277_1299774898843332_4609512799048176452_n.jpg?stp=dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGYQ6vCDI47XalNseXi_iSr-RKQn8dcABv5EpCfx1wAG_zcAxxB9x4cKJd5OeSkTFgYO1Cky4QbbfbC59ooRl3M&_nc_ohc=QTOAzR98FQIQ7kNvwElXHGq&_nc_oc=AdpNN7a9c2flZGUuJZAmobdjFJIbANhYSvZWN3xtzDw2BA_S_5mG3GVOKg3NjILV5lM&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=SnCsuH4kh0ezzeX4Y7M3cg&_nc_ss=7b2a8&oh=00_Af8W8LSI3rHkwSzAmrTBanhQgIaZbJ-JFs-iHFq5Qy3mLg&oe=6A420041", label: "Farewell of MR.president(24-25)" },
        { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/575188965_1233925582094931_5998660472661711882_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGZebmeiz0KG2lvbgmqbszEvvMdYyIgEtm-8x1jIiAS2eRHKq1zcR6tzLmzSjez3DUtefz9c8iUi255yYXBV6A5&_nc_ohc=6DPtcRKpJXAQ7kNvwF30puP&_nc_oc=AdrdAqw4DU7FF16GLKWxJ77s60Cipw1EpYWNWaZorguBa9MYsrscOps764Rc2M7BgI8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=DiZ518oWMc-poXXSgPraOQ&_nc_ss=7b2a8&oh=00_Af965S4SYg1HJq1h-BBburFWkzgEV4DdFUUmiwlL9wzW7A&oe=6A40AB24", label: "Arrival of MR.15" },
        { src: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/558671734_1215392863948203_254053450087788206_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1280&ctp=s1024x1280&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEgCJDpjlGsXG5BNscswPfjy6RMhWhgZP_LpEyFaGBk_0RUf0HxbGyaLyUQ0cq3nFedmNIjMqDbzB2LkK9a3Zsn&_nc_ohc=yM8pgS4htxcQ7kNvwEiGAYA&_nc_oc=Adrv0AUMjIZ5tmsH25sh6ZY-Fvrg9q6vn7GUd4vOwjV4y9qHicmHWhXAR6E9VfMBrX8&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=mNjS-q6OtT1-nNHh8rTfIA&_nc_ss=7b2a8&oh=00_Af8JXkG566il-FdY67E2jogTBsl37vlqTq-JGlTy6h5eYQ&oe=6A408703", label: "League M Champions 2025" },
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
        'CHIEF PHOTOGRAPHER': 'from-emerald-500 to-emerald-700',
        'Executive Member': 'from-slate-500 to-slate-700',
    };

    const d = darkMode;

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bebas+Neue&display=swap');

                * { box-sizing: border-box; }

                body { font-family: 'Inter', sans-serif; margin: 0; }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); }
                    50%       { box-shadow: 0 0 20px 4px rgba(245,158,11,0.25); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-8px); }
                }
                @keyframes shimmer {
                    0%   { background-position: -200% center; }
                    100% { background-position:  200% center; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }

                .animate-fade-in-up  { animation: fadeInUp 0.6s ease both; }
                .animate-slide-up    { animation: slideUp  0.4s ease both; }
                .animate-float       { animation: float    3s ease-in-out infinite; }
                .animate-pulse-glow  { animation: pulse-glow 2s ease-in-out infinite; }
                .animate-spin-slow   { animation: spin-slow 12s linear infinite; }

                .hero-gradient {
                    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #0f172a 100%);
                }
                .hero-gradient-dark {
                    background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #020617 100%);
                }
                .gold-shimmer {
                    background: linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 3s linear infinite;
                }
                .glass-card {
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                }
                .stat-card {
                    background: var(--card-bg, #fff);
                    animation: fadeInUp 0.6s ease both;
                }
                .nav-link {
                    position: relative;
                    padding-bottom: 2px;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    left: 0; bottom: -2px;
                    width: 0; height: 2px;
                    background: #f59e0b;
                    transition: width 0.25s ease;
                    border-radius: 2px;
                }
                .nav-link:hover::after, .nav-link.active::after { width: 100%; }
                .sport-card:hover .sport-icon { animation: float 1.5s ease-in-out infinite; }
                .gallery-item:hover img { transform: scale(1.08); }
                .gallery-item img { transition: transform 0.4s ease; }
                .committee-card:hover { transform: translateY(-6px); }
                .committee-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .committee-card:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
                .event-card:hover { transform: translateY(-4px); }
                .event-card { transition: all 0.3s ease; }

                ::-webkit-scrollbar { width: 6px; }
                ::-webkit-scrollbar-track { background: transparent; }
                ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }

                .membership-benefit:hover .benefit-icon {
                    transform: scale(1.15) rotate(-5deg);
                }
                .benefit-icon { transition: transform 0.3s ease; }
            `}</style>

            <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${d ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>

                <nav className={`shadow-2xl sticky top-0 z-50 border-b transition-colors duration-300 ${d ? 'bg-slate-900/95 border-slate-800' : 'bg-slate-950/95 border-amber-500/20'}`}
                    style={{ backdropFilter: 'blur(20px)' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-20">
                            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => goTo('home')}>
                                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-amber-500/20 group-hover:shadow-amber-400/40 transition-shadow">
                                    <img src="https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/469504888_979335607553931_871846207987255438_n.jpg?stp=dst-jpg_tt6&cstp=mx1579x1579&ctp=s1579x1579&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH0shj4KjfBHVniiJRf1ACVuTeY0gI1ruG5N5jSAjWu4e9K7cwmngnLfL8XfJk3GwvnufgJ2EUQ76hV5eVgRoio&_nc_ohc=Lrb2sHs5_9IQ7kNvwEWz_dt&_nc_oc=AdpnYJRS6XxWb1IVMEcSPo7unJlxZW0PVuoZ4tLLfqzHJ_TZWG5ln8l5qTvqQH9gzYw&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=Uo9KpgJyYpabe_Hrl_MDNw&_nc_ss=7b2a8&oh=00_Af-dOO7BI57lOBpMfZJKa9Uvn693TpVdJtE8rJ8dijaN9g&oe=6A408D3E" alt="Logo" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <span className="text-lg font-black tracking-widest block text-white leading-tight">MU SPORTS CLUB</span>
                                    <span className="text-[9px] tracking-[0.22em] font-extrabold uppercase bg-gradient-to-r from-red-500 via-red-200 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(96,165,250,0.35)]"> Metropolitan University,Sylhet</span>
                                    </div>
                            </div>
                            <div className="hidden md:flex items-center space-x-7 text-sm font-bold text-white">
                                {['home','about','committee','events'].map(tab => (
                                    <button key={tab} onClick={() => goTo(tab)}
                                        className={`nav-link capitalize hover:text-amber-400 transition-colors duration-200 ${currentTab === tab ? 'text-amber-400 active' : ''}`}>
                                        {tab === 'committee' ? 'Executive Panel' : tab === 'events' ? 'Tournaments' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                                <button onClick={() => setDarkMode(!d)}
                                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all text-white text-base">
                                    {d ? '☀️' : '🌙'}
                                </button>
                                <button onClick={() => goTo('register')}
                                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-5 py-2.5 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all font-black text-[11px] uppercase tracking-wider shadow-lg shadow-amber-500/20 animate-pulse-glow">
                                    Register Now
                                </button>
                            </div>

                            <div className="flex items-center space-x-3 md:hidden">
                                <button onClick={() => setDarkMode(!d)} className="p-2 bg-slate-800 rounded-xl text-white">{d ? '☀️' : '🌙'}</button>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white p-2">
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
                        <div className="md:hidden bg-slate-900/98 border-t border-slate-800 px-4 pt-3 pb-5 space-y-1 text-base font-semibold text-white"
                            style={{ backdropFilter: 'blur(20px)' }}>
                            {[['home','Home'],['about','About'],['committee','Executive Panel'],['events','Tournaments']].map(([tab,label]) => (
                                <button key={tab} onClick={() => goTo(tab)}
                                    className={`block w-full text-left py-2.5 px-3 rounded-lg transition-colors ${currentTab === tab ? 'text-amber-400 bg-amber-400/10' : 'hover:text-amber-400 hover:bg-white/5'}`}>
                                    {label}
                                </button>
                            ))}
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

                            <div className={`relative rounded-3xl overflow-hidden text-center text-white py-20 md:py-28 px-6 ${d ? 'hero-gradient-dark' : 'hero-gradient'}`}>
                                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-spin-slow"></div>
                                <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="relative z-10 space-y-6">
                                  <span className="inline-block bg-gradient-to-r from-red-600/20 via-blue-700/20 to-cyan-500/20 border border-red-400/40 text-white text-[10px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full backdrop-blur-2xl shadow-[0_0_25px_rgba(37,99,235,0.45)]">🏆 Official Sports Arena · Metropolitan University</span>

                                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
                                        <span className="block text-white">Born To Rule</span>
                                        <span className="block gold-shimmer">Over The Game</span>
                                    </h1>

                                    <p className="text-blue-100/70 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                                        <span className="block text-white">Welcome to the Royal Club</span>
                                        We cultivate elite sportsmanship, celebrate strategic campus victories, and manage athletic leagues with honour at Metropolitan University, Sylhet.
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                                        <button onClick={() => goTo('events')}
                                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-8 py-4 rounded-2xl text-[11px] uppercase tracking-wider transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/30">
                                            Explore Tournaments🏆
                                        </button>
                                        <button onClick={() => goTo('register')}
                                            className="glass-card hover:bg-white/10 text-white font-bold px-7 py-4 rounded-2xl text-[11px] uppercase tracking-wider transition-all hover:scale-105">
                                            Register Now →
                                        </button>
                                        <button onClick={() => goTo('committee')}
                                            className="glass-card hover:bg-white/10 text-white font-bold px-7 py-4 rounded-2xl text-[11px] uppercase tracking-wider transition-all hover:scale-105">
                                            Executive Board 👥
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <StatCard count={350} suffix="+" label="Athletes Enrolled" icon="🏃‍♂️" dark={d} delay={0}  trigger={statsInView} />
                                <StatCard count={6}   suffix="+"  label="Active Events"     icon="🔥" dark={d} delay={100} trigger={statsInView} />
                                <StatCard count={11}  suffix=""   label="Panel Members"     icon="👑" dark={d} delay={200} trigger={statsInView} />
                                <StatCard count={99.99} suffix="%"  label="Fair Play"         icon="🛡️" dark={d} delay={300} trigger={statsInView} />
                            </div>

                            <div className="space-y-6">
                                <div className="text-center">
                                    <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>What We Play</p>
                                    <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Sports Categories</h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                    {sportsCategories.map((sp, i) => (
                                        <div key={i} className={`sport-card p-6 rounded-2xl border group cursor-pointer animate-fade-in-up transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl ${d ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-blue-100 hover:bg-blue-50/50 hover:shadow-blue-100'}`}
                                            style={{ animationDelay: `${i * 80}ms` }}>
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
                                    <button onClick={() => goTo('events')} className={`text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl border transition-colors ${d ? 'border-slate-700 text-slate-300 hover:border-amber-400 hover:text-amber-400' : 'border-blue-200 text-blue-700 hover:border-blue-600 hover:text-blue-600'}`}>
                                        View All →
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    {clubEvents.slice(0, 3).map((ev, i) => (
                                        <div key={i} className={`event-card rounded-2xl border p-6 ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100 shadow-sm'}`}>
                                            <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${ev.type?.includes('Indoor') ? (d ? 'bg-blue-950 text-blue-400' : 'bg-blue-50 text-blue-700') : (d ? 'bg-emerald-950 text-emerald-400' : 'bg-emerald-50 text-emerald-700')}`}>{ev.type}</span>
                                            <h3 className={`font-black text-base mt-3 ${d ? 'text-white' : 'text-blue-950'}`}>{ev.title}</h3>
                                            <p className={`text-xs mt-2 leading-relaxed ${d ? 'text-slate-400' : 'text-slate-500'}`}>{ev.details}</p>
                                            <div className={`mt-5 pt-4 border-t flex justify-between items-center ${d ? 'border-slate-800' : 'border-blue-50'}`}>
                                                <span className={`text-xs font-bold ${d ? 'text-slate-300' : 'text-slate-600'}`}>📅 {ev.date || ev.event_date}</span>
                                                <button onClick={() => { setFormData(prev => ({ ...prev, event_name: ev.title })); goTo('register'); }}
                                                    className="text-[10px] font-black bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1.5 rounded-lg transition-colors">
                                                    Join →
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`rounded-3xl p-8 md:p-12 border ${d ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-br from-blue-950 to-indigo-950 text-white'}`}>
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
                                        { icon: "📸", title: "Media Coverage", desc: "Professional photography and press coverage." },
                                        { icon: "🎖️", title: "Recognition & Awards", desc: "Annual MVP titles, trophies, and certificates for top performers." },
                                    ].map((b, i) => (
                                        <div key={i} className="membership-benefit flex gap-4 items-start group animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
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
                                    <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>Legacy Moments...</p>
                                    <h2 className={`text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Club Gallery</h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                    {galleryImages.map((img, i) => (
                                        <div key={i} className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer border ${i === 0 || i === 3 ? 'md:col-span-1 h-56' : 'h-44'} ${d ? 'border-slate-800' : 'border-blue-100'}`}
                                            onClick={() => setLightboxImg(img)}>
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
                                <button onClick={() => goTo('register')}
                                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-10 py-4 rounded-2xl text-xs uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/30">
                                    Register 🚀
                                </button>
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
                                <p className={`text-sm leading-relaxed font-medium ${d ? 'text-slate-300' : 'text-slate-600'}`}>
                                    MU Sports Club is the central athletic authority of Metropolitan University, Sylhet. We build teams that challenge boundaries, organize competitive championships, and maintain active external communication for regional athletic events. Since our founding, we've grown into a community of over 350 athletes across all faculties — united by a love for competition and fair play.
                                </p>
                                <div className="flex items-center gap-4 pt-2">
                                    <a href="https://www.facebook.com/MetropolitanUniversity.Sports.Club" target="_blank" rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 transition-all border group ${d ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-blue-100 hover:border-blue-400'}`} title="Facebook">
                                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-6 h-6 object-contain" alt="Facebook" />
                                    </a>
                                    <a href="https://www.instagram.com/sportsclubmu/" target="_blank" rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 transition-all border group ${d ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-blue-100 hover:border-pink-400'}`} title="Instagram">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-6 h-6 object-contain" alt="Instagram" />
                                    </a>
                                    <a href="mailto:sports.club@mu.edu"
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md hover:scale-110 transition-all border text-xl ${d ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-blue-100 hover:border-amber-400'}`} title="Email Us">
                                        📧
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className={`text-xl font-black tracking-tight ${d ? 'text-white' : 'text-blue-950'}`}>🏆 Legacy Moments</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {galleryImages.slice(0, 3).map((img, i) => (
                                        <div key={i} className={`h-44 rounded-2xl overflow-hidden relative border cursor-pointer group ${d ? 'border-slate-700' : 'border-blue-100'}`}
                                            onClick={() => setLightboxImg(img)}>
                                            <img src={img.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" alt={img.label} />
                                            <span className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-wider">{img.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`p-8 rounded-3xl border shadow-md animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-blue-50/60 border-blue-100'}`}>
                                <div className="mb-6">
                                    <h3 className={`text-xl font-black ${d ? 'text-amber-400' : 'text-blue-950'}`}>🤝 Want to Collaborate?</h3>
                                    <p className={`text-xs mt-1 font-medium ${d ? 'text-slate-300' : 'text-slate-600'}`}>Power the spirit of champions by partnering with MU Sports Club in regional competitions, tournament hosting, sports-tech initiatives, and youth athletic development.🚀</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Name" value={collabForm.name} onChange={e => setCollabForm({ ...collabForm, name: e.target.value })}
                                            className={`p-3.5 border rounded-xl text-sm outline-none transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} required />
                                        <input type="text" placeholder="Organization Name" value={collabForm.org} onChange={e => setCollabForm({ ...collabForm, org: e.target.value })}
                                            className={`p-3.5 border rounded-xl text-sm outline-none transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} />
                                    </div>
                                    <textarea placeholder="Describe your collaboration proposal briefly..." rows="4" value={collabForm.note} onChange={e => setCollabForm({ ...collabForm, note: e.target.value })}
                                        className={`w-full p-3.5 border rounded-xl text-sm outline-none transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} required></textarea>
                                    <div className={`p-4 rounded-xl border border-dashed flex flex-col sm:flex-row justify-between items-center gap-3 ${d ? 'bg-slate-950 border-slate-700' : 'bg-white border-blue-200'}`}>
                                        <div>
                                            <span className={`text-xs font-black block ${d ? 'text-slate-200' : 'text-slate-700'}`}>Attach Proposal Layout / Identity Image</span>
                                            <span className="text-[10px] text-slate-400 block mt-0.5">Supports PNG, JPG (Max 5MB)</span>
                                        </div>
                                        <input type="file" id="collab-file" accept="image/*" onChange={handleFileChange} className="hidden" />
                                        <label htmlFor="collab-file" className={`text-[11px] px-5 py-2.5 rounded-xl font-black cursor-pointer transition-colors ${d ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-blue-950 text-white hover:bg-blue-800'}`}>
                                            {attachedFile ? '🔄 Change File' : '📁 Choose File'}
                                        </label>
                                    </div>
                                    <button onClick={handleSayHello} className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg ${d ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-amber-500/20' : 'bg-blue-950 text-white hover:bg-blue-800'}`}>
                                        Send Proposal ✉️
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentTab === 'committee' && (
                        <div className="space-y-10">
                            <div className="text-center animate-fade-in-up">
                                <p className={`text-xs font-black tracking-widest uppercase mb-2 ${d ? 'text-blue-400' : 'text-blue-600'}`}>The ChangeMakers</p>
                                <h1 className={`text-3xl md:text-4xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>
                                    Executive Steering Committee 👑
                                </h1>
                                <p className={`text-xs font-bold tracking-widest uppercase mt-2 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Official Designation Hierarchy — Session 2025–26</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {committeeList.map((user, idx) => {
                                    const imgSrc = user.profile_picture?.trim()
                                        ? (user.profile_picture.startsWith('http') ? user.profile_picture : `/storage/${user.profile_picture}`)
                                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1E3A8A&color=FFFFFF&bold=true`;
                                    const grad = roleColors[user.committee_role] || 'from-slate-500 to-slate-700';

                                    return (
                                        <div key={user.id}
                                            className={`committee-card rounded-2xl border overflow-hidden animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}
                                            style={{ animationDelay: `${idx * 60}ms` }}>
                                            <div className={`h-1.5 w-full bg-gradient-to-r ${grad}`}></div>

                                            <div className="p-6 text-center">
                                                <div className="relative inline-block mb-4">
                                                    <div className={`w-24 h-24 rounded-2xl overflow-hidden border-2 shadow-lg mx-auto bg-blue-50 dark:bg-slate-800 ${d ? 'border-slate-700' : 'border-blue-100'}`}>
                                                        <img src={imgSrc} className="w-full h-full object-cover block" alt=""
                                                            onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1E3A8A&color=FFFFFF&bold=true`; }} />
                                                    </div>
                                                    <div className={`absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${grad} flex items-center justify-center shadow-md`}>
                                                        <span className="text-white text-[10px] font-black">#</span>
                                                    </div>
                                                </div>

                                                <h3 className={`font-black text-[15px] leading-tight ${d ? 'text-white' : 'text-blue-950'}`}>{user.name}</h3>
                                                <span className={`inline-block mt-2 bg-gradient-to-r ${grad} text-white font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm`}>
                                                    {user.committee_role}
                                                </span>
                                            </div>

                                            <div className={`px-5 pb-5 border-t text-left text-xs space-y-2 pt-4 ${d ? 'border-slate-800' : 'border-blue-50'}`}>
                                                <a href={`mailto:${user.email}`} className={`flex items-center gap-2 truncate group hover:text-amber-500 transition-colors ${d ? 'text-slate-400' : 'text-slate-500'}`}>
                                                    <span>📧</span>
                                                    <span className="truncate group-hover:underline font-medium">{user.email}</span>
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
                                    <p className={`text-xs font-black tracking-widest uppercase mb-1 ${d ? 'text-blue-400' : 'text-blue-600'}`}>Season 2025–26</p>
                                    <h1 className={`text-2xl md:text-3xl font-black tracking-tight uppercase ${d ? 'text-white' : 'text-blue-950'}`}>Events Calendar</h1>
                                </div>
                                <button onClick={() => goTo('register')} className={`flex-shrink-0 text-[11px] px-5 py-2.5 rounded-xl font-black uppercase tracking-wider transition-colors shadow-md ${d ? 'bg-amber-500 text-slate-950 hover:bg-amber-400' : 'bg-blue-950 text-white hover:bg-blue-800'}`}>
                                    Book a Slot →
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {eventTypes.map(type => (
                                    <button key={type} onClick={() => setActiveFilter(type)}
                                        className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${activeFilter === type
                                            ? (d ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-blue-950 text-white border-blue-950')
                                            : (d ? 'border-slate-700 text-slate-400 hover:border-slate-500' : 'border-blue-200 text-slate-500 hover:border-blue-400')}`}>
                                        {type}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredEvents.map((ev, i) => (
                                    <div key={i} className={`event-card rounded-2xl border overflow-hidden animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100 shadow-sm'}`}
                                        style={{ animationDelay: `${i * 60}ms` }}>
                                        <div className={`h-1 w-full ${ev.type?.includes('Indoor') ? 'bg-gradient-to-r from-blue-500 to-blue-700' : 'bg-gradient-to-r from-emerald-500 to-emerald-700'}`}></div>
                                        <div className="p-6">
                                            <span className={`inline-block px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider ${ev.type?.includes('Indoor') ? (d ? 'bg-blue-950 text-blue-400 border border-blue-900' : 'bg-blue-50 text-blue-700 border border-blue-200') : (d ? 'bg-emerald-950 text-emerald-400 border border-emerald-900' : 'bg-emerald-50 text-emerald-700 border border-emerald-200')}`}>{ev.type || 'Tournament'}</span>
                                            <h3 className={`text-xl font-black mt-3 leading-tight ${d ? 'text-white' : 'text-blue-950'}`}>{ev.title}</h3>
                                            <p className={`text-xs mt-2 leading-relaxed line-clamp-3 ${d ? 'text-slate-400' : 'text-slate-500'}`}>{ev.details}</p>
                                            <div className={`mt-6 pt-4 border-t flex justify-between items-center ${d ? 'border-slate-800' : 'border-blue-50'}`}>
                                                <span className={`text-xs font-bold ${d ? 'text-slate-300' : 'text-slate-700'}`}>📅 {ev.date || ev.event_date}</span>
                                                <button onClick={() => { setFormData(prev => ({ ...prev, event_name: ev.title })); goTo('register'); }}
                                                    className="text-[10px] font-black bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl transition-all hover:scale-105 shadow-sm">
                                                    Join →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentTab === 'register' && (
                        <div className={`max-w-lg mx-auto p-8 md:p-10 rounded-3xl border shadow-xl animate-fade-in-up ${d ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}>
                            <div className="mb-8">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${d ? 'text-blue-400' : 'text-blue-600'}`}>External Participants</span>
                                <h2 className={`text-2xl font-black tracking-tight mt-1 ${d ? 'text-white' : 'text-blue-900'}`}>Participant registration</h2>
                                <p className={`text-xs mt-2 leading-relaxed ${d ? 'text-slate-400' : 'text-slate-500'}`}>Fill out this form to book your slot for an upcoming MUSC tournament. Confirmation will be sent to your email.</p>
                            </div>

                            <form onSubmit={handleFormSubmit} className="space-y-5">
                                <div>
                                    <label className={`block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Full Name *</label>
                                    <input type="text" value={formData.player_name} onChange={e => setFormData({ ...formData, player_name: e.target.value })}
                                        className={`w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`}
                                        placeholder="e.g. Leo Messi" required />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className={`block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Email *</label>
                                        <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className={`w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`}
                                            placeholder="you@example.com" required />
                                    </div>
                                    <div>
                                        <label className={`block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Phone *</label>
                                        <input type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            className={`w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`}
                                            placeholder="018XXXXXXXX" required />
                                    </div>
                                </div>
                                <div>
                                    <label className={`block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Department / Institution *</label>
                                    <input type="text" value={formData.department} onChange={e => setFormData({ ...formData, department: e.target.value })}
                                        className={`w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`}
                                        placeholder="e.g. CSE, MU" required />
                                </div>
                                <div>
                                    <label className={`block text-[10px] font-black uppercase tracking-wider mb-1.5 ${d ? 'text-slate-400' : 'text-slate-500'}`}>Target Tournament *</label>
                                    <select value={formData.event_name} onChange={e => setFormData({ ...formData, event_name: e.target.value })}
                                        className={`w-full p-3.5 border rounded-xl outline-none transition-all text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${d ? 'border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500' : 'border-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`} required>
                                        <option value="">-- Select Active Tournament --</option>
                                        {clubEvents.map((ev, i) => <option key={i} value={ev.title}>{ev.title} · {ev.date || ev.event_date}</option>)}
                                    </select>
                                </div>

                                <button type="submit" disabled={isSaving}
                                    className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl mt-2 ${isSaving ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-2xl'} ${d ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-amber-500/20' : 'bg-gradient-to-r from-blue-800 to-blue-950 text-white shadow-blue-900/30'}`}>
                                    {isSaving ? '⏳ Processing...' : 'Submit 🚀'}
                                </button>
                            </form>
                        </div>
                    )}

                </main>

                <footer className={`mt-20 border-t ${d ? 'bg-slate-900 border-slate-800' : 'bg-slate-950 border-amber-500/10'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl overflow-hidden">
                                        <img src="https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/469504888_979335607553931_871846207987255438_n.jpg?stp=dst-jpg_tt6&cstp=mx1579x1579&ctp=s1579x1579&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH0shj4KjfBHVniiJRf1ACVuTeY0gI1ruG5N5jSAjWu4e9K7cwmngnLfL8XfJk3GwvnufgJ2EUQ76hV5eVgRoio&_nc_ohc=Lrb2sHs5_9IQ7kNvwEWz_dt&_nc_oc=AdpnYJRS6XxWb1IVMEcSPo7unJlxZW0PVuoZ4tLLfqzHJ_TZWG5ln8l5qTvqQH9gzYw&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=Uo9KpgJyYpabe_Hrl_MDNw&_nc_ss=7b2a8&oh=00_Af-dOO7BI57lOBpMfZJKa9Uvn693TpVdJtE8rJ8dijaN9g&oe=6A408D3E" alt="logo" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-sm tracking-wider">MU SPORTS CLUB</p>
                                        <p className="text-amber-400 text-[9px] font-bold uppercase tracking-widest">Metropolitan University, Sylhet</p>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-xs leading-relaxed">The official sports authority of Metropolitan University. Cultivating elite athletes since day one.</p>
                            </div>
                            <div>
                                <p className="text-white font-black text-xs uppercase tracking-wider mb-4">Quick Links</p>
                                <div className="space-y-2">
                                    {[['home','Home'],['about','About'],['committee','Executive Panel'],['events','Tournaments'],['register','Register']].map(([tab,label]) => (
                                        <button key={tab} onClick={() => goTo(tab)} className="block text-slate-400 hover:text-amber-400 text-xs font-medium transition-colors">{label}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-black text-xs uppercase tracking-wider mb-4" >Contact Us</p>
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