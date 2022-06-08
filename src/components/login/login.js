// import components

const HomePage = () => {
  return (
    <div className="login">
        <div className="username">
            <label>Name:</label>
            <input type="text" name="name" /> 
        </div>

        <div className="password">
            <label>Password:</label>
            <input type="password" name="name" /> 
        </div>

    </div>
  );
};

export default HomePage;
