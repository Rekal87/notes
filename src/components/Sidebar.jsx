import React, { useEffect, useState } from 'react';

function Sidebar() {
  const [isLocalStorage, setIsLocalStorage] = useState(true);

  const stringifiedNote = localStorage.getItem('stored-note');
  const textFromStorage = JSON.parse(stringifiedNote);

  const deleteLocalStorage = () => {
    //clears the entire localStorage
    localStorage.clear();
    console.log('clear records');
  };

  return (
    <div>
      <div className="sidebar bg-light">
        <div className="container">
          <div className="mb-3 mt-3">
            <h2>Notes</h2>
          </div>
          {/* Search */}
          <div className="mb-3">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="24"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  className="input-group-text form-control"
                  placeholder="Search notes"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </form>
          </div>
          <div className="deleteList">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteLocalStorage()}
            >
              Delete All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
