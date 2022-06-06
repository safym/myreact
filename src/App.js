// import styles
import './styles/App.css';
import './styles/header.css';
import './styles/sidebar.css';
import './styles/content.css';

// import images
import img_logo from './img/icons/fox.png';

function App() {
  return (
    <div className='Wrapper'>
        <Header />
        <Sidebar />
        <Content />   
    </div>
    
  );
}

const Header = () => {
  return(
  <div className="Header">
  <a className="header_button" id="button_logo" role="button" href="">
    <img src={img_logo} alt="This is logo" /> 
  </a>  
  <nav className="buttons_nav">
    <a className="header_button" id="button_home" role="button" href="">Home</a>
    <a className="header_button" id="button_news" role="button" href="">News</a> 
    <a className="header_login" role="button" href="">Login</a>
  </nav>
</div>);
}

const Sidebar = () => {
  return(
  <div className="Sidebar">
    <div className="Sidebar_message" id="Sidebar_messageDate">
      <p>6 June 2022</p>
      <p>18:06:23</p>
    </div>
    <div className="Sidebar_message" id="Sidebar_messageWeather">
      <p>⛅ +22 C°</p>
    </div> 
</div>);
}

const Content= () => {
  return(
    <div className="Content">
      <News1 />
      <News2 />
      <News3 />
    </div>);
}

const News1 = () => {
  return(
  <div className="NewsContent">
    <h1>First news</h1>
    <p>Irure in eu et qui voluptate nulla commodo cillum enim. Minim nisi qui ipsum esse pariatur amet dolor. Cupidatat nulla dolor et minim ea Lorem laborum tempor aliqua fugiat ullamco exercitation cupidatat consectetur. Consectetur consequat laborum irure id ad non velit elit mollit exercitation. Occaecat eu occaecat officia est occaecat enim labore ullamco non reprehenderit mollit tempor ipsum. Id ullamco pariatur sit ea exercitation cillum amet ullamco esse exercitation ipsum sunt excepteur. Sunt ut aliqua minim ut ullamco et.
    </p>
    <p>Irure in eu et qui voluptate nulla commodo cillum enim. Minim nisi qui ipsum esse pariatur amet dolor. Cupidatat nulla dolor et minim ea Lorem laborum tempor aliqua fugiat ullamco exercitation cupidatat consectetur. Consectetur consequat laborum irure id ad non velit elit mollit exercitation. Occaecat eu occaecat officia est occaecat enim labore ullamco non reprehenderit mollit tempor ipsum. Id ullamco pariatur sit ea exercitation cillum amet ullamco esse exercitation ipsum sunt excepteur. Sunt ut aliqua minim ut ullamco et.
    </p>
  </div>);
}


const News2 = () => {
  return(
  <div className="NewsContent">
    <h1>Second news</h1>
    <p>Irure in eu et qui voluptate nulla commodo cillum enim. Minim nisi qui ipsum esse pariatur amet dolor. Cupidatat nulla dolor et minim ea Lorem laborum tempor aliqua fugiat ullamco exercitation cupidatat consectetur. Consectetur consequat laborum irure id ad non velit elit mollit exercitation. Occaecat eu occaecat officia est occaecat enim labore ullamco non reprehenderit mollit tempor ipsum. Id ullamco pariatur sit ea exercitation cillum amet ullamco esse exercitation ipsum sunt excepteur. Sunt ut aliqua minim ut ullamco et.
    </p>
    <p>Irure in eu et qui voluptate nulla commodo cillum enim. Minim nisi qui ipsum esse pariatur amet dolor. Cupidatat nulla dolor et minim ea Lorem laborum tempor aliqua fugiat ullamco exercitation cupidatat consectetur. Consectetur consequat laborum irure id ad non velit elit mollit exercitation. Occaecat eu occaecat officia est occaecat enim labore ullamco non reprehenderit mollit tempor ipsum. Id ullamco pariatur sit ea exercitation cillum amet ullamco esse exercitation ipsum sunt excepteur. Sunt ut aliqua minim ut ullamco et.
    </p>
  </div>);
}

const News3 = () => {
  return(
  <div className="NewsContent">
    <h1>Thirth news</h1>
    <p>Irure in eu et qui voluptate nulla commodo cillum enim. Minim nisi qui ipsum esse pariatur amet dolor. Cupidatat nulla dolor et minim ea Lorem laborum tempor aliqua fugiat ullamco exercitation cupidatat consectetur. Consectetur consequat laborum irure id ad non velit elit mollit exercitation. Occaecat eu occaecat officia est occaecat enim labore ullamco non reprehenderit mollit tempor ipsum. Id ullamco pariatur sit ea exercitation cillum amet ullamco esse exercitation ipsum sunt excepteur. Sunt ut aliqua minim ut ullamco et.
    </p>
    <p>Irure in eu et qui voluptate nulla commodo cillum enim. Minim nisi qui ipsum esse pariatur amet dolor. Cupidatat nulla dolor et minim ea Lorem laborum tempor aliqua fugiat ullamco exercitation cupidatat consectetur. Consectetur consequat laborum irure id ad non velit elit mollit exercitation. Occaecat eu occaecat officia est occaecat enim labore ullamco non reprehenderit mollit tempor ipsum. Id ullamco pariatur sit ea exercitation cillum amet ullamco esse exercitation ipsum sunt excepteur. Sunt ut aliqua minim ut ullamco et.
    </p>
  </div>);
}


export default App;