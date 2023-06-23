import React from "react";
import "../CSS/Role-Management.scss";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const RoleManagement = () => {
  return (
    <div className="RoleManagement">
      <h5>Role Management</h5>
      <div className="mid-container">
        <div className="input1">
          <h6>Role Name*</h6>
          {/* <input type="text" /> */}
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
        <div className="input1">
          <h6>Status*</h6>
          {/* <input type="text" /> */}
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            select
            size="small"
          >
            <MenuItem>Option 1</MenuItem>
          </TextField>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Page</th>
              <th>
                <label htmlFor="add">
                  Add
                  <input type="checkBox" id="add" />
                </label>
              </th>
              <th>
                <label htmlFor="edit">
                  Edit
                  <input type="checkBox" id="edit" />
                </label>
              </th>
              <th>
                <label htmlFor="view">
                  View
                  <input type="checkBox" id="view" />
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <div> */}
            <tr>
              <td>Master</td>
              <td>
                <input type="checkBox" />
              </td>
              <td>
                <input type="checkBox" />
              </td>
              <td>
                <input type="checkBox" />
              </td>
            </tr>

            <tr>
              <td className="subOption">Department</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            <tr>
              <td className="subOption">Designation</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            <tr>
              <td className="subOption">Role</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            {/* </div> */}
            {/* <div> */}
            <tr>
              <td>Menu Management</td>
              <td>
                <input type="checkBox" />
              </td>
              <td>
                <input type="checkBox" />
              </td>
              <td>
                <input type="checkBox" />
              </td>
            </tr>

            <tr>
              <td className="subOption">Main Menu</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            <tr>
              <td className="subOption">SubMenu Level 1</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            <tr>
              <td className="subOption">SubMenu Level 2</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            {/* </div> */}
            {/* <div> */}
            <tr>
              <td>User Management</td>
              <td>
                <input type="checkBox" />
              </td>
              <td>
                <input type="checkBox" />
              </td>
              <td>
                <input type="checkBox" />
              </td>
            </tr>

            <tr>
              <td className="subOption">Create User</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            <tr>
              <td className="subOption">User Role Custom</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            {/* </div> */}
            {/* <div> */}
            <tr>
              <td>Project Management</td>
              <td>
                <input type="checkBox" />
              </td>
              <td>
                <input type="checkBox" />
              </td>
              <td>
                <input type="checkBox" />
              </td>
            </tr>
            {/* </div> */}
            {/* <div> */}
            <tr>
              <td className="subOption">Create Project</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            <tr>
              <td className="subOption">Create Job/ Task</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            <tr>
              <td className="subOption">Assign Task</td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
              <td className="subOption">
                <input type="checkBox" />
              </td>
            </tr>
            {/* </div> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleManagement;
