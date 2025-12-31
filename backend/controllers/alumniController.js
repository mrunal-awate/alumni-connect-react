// const User = require('../models/User');

// // ✅ GET all verified alumni
// exports.getAllAlumni = async (req, res) => {
//   try {
//     const alumni = await User.find({ role: 'alumni', verified: true }).select(
//       'fullName email yearOfPassing company designation location linkedIn imageUrl role phone batch'
//     );
//     res.json(alumni);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ GET alumni by ID
// exports.getAlumniById = async (req, res) => {
//   try {
//     const alumni = await User.findById(req.params.id).select(
//       'fullName email phone yearOfPassing batch company designation location linkedIn role imageUrl'
//     );

//     if (!alumni || alumni.role !== 'alumni') {
//       return res.status(404).json({ message: 'Alumni not found' });
//     }

//     res.json(alumni);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error fetching alumni profile' });
//   }
// };

// // ✅ GET /api/alumni/pending - All alumni awaiting verification
// exports.getPendingAlumni = async (req, res) => {
//   try {
//     const pending = await User.find({ role: 'alumni', verified: false }).select(
//       'fullName email yearOfPassing company designation location linkedIn imageUrl role phone batch'
//     );
//     res.json(pending);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch pending alumni' });
//   }
// };

// // ✅ PUT /api/alumni/verify/:id - Approve an alumni
// exports.verifyAlumniById = async (req, res) => {
//   try {
//     const alumni = await User.findById(req.params.id);

//     if (!alumni || alumni.role !== 'alumni') {
//       return res.status(404).json({ message: 'Alumni not found' });
//     }

//     alumni.verified = true;
//     await alumni.save();

//     res.json({ message: 'Alumni account verified successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to verify alumni' });
//   }
// };


// --------------------------------------------------------------------------------------------------





// const User = require('../models/User');

// // ✅ GET all alumni (LOCAL DEV: show all alumni)
// exports.getAllAlumni = async (req, res) => {
//   try {
//     const alumni = await User.find({ role: 'alumni' });

//     // 🔄 Normalize fields for frontend compatibility
//     const formattedAlumni = alumni.map(a => ({
//       _id: a._id,
//       name: a.fullName || 'Unnamed Alumni',
//       email: a.email,
//       graduationYear: a.yearOfPassing || a.batch,
//       branch: a.batch || 'Not specified',
//       role: a.role || 'alumni',

//       company: a.company || '',
//       designation: a.designation || '',
//       location: a.location || '',
//       linkedIn: a.linkedIn || '',
//       imageUrl: a.imageUrl || '',
//       verified: a.verified ?? false,
//     }));

//     res.json(formattedAlumni);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to fetch alumni' });
//   }
// };

// // ✅ GET alumni by ID
// exports.getAlumniById = async (req, res) => {
//   try {
//     const a = await User.findById(req.params.id);

//     if (!a || a.role !== 'alumni') {
//       return res.status(404).json({ message: 'Alumni not found' });
//     }

//     res.json({
//       _id: a._id,
//       name: a.fullName,
//       email: a.email,
//       phone: a.phone,
//       graduationYear: a.yearOfPassing || a.batch,
//       branch: a.batch,
//       company: a.company,
//       designation: a.designation,
//       location: a.location,
//       linkedIn: a.linkedIn,
//       role: a.role,
//       imageUrl: a.imageUrl,
//       verified: a.verified,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error fetching alumni profile' });
//   }
// };

// // ✅ GET pending alumni (ADMIN ONLY)
// exports.getPendingAlumni = async (req, res) => {
//   try {
//     const pending = await User.find({
//       role: 'alumni',
//       verified: false,
//     });

//     res.json(pending);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch pending alumni' });
//   }
// };

// // ✅ VERIFY alumni (ADMIN)
// exports.verifyAlumniById = async (req, res) => {
//   try {
//     const alumni = await User.findById(req.params.id);

//     if (!alumni || alumni.role !== 'alumni') {
//       return res.status(404).json({ message: 'Alumni not found' });
//     }

//     alumni.verified = true;
//     await alumni.save();

//     res.json({ message: 'Alumni account verified successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to verify alumni' });
//   }
// };




// -------------------------------------------------------------------------------------------------


const User = require('../models/User');

// ✅ GET all alumni (supports CSV + registered users)
exports.getAllAlumni = async (req, res) => {
  try {
    const alumni = await User.find({ role: 'alumni' });

    const formattedAlumni = alumni.map(a => ({
      _id: a._id,

      // 🔑 NAME: supports CSV + registered users
      name: a.fullName || a.name || 'Unnamed Alumni',

      email: a.email || 'Not provided',

      // 🔑 YEAR: supports CSV (year) + registered (yearOfPassing)
      graduationYear:
        a.yearOfPassing || a.year || 'Not specified',

      // 🔑 BRANCH: supports CSV (branch) + registered (batch)
      branch:
        a.branch || a.batch || 'Not specified',

      role: a.role || 'alumni',

      // Optional profile fields
      company: a.company || '',
      designation: a.designation || '',
      location: a.location || '',
      linkedIn: a.linkedIn || '',
      imageUrl: a.imageUrl || '',
      phone: a.phone || '',

      verified: a.verified ?? false,
    }));

    res.json(formattedAlumni);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch alumni' });
  }
};

// ✅ GET alumni by ID (profile page)
exports.getAlumniById = async (req, res) => {
  try {
    const a = await User.findById(req.params.id);

    if (!a || a.role !== 'alumni') {
      return res.status(404).json({ message: 'Alumni not found' });
    }

    res.json({
      _id: a._id,
      name: a.fullName || a.name || 'Unnamed Alumni',
      email: a.email || 'Not provided',
      phone: a.phone || '',
      graduationYear: a.yearOfPassing || a.year || 'Not specified',
      branch: a.branch || a.batch || 'Not specified',
      company: a.company || '',
      designation: a.designation || '',
      location: a.location || '',
      linkedIn: a.linkedIn || '',
      role: a.role || 'alumni',
      imageUrl: a.imageUrl || '',
      verified: a.verified ?? false,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching alumni profile' });
  }
};

// ✅ GET pending alumni (ADMIN)
exports.getPendingAlumni = async (req, res) => {
  try {
    const pending = await User.find({
      role: 'alumni',
      verified: false,
    });

    const formattedPending = pending.map(a => ({
      _id: a._id,
      name: a.fullName || a.name || 'Unnamed Alumni',
      email: a.email,
      graduationYear: a.yearOfPassing || a.year || 'Not specified',
      branch: a.branch || a.batch || 'Not specified',
      role: a.role,
    }));

    res.json(formattedPending);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch pending alumni' });
  }
};

// ✅ VERIFY alumni (ADMIN)
exports.verifyAlumniById = async (req, res) => {
  try {
    const alumni = await User.findById(req.params.id);

    if (!alumni || alumni.role !== 'alumni') {
      return res.status(404).json({ message: 'Alumni not found' });
    }

    alumni.verified = true;
    await alumni.save();

    res.json({ message: 'Alumni account verified successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to verify alumni' });
  }
};
