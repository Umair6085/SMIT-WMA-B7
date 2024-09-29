import React from "react";
import { removeStudent } from "../store/slices/addStudentSlice";
import { useSelector, useDispatch } from "react-redux";
import './Table.css'

function Table({setEditStudent}) {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  console.log(students);
  return (
    <>
      {students.map((student) => {
        return (
          <>
            <tr>
              <th scope="row">{student.id}</th>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              <td>{student.courseName}</td>
              <td>{student.email}</td>
              <td className="d-flex gap-2">
                <button className="btn btn-success" type="button" onClick={() => setEditStudent(student)}>Update</button>
                <button className="btn btn-danger" type="button" onClick={() => dispatch(removeStudent(student.id))}>Delete</button>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
}

export default Table;
