import { useHistory } from "react-router-dom";
import "./navDropdown.css";
import { BiMessageSquareAdd } from "react-icons/bi";
import { MdOutlineManageSearch, MdEditNote } from "react-icons/md";
import { Prevent } from "./Prevent"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function NavDropdown() {
  const [postData, setPostData] = useState([]);
  const childToParent = (childdata) => {
    setPostData(childdata);
    postData.forEach(post => console.log(post))
  }
  const history = useHistory();

}

export default NavDropdown;
