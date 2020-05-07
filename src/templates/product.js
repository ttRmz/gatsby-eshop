import { graphql } from "gatsby"
import React from "react"
import { Container, Header, Icon, Input, Item, Label } from "semantic-ui-react"
import Layout from "../components/Layout"

export default function Product({ data }) {
  const { name, image, description, price, slug } = data.contentfulProduct
  const [quantity, setQuantity] = React.useState(1)

  return (
    <Layout title={name} keywords={[`gatsby`, `application`, `react`]}>
      <Container>
        <Header
          as="h1"
          content={name}
          style={{
            fontSize: "4em",
            marginBottom: "1.7em",
            marginTop: "1.2em",
          }}
        />
      </Container>

      <Container text>
        <Item.Group>
          <Item>
            <Item.Image size="medium" src={image.fixed.src} />

            <Item.Content>
              <Item.Description>{description.description}</Item.Description>

              <Item.Extra>
                <Label style={{ marginTop: "1em" }} size="large">
                  <Icon name="euro" />
                  {price}
                </Label>
              </Item.Extra>

              <Input
                style={{ marginTop: "1.7em" }}
                action={{
                  color: "teal",
                  labelPosition: "right",
                  icon: "cart",
                  content: "Add to cart",
                  className: "snipcart-add-item",
                  "data-item-id": slug,
                  "data-item-price": price,
                  "data-item-image": image.fixed.src,
                  "data-item-description": description.description,
                  "data-item-name": name,
                  "data-item-url": `${process.env.GATSBY_SITE_URL}/${slug}`,
                  "data-item-quantity": quantity,
                }}
                size="small"
                type="number"
                placeholder="Quantity"
                value={quantity}
                min={1}
                onChange={({ target }) => {
                  !!target.value && setQuantity(target.value)
                }}
              />
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      name
      slug
      image {
        fixed {
          src
        }
      }
      price
      description {
        description
      }
    }
  }
`
