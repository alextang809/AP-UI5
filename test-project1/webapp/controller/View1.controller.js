sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict";

    return Controller.extend("testproject1.controller.View1", {

        onInit: function() {
            //initialize an empty JSON model for the table
            this.getView().setModel(new JSONModel({items:[]}));
        },

        onAddToTable: function() {
            // get reference to the input field
            var oInput = this.byId("inputField");

            // get the input value
            var sValue = oInput.getValue();

            // get reference to the table model
            var oModel = this.getView().getModel();

            // get the data
            var aData = oModel.getData();

            // push the new item
            aData.items.push({text: sValue});

            // update the model with the new data
            oModel.setData(aData);

            // clear the input field
            oInput.setValue("");
        }
    });
});
