import { Link } from "gatsby"
import React from "react"
import { Button, Container, Header, Icon } from "semantic-ui-react"
import Layout from "../components/Layout"

export default function Home({ data }) {
  return (
    <Layout title="Home">
      <Container textAlign="center">
        <Header
          className="home__title"
          as="h1"
          content={`${data.site.siteMetadata.title}`}
          style={{
            fontSize: "4em",
            marginBottom: 0,
            marginTop: "3em",
          }}
        />

        <Header
          className="home__subtitle"
          as="h2"
          content={data.site.siteMetadata.description}
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
            marginBottom: "2em",
          }}
        />

        <Button as={Link} to="/products" color="teal" size="huge">
          Explore
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
