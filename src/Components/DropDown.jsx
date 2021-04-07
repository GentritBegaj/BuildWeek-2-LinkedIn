import React, { useState } from "react";
import { FormControl, Dropdown } from "react-bootstrap";

class DropDown extends React.Component {
  render() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <a
        href=""
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
        &#x25bc;
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
            <ul className="list-unstyled">
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
          style={{
            color: "white",
          }}
        ></Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          <Dropdown.Item eventKey="1">Red</Dropdown.Item>
          <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Orange
          </Dropdown.Item>
          <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
export default DropDown;
