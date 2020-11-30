// Import React so that you can use JSX in HeadComponents
const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
        <script src="/js/material-kit.min_v=2.2.0.js" type="text/javascript"/>,
    <script key="my-script" src="https://gatsby.dev/my-script" />,
     <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CRoboto+Slab:400,700%7CMaterial+Icons" />,
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"></link>
]

const BodyAttributes = {
  "data-theme": "dark"
}

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setBodyAttributes(BodyAttributes)
}