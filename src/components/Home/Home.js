import { useSpring, animated, config } from 'react-spring';
import logo from '../../assets/heartbeat.png';
import stackPhotos from '../../assets/defaultPics.jpeg';
import './Home.css';

const Home = () => {
  const leftStyles = useSpring({
    from: { x: -200 },
    to: { x: 50 },
    config: config.molasses,
  });

  const rightStyles = useSpring({
    from: { x: 200 },
    to: { x: 10 },
    config: config.molasses,
  });
  const upStyles = useSpring({
    from: { y: 300 },
    to: { y: 40 },
    config: config.molasses,
  });

  return (
    <>
      <div className='homeContainer'>
        <div className='title'>
          <animated.div className='logo' style={{ ...leftStyles }}>
            <img src={logo} alt='' />
          </animated.div>

          <animated.div className='rightSide' style={{ ...rightStyles }}>
            <div className='companyName'>
              <h1>
                MuslimMemory<span>wall</span>
              </h1>
              <p> although they are gone, their memory lives on.</p>
            </div>
            <div className='buttons'>
              <button>Search for a loved one</button>
              <button>Create a wall</button>
            </div>
          </animated.div>
        </div>
      </div>
      <div className='bottomHalf'>
        <animated.div className='stackOfPhotos' style={{ ...upStyles }}>
          <img src={stackPhotos} alt='' />
        </animated.div>
        <animated.div className='aboutUs' style={{ ...upStyles }}>
          <h2>
            MuslimMemorywall is a platform created by muslims - for the muslims.
            Our aim is to comemorate and honor those who have passed away. A
            place where memories can be shared and moments can be relived. So
            the loved ones who have left us are never forgotten.
          </h2>
        </animated.div>
      </div>
    </>
  );
};

export default Home;
