const asyncHandler = require('express-async-handler');
//@desc  Get All Profiles
//@route  GET /api/profiles
//@access Public
const getProfiles = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get profiles' });
});

//@desc  Create Profile
//@route  POST /api/profiles
//@access Public
const createProfile = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  } else {
    res.status(200).json({ message: 'Get profiles' });
  }
});

//@desc  Update Profile
//@route  PUT /api/profiles:/id
//@access Private
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update profile ${req.params.id}` });
});

//@desc  Delete Profile
//@route  DELETE /api/profiles:/id
//@access Private
const deleteProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete profile ${req.params.id}` });
});

module.exports = {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
};
