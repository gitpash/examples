import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import PlayerPreview from "../PlayerPreview";

test("Component return object of props", () => {
  const props = {
    // avatar: 'some avatar',
    // username: 'some username'
  };
  const result = PlayerPreview(props);
  expect(result).toBeDefined();
});

test("expect to get some property set", () => {
  const props = {
     avatar: "url" 
  };
  const result = PlayerPreview(props);
  expect(typeof(result)).toBe(`object`)

});
