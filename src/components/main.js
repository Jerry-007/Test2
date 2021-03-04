import React, { useRef } from "react";
import EmailEditor from "react-email-editor";
import axios from 'axios'

const Main = () => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { html } = data;
      console.log("exportHtml", html);
    });
  };

  const saveDesign = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design } = data;
      console.log("design", design);
    });
  };  

  return (
    <div>
      <button className="btn btn-dark me-1" onClick={exportHtml}>Export HTML</button>
      <button className="btn btn-dark" onClick={saveDesign}>Save Design</button>
      <EmailEditor ref={emailEditorRef} />
    </div>
  );
};

export default Main;
