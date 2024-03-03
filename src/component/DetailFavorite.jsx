import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';


function DetailFavorite({favorites}) {
  const { id } = useParams();

  return (
    <div>
        <h2 className='topicDetail'>NEWS DETAIL</h2>
        <div className="wordingShipList">
            <img src={favorites[id].urlToImage}></img>  
        </div>
        <div className="wordingDetailShipList">
            <p>{favorites[id].title}</p>
        </div>
        <div className="wordingDetailShipList">
            <p>{favorites[id].content}</p>
        </div>
        <div className="wordingDetailShipList">
            <label>source:</label>
            <p>{favorites[id].source.name}</p>
        </div>
        <div className="wordingDetailShipList">
        <label>Link:</label>
            <p>{favorites[id].url}</p>
        </div>
        <div className="wordingShipList">
            <p>{favorites[id].author}</p>
            <p>{favorites[id].publishedAt}</p>
        </div>
    </div>
  );
}

export default DetailFavorite;