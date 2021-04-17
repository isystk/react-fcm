import React from 'react'
import { CommonHeader } from '../Header'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Header', () => {
  const wrapper = shallow(<CommonHeader />)
  const tree = toJson(wrapper)

  expect(tree).toMatchSnapshot()
})
