import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { getEmpleado } from "../../../../services/empleadoService";
// import card from "./../../../../img/slider/card5.jpg";
// import card2 from "./../../../../img/slider/card2.jpg";
// import card3 from "./../../../../img/slider/card3.jpg";

// const itemsDemo = [
//   {
//     src: card3,
//     altText: "Entrenador Fisico",
//     caption: "Pedro",
//   },
//   {
//     src: card2,
//     altText: "Entrenador Fisico",
//     caption: "Jorge Luis",
//   },
//   {
//     src: card,
//     altText: "Entrenador Fisico",
//     caption: "Machin",
//   },
// ];

const Slider = (props) => {
  const [objempleado, setObjempleado] = useState([]);
  useEffect(() => {
    getEmpleado().then((rpta) => {
      if (rpta.data) {
        setObjempleado(rpta.data);
      }
    });
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = objempleado.map((objOfert) => {
    return {
      src: objOfert.fotoBanner,
      altText: objOfert.profesion,
      caption:
        objOfert.usuarios.primerNombre +
        " " +
        objOfert.usuarios.segundoNombre +
        " " +
        objOfert.usuarios.apellidoPaterno +
        " " +
        objOfert.usuarios.apellidoMaterno,
    };
  });
  // newItems.src = ofertas

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <figure className="d-flex justify-content-center">
          <img src={item.src} alt={item.altText} className="imgSlider" />
        </figure>
        <CarouselCaption
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Slider;
