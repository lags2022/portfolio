import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carrusel = () => {
  return (
    <div className="w-full h-full">
      <Carousel responsive={responsive}>
        <Image
          className="object-contain h-[400px] w-auto pt-6"
          src="/images/modal/1.webp"
          alt="img"
          width={516}
          height={290}
          loading="lazy"
        />
        <Image
          className="object-contain h-[400px] w-auto pt-6"
          src="/images/modal/1.webp"
          alt="img"
          width={516}
          height={290}
          loading="lazy"
        />
        <Image
          className="object-contain h-[400px] w-auto pt-6"
          src="/images/modal/1.webp"
          alt="img"
          width={516}
          height={290}
          loading="lazy"
        />
      </Carousel>
    </div>
  );
};

export default Carrusel;
