import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"

export default function ProductCard({ product, ...props }) {
  return (
    <Card as={Link} to={`/${product.slug}`} fluid {...props}>
      <Image
        src={`https://${product.image.fixed.src}`}
        wrapped
        ui={false}
        alt={product.image.title}
      />

      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Description>{product.description.description}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Icon name="euro" />
        {product.price}
      </Card.Content>
    </Card>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}
