// CONFIG IMPORTS
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import DarkMode from 'context/darkMode';


const Home = () => {
  const { isDark } = useContext(DarkMode);

  return(
    <div className="bg-purple"></div>
  )
};

export default Home;