import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import useStudentData from "./constant/Data";
import { useState } from "react";

function App() {
  const [students, setStudents] = useStudentData();
  const [editStudents, setEditStudents] = useState(null);
  const delTableRow = (delRow) => {
    const updateRow = students.filter(rowDel => rowDel.id !== delRow)
    setStudents(updateRow)
  }
  const handleEdit = (newEditStudent) => {
    setEditStudents(newEditStudent);
  }
  const resetEdit = () => {
    setEditStudents(null)
  }
  return (
    <div className="table-responsive container">
      <h1 className="text-center mt-5">Student Registration App</h1>
      <h2 className="text-center my-5">Add Student Record</h2>
      <Form student={students} setStudent={setStudents} editStudent={editStudents} resetEdit={resetEdit} />
      <h2 className="text-center mb-4">Student Record</h2>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Roll No</th>
            <th scope="col" className="ps-5">Name</th>
            <th scope="col">Father Name</th>
            <th scope="col">Course</th>
            <th scope="col" className="ps-5">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {students.map((value, index) => {
            return (
              <>
                <Table key={index} {...value} propDelRow={delTableRow} propHandleEdit={handleEdit} />
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
