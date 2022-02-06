import { VFC } from "react"
import { CustomStyledProps } from "types/icons"
import { Container, Icon, Text } from "./styles"

export const HeaderButton: VFC<CustomStyledProps> = (
  {
    className
  }
) => {
  return (
    <Container className={className} to="/">
      <Icon />
      <Text>Minha Conta</Text>
    </Container>
  )
}