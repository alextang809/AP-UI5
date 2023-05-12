// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel"
// ], function(Controller, JSONModel) {
//     "use strict";

//     return Controller.extend("testproject1.controller.View1", {

//         onInit: function() {
//             //initialize an empty JSON model for the table
//             this.getView().setModel(new JSONModel({items:[]}));
//         },

//         onAddToTable: function() {
//             // get reference to the input field
//             var oInput = this.byId("inputField");

//             // get the input value
//             var sValue = oInput.getValue();

//             // get reference to the table model
//             var oModel = this.getView().getModel();

//             // get the data
//             var aData = oModel.getData();

//             // push the new item
//             aData.items.push({text: sValue});

//             // update the model with the new data
//             oModel.setData(aData);

//             // clear the input field
//             oInput.setValue("");
//         }
//     });
// });
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/MessageType",
    "sap/ui/core/MessageManager"
], function(Controller, JSONModel, MessageType, MessageManager) {
    "use strict";

    return Controller.extend("testproject1.controller.View1", {

        onInit: function() {
            //initialize an empty JSON model for the table
            this.getView().setModel(new JSONModel({items:[]}));

            //initialize the message manager and register the view
            this.oMessageManager = new MessageManager();
            sap.ui.getCore().setMessageManager(this.oMessageManager);
            this.oMessageManager.registerObject(this.getView(), true);
        },

        onAddToTable: function() {
            // clear previous messages
            this.oMessageManager.removeAllMessages();

            // get references to the input fields
            var oInputID = this.byId("inputFieldID");
            var oInputName = this.byId("inputFieldName");
            var oInputPhone = this.byId("inputFieldPhone");
            var oInputEmail = this.byId("inputFieldEmail");

            // get the input values
            var sId = oInputID.getValue();
            var sName = oInputName.getValue();
            var sPhone = oInputPhone.getValue();
            var sEmail = oInputEmail.getValue();

            // validate the input values
            if (!sId) {
                this.oMessageManager.addMessages(
                    new Message({
                        message: "A valid Employee ID is required",
                        type: MessageType.Error,
                        target: "/inputFieldID/value"
                    })
                );
                return;
            }

            if (!sName) {
                this.oMessageManager.addMessages(
                    new Message({
                        message: "A valid name is required",
                        type: MessageType.Error,
                        target: "/inputFieldName/value"
                    })
                );
                return;
            }

            var phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
            if (!sPhone || !phoneRegex.test(sPhone)) {
                this.oMessageManager.addMessages(
                    new Message({
                        message: "A valid phone number is required",
                        type: MessageType.Error,
                        target: "/inputFieldPhone/value"
                    })
                );
                return;
            }

            var emailRegex = /^\S+@\S+\.\S+$/; // simple check, can be more comprehensive
            if (!sEmail || !emailRegex.test(sEmail)) {
                this.oMessageManager.addMessages(
                    new Message({
                        message: "A valid email address is required",
                        type: MessageType.Error,
                        target: "/inputFieldEmail/value"
                    })
                );
                return;
            }

            // get reference to the table model
            var oModel = this.getView().getModel();

            // get the data
            var aData = oModel.getData();

            // push the new item
            aData.items.push({empId: sId, name: sName, phone: sPhone, email: sEmail});

            // update the model with the new data
            oModel.setData(aData);

            // clear the input fields
            oInputID.setValue("");
            oInputName.setValue("");
            oInputPhone.setValue("");
            oInputEmail.setValue("");
        }
    });
});
