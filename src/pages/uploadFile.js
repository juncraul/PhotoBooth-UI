import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    axios.post('https://photobooth-backend.azurewebsites.net/file-manager/upload-file', formData)
      .then(response => {
        console.log('File uploaded successfully!', response);
        // TODO: handle response
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        // TODO: handle error
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
}

export default FileUpload;