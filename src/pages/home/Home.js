import { React, useState } from 'react';
import './Home.css';
import Product from '../../components/product/Product';
import Slider from '../../components/carousel/Carousel';
import products from '../../ProductData';

function Home(props) {
  const [show, setShow] = useState(false);

  function loadMore() {
    setShow((prevState) => !prevState);
  }

  const filteredData = products.filter((el) => {
    // if no input the return the original
    if (props.text === '') {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(props.text);
    }
  });
  const ProductComponent = filteredData.map((element,index) => {
    if (show) {
      return (
        <Product
          key={index}
          title={element.title}
          price={element.price}
          image={element.image}
          rating={element.rating}
          reviews={element.reviews}
        />
      );
    } else {
      if (!element.visibility) {
      } else {
        return (
          <Product
            key={index}
            title={element.title}
            price={element.price}
            image={element.image}
            rating={element.rating}
            reviews={element.reviews}
          />
        );
      }
    }
  });

  return (
    <>
      <div className="home">
        <div className="home__container">
          <Slider />
          {/* Home__grid class will make the Array of products into grid */}
          <div className="home__grid">{ProductComponent}</div>
        </div>
      </div>
      <a onClick={loadMore} className="load-more-btn block">{`${
        show ? 'See less results' : 'See all results'
      }`}</a>
    </>
  );
}

export default Home;
