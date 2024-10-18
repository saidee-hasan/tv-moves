import { useEffect, useState } from "react";
import VideoItem from "./MoveItem";

export default function Moves() {
    const [products, setProducts] = useState([]);
  const [noOfElement, setnoOfElement] = useState(9);
  const LodeMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const slice = products.slice(0, noOfElement).reverse();
  console.log(slice);

  const fetchData = () => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.videos);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className="">
    <div className="text-gray-500  bg-gray-100 p-4 sm:ml-40 gap-2 mt-14 grid xl:grid-cols-5  md:grid-cols-4 grid-cols-2  translate-all duration-300  dark:bg-gray-800 p-4 sm:ml-40 md:ml-56 ">
    {
       slice.map((all,index) => <VideoItem key={index} all={all}/>) 
    }

    </div>
    <button className="bg-red-300 w-full" onClick={LodeMore}>load</button>
    </div>
  );
}
