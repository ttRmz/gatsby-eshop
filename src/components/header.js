import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Icon, Menu } from "semantic-ui-react"

const MENU_CONFIG = [
  {
    path: "/products",
    label: "Products",
  },
]

export default function Header({ siteTitle }) {
  return (
    <Menu size="huge" borderless>
      <Container text>
        <Menu.Item header as={Link} to="/">
          {siteTitle}
        </Menu.Item>

        {MENU_CONFIG.map(({ path, label }) => (
          <HeaderLink path={path} children={label} key={path} />
        ))}

        <Menu.Menu position="right">
          <HeaderLink path="/cart">
            <Icon name="shopping cart" />
          </HeaderLink>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function HeaderLink({ path, children }) {
  const [activeLink, setActiveLink] = React.useState(false)

  return (
    <Menu.Item
      as={Link}
      to={path}
      active={activeLink}
      getProps={({ isCurrent }) => setActiveLink(isCurrent)}
    >
      {children}
    </Menu.Item>
  )
}
