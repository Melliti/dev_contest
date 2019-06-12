import React from "react";
import ReactAce from "react-ace";
import brace from "brace";

import 'brace/theme/github';
import 'brace/mode/java';

class Editor extends React.Component {
  render() {
    return (
      <div>
        <ReactAce
          mode="java"
          theme="github"
          onChange={this.onChange}
          name="IDE"
          editorProps={{
            $blockScrolling: true
          }}
        />
      </div>
    );
  }
}

export default Editor;
