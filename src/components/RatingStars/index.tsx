import { EmptyStarIcon } from "assets/svgs/EmptyStarIcon"
import { FilledStarIcon } from "assets/svgs/FilledStarIcon"
import { VFC } from "react"
import { CustomStyledProps } from "types/icons"
import { Container } from "./styles"

interface Props extends CustomStyledProps {
  stars: number;
  max?: number;
}

export const RatingStars: VFC<Props> = ({
  stars,
  max = 5,
  className
}) => {
  return (
    <Container className={className}>
      {
        [...Array(max)].map((_, index) => (
          index < stars 
          ? <FilledStarIcon key={'key-' + index} />
          : <EmptyStarIcon key={'key-' + index} />
        ))
      }
    </Container>
  )
}