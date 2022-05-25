import React, { FC } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { About, Characteristic, Contact, Hero, Inspiration, Products } from "../sessions"

const Home: FC = () => (
  <Layout>
    <Seo title="Trova Brasil" />
    <Hero />
    <About />
    <Products />
    <Characteristic />
    <Inspiration />
    <Contact />
  </Layout>
)

export default Home
