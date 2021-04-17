import React from 'react'
import { Route, Switch } from 'react-router'
import { URL } from '../common/constants/url'

import Layout from '../components/Layout'
import Home from '../components/Home'
import Fcm from '../components/Firebase/Fcm'
import { NotFound } from '../components/NotFound'

const routes = () => {
  return (
    <>
      <Layout>
        <main className="main">
          <Switch>
            <Route exact path={URL.HOME} component={Home} />
            <Route exact path={URL.FCM} component={Fcm} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Layout>
    </>
  )
}

export default routes
