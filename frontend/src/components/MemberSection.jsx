// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AlumniCard from './AlumniCard';
// import api from '../api'; // axios instance

// const MemberSection = () => {
//   const [alumniList, setAlumniList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);
//   const [batchOptions, setBatchOptions] = useState([]);
//   const [selectedBatch, setSelectedBatch] = useState('');
//   const [sortOption, setSortOption] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAlumni = async () => {
//       try {
//         const res = await api.get('/alumni');
//         const allAlumni = res.data;

//         setAlumniList(allAlumni);
//         setFilteredList(allAlumni);

//         const batches = [...new Set(allAlumni.map(a => a.batch))].filter(Boolean).sort();
//         setBatchOptions(batches);
//       } catch (err) {
//         console.error('Error fetching alumni:', err);
//         setError('Failed to load alumni. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlumni();
//   }, []);

//   const applyFiltersAndSort = (list, batch, sort, query) => {
//     let filtered = [...list];

//     if (batch) {
//       filtered = filtered.filter(a => a.batch === batch);
//     }

//     if (query) {
//       const q = query.toLowerCase();
//       filtered = filtered.filter(a =>
//         (a.fullName || '').toLowerCase().includes(q) ||
//         (a.email || '').toLowerCase().includes(q) ||
//         (a.company || '').toLowerCase().includes(q)
//       );
//     }

//     if (sort === 'newest') {
//       filtered.sort((a, b) => (b.yearOfPassing || 0) - (a.yearOfPassing || 0));
//     } else if (sort === 'oldest') {
//       filtered.sort((a, b) => (a.yearOfPassing || 0) - (b.yearOfPassing || 0));
//     } else if (sort === 'name') {
//       filtered.sort((a, b) => (a.fullName || '').localeCompare(b.fullName || ''));
//     }

//     return filtered;
//   };

//   const handleBatchChange = (e) => {
//     const batch = e.target.value;
//     setSelectedBatch(batch);
//     const updated = applyFiltersAndSort(alumniList, batch, sortOption, searchQuery);
//     setFilteredList(updated);
//   };

//   const handleSortChange = (e) => {
//     const sort = e.target.value;
//     setSortOption(sort);
//     const updated = applyFiltersAndSort(alumniList, selectedBatch, sort, searchQuery);
//     setFilteredList(updated);
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     const updated = applyFiltersAndSort(alumniList, selectedBatch, sortOption, query);
//     setFilteredList(updated);
//   };

//   const handleViewProfile = (id) => {
//     navigate(`/profile/${id}`);
//   };

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

//       <div style={styles.controlsContainer}>
//         {/* 🔍 Search Bar */}
//         <input
//           type="text"
//           placeholder="Search by name, email, or company..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//           style={styles.searchInput}
//         />

//         {/* 🏷️ Batch Filter */}
//         <div>
//           <label style={styles.label}>Filter by Batch: </label>
//           <select value={selectedBatch} onChange={handleBatchChange} style={styles.select}>
//             <option value="">All</option>
//             {batchOptions.map((batch, index) => (
//               <option key={index} value={batch}>{batch}</option>
//             ))}
//           </select>
//         </div>

//         {/* 🔃 Sort Options */}
//         <div>
//           <label style={styles.label}>Sort by: </label>
//           <select value={sortOption} onChange={handleSortChange} style={styles.select}>
//             <option value="">Default</option>
//             <option value="newest">Newest First</option>
//             <option value="oldest">Oldest First</option>
//             <option value="name">Name (A–Z)</option>
//           </select>
//         </div>
//       </div>

//       {loading && <p style={styles.status}>🔄 Loading alumni...</p>}
//       {error && <p style={{ ...styles.status, color: 'red' }}>{error}</p>}

//       {!loading && !error && (
//         filteredList.length > 0 ? (
//           <div style={styles.grid}>
//             {filteredList.map((alumni, index) => (
//               <AlumniCard key={index} alumni={alumni} onView={() => handleViewProfile(alumni._id)} />
//             ))}
//           </div>
//         ) : (
//           <p style={styles.status}>No alumni found.</p>
//         )
//       )}
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: '60px 30px',
//     backgroundColor: '#f9f9f9',
//     textAlign: 'center',
//     minHeight: '80vh',
//   },
//   heading: {
//     fontSize: '2.5rem',
//     marginBottom: '20px',
//     color: '#004080',
//   },
//   status: {
//     fontSize: '1.2rem',
//     color: '#777',
//     marginTop: '20px',
//   },
//   controlsContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     gap: '30px',
//     marginBottom: '30px',
//   },
//   label: {
//     fontSize: '1.1rem',
//     marginRight: '10px',
//   },
//   select: {
//     padding: '8px 12px',
//     fontSize: '1rem',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//   },
//   searchInput: {
//     padding: '8px 14px',
//     fontSize: '1rem',
//     width: '280px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//   },
//   grid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     justifyContent: 'center',
//   },
// };

// export default MemberSection;


// ----------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AlumniCard from './AlumniCard';
// import { supabase } from '../supabaseClient';

