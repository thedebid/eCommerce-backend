import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsersActions } from "./../../actions/user.action";
import { connect } from "react-redux";

const ViewUsers = (props) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // fetch: () => dispatch(fetchUsersActions());
    console.log(props);
    return () => {};
  });
  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h2>User List</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Oculux</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">Main</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-md-6 col-sm-12 text-right hidden-xs">
              <a href="/" className="btn btn-sm btn-primary btn-round" title="">
                Add New
              </a>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-hover table-custom spacing5">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>Details</th>
                    <th>Team</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w60">
                      <img
                        src="../../assets/images/xs/avatar1.jpg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        alt="Avatar"
                        className="w35 rounded"
                        data-original-title="Avatar Name"
                      />
                    </td>
                    <td>
                      <a href="/" title="">
                        Jason Porter
                      </a>
                      <p className="mb-0">+ 264-625-5858</p>
                    </td>
                    <td>
                      <span>jason-porter@example.com</span>
                    </td>
                    <td>
                      <span>123 6th St. Melbourne, FL 32904</span>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm mr-1">
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <Link className="page-link" to="/" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="/">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (centralStore) => ({
  // console.log(centralStore),
 // setProduct: centralStore.product.products,
  // products: centralStore.product.products,
});

// what component will trigger
const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchUsersActions({ pageCount: 10 })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers);
