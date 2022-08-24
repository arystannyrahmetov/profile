import EditorComponent from "../Functional/Editor";
import TopMenu from "../TopMenu";

function ArticleEditor() {
  return (
    <div className="ArticleEditor">
        <TopMenu/>
        <EditorComponent/>
    </div>
  );
}

export default ArticleEditor;