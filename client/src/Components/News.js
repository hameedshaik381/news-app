import React, { useState,useEffect } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios'


const News = (props)=>{
  


  

  
   const [articles, setarticles] = useState([])
   const [loading, setloading] = useState(false)
  //  const [page, setpage] = useState(1)
  //  const [totalResults, settotalResults] = useState(0)
useEffect(() => {
updateNews()

//  fetchMoreData()
}, [])

  const updateNews = async ()=> {
    props.setProgress(0)
    // setpage(0)
    let url = "http://localhost:8000/news";
    setloading(true);
  const result =   await axios.get(url)
  const response = result.data
  setarticles(response)
  setloading(false);
   props.setProgress(100)
  }

  
  // const fetchMoreData = async () => {
  //   // setpage(page + 1)
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=d7e17973a3874562b73c9e99a9210afd&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
  //   setloading({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setarticles(articles.concat(parsedData.articles));
  //   settotalResults( parsedData.totalResults);
  //   setloading(false);
  //   props.setProgress(100)
  // };

  // const nextClick = async () => {
  //  setpage(page + 1)
  // updateNews()
  
  // };

 
    return (
      <>
        <div className="container my-3 vw-100 vh-100">
          <h2 className="fst-italic">News minute /{props.category}</h2>
          <hr />
          
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            // next={fetchMoreData}
            // hasMore={articles.length !== totalResults}
            loader={loading && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary " role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
          
            <div className="row mt-3 d-flex justify-content-between">
              {
                

                articles.map((element) => {
                  return (
                    <div className="col-md-3" key={element.url}>
                      <Newsitem
                        title={element.title}
                        description={element.description}
                        imgUrl={element.urlToImage}
                        url={element.url}
                      />
                    </div>
                  );
                })
              }
            </div>
           
          </InfiniteScroll>
          
        </div>
      </>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
