import { VFC } from "react"
import { CustomStyledProps } from "types/icons"
import { 
  Container, 
  SearchInput,
  SearchButton, 
  SearchIcon
} from "./styles"

export const SearchBar: VFC<CustomStyledProps> = ({
  className
}) => {
  return (
    <Container className={className}>
      <SearchInput type="text" placeholder="O que está procurando?" />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Container>
  )
}