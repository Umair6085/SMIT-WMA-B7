import React from "react";
import "./Form.css";
import { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../store/slices/addStudentSlice";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

function Form({ editStudent, setEditStudent }) {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name || "");
      setFatherName(editStudent.fatherName || "");
      setCourseName(editStudent.courseName || "");
      setEmail(editStudent.email || "");
      setRollNo(editStudent.rollNo || "");
    } else {
      setName("");
      setFatherName("");
      setCourseName("");
      setEmail("");
      setRollNo("");
    }
  }, [editStudent]);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long"),
    fatherName: Yup.string()
      .required("Father Name is required")
      .min(2, "Father Name must be at least 2 characters long"),
    courseName: Yup.string()
      .required("Course Name is required")
      .min(2, "Course Name must be at least 2 characters long"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    rollNo: Yup.number()
      .required("Roll No is required")
      .typeError("Roll No must be a number"),
  });
  const validation = async () => {
    const data = { name, fatherName, email, rollNo, courseName };
    try {
      await validationSchema.validate(data, { abortEarly: false });
      setName("");
      setFatherName("");
      setCourseName("");
      setEmail("");
      setRollNo("");
      setErrors({});
      return true;
    } catch (error) {
      const validationError = {};
      error.inner.forEach((err) => {
        validationError[err.path] = err.message;
      });
      setErrors(validationError);
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validation();
    if (!isValid) {
      return;
    }
    if (!editStudent) {
      dispatch(addStudent({ name, fatherName, email, rollNo, courseName }));
    } else {
      dispatch(
        updateStudent({
          id: editStudent.id,
          name,
          fatherName,
          email,
          rollNo,
          courseName,
        }),
        setEditStudent(null)
      );
    }
  };
  return (
      <form onSubmit={handleSubmit} className="row formData">
        <div className="col-sm-12 col-lg-4 mt-2">
          <label htmlFor="rollNo">Roll No</label>
          <input
            type="number"
            placeholder="Roll No"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
          {errors.rollNo && <span>{errors.rollNo}</span>}
        </div>
        <div className="col-sm-12 col-lg-4 mt-2">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            placeholder="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="col-sm-12 col-lg-4 mt-2">
          <label htmlFor="fatherName">Father Name</label>
          <input
            type="father"
            placeholder="Father Name"
            id="fatherName"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
          {errors.fatherName && <span>{errors.fatherName}</span>}
        </div>

        <div className="col-sm-12 col-lg-4 mt-2">
          <label htmlFor="fatherName">Course Name</label>
          <input
            type="course"
            placeholder="Course Name"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          {errors.fatherName && <span>{errors.fatherName}</span>}
        </div>

        <div className="col-sm-12 col-lg-4 mt-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <button type="submit" className="btn btn-primary mt-4">{editStudent ? "Update" : "Add"}</button>
      </form>
  );
}

export default Form;
