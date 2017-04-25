import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Popular, { RepoGrid, SelectLanguage } from "./Popular";

describe("Popular", () => {
  it("renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Popular />, div);
  });
  test("snapshots", () => {
    const component = renderer.create(<Popular />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe("SelectLanguage", () => {
//   const props = {
//     lang: ["All", "Javascript", "Ruby", "Java", "CSS", "Python"]
//   };
//   it("renders", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<SelectLanguage props />, div);
//   });
//   test("snapshots", () => {
//     const component = renderer.create(<SelectLanguage props />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
