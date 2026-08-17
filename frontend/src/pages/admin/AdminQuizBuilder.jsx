import "./AdminQuizBuilder.css";
import { MdDelete } from "react-icons/md";

function AdminQuizBuilder() {
  return (
    <section className="quiz-builder-section">
      {/* Quiz Builder Header */}
      <div className="quiz-builder-header">
        <input type="text" className="quiz-builder-input" />
        <div className="quiz-builder-header-actions">
          <button>Create With AI</button>
          <button>Save Quiz</button>
        </div>
      </div>

      {/* Quiz Builder Body */}
      <div className="quiz-builder-body">
        {/* This will contain all the questiions */}
        <div className="quiz-builder-questions-container">
          
          <div className="quiz-question-card">
            <div className="quiz-question-header">
              <div className="quiz-question-header-title">Question 1</div>
              <div className="quiz-question-header-actions">
                <MdDelete className="quiz-question-header-delete" />
              </div>
            </div>
            <div className="quiz-question-input-box">
              <textarea
                type="text"
                placeholder="Write Your Question..."
              ></textarea>
            </div>
            <div className="quiz-options-container">
              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>A</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>

              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>B</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>

              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>C</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>

              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>D</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>
            </div>

            <div className="quiz-question-footer">
              <div className="quiz-footer-left">
                <label>Marks</label>
                <input type="text" />
              </div>

              <div className="quiz-footer-right">
                <label>Explanation </label>
                <textarea placeholder="Write Your Explanation..."></textarea>
              </div>
            </div>
          </div>

          <div className="quiz-question-card">
            <div className="quiz-question-header">
              <div className="quiz-question-header-title">Question 1</div>
              <div className="quiz-question-header-actions">
                <MdDelete className="quiz-question-header-delete" />
              </div>
            </div>
            <div className="quiz-question-input-box">
              <textarea
                type="text"
                placeholder="Write Your Question..."
              ></textarea>
            </div>
            <div className="quiz-options-container">
              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>A</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>

              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>B</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>

              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>C</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>

              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>D</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>
            </div>

            <div className="quiz-question-footer">
              <div className="quiz-footer-left">
                <label>Marks</label>
                <input type="text" />
              </div>

              <div className="quiz-footer-right">
                <label>Explanation </label>
                <textarea placeholder="Write Your Explanation..."></textarea>
              </div>
            </div>
          </div>

          <div className="quiz-question-card">
            <div className="quiz-question-header">
              <div className="quiz-question-header-title">Question 1</div>
              <div className="quiz-question-header-actions">
                <MdDelete className="quiz-question-header-delete" />
              </div>
            </div>
            <div className="quiz-question-input-box">
              <textarea
                type="text"
                placeholder="Write Your Question..."
              ></textarea>
            </div>
            <div className="quiz-options-container">
              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>A</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>

              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>B</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>

              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>C</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>

              <div className="quiz-option-card">
                <div className="quiz-option-card-left">
                  <input type="radio" />
                  <span>D</span>
                </div>
                <input type="text" className="quiz-option-input" />
              </div>
            </div>

            <div className="quiz-question-footer">
              <div className="quiz-footer-left">
                <label>Marks</label>
                <input type="text" />
              </div>

              <div className="quiz-footer-right">
                <label>Explanation </label>
                <textarea placeholder="Write Your Explanation..."></textarea>
              </div>
            </div>
          </div>
          
        </div>

        {/* This iwll contain quiz settings */}
        <div className="quiz-builder-settings-panel"></div>
      </div>
    </section>
  );
}

export default AdminQuizBuilder;
