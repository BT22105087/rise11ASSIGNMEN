import React from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
const DropArea = ({ title }) => {
  const onDrop = (acceptedFiles) => {
    console.log("Dropped files:", acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [] },
    maxSize: 2 * 1024 * 1024, // 2MB limit
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #4A90E2",
        borderRadius: "10px",
        width: "120px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isDragActive ? "#f0f8ff" : "#fff",
        margin: "10px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}

      className="flex flex-col items-center justify-center"
    >
      <input {...getInputProps()} />
    
      <FontAwesomeIcon icon={faCloudArrowUp} size='2xl' style={{color: "#289af0"}} />
      <p style={{ fontWeight: "semibold", textAlign: "center", fontSize: "12px", color: 'black' }}>{title}</p>
      <small style={{ color: "#666", textAlign: "center" }}>
        Max 2MB, PDF
      </small>
    </div>
  );
};


export default DropArea;