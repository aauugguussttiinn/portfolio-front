// CONFIG IMPORTS
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import DarkMode from 'context/darkMode';


const Home = () => {
  const { isDark } = useContext(DarkMode);

  return(
    <div className="">
      {/* <div>T</div>
      <div>E</div>
      <div>S</div>
      <div>T</div>
      <div>I</div>
      <div>N</div> */}
    </div>
  )
};

export default Home;