import { useState, useContext, useCallback, useEffect } from 'react';
import { WallDataCtx } from '../../Context/WallDataContext';
import { useDropzone } from 'react-dropzone';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/memoryLogo.png';
import dua from '../../assets/inna.png';
import MemoryModal from '../MemoryModal/MemoryModal';
import MemoryBubble from '../MemoryBubble/MemoryBubble';

import './Profile.css';
// NEED TO PUT THIS IN ENVIRONMENTAL VARIABLE:

const cloudName = 'dzj3kgb5q';
const uploadPreset = 'musmemwall';

// ----------------------

const Profile = () => {
  const { wallDataCtx } = useContext(WallDataCtx);
  const [profilePicID, setProfilePicID] = useState('wpxlekksyivgcq5tnhq7');
  const [formattedBirthDate, setFormattedBirthDate] = useState('');
  const [formattedDeathDate, setFormattedDeathDate] = useState('');
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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accepts: 'image/*',
    multiple: false,
  });

  const { deceasedFirstName, deceasedLastName, birthDate, deathDate } =
    wallDataCtx;

  const padTo2Digits = num => {
    return num.toString().padStart(2, '0');
  };

  const formatDate = date => {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  };

  useEffect(() => {
    setFormattedBirthDate(formatDate(birthDate));
    setFormattedDeathDate(formatDate(deathDate));
  });

  console.log(wallDataCtx['deceasedMsg']);

  return (
    <div className='profileContainer'>
      <div className='profileHeader'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
      </div>

      <div className='deceasedContainer'>
        <div className='imgBackground'>
          <Image
            cloudName={cloudName}
            publicId={profilePicID}
            width='300'
            crop='scale'
            className='deceasedImg'
            {...getRootProps()}
          />
          <input type='file' {...getInputProps()} />
          <div className='deceasedInfo'>
            <h1>{`${deceasedFirstName} ${deceasedLastName}`}</h1>
            <p>{`${formattedBirthDate} - ${formattedDeathDate}`}</p>
            <img src={dua} alt='' />
            <div className='memoryBubbleContainer'>
              {wallDataCtx['memoryName'].map((name, i) => (
                <div key={i}>
                  <MemoryBubble
                    name={name}
                    relation={wallDataCtx['deceasedRelation'][i]}
                    msg={wallDataCtx['deceasedMsg'][i]}
                  />
                </div>
              ))}
              <MemoryModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
