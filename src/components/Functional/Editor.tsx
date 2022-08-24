// @ts-nocheck
import React from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import '../../styles/Editor.scss';

function EditorComponent() {
    const [editorData, setEditorData] = React.useState('Type your text here');

    let Editor = null;

    return (
        <div className={'Editor'}>
            <CKEditor
                onReady={ editor => {
                    console.log( 'Editor is ready to use!', editor );
                    editor.ui.getEditableElement().parentElement.insertBefore(
                        editor.ui.view.toolbar.element,
                        editor.ui.getEditableElement()
                    );

                    Editor = editor;
                } }
                onError={ ( error, { willEditorRestart } ) => {
                    if ( willEditorRestart ) {
                        Editor.ui.view.toolbar.element.remove();
                    }
                } }
                onChange={ ( event, editor ) => {
                    console.log( { event, editor } );
                    setEditorData(editor.getData());
                } }
                editor={ DecoupledEditor }
                data={ editorData }
            />
        </div>
    )
}

export default EditorComponent;