import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as FieldListActions from "../actions/fieldlist";

import Form from "../components/Form";
import EditableField from "../components/EditableField";
import TitleField from "../components/TitleField";
import DescriptionField from "../components/DescriptionField";

function mapStateToProps(state) {
  return {
    schema: state.form.schema,
    uiSchema: state.form.uiSchema,
    formData: state.form.formData,
  };
}

function mapDispatchToProps(dispatch) {
  const actionCreators = {...FieldListActions};
  const actions = bindActionCreators(actionCreators, dispatch);
  // Side effect: attaching action creators as EditableField props, so they're
  // available from within the Form fields hierarchy.
  EditableField.defaultProps = Object.assign(
    {}, EditableField.defaultProps || {}, actions);
  TitleField.defaultProps = Object.assign(
    {}, TitleField.defaultProps || {}, actions);
  DescriptionField.defaultProps = Object.assign(
    {}, DescriptionField.defaultProps || {}, actions);
  return actions;
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    SchemaField: EditableField,
    TitleField,
    DescriptionField,
    onChange: () => {}
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Form);
