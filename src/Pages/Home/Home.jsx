import Form from '../../Components/Form/Form';
import Header from '../../Components/Header/Header';
// import SelectDropdown from 'react-custom-simpledropdown'
// import SelectDropdown from 'react-custom-simpledropdown';
import './Home.css'

const Home = () => {

  
    return (
      <div className="home">
        <header>
          <Header />
        </header>
        <main>
          <Form />
        </main>
      </div>
    );
  }
  
  export default Home;