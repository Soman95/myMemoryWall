import Home from './components/Home/Home';
import CreateWall from './components/CreateWall/CreateWall';
import { Route, Routes } from 'react-router-dom';
import { WallDataCtx } from './Context/WallDataContext';

import { useState } from 'react';
import './App.css';
const App = () => {
  const [wallDataCtx, setWallDataCtx] = useState({});

  return (
    <>
      <WallDataCtx.Provider value={{ wallDataCtx, setWallDataCtx }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateWall />} />
        </Routes>
      </WallDataCtx.Provider>
    </>
  );
};

export default App;
