import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Detail() {
    const {productKey}=useParams();

    const [data,setData]=useState([])
    const fetchData = () => {
        fetch(`https://openapi.programming-hero.com/api/phero-tube/videos`)
          .then((res) => res.json())
          .then((data) => {
            setData(data.videos);
          });
      };
      useEffect(() => {
        fetchData();
      }, []);
 
    const product = data.find(pd =>pd.title === productKey);
    console.log(product)
  

  return (
    <div>
     <h1 className="text-center mt-20">{productKey}</h1>
    </div>
  )
}
