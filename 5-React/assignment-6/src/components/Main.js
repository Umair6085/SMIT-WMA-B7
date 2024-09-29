import React from "react";
import Table from "./Table";
import Form from "./Form";
import { useState } from "react";

function Main() {
  const [editStudent, setEditStudent] = useState(null);
  return (
    <>
      <div className="table-responsive container">
      <h1 className="text-center mt-4">Student Registration App</h1>
      <p className="text-center text-secondary mt-2">Using React Redux</p>
      <h2 className="text-center my-4">Add Student Record</h2>
        <Form editStudent={editStudent} setEditStudent={setEditStudent} />
        <h3 className="text-center mb-4">Students Record</h3>
        <table className="table table-hover table-striped" style={{fontSize:15}}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Roll No</th>
              <th scope="col">Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">Course Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <Table setEditStudent={setEditStudent} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Main;
