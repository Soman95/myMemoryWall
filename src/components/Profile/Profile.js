import { useContext, useCallback } from 'react';
import { WallDataCtx } from '../../Context/WallDataContext';
import { useDropzone } from 'react-dropzone';
import { Image } from 'cloudinary-react';
import './Profile.css';
import { useState } from 'react';

// NEED TO PUT THIS IN ENVIRONMENTAL VARIABLE:

const cloudName = 'dzj3kgb5q';
const uploadPreset = 'musmemwall';

// ----------------------

const Profile = () => {
  const { wallDataCtx } = useContext(WallDataCtx);
  const [profilePicID, setProfilePicID] = useState('ylsmfc32qo8wylcrc8hd');

  const onDrop = useCallback(async acceptedFile => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    const formData = new FormData();
    formData.append('file', acceptedFile[0]);
    formData.append('upload_preset', uploadPreset);

    const response = await fetch(url, { method: 'post', body: formData });

    const data = await response.json();

    setTimeout(() => {
      setProfilePicID(data['public_id']);
    }, 100);
  }, []);

  console.log(profilePicID);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: 'image/*',
    multiple: false,
  });

  return (
    <div className='profileContainer'>
      <div className='profileHeader'>profile header</div>

      <div
        className={`dropzone ${isDragActive ? 'active' : null}`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        profile dropzone
      </div>
      {profilePicID ? (
        <Image
          cloudName={cloudName}
          publicId={profilePicID}
          width='300'
          crop='scale'
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Profile;
