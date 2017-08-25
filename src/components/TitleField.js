import React from "react";
import {RIEInput} from "riek";

function TitleField(props) {
  const onUpdate = function(formData) {
    props.updateFormTitle(formData);
  };

  const {id, title=""} = props;
  return (
    <legend id={id}>
      <RIEInput
        className="edit-in-place"
        propName="title"
        value={title}
        change={onUpdate} />
    </legend>
  );
}



export default TitleField;
