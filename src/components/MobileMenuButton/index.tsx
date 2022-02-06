import { VFC } from "react"
import { CustomStyledProps } from "types/icons"
import { Container, Icon } from "./styles"

export const MobileMenuButton: VFC<CustomStyledProps> = ({
  className
}) => {
  return (
    <Container className={className}>
      <Icon />
    </Container>
  )
}