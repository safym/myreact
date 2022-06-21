// import components
import img_user from "../../img/icons/user.svg"
import { useState } from "react";

const Profile = (props) => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsText, setNewsText] = useState("");

  if (!props.auth) {
    return (
      <h1 className="infoMessage" >Sign in to see your profile!</h1>
    )
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    var currentNews = JSON.parse(localStorage.getItem("news"))
    var currentUser = localStorage.getItem("login");

    currentNews.push({ title: newsTitle, text: newsText, author: currentUser });
    localStorage.setItem("news", JSON.stringify(currentNews));

    const newsTitleInput = document.getElementById("TitleNewPost");
    newsTitleInput.value = "";
    setNewsTitle("");

    const newsTextInput = document.getElementById("TextNewPost");
    newsTextInput.value = "";
    setNewsText("");

  };

  const handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    if (input.name == "title") {
      setNewsTitle(value);
    }
    if (input.name == "text") {
      setNewsText(value);
    }

  }

  return (
    <form className="Profile" onSubmit={handleFormSubmit}>
      <div className="AboutProfile">
        <img src={img_user} alt="This is logo" />
        <div className="UserInfo">
          <h1>{localStorage.login}</h1>
          <p>My name is {localStorage.login}! Hello!🍇</p>
        </div>

      </div>

      <div className="NewPost">

        <input
          className="styledInput"
          id="TitleNewPost"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />

        <textarea
          className="styledInput"
          id="TextNewPost"
          placeholder="Text news"
          name="text"
          onChange={handleChange}
        />
        <div className="publish">
          <button disabled={!newsTitle.length || !newsText.length} className="myButton" id="buttonPublish" type="submit">
            Publish
          </button>
        </div>

      </div>


    </form>
  );
};

export default Profile;
