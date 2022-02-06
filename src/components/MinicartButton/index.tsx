import { VFC } from "react"
import { CustomStyledProps } from "types/icons"
import { 
  Container, 
  Icon, 
  Quantity 
} from "./styles"

export const MinicartButton: VFC<CustomStyledProps> = (
  {
    className
  }
) => {
  return (
    <Container className={className}>
      <Icon />
      <Quantity />
    </Container>
  )
}