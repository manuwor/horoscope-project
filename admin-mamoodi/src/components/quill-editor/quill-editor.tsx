// QuillEditor.tsx
import React, { useState, useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css';
import "./quill-editor.scss";
import { useQuill } from 'react-quilljs';
interface QuillEditorProps {
    value: string;
    editValue: string;
    setDefaultValue: (value: string) => void
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, editValue,setDefaultValue }) => {
    const [editorValue, setEditorValue] = useState<string>(value);
    const { quill, quillRef } = useQuill();
    useEffect(() => {
        console.log(value);
        setEditorValue(value);
    }, [value]);

    useEffect(() => {

        if(editorValue){
            if(quill){
                quill.clipboard.dangerouslyPasteHTML(editorValue);
            }
        }
    },[editorValue && quill])
    
   
    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
              
                // setEditorValue(quillRef.current.firstChild.innerHTML);
                 setDefaultValue(quill.root.innerHTML)
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