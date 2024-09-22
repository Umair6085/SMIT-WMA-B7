import React from "react";
import "../components/form.css";
import { useState, useEffect } from "react";
import * as Yup from "yup";

function Form({ student, setStudent, editStudent, resetEdit }) {               
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(()=> {
    if (editStudent) {
      setName(editStudent.name || "");
      setRollNo(editStudent.rollNo || "");
      setFatherName(editStudent.fatherName || "");
      setCourse(editStudent.course || "");
      setEmail(editStudent.email || "");
    } else {
      setName("");
      setRollNo("");
      setFatherName("");
      setCourse("");
      setEmail("");
    }
  }, [editStudent])

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long"),
      rollNo: Yup.number()
        .required("Roll No is required")
        .typeError("Roll No must be a number"),
    fatherName: Yup.string()
      .required("Father Name is required")
      .min(3, "Father Name must be at least 3 characters long"),
    course: Yup.string()
      .required("Course is required")
      .min(2, "Course must be at least 2 characters long"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });
  const validation = async () => {
    try {
      await validationSchema.validate({
        name,
        fatherName,
        email,
        rollNo,
        course,
      }, {abortEarly: false})
      setErrors({});
      return true;
    } catch (err) {
      const newError = {}
      err.inner.forEach(error => {
        newError[error.path] = error.message;
      });
      setErrors(newError);
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validation()
    if (!isValid) {
      return;
    }
    if (editStudent) {
      const updatStudent = {...editStudent, name, fatherName, email, rollNo,course};
      const updatStudents = student.map(s => (s.id === editStudent.id ? updatStudent : s))
      setStudent(updatStudents);
      resetEdit();
    } else {
      const newStudent = {
        id: student.length + 1,
        rollNo: rollNo,
        name: name,
        fatherName: fatherName,
        course: course,
        email: email,
      };
      setName('')
      setRollNo('')
      setFatherName('')
      setCourse('')
      setEmail('')
      console.log(newStudent);
      setStudent([...student, newStudent]);
    }
    
  };
  return (
    <div className="formData row">
      <div className="col-sm-12 col-lg-4">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="errorClass">{errors.name}</div>}
      </div>
      <div className="col-sm-12 col-lg-4">
        <label htmlFor="fathername">Father Name: </label>
        <input
          type="text"
          placeholder="Father Name"
          id="fathername"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
        {errors.fatherName && <div className="errorClass">{errors.fatherName}</div>}
      </div>
      <div className="col-sm-12 col-lg-4">
        <label htmlFor="course">Course: </label>
        <input
          type="text"
          placeholder="Course Name"
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        {errors.course && <div className="errorClass">{errors.course}</div>}
      </div>
      <div className="col-sm-12 col-lg-4">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="errorClass">{errors.email}</div>}
      </div>
      <div className="col-sm-12 col-lg-4">
        <label htmlFor="rollno">Roll No: </label>
        <input
          type="text"
          placeholder="Roll No"
          id="rollno"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        {errors.rollNo && <div className="errorClass">{errors.rollNo}</div>}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="btn btn-primary mt-3"
      >
        {editStudent ? 'Update' : 'Add'}
      </button>
    </div>
  );
}

export default Form;
