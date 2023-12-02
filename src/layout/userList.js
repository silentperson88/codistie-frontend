import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllUser from "../redux/thunk/userThunk";

const UserList = ({ userList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = userList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(userList.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="tableContainer">
      <table id="tableCoponent">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((data) => (
            <tr key={data.email}>
              <td className="productName">{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobileNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default UserList;
