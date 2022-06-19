import News1 from "./ContentNews";

const Content = () => {
  return (
    <div className="Content">
      <News />
      <News1 />
    </div>
  );
};

const News = () => {
  var currentNews = JSON.parse(localStorage.getItem("news"));
  const final = [];

  for (var i = currentNews.length-1; i >= 0; i--)  {
    final.push(
      <div className="NewsContent">
        <h1>{currentNews[i].title}</h1>
        <p>{currentNews[i].text}</p>
      </div>
    );
  }
  return <div className="news">{final}</div>;
};

export default Content;
