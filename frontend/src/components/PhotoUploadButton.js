import React, { useState } from 'react';
import Styles from "../css/EditProfileU.module.css"

function PhotoUploadButton() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="upload-photo"
        
      />
      <label htmlFor="upload-photo" style={{ cursor: 'pointer' }} className={`${Styles.photoUpload} icon solid fa-search`}> 
        Upload Photo
      </label>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
}

export default PhotoUploadButton;