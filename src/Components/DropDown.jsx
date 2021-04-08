import React, { useState } from "react";
import { FormControl, Dropdown } from "react-bootstrap";
import RandonProfiles from "./RandonProfiles";
const RandomAvatarsBill =
  "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg";
class DropDown extends React.Component {
  render() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <a
        style={{
          backgroundColor: "white",
          color: "gray",
        }}
        href=""
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
        &#x25BE;
      </a>
    ));
    const CustomMenu = React.forwardRef(
      ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
        const [value, setValue] = useState("");

        return (
          <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
          >
            <FormControl
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Type to filter..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <ul className="list-unstyl">
              {React.Children.toArray(children).filter(
                (child) =>
                  !value || child.props.children.toLowerCase().startsWith(value)
              )}
            </ul>
          </div>
        );
      }
    );
    return (
      <Dropdown>
        <Dropdown.Toggle
          as={CustomToggle}
          variant="Secondary"
        ></Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="1"></Dropdown.Item>
          <Dropdown.Item eventKey="2"></Dropdown.Item>
          <Dropdown.Item eventKey="3">Working on it</Dropdown.Item>
          <Dropdown.Item eventKey="1"></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
export default DropDown;
