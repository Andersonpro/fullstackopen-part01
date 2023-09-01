/* eslint-disable react/prop-types */

import { Part } from "../part/Part";

export const Content = (props) => {
  //const parts = props.parts;
  return (
    <>
      <Part key={0} part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part key={1} part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part key={2} part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  )
}