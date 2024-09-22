import React from "react";

function Table(props) {
  const { id, propDelRow, propHandleEdit } = props;
  const handleClick = () => {
    propDelRow(id);
  };
  const handleEdit = () => {
    propHandleEdit(props);
  }
  return (
    <>
{/*     
  <div className="table-responsive-sm">
    <table className="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    </tbody>
    </table>
  </div> */}

      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.rollNo}</td>
        <td className="ps-5">{props.name}</td>
        <td>{props.fatherName}</td>
        <td>{props.course}</td>
        <td className="ps-5">{props.email}</td>
        <td>
          <button
            onClick={handleEdit}
            type="button"
            className="btn btn-success"
            style={{marginRight: 13}}
          >
            Edit
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-danger"
            
          >
            Delete
          </button>
        </td>
      </tr>
    
    </>
  );
}

export default Table;
