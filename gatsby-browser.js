/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './normalize.css'
import wrapWithProvider from './wrap-with-provider'

const wrapRootElement = wrapWithProvider

const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`👍 IntersectionObserver is polyfilled`)
  }

  // Object-fit/Object-position polyfill for gatsby-image (IE)
  const testImg = document.createElement(`img`)
  if (
    typeof testImg.style.objectFit === `undefined` ||
    typeof testImg.style.objectPosition === `undefined`
  ) {
    import('object-fit-images').then(({ default: ObjectFitImages }) => ObjectFitImages());
    console.log(`👍 Object-fit/Object-position are polyfilled`)
  }
}

export {
  onClientEntry,
  wrapRootElement
}