// const MemberSection = () => {
//   const [alumniList, setAlumniList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);
//   const [yearOptions, setYearOptions] = useState([]);
//   const [branchOptions, setBranchOptions] = useState([]);

//   const [selectedYear, setSelectedYear] = useState('');
//   const [selectedBranch, setSelectedBranch] = useState('');
//   const [sortOption, setSortOption] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAlumni = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('alumni')
//           .select('*');

//         if (error) throw error;

//         setAlumniList(data);
//         setFilteredList(data);

//         const years = [...new Set(data.map(a => a.year))].sort((a, b) => b - a);
//         const branches = [...new Set(data.map(a => a.branch))].sort();

//         setYearOptions(years);
//         setBranchOptions(branches);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load alumni data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlumni();
//   }, []);

//   const applyFilters = (year, branch, sort, query) => {
//     let list = [...alumniList];

//     if (year) list = list.filter(a => a.year === Number(year));
//     if (branch) list = list.filter(a => a.branch === branch);

//     if (query) {
//       const q = query.toLowerCase();
//       list = list.filter(a =>
//         a.name.toLowerCase().includes(q) ||
//         a.email.toLowerCase().includes(q)
//       );
//     }

//     if (sort === 'newest') list.sort((a, b) => b.year - a.year);
//     if (sort === 'oldest') list.sort((a, b) => a.year - b.year);
//     if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

//     setFilteredList(list);
//   };

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

//       <div style={styles.controlsContainer}>
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={searchQuery}
//           onChange={e => {
//             setSearchQuery(e.target.value);
//             applyFilters(selectedYear, selectedBranch, sortOption, e.target.value);
//           }}
//           style={styles.searchInput}
//         />

//         <select
//           value={selectedBranch}
//           onChange={e => {
//             setSelectedBranch(e.target.value);
//             applyFilters(selectedYear, e.target.value, sortOption, searchQuery);
//           }}
//           style={styles.select}
//         >
//           <option value="">All Branches</option>
//           {branchOptions.map(b => <option key={b}>{b}</option>)}
//         </select>

//         <select
//           value={selectedYear}
//           onChange={e => {
//             setSelectedYear(e.target.value);
//             applyFilters(e.target.value, selectedBranch, sortOption, searchQuery);
//           }}
//           style={styles.select}
//         >
//           <option value="">All Years</option>
//           {yearOptions.map(y => <option key={y}>{y}</option>)}
//         </select>

//         <select
//           value={sortOption}
//           onChange={e => {
//             setSortOption(e.target.value);
//             applyFilters(selectedYear, selectedBranch, e.target.value, searchQuery);
//           }}
//           style={styles.select}
//         >
//           <option value="">Default</option>
//           <option value="newest">Newest First</option>
//           <option value="oldest">Oldest First</option>
//           <option value="name">Name A–Z</option>
//         </select>
//       </div>

//       {loading && <p>Loading alumni...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div style={styles.grid}>
//         {filteredList.map(alumni => (
//           <AlumniCard
//             key={alumni.id}
//             alumni={alumni}
//             onView={() => navigate(`/profile/${alumni.id}`)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: { padding: '60px 30px', textAlign: 'center' },
//   heading: { fontSize: '2.4rem', color: '#004080' },
//   controlsContainer: { display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' },
//   select: { padding: '8px', fontSize: '1rem' },
//   searchInput: { padding: '8px', width: '260px' },
//   grid: { display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' },
// };

// export default MemberSection;










// -----------------------------------------------------------------------------------------








// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AlumniCard from './AlumniCard';

// const MemberSection = () => {
//   const [alumniList, setAlumniList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);
//   const [yearOptions, setYearOptions] = useState([]);
//   const [branchOptions, setBranchOptions] = useState([]);

//   const [selectedYear, setSelectedYear] = useState('');
//   const [selectedBranch, setSelectedBranch] = useState('');
//   const [sortOption, setSortOption] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   // 🔹 Fetch alumni from LOCAL backend (MongoDB)
//   useEffect(() => {
//     const fetchAlumni = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/alumni');
//         const data = await res.json();

//         setAlumniList(data);
//         setFilteredList(data);

//         // 🔹 Extract year & branch options
//         const years = [...new Set(data.map(a => a.graduationYear))]
//           .filter(Boolean)
//           .sort((a, b) => b - a);

//         const branches = [...new Set(data.map(a => a.branch))]
//           .filter(Boolean)
//           .sort();

//         setYearOptions(years);
//         setBranchOptions(branches);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load alumni data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlumni();
//   }, []);

//   // 🔍 Filters + Search + Sort
//   const applyFilters = (year, branch, sort, query) => {
//     let list = [...alumniList];

//     if (year) list = list.filter(a => a.graduationYear === Number(year));
//     if (branch) list = list.filter(a => a.branch === branch);

//     if (query) {
//       const q = query.toLowerCase();
//       list = list.filter(a =>
//         a.name?.toLowerCase().includes(q) ||
//         a.email?.toLowerCase().includes(q)
//       );
//     }

