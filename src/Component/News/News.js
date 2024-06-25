import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NewsCard from "../UI/NewsCard";
import "./News.css"
import LoadingSpinner from "../UI/LoadingSpinner";

const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f6b32a04bca45d78e7a6b6a008caa39"
      );
      setData(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="News_parent">
        <span className="News_title">Latest News of Indian Markets</span>
      {data ? (
        <div className="News_subparent">
          {data.articles.map((item) => {
            const {
              author,
              title,
              description,
              url,
              urlToImage,
              publishedAt,
              content,
              source,
            } = item;
            return (
             
               <div className="News_card_list">
                    <NewsCard
                      image={urlToImage ? urlToImage : 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=800'}
                      title={title}
                      description={description}
                      author={author}
                      publishedAt={publishedAt}
                      content={content}
                      source={source}
                      url={url}
                    />
                </div>
              
            );
          })}
        </div>
      ) : (
        <div className="LoadingDiv">
        <LoadingSpinner />
        </div >
      )}
    </div>
  );
}

export default News;
