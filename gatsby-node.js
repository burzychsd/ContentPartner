/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { paginate } = require('gatsby-awesome-pagination')
// const path = require('path')

// exports.createPages = ({ actions, graphql }) => {
//     const { createPage } = actions

//     return graphql(`
//         {
//             allContentfulPost {
//                 edges {
//                     node {
//                         title
//                         shortText
//                         image {
//                             file {
//                                 url
//                                 fileName
//                             }
//                         }
//                         author {
//                         authorName
//                         }
//                         slug
//                         content {
//                             childMarkdownRemark {
//                                 html
//                             }
//                         }
//                         createdAt(locale: "")
//                     }
//                 }
//             }
//         }
//     `).then(result => {
//         if (result.errors) {
//           result.errors.forEach(e => console.error(e.toString()))
//           return Promise.reject(result.errors)
//         }

//         // Fetch your items (blog posts, categories, etc).
//         const blogPosts = result.data.allContentfulPost.edges

//         // Create your paginated pages
//         paginate({
//             createPage, // The Gatsby `createPage` function
//             items: blogPosts, // An array of objects
//             itemsPerPage: 5, // How many items you want per page
//             pathPrefix: ({ pageNumber, numberOfPages }) =>
//             pageNumber === 0 ? '/blog' : '/blog/page', // Creates pages like `/blog`, `/blog/2`, etc
//             component: path.resolve('./src/components/templates/Blog/index.js'), // Just like `createPage()`
//         })

//         blogPosts.forEach(edge => {
//             createPage({
//                 path: `${edge.node.slug}`,
//                 component: path.resolve('./src/components/templates/BlogPost/index.js'),
//                 context: {
//                     slug: edge.node.slug,
//                     title: edge.node.title,
//                     src: edge.node.image.file.url,
//                     alt: edge.node.image.file.fileName,
//                     author: edge.node.author.authorName,
//                     date: edge.node.createdAt,
//                     content: edge.node.content.childMarkdownRemark.html
//                 }
//             })
//         })
//     })
// }