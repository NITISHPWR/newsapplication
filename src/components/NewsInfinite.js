import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsInfinite = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(1)
  // document.title = `${capitalizeFirstLetter(props.category)}`;

  const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);



  const updateNews = async () => {
    props.setProgress(25);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(75);
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, [])



  const handlePrevClick = async () => {
    console.log("Prev clicked");

    setPage(page - 1)
    updateNews()
  };

  const handleNextClick = async () => {
    console.log("Next clicked");

    setPage(page + 1)
    updateNews()
  };

  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

  };


  console.log("render");
  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: '90px' }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">

          <div className="row">
            {
              articles.map((element) => {
                console.log(element);
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={element.description ? element.description : ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>

  );
}


// NewsInfinite.defaultProps = {
//   pageSize: 6,
//   country: "in",
//   category: "general",
// };

NewsInfinite.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsInfinite;
