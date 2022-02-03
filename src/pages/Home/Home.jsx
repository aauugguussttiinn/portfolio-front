// CONFIG IMPORTS
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import DarkMode from 'context/darkMode';

// COMPONENTS IMPORTS
import ProfileContainer from 'components/ProfileContainer/ProfileContainer';


const Home = () => {
  const { isDark } = useContext(DarkMode);

  return(
    <div className="">
      <div>
        <ProfileContainer />
      </div>
    </div>
  )
};

export default Home;