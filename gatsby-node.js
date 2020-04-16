const path = require('path')

/* module.exports.onCreateNode = ({node,actions})=>{
    const {createNodeField} = actions

    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name:'slug',
            value:slug
        })
    }
} */

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    //get path to templates
    const blogTemplates = path.resolve('./src/templates/blog.js')
    //get markdown data
    const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges{
          node {
            slug
          }
        }

      }
    }
    `)
      res.data.allContentfulBlogPost.edges.forEach((edge)=>{
          createPage({
              component : blogTemplates,
              path: `/blog/${edge.node.slug}`,
              context: {
                  slug: edge.node.slug
              }
          })
      })

}
