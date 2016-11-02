import React from "react"
import { Route, IndexRoute } from "react-router"

// Components
import BaseLayout from "../layout/BaseLayout"
import Contest from "../components/Contest"
import NotFound from "../components/404"

export default (
  <Route path="/" component={ BaseLayout }>
    <IndexRoute component={ Contest }/>
    <Route path="*" component={ NotFound }/>
  </Route>
)
