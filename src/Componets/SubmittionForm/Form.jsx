import React from "react";
import style from "./Form.module.scss";
import DoctoerSvg from "../../assets/ProjectSvgs/Forms/DoctoerSvg";
import { GrAttachment } from "react-icons/gr";

function Form() {
  return (
    <section className={style.sectionForm}>
      <div className={style.formContainer}>
        <div className={style.container}>
          <div className={style.left}>
            <DoctoerSvg />
          </div>
          <div className={style.right}>
            <h1>
              Join as a <span className="orange">Provider</span>{" "}
            </h1>
            <form>
              <label>
                <div className={style.label}>Email address</div>

                <input type="text" placeholder="Enter your username" />
              </label>
              <label>
                <div className={style.label}>Subject</div>

                <input type="text" placeholder="Enter your subject" />
              </label>
              <label>
                <div className={style.label}>Attachment</div>

                <div className={style.fileInputContainer}>
                  <div className={style.fakeFileInput}>No file attached</div>
                  <GrAttachment className={style.attachtment} />
                  <input id="fileInput" type="file" />
                </div>
              </label>
              {/* <label>
                <div className={style.label}>Description</div>
                <div className={style.textArea}>
                  <textarea placeholder="Write description here..." />
                </div>
              </label> */}
             
              <div className={style.inputContainer}>
                <input
                  type="text"
                  placeholder="Write description here..."
                />
              </div>
            

              <button type="submit" className={style.btn}>
                Submit request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
