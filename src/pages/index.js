import * as React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
import Intro from '../components/intro'
import { Divider } from "@material-ui/core"
import Demos from "../components/demo-section"
import CallToAction from "../components/calltoAction"


const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Intro />
      <Divider className="w-75 m-auto" />
      <Demos />
      <CallToAction />
    </Layout>
  )
}

export default IndexPage
