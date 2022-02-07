import { ProductItem } from "components/Product"
import { VFC } from "react"
import { Navigation, Pagination } from "swiper"
import { SwiperSlide } from "swiper/react"
import { CustomStyledProps } from "types/icons"
import { Product } from "types/product"
import { Container, SwiperContainer, Title } from "./styles"

interface Props extends CustomStyledProps {
  products: Product[];
  title: string;
}

export const ProductSlider: VFC<Props> = ({
  className,
  products,
  title
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SwiperContainer
        className={className}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {
          products.map((data, index) => (
            <SwiperSlide key={data.productId + data.productName + index}>
              <ProductItem {...data} />
            </SwiperSlide>
          ))
        }
      </SwiperContainer>
    </Container>

  )
}