import "./imageList.css";
const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => {
        return (
          <img
            alt={image.description}
            key={image.id}
            src={image.urls.regular}
          />
        );
      })}
    </div>
  );
};
export default ImageList;
