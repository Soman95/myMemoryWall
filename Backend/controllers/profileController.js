const asyncHandler = require('express-async-handler');

const Profile = require('../models/profileModel');

//@desc  Get All Profiles
//@route  GET /api/profiles
//@access Public
const getProfiles = asyncHandler(async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json(profiles);
});

//@desc  Create Profile
//@route  POST /api/profiles
//@access Public
const createProfile = asyncHandler(async (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.deceasedFirstName ||
    !req.body.deceasedLastName ||
    !req.body.birthDate ||
    !req.body.deathDate ||
    !req.body.email
  ) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const profile = await Profile.create({
    firstName: req.body.firstName,
    deceasedFirstName: req.body.deceasedFirstName,
    deceasedLastName: req.body.deceasedLastName,
    birthDate: req.body.birthDate,
    deathDate: req.body.deathDate,
    email: req.body.email,
    memoryName: req.body.memName,
    deceasedRelation: req.body.deceasedRelation,
    deceasedMsg: req.body.deceasedMsg,
  });

  res.status(200).json(profile);
});

//@desc  Update Profile
//@route  PUT /api/profiles:/id
//@access Private
const updateProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);

  if (!profile) {
    res.status(400);
    throw new Error('Profile not found');
  }

  const updatedProfile = await Profile.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProfile);
});

//@desc  Delete Profile
//@route  DELETE /api/profiles:/id
//@access Private
const deleteProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);

  if (!profile) {
    res.status(400);
    throw new Error('Profile not found');
  }

  await profile.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
};
