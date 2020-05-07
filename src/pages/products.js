import React from "react"
import { Card, Container, Header } from "semantic-ui-react"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"

export default function Products({ data }) {
  return (
    <Layout title="Products">
      <Container>
        <Header
          as="h1"
          content="Products"
          style={{
            fontSize: "4em",
            marginBottom: "1.7em",
            marginTop: "1.2em",
          }}
        />

        <Card.Group doubling stackable itemsPerRow={4}>
          {data.allContentfulProduct.edges.map(({ node: product }) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Card.Group>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProduct(sort: { fields: updatedAt, order: DESC }) {
      edges {
        node {
          id
          name
          slug
          image {
            title
            fixed {
              src
            }
          }
          updatedAt(locale: "en", formatString: "DD MMMM YYYY")

          price
          description {
            description
          }
        }
      }
    }
  }
`
