import React from "react"
import { Container, Divider, Icon, List, Segment } from "semantic-ui-react"

export default function Footer() {
  return (
    <Segment
      inverted
      vertical
      style={{ margin: "auto 0em 0em", padding: "2.7em 0em" }}
    >
      <Container textAlign="center">
        <List horizontal inverted divided link size="small">
          <List.Item>
            Made by <a href="http://tristan-ramirez.me">Tristan Ramirez</a>
          </List.Item>
          <List.Item as="a" href="https://github.com/ttRmz/gatsby-eshop">
            <Icon name="github" /> Source code
          </List.Item>
        </List>
      </Container>

      <Divider />

      <Container textAlign="center">
        <List horizontal inverted divided link size="small">
          <List.Item>
            This is a demo webiste. All products are found on{" "}
            <a href="https://www.ikea.com/">IKEA</a>
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}