//     if (sort === 'newest') list.sort((a, b) => b.graduationYear - a.graduationYear);
//     if (sort === 'oldest') list.sort((a, b) => a.graduationYear - b.graduationYear);
//     if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

//     setFilteredList(list);
//   };

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

//       <div style={styles.controlsContainer}>
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={searchQuery}
//           onChange={e => {
//             setSearchQuery(e.target.value);
//             applyFilters(selectedYear, selectedBranch, sortOption, e.target.value);
//           }}
//           style={styles.searchInput}
//         />

//         <select
//           value={selectedBranch}
//           onChange={e => {
//             setSelectedBranch(e.target.value);
//             applyFilters(selectedYear, e.target.value, sortOption, searchQuery);
//           }}
//           style={styles.select}
//         >
//           <option value="">All Branches</option>
//           {branchOptions.map(b => (
//             <option key={b} value={b}>{b}</option>
//           ))}
//         </select>

//         <select
//           value={selectedYear}
//           onChange={e => {
//             setSelectedYear(e.target.value);
//             applyFilters(e.target.value, selectedBranch, sortOption, searchQuery);
//           }}
//           style={styles.select}
//         >
//           <option value="">All Years</option>
//           {yearOptions.map(y => (
//             <option key={y} value={y}>{y}</option>
//           ))}
//         </select>

//         <select
//           value={sortOption}
//           onChange={e => {
//             setSortOption(e.target.value);
//             applyFilters(selectedYear, selectedBranch, e.target.value, searchQuery);
//           }}
//           style={styles.select}
//         >
//           <option value="">Default</option>
//           <option value="newest">Newest First</option>
//           <option value="oldest">Oldest First</option>
//           <option value="name">Name A–Z</option>
//         </select>
//       </div>

//       {loading && <p>Loading alumni...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div style={styles.grid}>
//         {filteredList.map(alumni => (
//           <AlumniCard
//             key={alumni._id}
//             alumni={alumni}
//             onView={() => navigate(`/profile/${alumni._id}`)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: { padding: '60px 30px', textAlign: 'center' },
//   heading: { fontSize: '2.4rem', color: '#004080' },
//   controlsContainer: {
//     display: 'flex',
//     gap: '15px',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     marginBottom: '30px'
//   },
//   select: { padding: '8px', fontSize: '1rem' },
//   searchInput: { padding: '8px', width: '260px' },
//   grid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     justifyContent: 'center'
//   },
// };

// export default MemberSection;




// --------------------------------------------------------------------------------





// import React, { useEffect, useState } from 'react';
// import AlumniCard from './AlumniCard';

// const MemberSection = () => {
//   const [alumniList, setAlumniList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // 🔍 FETCH ALUMNI
//   useEffect(() => {
//     const fetchAlumni = async () => {
//       try {
//         console.log('📡 Fetching alumni from backend...');

//         const res = await fetch('http://localhost:5000/api/alumni');
//         const data = await res.json();

//         console.log('✅ Raw API response:', data);

//         if (!Array.isArray(data)) {
//           throw new Error('API did not return an array');
//         }

//         setAlumniList(data);
//         setFilteredList(data);
//       } catch (err) {
//         console.error('❌ Alumni fetch failed:', err);
//         setError('Failed to load alumni data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlumni();
//   }, []);

//   // 🧪 DEBUG LOGS (CRITICAL)
//   useEffect(() => {
//     console.log('📦 alumniList:', alumniList);
//     console.log('📦 filteredList:', filteredList);
//   }, [alumniList, filteredList]);

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

