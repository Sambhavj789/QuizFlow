import { Link } from "react-router-dom";
import { MdAdd, MdDelete, MdOutlineQuiz } from "react-icons/md";

import "./AdminManageQuizzes.css";

const quizzesData = [
  { id: 1, name: "Physics - Motion & Force" },
  { id: 2, name: "Chemistry - Periodic Table" },
  { id: 3, name: "Maths - Trigonometry" },
  { id: 4, name: "Biology - Cell Structure" },
  { id: 5, name: "English - Grammar Basics" },
];

function AdminManageQuizzes() {
  return (
    <section className="manage-quizzes-section">
      {/* Header */}
      <div className="manage-quizzes-header">
        <div>
          <h1>Manage Quizzes</h1>
          <p>View all created quizzes</p>
        </div>
        <Link to="/admin/create-quiz" className="manage-quizzes-add-btn">
          <MdAdd />
          Add Quiz
        </Link>
      </div>

      {/* Quizzes List */}
      <div className="manage-quizzes-list">
        {quizzesData.map((quiz) => (
          <div className="quiz-list-card" key={quiz.id}>
            <div className="quiz-list-icon">
              <MdOutlineQuiz />
            </div>
            <span className="quiz-list-name">{quiz.name}</span>
            <button className="quiz-list-delete-btn" title="Delete">
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminManageQuizzes;