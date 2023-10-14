import React from "react";
import data from "./data.json";
function Home() {
  let isData = data.find((item) => {
    if (item.username === window.localStorage.getItem("username")) {
      return true;
    } else {
      return false;
    }
  });

  if (!isData) {
    window.location.href = "/";
    return;
  }
  function handleLogout() {
    window.localStorage.removeItem("username");
    window.location.href = "/";
  }
  return (
    <div className="tbl">
      <div>
        <table className="table1">
          <thead>
            <tr>
              <th>Username</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{window.localStorage.getItem("username")}</td>
              <td>Full stack developer</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
