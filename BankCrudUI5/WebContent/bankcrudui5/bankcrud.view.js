sap.ui.jsview("bankcrudui5.bankcrud", {
 
    /** Specifies the Controller belonging to this View.
    * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
    * @memberOf bankcrudui5.bankcrud
    */
    getControllerName : function() {
        return "bankcrudui5.bankcrud";
    },
 
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
    * Since the Controller is given to this method, its event handlers can be attached right away.
    * @memberOf bankcrudui5.bankcrud
    */
    
    createContent : function(oController) {
       
        
        var oModel = new sap.ui.model.json.JSONModel("model/mock.json", false);
        sap.ui.getCore().setModel(oModel);
        
        var layout = new sap.ui.commons.layout.MatrixLayout({
            id : 'matrix4',
            layoutFixed : false,
            //width : '1000px',
           
        });
       
        var appHeader = new sap.ui.commons.ApplicationHeader('appHeader', {
            //logoSrc : "images/Atumit_45_40.png",
            logoText : "Bank Application",
            displayLogoff : false,
            displayWelcome : true,
            userName : "John Eswin Nizar"
        });
        layout.createRow(appHeader);
        var rPannel = new sap.ui.commons.Panel('rPannel', {
            text : "BankCollection List",
           
        });
       
       
       
        var oTable = new sap.ui.table.DataTable({
            id : "bankTableID",
             title: "Bank CRUD Application",
            width : "100%",
            visibleRowCount: 10,
            selectionMode : sap.ui.table.SelectionMode.Single,
            //setEditable : false,
            rowSelectionChange : function(oEvent) {},
           
             toolbar: new sap.ui.commons.Toolbar({
 
                 items: [
 
                      new sap.ui.commons.Button({
 
                                text: "Create",
 
                                press: function() {
 
                                     oController.Create();
 
                                }
 
                      }),
 
 
 
                      new sap.ui.commons.Button({
 
                                text: "Update",
 
                                press: function() {
 
                                     oController.Update();
 
                                }
 
                      }),
 
                         
 
                      new sap.ui.commons.Button({
 
                                text: "Delete",
 
                                press: function() {
 
                                     oController.Delete();
 
                                }
 
                      }),
 
                         
 
                     ]
 
       })
           
           
                                          
        });
       
        oTable.addColumn(new sap.ui.table.Column({
            label : new sap.ui.commons.Label({
                text : "Bank ID"
            }),
            template : new sap.ui.commons.TextField().bindProperty("value",
                    "bankID"),
            sortProperty : "bankID"
        }));
       
        oTable.addColumn(new sap.ui.table.Column({
            label : new sap.ui.commons.Label({
                text : "Bank Country"
            }),
            template : new sap.ui.commons.TextField().bindProperty("value",
                    "bankCountry"),
            sortProperty : "bankCountry"
        }));
       
        oTable.addColumn(new sap.ui.table.Column({
            label : new sap.ui.commons.Label({
                text : "Bank Name"
            }),
            template : new sap.ui.commons.TextField().bindProperty("value",
                    "bankName"),
            sortProperty : "bankName"
        }));
       
        oTable.addColumn(new sap.ui.table.Column({
            label : new sap.ui.commons.Label({
                text : "Region"
            }),
            template : new sap.ui.commons.TextField().bindProperty("value",
                    "region"),
            sortProperty : "region"
        }));
       
       
        oTable.addColumn(new sap.ui.table.Column({
            label : new sap.ui.commons.Label({
                text : "Street"
            }),
            template : new sap.ui.commons.TextField().bindProperty("value",
                    "street"),
            sortProperty : "street"
        }));
       
        oTable.addColumn(new sap.ui.table.Column({
            label : new sap.ui.commons.Label({
                text : "City"
            }),
            template : new sap.ui.commons.TextField().bindProperty("value",
                    "city"),
            sortProperty : "city"
        }));
       
       
        // Add table to the Panel
        rPannel.addContent(oTable);
        // Add panel to the Layout
        layout.createRow(rPannel);
        // Display Layout
        this.addContent(layout);
        
        oTable.setModel(oModel);
        oTable.bindRows("/BankCollection");
//        oTable.placeAt("content");        
       
    }
})