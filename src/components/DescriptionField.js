import React from "react";
import {RIEInput} from "riek";

function DescriptionField(props) {
  const onUpdate = function(formData) {
    props.updateFormDescription(formData);
  };

  const {id, description=""} = props;
  return (
    <p id={id}>
      <RIEInput
        className="edit-in-place"
        classEditing="edit-in-place-active"
        propName="description"
        value={description}
        change={onUpdate} />
    </p>
  );
}


export default DescriptionField;
