import "./gallery.css";
import pic0 from "../../assets/galleryPhotos/pic0.jpg";
import pic1 from "../../assets/galleryPhotos/pic1.jpg";
import pic2 from "../../assets/galleryPhotos/pic2.jpg";
import pic3 from "../../assets/galleryPhotos/pic3.jpg";
import pic4 from "../../assets/galleryPhotos/pic4.jpg";
import pic5 from "../../assets/galleryPhotos/pic5.jpg";
import pic6 from "../../assets/galleryPhotos/pic6.jpg";
import pic7 from "../../assets/galleryPhotos/pic7.jpg";
import pic8 from "../../assets/galleryPhotos/pic8.jpg";
import pic9 from "../../assets/galleryPhotos/pic9.jpg";
import pic10 from "../../assets/galleryPhotos/pic10.jpg";
import pic11 from "../../assets/galleryPhotos/pic11.jpg";
import pic12 from "../../assets/galleryPhotos/pic12.jpg";
import pic13 from "../../assets/galleryPhotos/pic13.jpg";
import pic14 from "../../assets/galleryPhotos/pic14.jpg";
import pic15 from "../../assets/galleryPhotos/pic15.jpg";
import { useState, useRef, useEffect } from "react";

// variable will hold all the images in an array
const images = [
  pic0,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
];

// global variables that will hold the pics number
const maxIndex = images.length - 1; // 8 total pics
const minIndex = 0;
let currentIndex = 0;

const Gallery: React.FC = () => {
  // will create the modal settings
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);

  // will open or close the modal
  const openModal = (imageId: string, index: number) => {
    currentIndex = index;
    setModalContent(imageId);
    setIsModalOpen(true);
  };

  // will move to the image on the left
  const moveLeft = () => {
    if (currentIndex === minIndex) {
      currentIndex = maxIndex;
    } else {
      currentIndex -= 1;
    }
    openModal(images[currentIndex], currentIndex);
  };

  // will move to the image on the right
  const moveRight = () => {
    if (currentIndex === maxIndex) {
      currentIndex = minIndex;
    } else {
      currentIndex += 1;
    }
    openModal(images[currentIndex], currentIndex);
  };

  //will close the modal
  const closeModal = () => {
    setModalContent("");
    setIsModalOpen(false);
  };

  // function will create and remove an event handler to close the modal if the user clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // wil close the modal
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    // creaate event listener
    document.addEventListener("mousedown", handleClickOutside);

    // removes event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Gallery</span>
          <h2 className="cs-title">Our Photo Gallery</h2>
        </div>
      </div>
      <div className="cs-gallery">
        {images.map((image, index) => (
          <picture className="gallery-images">
            <img
              onClick={() => openModal(image, index)}
              loading="lazy"
              decoding="async"
              src={image}
              alt="gallery"
              className="images"
            ></img>
          </picture>
        ))}

        {/* create the modal object that will enlarge the photos*/}
        {isModalOpen && (
          <div className="modal" id="modal">
            <div className="modal-content" id="modal-content" ref={modalRef}>
              <span
                id="leftArrow"
                onClick={() => {
                  console.log(currentIndex);
                  moveLeft();
                }}
              >
                &lt;
              </span>
              <span
                id="rightArrow"
                onClick={() => {
                  moveRight();
                }}
              >
                &gt;
              </span>
              <span className="close" id="close" onClick={closeModal}>
                x
              </span>
              <img src={modalContent} id="largePic" alt="enlarged view" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
