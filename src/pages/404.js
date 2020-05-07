import React from "react"
import { Container } from "semantic-ui-react"
import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
