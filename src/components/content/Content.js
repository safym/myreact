import FirstNews from "./ContentNews";

const Content = () => {
  return (
    <div className="Content">
      <News />
      <FirstNews />
    </div>
  );
};

const News = () => {
  var currentNews = JSON.parse(localStorage.getItem("news"));
  const final = [];

  for (var i = currentNews.length-1; i >= 0; i--)  {
    final.push(
      <div key={currentNews[i].title} className="NewsContent">
        <h1>{currentNews[i].title}</h1>
        <p>{currentNews[i].text}</p>
        <p className="metadata">Author: {currentNews[i].author}</p>
      </div>
    );
  }
  return <div className="news">{final}</div>;
};

export default Content;
