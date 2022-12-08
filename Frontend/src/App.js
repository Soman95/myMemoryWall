import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import CreateWall from './components/CreateWall/CreateWall';
import { Route, Routes } from 'react-router-dom';
import { WallDataCtx } from './Context/WallDataContext';
import Profile from './components/Profile/Profile';

import './App.css';

const App = () => {
  const [wallDataCtx, setWallDataCtx] = useState({});

  return (
    <>
      <WallDataCtx.Provider value={{ wallDataCtx, setWallDataCtx }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateWall />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </WallDataCtx.Provider>
    </>
  );
};

export default App;
