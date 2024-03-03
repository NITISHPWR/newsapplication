import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  /*articles = [
    {
      source: {
        id: null,
        name: "MLB.com",
      },
      author: "Rhett Bollinger",
      title: "Ohtani has UCL tear, won't pitch again in '23 - MLB.com",
      description:
        "ANAHEIM -- The Angels were dealt a massive blow on Wednesday, as two-way superstar Shohei Ohtani was diagnosed with a torn ulnar collateral ligament in his right elbow after exiting his start after just 1 1/3 innings in a 9-4 loss in Game 1 of a doubleheader …",
      url: "https://www.mlb.com/news/shohei-ohtani-has-tear-in-ucl",
      urlToImage:
        "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/y7bbol6y10n7en4xwnqa.jpg",
      publishedAt: "2023-08-24T08:15:00Z",
      content:
        "ANAHEIM -- The Angels were dealt a massive blow on Wednesday, as two-way superstar Shohei Ohtani was diagnosed with a torn ulnar collateral ligament in his right elbow after exiting his start after j… [+3913 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Niha Masih, Lyric Li, Leo Sands, Ellen Francis",
      title:
        "Prigozhin plane crash live updates: No confirmation of Wagner chief’s death - The Washington Post",
      description:
        "People in Yevgeniy Prigozhin’s hometown of St. Petersburg paid tributes to him as news of the crash spread, but the Kremlin has not confirmed his death.",
      url: "https://www.washingtonpost.com/world/2023/08/24/prigozhin-plane-crash-wagner-russia-live-updates/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-23-2023/t_8dbdda1af411481aaec9df7e3b95605d_name_sidebysidecrash.jpg&w=1440",
      publishedAt: "2023-08-24T08:09:45Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Ruxandra Iordache",
      title:
        "Emerging markets group BRICS invites 6 new members, including Saudi Arabia and Iran - CNBC",
      description:
        "The BRICS economic coalition of emerging markets has decided to extend membership invitations to six nations.",
      url: "https://www.cnbc.com/2023/08/24/emerging-markets-group-brics-invites-6-new-members-including-saudi-arabia-and-iran.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107291287-1692865318722-gettyimages-1619658381-SOUTH_AFRICA_BRICS.jpeg?v=1692865543&w=1920&h=1080",
      publishedAt: "2023-08-24T07:59:42Z",
      content:
        "The BRICS economic coalition of emerging markets on Thursday extended membership invitations to six nations, South African President and current BRICS chair Cyril Ramaphosa said.\r\nThe BRICS alliance … [+3741 chars]",
    },
    {
      source: {
        id: null,
        name: "The Athletic",
      },
      author: "Nicole Auerbach",
      title:
        "ACC brass meeting this week as conference seriously considers adding Stanford, Cal, SMU: Sources - The Athletic",
      description:
        "A group of ACC presidents met Wednesday morning to discuss finances, one of the sources said.",
      url: "https://theathletic.com/4800635/2023/08/23/acc-cal-stanford-smu-expansion/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/08/07153423/ACC-scaled.jpg",
      publishedAt: "2023-08-24T07:33:20Z",
      content:
        "The ACC is seriously considering adding Stanford, Cal and SMU, multiple sources briefed on the discussions said Wednesday. There have been discussions periodically over the past month. Heres what you… [+3078 chars]",
    },
  ];
  */

  static defaultProps = {
    pageSize: 6,
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

  constructor(props) {
    super(props);
    //console.log("This is constructor from News Component");
    this.state = {
      articles: [],
      // articles: this.articles,
      loading: false,
      page: 1,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}`;
  }



  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e9196811055463e84e7e8b6bf50b0f2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e9196811055463e84e7e8b6bf50b0f2&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updateNews()
  }

  handlePrevClick = async () => {
    console.log("Prev clicked");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=8e9196811055463e84e7e8b6bf50b0f2&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  };

  handleNextClick = async () => {
    console.log("Next clicked");
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=8e9196811055463e84e7e8b6bf50b0f2&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }

    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  };

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
