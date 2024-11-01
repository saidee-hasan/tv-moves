import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function MovesItem(props) {
   
    const {description,thumbnail,title} = props.all;
  return (
    <div className="bg-white shadow-md p-2 rounded-md text-gray-500  dark:bg-gray-800">
      <Image
       isZoomed
      width={700}
      height={220}
      alt="NextUI Fruit Image with Zoom"
      src={thumbnail}
    />
    <Link to={'/product/'+title}>{title}</Link>




    </div>
  )
}
