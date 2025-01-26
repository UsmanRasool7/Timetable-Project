
import React,{ useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import './Timetable.css';

const Timetable = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) {
        alert("Please select a file first.");
        return;
        }

        // TODO: Send file to backend (implement later)
        alert(`File "${file.name}" selected for upload.`);
    };
    return (
        <div className="upload-container">
            <Sidebar />
            <div className="file-container">
                <h2>Upload Timetable Excel File</h2>
                <input className = 'file-upload' type="file" accept=".xlsx, .xls" onChange={handleFileChange}  />

                {file && <p className="file-name">Selected file: {file.name}</p>}

                <button onClick={handleUpload} className="upload-button">
                    Upload
                </button>
            </div>
        </div>
    );
};

export default Timetable;