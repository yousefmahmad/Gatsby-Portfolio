const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yousefahmad/sei32/projects/Gatsby-Portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/yousefahmad/sei32/projects/Gatsby-Portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/yousefahmad/sei32/projects/Gatsby-Portfolio/src/pages/index.js")))
}

