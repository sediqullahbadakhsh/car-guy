import ImageCard from "./ImageCard";
import "./imageList.css";
const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
      })}
    </div>
  );
};
export default ImageList;
