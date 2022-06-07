// import components
import Header from'./components/header/Header';
import Sidebar from'./components/sidebar/Sidebar';
import Content from'./components/content/Content';

// import styles
import './styles/App.css';
import './styles/header.css';
import './styles/sidebar.css';
import './styles/content.css';


function App() {
  return (
    <div className='Wrapper'>
        <Header />
        <Sidebar />
        <Content />   
    </div>
    
  );
}

export default App;