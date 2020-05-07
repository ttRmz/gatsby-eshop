var path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve("src/templates/product.js")

    resolve(
      graphql(`
        {
          allContentfulProduct {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(({ data, errors }) => {
        errors && reject(errors)

        data.allContentfulProduct.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: productTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })

        return
      })
    )
  })
}
