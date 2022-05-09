import React, { memo } from "react";
import JoditEditor from "jodit-react";
const Editor = ({ value, onBlur }) => {
  const config = {
    readonly: false,
  };

  return (
    <JoditEditor
      value={value}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={onBlur} // preferred to use only this option to update the content for performance reasons
      // onChange={onChange}
    />
  );
};

export default memo(Editor);
