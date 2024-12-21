import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function Statement() {
  const [statement, setStatement] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
 
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
  });

  return (
    <div
      style={{
        maxWidth: "250px",
        maxHeight: "150px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
      className="flex flex-col items-center justify-center"
    >
      

      {/* Textarea for writing the statement */}
      <textarea
        placeholder="Write your Statement Here"
        value={statement}
        onChange={(e) => setStatement(e.target.value)}
        style={{
          width: "100%",
          height: "80px",
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "14px",
        }}
      />

      {/* DropArea for file upload */}
      <div
        {...getRootProps()}
        style={{
          padding: "-10px",
          border: "2px dashed #007bff",
          borderRadius: "4px",
          textAlign: "center",
          backgroundColor: isDragActive ? "#e6f7ff" : "#f9f9f9",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p style={{ color: "#007bff" }}>Drop the file here...</p>
        ) : uploadedFile ? (
          <p style={{ color: "#333" }}>
            Uploaded File: <strong>{uploadedFile.name}</strong>
          </p>
        ) : (
          <p style={{ color: "#666" }}>
            Drag & drop a PDF file here, or click to select one
          </p>
        )}
      </div>

      {/* File details */}
      {uploadedFile && (
        <div
          style={{
            marginTop: "5px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f4f4f4",
          }}
        >
          <p style={{ fontSize: "14px", margin: "0" }}>
            <strong>File Name:</strong> {uploadedFile.name}
          </p>
          <p style={{ fontSize: "14px", margin: "0" }}>
            <strong>File Size:</strong> {(uploadedFile.size / 1024).toFixed(2)}{" "}
            KB
          </p>
        </div>
      )}
    </div>
  );
}

export default Statement;