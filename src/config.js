export default {

  appURL: process.env.APP_URL || window.location.origin + window.location.pathname,
  fieldList: [
    {
      id: "text",
      icon: "text-color",
      label: "Text based question",
      jsonSchema: {
        type: "string",
        title: "Edit me",
        description: "",
        default: ""
      },
      uiSchema: {
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            description: {type: "string", title: "Example value"},
            required: {type: "boolean"},
          }
        },
      },
      formData: {}
    },
    
    {
      id: "multiple-checkbox",
      icon: "check",
      label: "Multiple choices multiple answer question",
      jsonSchema: {
        type: "array",
        title: "A multiple choices list",
        items: {
          type: "string",
          enum: ["choice 1", "choice 2", "choice 3"],
        },
        uniqueItems: true,
      },
      uiSchema: {
        "ui:widget": "checkboxes",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            required: {type: "boolean"},
            enum: {
              type: "array",
              title: "Choices",
              items: {
                type: "string"
              },
              default: ["choice 1", "choice 2", "choice 3"],
            }
          }
        },
      },
      formData: {}
    },
    {
      id: "radiobuttonlist",
      icon: "list",
      label: "Multiple choices one answer ",
      jsonSchema: {
        type: "string",
        title: "Edit me",
        enum: ["option 1", "option 2", "option 3"],
      },
      uiSchema: {
        "ui:widget": "radio",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            required: {type: "boolean"},
            enum: {
              type: "array",
              title: "Options",
              items: {
                type: "string"
              }
            }
          }
        },
      },
      formData: {}
    },
    {
      id: "select",
      icon: "chevron-down",
      label: "Yes/No question",
      jsonSchema: {
        type: "string",
        format: "string",
        title: "Edit me",
        enum: ["Yes", "No"],
      },
      uiSchema: {
        "ui:widget": "select",
        editSchema: {
          type: "object",
          properties: {
            title: {type: "string", title: "Label"},
            required: {type: "boolean"},
            enum: {
              type: "array",
              title: "Options",
              items: {
                type: "string"
              }
            }
          }
        },
      },
      formData: {}
    },
  ],
};
