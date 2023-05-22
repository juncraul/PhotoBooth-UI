import React, { useState } from 'react';
import axios from 'axios';

import './style.css'

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    axios
      .post('https://photobooth-backend.azurewebsites.net/file-manager/upload-file', formData)
      .then((response) => {
        console.log('File uploaded successfully!', response);
        alert('File uploaded successfully!');
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        alert('Error uploading file!');
      });
  };
  
  const isButtonDisabled = !file;

  return (
    <div className="file-upload-container">
      <form onSubmit={handleSubmit}>
        <label className="file-upload-label">
          Choose a file:
          <input type="file" onChange={handleFileChange} className="file-upload-input" />
        </label>
        <button type="submit" className="file-upload-button" disabled={isButtonDisabled}>
          Upload
        </button>
      </form>
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
}

export default FileUpload;
