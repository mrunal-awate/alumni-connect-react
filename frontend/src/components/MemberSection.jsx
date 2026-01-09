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








// ----------------------------------------------------------------------------






import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import AlumniCard from "./AlumniCard";

const ITEMS_PER_PAGE = 8;

const BRANCHES = [
  "All",
  "Computer Engineer",
  "IT Engineering",
  "ENTC Engineering",
  "Civil Engineering",
  "Mechanical Engineering",
];

const MemberSection = () => {
  const [alumniList, setAlumniList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [selectedBranch, setSelectedBranch] = useState("All");
  const [yearInput, setYearInput] = useState("");
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔥 Load alumni from Supabase
  useEffect(() => {
    const fetchAlumni = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("alumni")
          .select("*")
          .order("name", { ascending: true });

        if (error) throw error;

        const safeData = Array.isArray(data) ? data : [];

        setAlumniList(safeData);
        setFilteredList(safeData);
      } catch (err) {
        console.error(err);
        setError("Failed to load alumni data");
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  // 🔍 Filters
  useEffect(() => {
    let data = Array.isArray(alumniList) ? [...alumniList] : [];

    if (selectedBranch !== "All") {
      data = data.filter((a) => a.branch === selectedBranch);
    }

    if (yearInput.trim()) {
      data = data.filter(
        (a) =>
          String(a.graduationyear || a.graduationYear || "") ===
          yearInput.trim()
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (a) =>
          a.name?.toLowerCase().includes(q) ||
          a.email?.toLowerCase().includes(q)
      );
    }

    setFilteredList(data);
    setCurrentPage(1);
  }, [selectedBranch, yearInput, search, alumniList]);

  // Pagination
  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

      <div style={styles.filters}>
        <select
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
          style={styles.select}
        >
          {BRANCHES.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Year (e.g. 2011)"
          value={yearInput}
          onChange={(e) => setYearInput(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
      </div>

      {loading && <p>Loading alumni...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && currentItems.length === 0 && (
        <p>No alumni found for selected filters</p>
      )}

      <div style={styles.grid}>
        {currentItems.map((alumni) => (
          <AlumniCard key={alumni.id} alumni={alumni} />
        ))}
      </div>

      {totalPages > 1 && (
        <div style={styles.pagination}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀ Prev
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next ▶
          </button>
        </div>
      )}
    </section>
  );
};

const styles = {
  section: { padding: "60px 30px", backgroundColor: "#f5faff", textAlign: "center" },
  heading: { fontSize: "2.4rem", color: "#004080", marginBottom: "30px" },
  filters: { display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "30px" },
  select: { padding: "8px 12px", fontSize: "1rem" },
  input: { padding: "8px 12px", width: "140px", fontSize: "1rem" },
  search: { padding: "8px 12px", width: "220px", fontSize: "1rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" },
  pagination: { marginTop: "30px", display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" },
};

export default MemberSection;
