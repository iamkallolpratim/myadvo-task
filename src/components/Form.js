import React from "react";

import FormActionsContainer from "../containers/FormActionsContainer";
import SchemaField from "react-jsonschema-form/lib/components/fields/SchemaField";

export default function Form(props) {

  const registry = {
    ...SchemaField.defaultProps.registry,
    fields: {
      ...SchemaField.defaultProps.registry.fields,
      SchemaField: props.SchemaField,
      TitleField: props.TitleField,
      DescriptionField: props.DescriptionField,
    }
  };

  return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <div className="panel">
                    <div className="panel-heading">
                      Create your own survey
                    </div>
                    <div className="panel-body">
                      <div className="builder-form">
                        <SchemaField {...props} registry={registry}/>
                      </div>

                      <FormActionsContainer {...props}/>
                    </div>
                  </div>
                </div>
            </div>
        </div>  );
}
