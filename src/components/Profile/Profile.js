import { useContext } from 'react';
import { WallDataCtx } from '../../Context/WallDataContext';

const Profile = () => {
  const { wallDataCtx } = useContext(WallDataCtx);
  const handleClick = () => {
    alert(wallDataCtx.firstName);
  };

  return (
    <div>
      <button onClick={handleClick}>CONTEXT</button>
    </div>
  );
};

export default Profile;
