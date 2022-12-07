const express = require('express');
const router = express.Router();
const {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/profileController');

router.route('/').get(getProfiles).post(createProfile);
router.route('/:id').delete(deleteProfile).put(updateProfile);

module.exports = router;
