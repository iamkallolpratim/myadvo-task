import React from "react";
import FieldListDropdown from "./FieldListDropdown";
import {ButtonToolbar} from "react-bootstrap";

export default function FormActions(props) {
  return (
        <div>
            <ButtonToolbar className="builder-inner-actions">
                <FieldListDropdown className="pull-right" {...props}>
                    <i className="glyphicon glyphicon-plus"/>
                    Add a field
                </FieldListDropdown>
            </ButtonToolbar>
        </div>
    );
}
