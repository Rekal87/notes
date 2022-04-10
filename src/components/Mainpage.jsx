import React, { useState } from 'react';

function Mainpage() {
  const [inputTitle, setInputTitle] = useState('');
  const [inputTextArea, setInputTextArea] = useState('');
  //   const [note, setNote] = useState({ id: '', title: '', text: '' });

  const handleFormSubmit = (d) => {
    const { inputtitle, inputtextarea } = d.target;
    const title = inputtitle.value;
    const text = inputtextarea.value;
    const id = new Date().getTime().toString();

    const textForStorage = {
      id,
      title,
      text,
    };

    /* Saving to local storage */
    localStorage.setItem('stored-note', JSON.stringify(textForStorage));

    setInputTitle('');
    setInputTextArea('');
  };

  return (
    <div>
      <div className="mainpage">
        <div className="container">
          <div className="mb-3 mt-3">
            <h2>Main Page</h2>
          </div>
          {/* Main note page */}
          <div className="mainpage-subtitle">
            <p className="lead">Write your notes here</p>
          </div>
          <div className="mainpage-input-text">
            <form onSubmit={handleFormSubmit}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="">
                    Title
                  </span>
                </div>
                <input type="text" className="form-control" name="inputtitle" />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="input-textarea">Your text</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  name="inputtextarea"
                  rows="3"
                ></textarea>
              </div>
              <button type="button submit" className="btn btn-dark mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
