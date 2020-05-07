import { Link } from "gatsby"
import React from "react"
import { Button, Container, Header, Icon } from "semantic-ui-react"
import Layout from "../components/Layout"

export default function Cart() {
  return (
    <Layout title="Cart">
      <Container>
        <Header
          as="h1"
          content="Cart"
          style={{
            fontSize: "4em",
            marginBottom: "1.7em",
            marginTop: "1.2em",
          }}
        />

        <Header
          as="p"
          content="You cart is empty"
          style={{
            fontWeight: "normal",
            fontSize: "2em",
            marginBottom: "1.7em",
            marginTop: "1.2em",
          }}
        />

        <Button as={Link} to="/products" color="teal" size="large">
          Find products
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Layout>
  )
}
