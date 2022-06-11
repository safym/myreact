// import components
import img_user from '../../img/icons/user.svg'
// import MyButton from "/TESTmyButton";



const Profile = (props) => {
  if (!props.auth) {
    return (
      <div className="Profile">
        <h1 className="unAuthorized" >Sign in to see your profile!</h1>
      </div>
    )
  }

  return (
    <div className="Profile">
      <div className="AboutProfile">
            <img src={img_user} alt="This is logo" /> 
            <div className='UserInfo'>
                <h1>{localStorage.login}</h1>
                <p>My name is {localStorage.login}! Hello!🍇</p>
            </div>

      </div>

      <div className="NewPost">
        
      <input 
          className='styledInput' 
          id="TitleNewPost"
          placeholder='Title' 
          name='login' 
        />

      <textarea 
          className='styledInput' 
          id="TextNewPost"
          placeholder='Text news' 
          name='login' 
        />
        <div className='publish'>
        <button className='myButton' id='buttonPublish' type="submit">
          Publish
        </button>
        </div>

      </div>


    </div>
  );
};
  

export default Profile;
