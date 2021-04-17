import React, { FC } from 'react'
import CommonHeader from './Commons/Header'
import SideMenu from './Commons/SideMenu'
import CommonFooter from './Commons/Footer'
import PropTypes from 'prop-types'

const Layout: FC = props => (
  <>
    <CommonHeader />
    <SideMenu />
    <div className="content-wrapper">{props.children}</div>
    <CommonFooter />
  </>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}

export default Layout
