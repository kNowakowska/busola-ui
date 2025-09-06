"use client";

import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

export default function PhotoSlider({ images }: { images: string[] }) {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        autoplay: true,
        interval: 3000,
      }}
      hasTrack={false}
    >
      <SplideTrack>
        {images.map((image, index) => (
          <SplideSlide className="flex justify-center items-center" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </SplideSlide>
        ))}
      </SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">
          <ArrowRightIcon />
        </button>
        <button className="splide__arrow splide__arrow--next">
          <ArrowRightIcon />
        </button>
      </div>
    </Splide>
  );
}
