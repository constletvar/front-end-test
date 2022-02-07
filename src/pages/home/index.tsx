import { Footer } from "components/Footer";
import { Newsletter } from "components/Newsletter";
import { ProductSlider } from "components/ProductSlider";
import { useEffect, useState } from "react";
import { api } from "services/api";
import { Product } from "types/product";
import { DesktopBannerSlider, MobileBannerSlider } from "./styles";

export const Home = () => {

  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);

  const getProducts = async () => {
    try {
      const { data } = await api.get<Product[]>(process.env.REACT_APP_API_PRODUCTS_ROUTE || 'products');
      setProducts(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <DesktopBannerSlider
        images={[
          {
            src: "/assets/images/banner.png",
            alt: "banner"
          },
          {
            src: "/assets/images/banner.png",
            alt: "banner"
          },
          {
            src: "/assets/images/banner.png",
            alt: "banner"
          },
          {
            src: "/assets/images/banner.png",
            alt: "banner"
          }
        ]}
      />

      <MobileBannerSlider
        images={[
          {
            src: "/assets/images/mobile-banner.png",
            alt: "banner"
          },
          {
            src: "/assets/images/mobile-banner.png",
            alt: "banner"
          },
          {
            src: "/assets/images/mobile-banner.png",
            alt: "banner"
          },
          {
            src: "/assets/images/mobile-banner.png",
            alt: "banner"
          }
        ]}
      />

      {
        !!products.length && (
          <ProductSlider
            products={products}
            title="Mais Vendidos"
          />
        )
      }

      <Newsletter
        title="Participe de nossas news com promoções e novidades!"
      />

      <Footer />
    </>
  );
};