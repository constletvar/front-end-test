import { useMinicart } from "contexts/MinicartContext"
import { VFC } from "react"
import { Product } from "types/product"
import { priceFormat } from "utils/priceFormat"
import { 
  Container,
  Image,
  PromotionLabel,
  PromotionText,
  DataContainer,
  Name,
  Ratings,
  ListPrice,
  Price,
  Installments,
  BuyButton,
  BuyButtonText
 } from "./styles"

export const ProductItem: VFC<Product> = ({
  productId,
  productName,
  stars,
  imageUrl,
  listPrice,
  price,
  installments
}) => {

  const { addToCart } = useMinicart();

  const handleButtonClick = () => {
    addToCart(productId);
  }

  return (
    <Container >
      <Image src={imageUrl} alt={productName} title={productName} />
      {
        !!listPrice && (
          <PromotionLabel>
            <PromotionText>
              Off
            </PromotionText>
          </PromotionLabel>
        )
      }
      <DataContainer>
        <Name>
          {productName}
        </Name>
        <Ratings stars={stars} />
        <ListPrice>
          {!!listPrice && `de ${priceFormat(listPrice / 100)}`}
        </ListPrice>
        <Price>
          por {priceFormat(price / 100)}
        </Price>
        <Installments>
          {!!installments.length && `ou em ${installments[0].quantity}x de ${priceFormat(installments[0].value / 100)}`}
        </Installments>
        <BuyButton onClick={handleButtonClick}>
          <BuyButtonText>
            Comprar
          </BuyButtonText>
        </BuyButton>
      </DataContainer>
    </Container>
  )
}