import { useMinicart } from "contexts/MinicartContext"
import { useCallback, useEffect, useState, VFC } from "react"
import { CustomStyledProps } from "types/icons"
import { 
  Container, 
  Icon, 
  Quantity, 
  QuantityText
} from "./styles"

export const MinicartButton: VFC<CustomStyledProps> = (
  {
    className
  }
) => {

  const [quantity, setQuantity] = useState(0);

  const { items } = useMinicart();

  const getMinicartItems = useCallback(() => {
    const itemsQuantity = items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    return itemsQuantity;
  }, [items])

  const handleMinicartChange = useCallback(() => {
    setQuantity(getMinicartItems());
  }, [getMinicartItems])

  useEffect(() => {
    handleMinicartChange();
  }, [handleMinicartChange])

  return (
    <Container className={className}>
      <Icon />
      {
        !!quantity && (
          <Quantity>
            <QuantityText>
              {quantity}
            </QuantityText>
          </Quantity>
        )
      }
    </Container>
  )
}