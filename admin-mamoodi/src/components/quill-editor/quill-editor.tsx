// QuillEditor.tsx
import React, { useState, useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css';
import "./quill-editor.scss";
import { useQuill } from 'react-quilljs';
interface QuillEditorProps {
    value: string;
    onChange: (value: string) => void;
    setDefaultValue: (value: string) => void
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange, setDefaultValue }) => {
    const [editorValue, setEditorValue] = useState<string>(value);
    const { quill, quillRef } = useQuill();
    useEffect(() => {
        setEditorValue(value);
    }, [value]);
    React.useEffect(() => {
        if (quill && value) {
          quill.clipboard.dangerouslyPasteHTML(value);
        }
      }, [quill, value]);
   
    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                console.log('Text change!');
                console.log(quill.getText()); // Get text only
                console.log(quill.getContents()); // Get delta contents
                console.log(quill.root.innerHTML); // Get innerHTML using quill
                console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
                setDefaultValue(quillRef.current.firstChild.innerHTML);

            });
        }
    }, [quill]);

    return (
        <div className='quill-main'>
            <div ref={quillRef} />
        </div>

    );
};

export default QuillEditor;