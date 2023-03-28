import React, { useEffect, useState } from 'react'
import Card from './TeamCard'
import '../assets/css/CardArea.css';
import LoadingSpinner from './LoadingSpinner';
import tiger1 from "../assets/images/NFT 1.png";
import tiger2 from "../assets/images/NFT 2.png";
import tiger3 from "../assets/images/NFT 3.png";
import tiger4 from "../assets/images/NFT 4.png";
import data from './utils/data';
const CardArea = () => {
  const [formData, setformData] = useState(['']);
  const [fetchItems, setfetchItems] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const r = Math.floor(Math.random()*4+1);
  const arr = [tiger1 , tiger2 , tiger3 , tiger4];
  // useEffect(() => {
    
  // }, [third])

  // console.log(Math.floor(Math.random()*4+1))
  useEffect(() => {
    window.scrollTo(0,0);
    // let arr =[];
    const fetchData = async() => {      
      setIsLoading(true);
      // const response = await fetch('');
      // const response = await data.json()
      // console.log(response.data)
      // arr.push(response);
      setformData(data);
      setIsLoading(false);
    }
    setfetchItems(true)
    fetchData();
  }, [fetchItems])
  
  // console.log(formData)
  

  return (
    <>
        {isLoading ?<LoadingSpinner/>:

    
    <div className="cardareaa">
    
      {formData.map((item , index)=>{
        return(
          <Card key={index} formData = {item} img={arr[Math.floor(Math.random()*4)]}/>
        )
      })}
       
    </div>
}
    </>
      )
    
}

export default CardArea