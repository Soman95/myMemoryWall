import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import './MemoryBubble.css';

const MemoryBubble = ({ name, relation, msg }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className={`${name.length >= 2 ? 'bubbleContainer' : 'none'}`}>
      <div className='bubbleTitle'>
        <h3>
          {name} - {relation}
        </h3>
        <div className='likes' onClick={handleClick}>
          <FavoriteIcon sx={{ color: '#599068', marginRight: 1 }} />

          <p>{likeCount} likes</p>
        </div>
      </div>
      <div className='msg'>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default MemoryBubble;
