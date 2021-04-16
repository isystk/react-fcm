import React from 'react'
import { Route, Switch } from 'react-router'
import { URL } from '../common/constants/url'

import Layout from '../components/Layout'
import ShopTop from '../components/Shops/ShopTop'
import { NotFound } from '../components/NotFound'

const routes = () => {
  return (
    <>
      <Layout>
        <main className="main">
          <Switch>
            <Route exact path={URL.TOP} component={ShopTop} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Layout>
    </>
  )
}

export default routes
