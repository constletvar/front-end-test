import { Image, SwiperContainer } from "./styles"
import { SwiperSlide } from "swiper/react"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from "swiper";
import { VFC } from "react";
import { CustomStyledProps } from "types/icons";

interface ImageProps {
  src: string;
  alt: string;
};

interface Props extends CustomStyledProps {
  images: ImageProps[];
}

export const BannerSlider: VFC<Props> = ({
  images,
  className
}) => {
  return (
    <SwiperContainer
      className={className}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {
        images.map(({ src, alt }, index) => (
          <SwiperSlide key={src + alt + index}>
            <Image src={src} alt={alt} />
          </SwiperSlide>
        ))
      }
    </SwiperContainer>
  )
}