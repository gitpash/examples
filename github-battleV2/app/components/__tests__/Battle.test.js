import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Battle from '../Battle'
import { shallow } from 'enzyme'

test('render with no changes', () => {
  const tree = renderer.create(
    <Battle />
  )
  expect(tree).toMatchSnapshot()
})