//       {loading && <p>Loading alumni...</p>}

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {!loading && filteredList.length === 0 && (
//         <p style={{ color: '#666', fontSize: '1.1rem' }}>
//           ⚠️ No alumni found to display
//         </p>
//       )}

//       <div style={styles.grid}>
//         {filteredList.map(alumni => (
//           <AlumniCard key={alumni._id} alumni={alumni} />
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: '60px 30px',
//     textAlign: 'center',
//     backgroundColor: '#f5faff',
//   },
//   heading: {
//     fontSize: '2.4rem',
//     color: '#004080',
//     marginBottom: '30px',
//   },
//   grid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     justifyContent: 'center',
//   },
// };

// export default MemberSection;





// -------------------------------------------------------








// import React, { useEffect, useState } from 'react';

// const MemberSection = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchAlumni = async () => {
//       console.log('📡 Fetching alumni from backend...');
//       const res = await fetch('http://localhost:5000/api/alumni');
//       const json = await res.json();
//       console.log('✅ Raw API response:', json);
//       setData(json);
//     };

//     fetchAlumni();
//   }, []);

//   return (
//     <div style={{ padding: 40, background: '#fff', color: '#000' }}>
//       <h1>MEMBER SECTION DEBUG</h1>

//       <p>Array length: {data.length}</p>

//       <pre style={{ textAlign: 'left' }}>
//         {JSON.stringify(data, null, 2)}
//       </pre>
//     </div>
//   );
// };

// export default MemberSection;





//------------------------THis is For Local Node backend (downward Code) ------------------------------------------------------------------










// import React, { useEffect, useState } from 'react';
// import AlumniCard from './AlumniCard';

// const ITEMS_PER_PAGE = 8;

// const BRANCHES = [
//   'All',
//   'Computer Engineer',
//   'IT Engineering',
//   'ENTC Engineering',
//   'Civil Engineering',
//   'Mechanical Engineering',
// ];

// const MemberSection = () => {
//   const [alumniList, setAlumniList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);

//   const [selectedBranch, setSelectedBranch] = useState('All');
//   const [yearInput, setYearInput] = useState('');   // 🔹 year text input
//   const [search, setSearch] = useState('');

//   const [currentPage, setCurrentPage] = useState(1);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // 🔹 Fetch alumni
//   useEffect(() => {
//     const fetchAlumni = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/alumni');
//         const data = await res.json();

//         if (!Array.isArray(data)) throw new Error('Invalid API response');

//         setAlumniList(data);
//         setFilteredList(data);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load alumni data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlumni();
//   }, []);

//   // 🔹 Apply filters
//   useEffect(() => {
//     let data = [...alumniList];

//     // Branch filter
//     if (selectedBranch !== 'All') {
//       data = data.filter(a => a.branch === selectedBranch);
//     }

//     // Year filter (typed)
//     if (yearInput.trim()) {
//       data = data.filter(
//         a => String(a.graduationYear) === yearInput.trim()
//       );
//     }

//     // Search filter
//     if (search.trim()) {
//       const q = search.toLowerCase();
//       data = data.filter(
//         a =>
//           a.name?.toLowerCase().includes(q) ||
//           a.email?.toLowerCase().includes(q)
//       );
//     }

//     setFilteredList(data);
//     setCurrentPage(1);
//   }, [selectedBranch, yearInput, search, alumniList]);

//   // 🔹 Pagination
//   const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentItems = filteredList.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

//       {/* 🔍 FILTER BAR */}
//       <div style={styles.filters}>
//         <select
//           value={selectedBranch}
//           onChange={e => setSelectedBranch(e.target.value)}
//           style={styles.select}
//         >
//           {BRANCHES.map(branch => (
//             <option key={branch} value={branch}>
//               {branch}
//             </option>
//           ))}
//         </select>

//         {/* ✅ YEAR INPUT */}
//         <input
//           type="String"
//           placeholder="Year (e.g. 2011-2012)"
//           value={yearInput}
//           onChange={e => setYearInput(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           style={styles.search}
//         />
//       </div>

//       {loading && <p>Loading alumni...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {!loading && currentItems.length === 0 && (
//         <p>No alumni found for selected filters</p>
//       )}

//       {/* 🎓 ALUMNI GRID */}
//       <div style={styles.grid}>
//         {currentItems.map(alumni => (
//           <AlumniCard key={alumni._id} alumni={alumni} />
//         ))}
//       </div>

//       {/* 📄 PAGINATION */}
//       {totalPages > 1 && (
//         <div style={styles.pagination}>
//           <button
//             onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             ◀ Prev
//           </button>

//           <span>
//             Page {currentPage} of {totalPages}
//           </span>

//           <button
//             onClick={() =>
//               setCurrentPage(p => Math.min(p + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//           >
//             Next ▶
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: '60px 30px',
//     backgroundColor: '#f5faff',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '2.4rem',
//     color: '#004080',
//     marginBottom: '30px',
//   },
//   filters: {
//     display: 'flex',
//     gap: '12px',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     marginBottom: '30px',
//   },
//   select: {
//     padding: '8px 12px',
//     fontSize: '1rem',
//   },
//   input: {
//     padding: '8px 12px',
//     width: '140px',
//     fontSize: '1rem',
//   },
//   search: {
//     padding: '8px 12px',
//     width: '220px',
//     fontSize: '1rem',
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//     gap: '20px',
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   pagination: {
//     marginTop: '30px',
//     display: 'flex',
//     gap: '12px',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// };

// export default MemberSection;



// -----------------------------------This is for Supabase backend code ------------------------------------------------









// import React, { useEffect, useState } from "react";
// import { supabase } from "../supabaseClient";
// import AlumniCard from "./AlumniCard";

// const ITEMS_PER_PAGE = 8;

// const BRANCHES = [
//   "All",
//   "Computer Engineer",
//   "IT Engineering",
//   "ENTC Engineering",
//   "Civil Engineering",
//   "Mechanical Engineering",
// ];

// const MemberSection = () => {
//   const [alumniList, setAlumniList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);

//   const [selectedBranch, setSelectedBranch] = useState("All");
//   const [yearInput, setYearInput] = useState("");
//   const [search, setSearch] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // 🔥 Fetch alumni from Supabase
//   useEffect(() => {
//     const fetchAlumni = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("alumni")
//           .select("*")
//           .order("name", { ascending: true });

//         if (error) throw error;

//         setAlumniList(data || []);
//         setFilteredList(data || []);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load alumni data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlumni();
//   }, []);

//   // 🔍 Apply filters
//   useEffect(() => {
//     let data = [...alumniList];

//     if (selectedBranch !== "All") {
//       data = data.filter((a) => a.branch === selectedBranch);
//     }

//     if (yearInput.trim()) {
//       data = data.filter(
//         (a) => String(a.graduationyear || a.graduationYear) === yearInput.trim()
//       );
//     }

//     if (search.trim()) {
//       const q = search.toLowerCase();
//       data = data.filter(
//         (a) =>
//           a.name?.toLowerCase().includes(q) ||
//           a.email?.toLowerCase().includes(q)
//       );
//     }

//     setFilteredList(data);
//     setCurrentPage(1);
//   }, [selectedBranch, yearInput, search, alumniList]);

//   // 📄 Pagination
//   const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentItems = filteredList.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

//       <div style={styles.filters}>
//         <select
//           value={selectedBranch}
//           onChange={(e) => setSelectedBranch(e.target.value)}
//           style={styles.select}
//         >
//           {BRANCHES.map((branch) => (
//             <option key={branch} value={branch}>
//               {branch}
//             </option>
//           ))}
//         </select>

//         <input
//           type="text"
//           placeholder="Year (e.g. 2011)"
//           value={yearInput}
//           onChange={(e) => setYearInput(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={styles.search}
//         />
//       </div>

//       {loading && <p>Loading alumni...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {!loading && currentItems.length === 0 && (
//         <p>No alumni found for selected filters</p>
//       )}

//       <div style={styles.grid}>
//         {currentItems.map((alumni) => (
//           <AlumniCard key={alumni.id} alumni={alumni} />
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <div style={styles.pagination}>
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             ◀ Prev
//           </button>

//           <span>
//             Page {currentPage} of {totalPages}
//           </span>

//           <button
//             onClick={() =>
//               setCurrentPage((p) => Math.min(p + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//           >
//             Next ▶
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: "60px 30px",
//     backgroundColor: "#f5faff",
//     textAlign: "center",
//   },
//   heading: {
//     fontSize: "2.4rem",
//     color: "#004080",
//     marginBottom: "30px",
//   },
//   filters: {
//     display: "flex",
//     gap: "12px",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     marginBottom: "30px",
//   },
//   select: {
//     padding: "8px 12px",
//     fontSize: "1rem",
//   },
//   input: {
//     padding: "8px 12px",
//     width: "140px",
//     fontSize: "1rem",
//   },
//   search: {
//     padding: "8px 12px",
//     width: "220px",
//     fontSize: "1rem",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "20px",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   pagination: {
//     marginTop: "30px",
//     display: "flex",
//     gap: "12px",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// };

// export default MemberSection;








// ------------------------------------- 1st version online -------------------------------------------------






// import React, { useEffect, useState } from "react";
// import { supabase } from "../supabaseClient";
// import AlumniCard from "./AlumniCard";

// const ITEMS_PER_PAGE = 8;

// const BRANCHES = [
//   "All",
//   "Computer Engineer",
//   "IT Engineering",
//   "ENTC Engineering",
//   "Civil Engineering",
//   "Mechanical Engineering",
// ];

// const MemberSection = () => {
//   const [alumniList, setAlumniList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);

//   const [selectedBranch, setSelectedBranch] = useState("All");
//   const [yearInput, setYearInput] = useState("");
//   const [search, setSearch] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // 🔥 Load alumni from Supabase
//   useEffect(() => {
//     const fetchAlumni = async () => {
//       setLoading(true);
//       try {
//         const { data, error } = await supabase
//           .from("alumni")
//           .select("*")
//           .order("name", { ascending: true });

//         if (error) throw error;

//         const safeData = Array.isArray(data) ? data : [];

//         setAlumniList(safeData);
//         setFilteredList(safeData);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load alumni data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlumni();
//   }, []);

//   // 🔍 Filters
//   useEffect(() => {
//     let data = Array.isArray(alumniList) ? [...alumniList] : [];

//     if (selectedBranch !== "All") {
//       data = data.filter((a) => a.branch === selectedBranch);
//     }

//     if (yearInput.trim()) {
//       data = data.filter(
//         (a) =>
//           String(a.year || a.year || "") ===
//           yearInput.trim()
//       );
//     }

//     if (search.trim()) {
//       const q = search.toLowerCase();
//       data = data.filter(
//         (a) =>
//           a.name?.toLowerCase().includes(q) ||
//           a.email?.toLowerCase().includes(q)
//       );
//     }

//     setFilteredList(data);
//     setCurrentPage(1);
//   }, [selectedBranch, yearInput, search, alumniList]);

//   // Pagination
//   const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentItems = filteredList.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

//       <div style={styles.filters}>
//         <select
//           value={selectedBranch}
//           onChange={(e) => setSelectedBranch(e.target.value)}
//           style={styles.select}
//         >
//           {BRANCHES.map((branch) => (
//             <option key={branch} value={branch}>
//               {branch}
//             </option>
//           ))}
//         </select>

//         <input
//           type="String"
//           placeholder="Year (e.g. 2011-2012)"
//           value={yearInput}
//           onChange={(e) => setYearInput(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={styles.search}
//         />
//       </div>

//       {loading && <p>Loading alumni...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {!loading && currentItems.length === 0 && (
//         <p>No alumni found for selected filters</p>
//       )}

//       <div style={styles.grid}>
//         {currentItems.map((alumni) => (
//           <AlumniCard key={alumni.id} alumni={alumni} />
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <div style={styles.pagination}>
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             ◀ Prev
//           </button>

//           <span>
//             Page {currentPage} of {totalPages}
//           </span>

//           <button
//             onClick={() =>
//               setCurrentPage((p) => Math.min(p + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//           >
//             Next ▶
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// const styles = {
//   section: { padding: "60px 30px", backgroundColor: "#f5faff", textAlign: "center" },
//   heading: { fontSize: "2.4rem", color: "#004080", marginBottom: "30px" },
//   filters: { display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "30px" },
//   select: { padding: "8px 12px", fontSize: "1rem" },
//   input: { padding: "8px 12px", width: "140px", fontSize: "1rem" },
//   search: { padding: "8px 12px", width: "220px", fontSize: "1rem" },
//   grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" },
//   pagination: { marginTop: "30px", display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" },
// };

// export default MemberSection;







// --------------------------------------------2nd version online for rendering  (stuent, alumni)------------------------------------------------------------------





// import React, { useEffect, useState } from "react";
// import { supabase } from "../supabaseClient";
// import AlumniCard from "./AlumniCard";

// const ITEMS_PER_PAGE = 8;

// const BRANCHES = [
//   "All",
//   "Computer Engineer",
//   "IT Engineering",
//   "ENTC Engineering",
//   "Civil Engineering",
//   "Mechanical Engineering",
// ];

// const MemberSection = () => {
//   const [alumniList, setAlumniList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);

//   const [selectedBranch, setSelectedBranch] = useState("All");
//   const [yearInput, setYearInput] = useState("");
//   const [search, setSearch] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // 🔐 Wait for Supabase auth before reading RLS protected tables
//   useEffect(() => {
//     const load = async () => {
//       setLoading(true);
//       setError("");

//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (!session) {
//         setError("You must be logged in");
//         setLoading(false);
//         return;
//       }

//       const { data, error } = await supabase
//         .from("alumni")
//         .select("*")
//         .order("name", { ascending: true });

//       if (error) {
//         console.error("Supabase error:", error);
//         setError("Access denied or no alumni available");
//       } else {
//         setAlumniList(data || []);
//         setFilteredList(data || []);
//       }

//       setLoading(false);
//     };

//     load();
//   }, []);

//   // 🔍 Filters
//   useEffect(() => {
//     let data = [...alumniList];

//     if (selectedBranch !== "All") {
//       data = data.filter((a) => a.branch === selectedBranch);
//     }

//     if (yearInput.trim()) {
//       data = data.filter(
//         (a) => String(a.year || "") === yearInput.trim()
//       );
//     }

//     if (search.trim()) {
//       const q = search.toLowerCase();
//       data = data.filter(
//         (a) =>
//           a.name?.toLowerCase().includes(q) ||
//           a.email?.toLowerCase().includes(q)
//       );
//     }

//     setFilteredList(data);
//     setCurrentPage(1);
//   }, [selectedBranch, yearInput, search, alumniList]);

//   // Pagination
//   const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentItems = filteredList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

//       <div style={styles.filters}>
//         <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)} style={styles.select}>
//           {BRANCHES.map((branch) => (
//             <option key={branch} value={branch}>
//               {branch}
//             </option>
//           ))}
//         </select>

//         <input
//           type="text"
//           placeholder="Year (e.g. 2011-2012)"
//           value={yearInput}
//           onChange={(e) => setYearInput(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={styles.search}
//         />
//       </div>

//       {loading && <p>Loading alumni...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {!loading && currentItems.length === 0 && !error && (
//         <p>No alumni found for selected filters</p>
//       )}

//       <div style={styles.grid}>
//         {currentItems.map((alumni) => (
//           <AlumniCard key={alumni.id} alumni={alumni} />
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <div style={styles.pagination}>
//           <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
//             ◀ Prev
//           </button>

//           <span>
//             Page {currentPage} of {totalPages}
//           </span>

//           <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
//             Next ▶
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// const styles = {
//   section: { padding: "60px 30px", backgroundColor: "#f5faff", textAlign: "center" },
//   heading: { fontSize: "2.4rem", color: "#004080", marginBottom: "30px" },
//   filters: { display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "30px" },
//   select: { padding: "8px 12px", fontSize: "1rem" },
//   input: { padding: "8px 12px", width: "140px", fontSize: "1rem" },
//   search: { padding: "8px 12px", width: "220px", fontSize: "1rem" },
//   grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" },
//   pagination: { marginTop: "30px", display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" },
// };

// export default MemberSection;






// ----------------------------------------------------------------------------------




// import React, { useEffect, useState } from "react";
// import { supabase } from "../supabaseClient";
// import AlumniCard from "./AlumniCard";

// const ITEMS_PER_PAGE = 8;

// const BRANCHES = [
//   "All",
//   "Computer Engineer",
//   "IT Engineering",
//   "ENTC Engineering",
//   "Civil Engineering",
//   "Mechanical Engineering",
// ];

// const MemberSection = () => {
//   const [alumniList, setAlumniList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);
//   const [selectedBranch, setSelectedBranch] = useState("All");
//   const [yearInput, setYearInput] = useState("");
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // 🔥 Load alumni AFTER Supabase session is ready
//   useEffect(() => {
//     const loadAlumni = async (session) => {
//       if (!session) {
//         setError("Please login to view alumni");
//         setLoading(false);
//         return;
//       }

//       const { data, error } = await supabase
//         .from("alumni")
//         .select("*")
//         .order("name", { ascending: true });

//       if (error) {
//         console.error(error);
//         setError("You are not verified or access denied");
//       } else {
//         setAlumniList(data || []);
//         setFilteredList(data || []);
//       }

//       setLoading(false);
//     };

//     // Get current session
//     supabase.auth.getSession().then(({ data }) => {
//       loadAlumni(data.session);
//     });

//     // React to future auth changes
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setLoading(true);
//       setError("");
//       loadAlumni(session);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   // 🔍 Apply filters
//   useEffect(() => {
//     let data = [...alumniList];

//     if (selectedBranch !== "All") {
//       data = data.filter((a) => a.branch === selectedBranch);
//     }

//     if (yearInput.trim()) {
//       data = data.filter((a) => String(a.year || "") === yearInput.trim());
//     }

//     if (search.trim()) {
//       const q = search.toLowerCase();
//       data = data.filter(
//         (a) =>
//           a.name?.toLowerCase().includes(q) ||
//           a.email?.toLowerCase().includes(q)
//       );
//     }

//     setFilteredList(data);
//     setCurrentPage(1);
//   }, [selectedBranch, yearInput, search, alumniList]);

//   const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentItems = filteredList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

//       <div style={styles.filters}>
//         <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)} style={styles.select}>
//           {BRANCHES.map((branch) => (
//             <option key={branch} value={branch}>
//               {branch}
//             </option>
//           ))}
//         </select>

//         <input
//           type="text"
//           placeholder="Year (e.g. 2011-2012)"
//           value={yearInput}
//           onChange={(e) => setYearInput(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={styles.search}
//         />
//       </div>

//       {loading && <p>Loading alumni...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {!loading && currentItems.length === 0 && !error && (
//         <p>No alumni found</p>
//       )}

//       <div style={styles.grid}>
//         {currentItems.map((alumni) => (
//           <AlumniCard key={alumni.id} alumni={alumni} />
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <div style={styles.pagination}>
//           <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
//             ◀ Prev
//           </button>
//           <span>Page {currentPage} of {totalPages}</span>
//           <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
//             Next ▶
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// const styles = {
//   section: { padding: "60px 30px", backgroundColor: "#f5faff", textAlign: "center" },
//   heading: { fontSize: "2.4rem", color: "#004080", marginBottom: "30px" },
//   filters: { display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "30px" },
//   select: { padding: "8px 12px", fontSize: "1rem" },
//   input: { padding: "8px 12px", width: "140px", fontSize: "1rem" },
//   search: { padding: "8px 12px", width: "220px", fontSize: "1rem" },
//   grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" },
//   pagination: { marginTop: "30px", display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" },
// };

// export default MemberSection;






















// ---------------------------------------------------------------------------------------------------






















import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import AlumniCard from "./AlumniCard";
import "./MemberSection.css";

const ITEMS_PER_PAGE = 12;

const BRANCHES = [
  "Computer Engineer",
  "IT Engineering",
  "ENTC Engineering",
  "Civil Engineering",
  "Mechanical Engineering",
];

const MemberSection = () => {
  const navigate = useNavigate();
  const [alumniList, setAlumniList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [groupedByBatch, setGroupedByBatch] = useState({});
  
  // Filter states
  const [selectedBranches, setSelectedBranches] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // Available filter options
  const [availableYears, setAvailableYears] = useState([]);
  const [availableLocations, setAvailableLocations] = useState([]);
  const [availableCompanies, setAvailableCompanies] = useState([]);

  // 🔥 Load alumni data
  useEffect(() => {
    const loadAlumni = async (session) => {
      if (!session) {
        setError("Please login to view alumni");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("alumni")
        .select("*")
        .order("year", { ascending: false });

      if (error) {
        console.error(error);
        setError("You are not verified or access denied");
      } else {
        setAlumniList(data || []);
        setFilteredList(data || []);
        
        // Extract unique values for filters
        const years = [...new Set(data.map(a => a.year).filter(Boolean))].sort().reverse();
        const locations = [...new Set(data.map(a => a.location).filter(Boolean))].sort();
        const companies = [...new Set(data.map(a => a.company).filter(Boolean))].sort();
        
        setAvailableYears(years);
        setAvailableLocations(locations);
        setAvailableCompanies(companies);
      }

      setLoading(false);
    };

    // Get current session
    supabase.auth.getSession().then(({ data }) => {
      loadAlumni(data.session);
    });

    // React to future auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setLoading(true);
        setError("");
        loadAlumni(session);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // 🔍 Apply filters
  useEffect(() => {
    let data = [...alumniList];

    // Filter by branches
    if (selectedBranches.length > 0) {
      data = data.filter((a) => selectedBranches.includes(a.branch));
    }

    // Filter by years
    if (selectedYears.length > 0) {
      data = data.filter((a) => selectedYears.includes(a.year));
    }

    // Filter by locations
    if (selectedLocations.length > 0) {
      data = data.filter((a) => selectedLocations.includes(a.location));
    }

    // Filter by companies
    if (selectedCompanies.length > 0) {
      data = data.filter((a) => selectedCompanies.includes(a.company));
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      data = data.filter(
        (a) =>
          a.name?.toLowerCase().includes(q) ||
          a.email?.toLowerCase().includes(q) ||
          a.company?.toLowerCase().includes(q) ||
          a.position?.toLowerCase().includes(q)
      );
    }

    setFilteredList(data);
    
    // Group by batch/year
    const grouped = data.reduce((acc, alumni) => {
      const batch = alumni.year || "Unknown";
      if (!acc[batch]) {
        acc[batch] = [];
      }
      acc[batch].push(alumni);
      return acc;
    }, {});
    
    setGroupedByBatch(grouped);
    setCurrentPage(1);
  }, [selectedBranches, selectedYears, selectedLocations, selectedCompanies, searchQuery, alumniList]);

  // Toggle filter selection
  const toggleFilter = (value, selectedArray, setSelectedArray) => {
    if (selectedArray.includes(value)) {
      setSelectedArray(selectedArray.filter(item => item !== value));
    } else {
      setSelectedArray([...selectedArray, value]);
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedBranches([]);
    setSelectedYears([]);
    setSelectedLocations([]);
    setSelectedCompanies([]);
    setSearchQuery("");
  };

  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="member-section-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Connect
      </button>

      {/* Header */}
      <div className="header-section">
        <div className="header-content">
          <div className="graduation-icon">🎓</div>
          <div>
            <h1 className="main-title">Meet Our Alumni</h1>
            <p className="subtitle">Connect with our diverse community of successful graduates</p>
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filters-header">
            <div className="filter-icon">⚡</div>
            <h3>Filters</h3>
          </div>

          {/* Search */}
          <div className="filter-group">
            <label className="filter-label">Search</label>
            <input
              type="text"
              className="search-input"
              placeholder="Name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Batch Year Filter */}
          <div className="filter-group">
            <label className="filter-label">Batch Year</label>
            <div className="filter-scroll">
              {availableYears.map((year) => (
                <label key={year} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedYears.includes(year)}
                    onChange={() => toggleFilter(year, selectedYears, setSelectedYears)}
                  />
                  <span>{year}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Department Filter */}
          <div className="filter-group">
            <label className="filter-label">Department</label>
            <div className="filter-scroll">
              {BRANCHES.map((branch) => (
                <label key={branch} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedBranches.includes(branch)}
                    onChange={() => toggleFilter(branch, selectedBranches, setSelectedBranches)}
                  />
                  <span>{branch}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="filter-group">
            <label className="filter-label">Location</label>
            <div className="filter-scroll">
              {availableLocations.map((location) => (
                <label key={location} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(location)}
                    onChange={() => toggleFilter(location, selectedLocations, setSelectedLocations)}
                  />
                  <span>{location}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Company Filter */}
          <div className="filter-group">
            <label className="filter-label">Company</label>
            <div className="filter-scroll">
              {availableCompanies.map((company) => (
                <label key={company} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes(company)}
                    onChange={() => toggleFilter(company, selectedCompanies, setSelectedCompanies)}
                  />
                  <span>{company}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button className="clear-filters-btn" onClick={clearAllFilters}>
            Clear All Filters
          </button>

          {/* Alumni Count */}
          <div className="alumni-count">
            <strong>{filteredList.length}</strong> alumni found
          </div>
        </aside>

        {/* Main Content */}
        <main className="alumni-content">
          {loading && (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading alumni...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <p>{error}</p>
            </div>
          )}

          {!loading && filteredList.length === 0 && !error && (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No alumni found</h3>
              <p>Try adjusting your filters or search query</p>
              <button className="clear-btn" onClick={clearAllFilters}>Clear Filters</button>
            </div>
          )}

          {!loading && !error && Object.keys(groupedByBatch).length > 0 && (
            <div className="batches-container">
              {Object.keys(groupedByBatch)
                .sort((a, b) => b.localeCompare(a))
                .map((batch) => (
                  <div key={batch} className="batch-group">
                    <div className="batch-header">
                      <div className="batch-icon">📚</div>
                      <h2 className="batch-title">Batch {batch}</h2>
                      <span className="batch-count">{groupedByBatch[batch].length} alumni</span>
                    </div>

                    <div className="alumni-grid">
                      {groupedByBatch[batch].map((alumni) => (
                        <AlumniCard key={alumni.id} alumni={alumni} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Pagination (if needed) */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>
              <span className="page-info">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};



export default MemberSection;