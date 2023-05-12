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
            debugger;
            // get reference to the input field
            var sId = this.byId("inputFieldID").getValue();
            var sName = this.byId("inputFieldName").getValue();
            var sPhone = this.byId("inputFieldPhone").getValue();
            var sEmail = this.byId("inputFieldEmail").getValue();
            var data ={sId,sName,sPhone,sEmail};

            // get reference to the table model
            var oModel = this.getView().getModel();

            // get the data
            var aData = oModel.getData();

            // push the new item
            aData.items.push(data);

            // update the model with the new data
            oModel.setData(aData);

            // clear the input field
            this.byId("inputFieldID").setValue("");
            this.byId("inputFieldName").setValue("");
            this.byId("inputFieldPhone").setValue("");
            this.byId("inputFieldEmail").setValue("");
        }
    });
});

// //////

// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel",
//     "sap/m/MessageToast"
// ], function(Controller, JSONModel, MessageToast) {
//     "use strict";

//     return Controller.extend("testproject1.controller.View1", {
//         onInit: function() {
//             // set message model
//             this.getView().setModel(new JSONModel(), "data");

//             // add some data
//             this.getView().getModel("data").setData({
//                 items: []
//             });
//         },

//         onAddToTable: function() {
//             var oInputID = this.byId("inputFieldID");
//             var oInputName = this.byId("inputFieldName");
//             var oInputPhone = this.byId("inputFieldPhone");
//             var oInputEmail = this.byId("inputFieldEmail");

//             // get the input values
//             var sId = oInputID.getValue();
//             var sName = oInputName.getValue();
//             var sPhone = oInputPhone.getValue();
//             var sEmail = oInputEmail.getValue();

//             // validate the input values
//             // if (!sId) {
//             //     MessageToast.show("A valid Employee ID is required");
//             //     return;
//             // }

//             // if (!sName) {
//             //     MessageToast.show("A valid name is required");
//             //     return;
//             // }

//             // var phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
//             // if (!sPhone || !phoneRegex.test(sPhone)) {
//             //     MessageToast.show("A valid phone number is required");
//             //     return;
//             // }

//             // var emailRegex = /^\S+@\S+\.\S+$/; // simple check, can be more comprehensive
//             // if (!sEmail || !emailRegex.test(sEmail)) {
//             //     MessageToast.show("A valid email address is required");
//             //     return;
//             // }

//             // get reference to the table model
//             var oModel = this.getView().getModel("data");

//             // get the data
//             var aData = oModel.getData();

//             // push the new item
//             aData.items.push({empId: sId, name: sName, phone: sPhone, email: sEmail});

//             // update the model with the new data
//             oModel.setData(aData);

//             // clear the input fields
//             oInputID.setValue("");
//             oInputName.setValue("");
//             oInputPhone.setValue("");
//             oInputEmail.setValue("");
//         }
//     });
// });
