import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getImagesAsync } from '../store/imageSlice/imageSlice';


const Home = () => {
  const dispatch = useDispatch();
    const Images = useSelector((state) => state.images
.images    );
    console.log(Images)
    useEffect(() => {
        dispatch(getImagesAsync());
    }, []);


    let imageList = "Loading...";
    if (Images.length > 0) {
        imageList = Images.map((image, index) => (
            <div key={index} className="me-3 mb-3">
                <img height={200} src={image.download_url} alt="" />
                <p>{image.author}</p>
                <Link to={`/gallery/${image.id}`}>Details</Link>
            </div>
        ));
    }

  return (
    <div className="container">
    <div className='d-flex  flex-wrap'>{imageList}
      </div></div>
  )
}

export default Home