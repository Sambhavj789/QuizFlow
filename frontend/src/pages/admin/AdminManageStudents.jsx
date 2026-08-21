import { useEffect, useState } from "react";
import { MdAdd, MdEdit, MdDelete, MdClose } from "react-icons/md";

import "./AdminManageStudents.css";

const studentsData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@gmail.com",
    batch: "Batch 2026 - A",
  },
];

function AdminManageStudents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    batch: "",
  });

  const [students, setStudents] = useState([]);
  const [batches, setBatches] = useState([]);
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  useEffect(() => {
    async function getStudents() {}

    async function getBatches() {}
    getStudents();
    getBatches();
  }, []);

  async function handleSubmit() {}

  return (
    <section className="manage-students-section">
      {/* Header */}
      <div className="manage-students-header">
        <div>
          <h1>Manage Students</h1>
          <p>View and manage all enrolled students</p>
        </div>
        <button
          className="manage-students-add-btn"
          onClick={() => setIsModalOpen(true)}
        >
          <MdAdd />
          Add Student
        </button>
      </div>

      {/* Table */}
      <div className="manage-students-table-wrapper">
        <table className="manage-students-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email</th>
              <th>Joined Batch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="student-name-cell">
                    <span className="student-avatar">
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    {student.name}
                  </div>
                </td>
                <td>{student.email}</td>
                <td>
                  <span className="student-batch-badge">{student.batch}</span>
                </td>
                <td>
                  <div className="student-action-btns">
                    <button className="student-edit-btn" title="Edit">
                      <MdEdit />
                    </button>
                    <button className="student-delete-btn" title="Delete">
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Student Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Student</h2>
              <MdClose
                className="modal-close-icon"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <div className="modal-body">
              <div className="modal-form-group">
                <label>Student Name</label>
                <input type="text" placeholder="Enter student name" />
              </div>
              <div className="modal-form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter student email" />
              </div>
              <div className="modal-form-group">
                <label>Batch</label>
                <select>
                  <option>Select Batch</option>
                  <option>Batch 2026 - A</option>
                  <option>Batch 2026 - B</option>
                  <option>Batch 2026 - C</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="modal-cancel-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button className="modal-submit-btn">Add Student</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminManageStudents;
