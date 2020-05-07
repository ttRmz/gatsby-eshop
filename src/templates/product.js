import { graphql } from "gatsby"
import React from "react"
import { Container, Header, Icon, Input, Item, Label } from "semantic-ui-react"
import Layout from "../components/Layout"

export default function Product({ data }) {
  const { name, image, description, price } = data.contentfulProduct

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
            <Item.Image size="medium" src={`https:${image.fixed.src}`} />

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
                }}
                size="small"
                type="number"
                actionPosition="right"
                placeholder="Search..."
                defaultValue={1}
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
