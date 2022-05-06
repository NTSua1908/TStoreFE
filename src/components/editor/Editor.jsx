// import React, { Component } from "react";
// import Editorr from "ckeditor5-custom-build/build/ckeditor";
// import { CKEditor } from "@ckeditor/ckeditor5-react";

// const editorConfiguration = {
//   toolbar: ["bold", "italic"],
// };

// class Editor extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h2>Using CKEditor 5 from online builder in React</h2>
//         <CKEditor
//           editor={Editorr}
//           config={editorConfiguration}
//           data="<p>Hello from CKEditor 5!</p>"
//           onReady={(editor) => {
//             // You can store the "editor" and use when it is needed.
//             console.log("Editor is ready to use!", editor);
//           }}
//           onChange={(event, editor) => {
//             const data = editor.getData();
//             console.log({ event, editor, data });
//           }}
//           onBlur={(event, editor) => {
//             console.log("Blur.", editor);
//           }}
//           onFocus={(event, editor) => {
//             console.log("Focus.", editor);
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default Editor;

import React, { Component } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";

// NOTE: Use the editor from source (not a build)!
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

const editorConfiguration = {
  plugins: [Essentials, Bold, Italic, Paragraph],
  toolbar: ["bold", "italic"],
};

class Editor extends Component {
  render() {
    return (
      <div>
        <h2>Using CKEditor 5 from source in React</h2>
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default Editor;

// import React, { useEffect, useRef } from "react";
// import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

// function Editor({ onChange, editorLoaded, name, value }) {
//   const editorRef = useRef();
//   const { CKEditor, ClassicEditor } = editorRef.current || {};

//   useEffect(() => {
//     editorRef.current = {
//       CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
//       ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
//       // ClassicEditor: require("@ckeditor/ckeditor5-editor-classic/src/classiceditor"),
//     };
//   }, []);

//   return (
//     <div>
//       {editorLoaded ? (
//         <CKEditor
//           // config={editorConfiguration}
//           config={{
//             plugins: [Essentials, Bold, Italic, Paragraph],
//             toolbar: [
//               "heading",
//               "|",
//               "bold",
//               "italic",
//               "link",
//               "bulletedList",
//               "numberedList",
//               "blockQuote",
//               "ckfinder",
//               "|",
//               "imageTextAlternative",
//               "imageUpload",
//               "imageStyle:full",
//               "imageStyle:side",
//               "|",
//               "mediaEmbed",
//               "insertTable",
//               "tableColumn",
//               "tableRow",
//               "mergeTableCells",
//               "|",
//               "undo",
//               "redo",
//               "insertImage",
//             ],
//           }}
//           type=""
//           name={name}
//           editor={ClassicEditor}
//           data={value}
//           onChange={(event, editor) => {
//             const data = editor.getData();
//             // console.log({ event, editor, data })
//             onChange(data);
//           }}
//         />
//       ) : (
//         <div>Editor loading</div>
//       )}
//     </div>
//   );
// }

// export default Editor;
