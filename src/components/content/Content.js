import News1 from'./ContentNews';

const Content= () => {
    return(
      <div className="Content">
        <News />

        <News1 />
      </div>);
  }

const News = () => {
  
  var currentNews = JSON.parse(localStorage.getItem('news'));

  // currentNews.forEach(newsObjects => {
  //   for (let key in newsObjects) {
  //       console.log(`${key}: ${newsObjects[key]}`);
  //   }
  // });

  for (var i = 0; i < currentNews.length; i++ ) {
    // console.log(currentNews[i]);
  }

  return(
    <div className="NewsContent">
      <h1>test title</h1>
      <p>test text</p>
    </div>);
}


  export default Content;