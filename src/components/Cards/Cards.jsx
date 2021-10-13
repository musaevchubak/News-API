import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../redux/action/action";
import style from './cards.module.css';

const GatPostsImg = () => {
  const [like, setLike] = useState([]);
  const [card, setCard] = useState([]);
  const [filterCard, setFilterCard] = useState(false);
  const posts = useSelector((state => state.post.post));

  const dispatch = useDispatch();

  function getPostsImgFromApi() {
    dispatch(getPosts())
  }

  useEffect(() => {
    if(posts.articles){
      const arrPosts = posts.articles.map((el, i) => {
        return {
          ...el, idPosts: i,
        }
      })
      setCard(arrPosts);
    }
  }, [posts]);
  useEffect(() => {
    getPostsImgFromApi()
  }, []);

  function likeImg(id) {
    if (like.includes(id)){
      setLike(prevState => [...prevState.filter((el) => el !== id)]);
    }else{
      setLike(prevState => [...prevState, id]);
    }
  }

  function deleteCard(id) {
    setCard((prevState => [...prevState.filter((el) => el.idPosts !== id)]));
  }

  function filterHandler() {
      setFilterCard(!filterCard);
  };

  return (
    <>
      <button className={style.filter} onClick={filterHandler}>Filter cards</button>
      <div className={style.cards}>
        {card.map((el) => {
            if(filterCard && !like.includes(el.idPosts)){
              return null;
            }
            return (
              <div className={style.content}>
                <img src={el.urlToImage} alt="" className={style.image}/>
                <i className="fas fa-heart" style={{fontSize: "30px", position: "absolute", left: '50px', bottom: "15px", color: like.includes(el.idPosts) ? 'red' : 'blueviolet'}} onClick={() => likeImg(el.idPosts)}></i>
                <button className={style.button} onClick={() => deleteCard(el.idPosts)}>Delete</button>
              </div>
            )
          })}
        </div>
    </>
  );
};

export default GatPostsImg;
