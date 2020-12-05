// Import React so that you can use JSX in HeadComponents
const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>,
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"/>
  ]

const BodyAttributes = {
  "data-theme": "dark"
}

const PostBodyComponents = [
  <script key="1" src={'js/material-kit.min_v=2.2.0.js'} type="text/javascript"/>,
  <script type="text/javascript" src={'js/core/bootstrap-material-design.min.js'}/>,
  <script type="text/javascript" src={'js/core/jquery.min.js'}/>,
  <script type="text/javascript" src={'js/core/popper.min.js'}/>,
  <script type="text/javascript" src={'js/core/popper.min.js'}/>
]

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
  setPostBodyComponents,
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setBodyAttributes(BodyAttributes)
  setPostBodyComponents(PostBodyComponents)
}
