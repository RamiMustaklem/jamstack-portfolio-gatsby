const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const { createNode } = actions

  let multipleImages = node.images

  if (node.internal.type === "StrapiProjects") {
    if (multipleImages.length > 0) {
      const images = await Promise.all(
        multipleImages.map(({ url }) =>
          createRemoteFileNode({
            url,
            parentNodeId: node.id,
            store,
            cache,
            createNode,
            createNodeId,
          })
        )
      )

      multipleImages.forEach((image, i) => {
        image.localFile___NODE = images[i].id
      })
    }
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      projects: allStrapiProjects(filter: { display: { eq: true } }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const edges = result.data.projects.edges
  const projects = edges.map(({ node }) => node)

  if (projects) {
    projects.forEach(({ slug }) => {
      createPage({
        path: `/project/${slug}`,
        component: path.resolve(`src/templates/project.js`),
        context: { slug: slug },
      })
    })
  }
}
