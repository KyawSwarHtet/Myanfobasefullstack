import react from "react"
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
  import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export default function Admin() {
    return (
      <>
        <div>
          <div className="admin-title">
            <h1>ADMIN PAGE</h1>
          </div>

          <div className="request-user">
            <Link to="/requestform" className="adminlink">
              <h4>Post Request from Users</h4>
            </Link>
            <Link to="/requestform" className="adminlink">
              <p className="count-post">
                <span>3</span> posts
              </p>
            </Link>
          </div>

          {/* block user */}
          <div className="user-list">
        
              <h3>USERS LIST </h3>(Active, Tem - block, Per - block)
            
          </div>

          <div className="search-user">
            <input
              className="inner-searchuser"
              type="text"
              placeholder="Search in here...."
            />
          </div>

          <Table striped bordered hover size="sm" className="block-table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>
                  {/* Type
                  <i class="uil uil-angle-down"></i> */}

                  <Nav>
                    <NavDropdown
                      className="type-dropdown"
                      id="nav-dropdown-dark-example"
                      title="Types"
                      //   menuVariant="dark"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Active
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Per - block
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Tem - block
                      </NavDropdown.Item>

                      {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
                    </NavDropdown>
                  </Nav>
                </th>
                <th>Choose button</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kyaw Swar Htet</td>
                <td>active</td>
                <td>
                  <button className="button-types">Tem-block</button>
                  <button className="button-types1">Per-block</button>
                </td>
              </tr>
              <tr>
                <td>Chue Wathan Kyaw</td>
                <td>Tem - Block</td>
                <td>
                  <button className="button-types2">Unblock</button>
                  <button className="button-types1">Per-block</button>
                </td>
              </tr>
              <tr>
                <td>Thaw Zin Hlaing</td>
                <td>Per - Block</td>

                <td>
                  <button className="button-types2">Unblock</button>
                  <button className="button-types">Tem-block</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
}