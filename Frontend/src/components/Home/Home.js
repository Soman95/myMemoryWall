import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import logo from '../../assets/heartlogo.png';
import stackPhotos from '../../assets/defaultPics.jpeg';
import bannat1 from '../../assets/bannat.png';
import './Home.css';

const Home = () => {
  const leftStyles = useSpring({
    from: { x: -200 },
    to: { x: 0 },
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
                Memories<span>wall</span>
              </h1>
              <p> although they're gone, memories live on.</p>
            </div>
            <div className='buttons'>
              <button>Search for a loved one</button>
              <Link to='/create'>
                <button>Create a wall</button>
              </Link>
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
            Memorieswall is a platform aimed to comemorate and honor those who
            have passed away. A place where memories can be shared and moments
            can be relived. So the loved ones who have left us are never
            forgotten.
          </h2>
        </animated.div>
      </div>
    </>
  );
};

export default Home;
