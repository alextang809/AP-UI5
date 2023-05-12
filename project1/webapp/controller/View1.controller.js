// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ],
//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller) {
//         "use strict";

//         return Controller.extend("project1.controller.View1", {
//             onInit: function () {

//             }
//         });
//     });
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], function(Controller, JSONModel) {
    "use strict";
  
    return Controller.extend("sap.ui.demo.todo.controller.App", {
      onInit: function() {
        // Create a model and set it to the view
        var oModel = new JSONModel([]);
        this.getView().setModel(oModel);
      },
  
      onAddToTable: function() {
        // Get the input field and the table from the view
        var oInput = this.byId("inputField");
        var oTable = this.byId("table");
        
        // Get the model and the data from the model
        var oModel = this.getView().getModel();
        var aData = oModel.getData();
        
        // Add the value of the input field to the data
        aData.push({ text: oInput.getValue() });
        
        // Update the model
        oModel.setData(aData);
        
        // Clear the input field
        oInput.setValue("");
      }
    });
  });
  