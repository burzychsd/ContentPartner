/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')

exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()]
  })
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    return graphql(`
        {
            allContentfulBlogPost {
                edges {
                    node {
                        postTitle
                        shortDescription
                        postPic {
                            file {
                                url
                                fileName
                            }
                        }
                        postAuthor {
                        authorName
                        }
                        slug
                        postContent {
                            childMarkdownRemark {
                                html
                            }
                        }
                        createdAt(locale: "")
                        id
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
          result.errors.forEach(e => console.error(e.toString()))
          return Promise.reject(result.errors)
        }

        // Fetch your items (blog posts, categories, etc).
        const blogPosts = result.data.allContentfulBlogPost.edges
        const postsPerPage = 10
        const numPages = Math.ceil(blogPosts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
            component: path.resolve('./src/components/templates/Blog/index.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })

        blogPosts.forEach(edge => {
            createPage({
                path: `post/${edge.node.slug}`,
                component: path.resolve('./src/components/templates/BlogPost/index.js'),
                context: {
                    slug: `post/${edge.node.slug}/`,
                    title: edge.node.postTitle,
                    src: edge.node.postPic.file.url,
                    alt: edge.node.postPic.file.fileName,
                    author: edge.node.postAuthor.authorName,
                    date: edge.node.createdAt,
                    content: edge.node.postContent.childMarkdownRemark.html,
                    id: edge.node.id
                }
            })
        })
    })
}