sap.ui.controller("bankcrudui5.bankcrud", {
    Create: function() {
    	// Create a dialog to get the information of the bank to be created
    	var oDialog = new sap.ui.commons.Dialog("Dialog", {
    	    modal: true,
    	closed: function(oControlEvent){
    	  sap.ui.getCore().getElementById('Dialog').destroy();
    	     }
    	  });
    	  oDialog.setTitle("New Bank Collection");
    	  // Create a layout to place the controls in the dialog
    	  var oLayout = new sap.ui.commons.layout.MatrixLayout({
    	columns: 2,
    	width: "100%"
    	  });
    	  // Create text field for the bankCountry
    	  var oTF = new sap.ui.commons.TextField("tbankCountry", {
    	          tooltip: 'Bank Country',
    	          editable: true,
    	          width: '200px',
    	        required: true
    	  });
    	var oLabel = new sap.ui.commons.Label("lbankCountry", {
    	    text: 'Bank Country',
    	   labelFor: oTF
    	  });
    	// Create the first row
    	  oLayout.createRow(oLabel, oTF);
    	  // Create text field for the bankID
    	  oTF = new sap.ui.commons.TextField("tbankID", {
    	tooltip: 'Bank ID',
    	   editable: true,
    	required: true,
    	width: '200px'
    	  });
    	oLabel = new sap.ui.commons.Label("lbankID", {
    	    text: 'Bank ID',
    	labelFor: oTF
    	});
    	  oLayout.createRow(oLabel, oTF);
    	 
    	  oTF = new sap.ui.commons.TextField("tbankName", { 
    	          tooltip: 'Bank Name',
    	             editable: true,
    	          required: true,
    	          width: '200px'
    	  });
    	  oLabel = new sap.ui.commons.Label("lbankName", {
    	   text: 'Bank Name',
    	  labelFor: oTF
    	  });
    	  oLayout.createRow(oLabel, oTF);
    	  oTF = new sap.ui.commons.TextField("tregion", {
    	      tooltip: 'Region Name',
    	          maxLength:3,
    	          editable: true,
    	               width: '200px'
    	  });
    	  // Label for the last name field
    	  oLabel = new sap.ui.commons.Label("lregion", {
    	          text: 'Region Name',
    	          labelFor: oTF
    	  });
    	  // Create the 4th row
    	  oLayout.createRow(oLabel, oTF);
    	  oTF = new sap.ui.commons.TextField("tstreet", {
    	tooltip: 'Street Name',
    	editable: true,
    	width: '200px'
    	});
    	  oLabel = new sap.ui.commons.Label("lstreet", {
    	       text: 'Street Name',
    	     labelFor: oTF
    	  });
    	  oLayout.createRow(oLabel, oTF);
    	  oTF = new sap.ui.commons.TextField("tcity", {
    	     tooltip: 'City Name',
    	     editable: true,
    	       width: '200px'
    	});
    	  oLabel = new sap.ui.commons.Label("lcity", {
    	        text: 'City Name',
    	        labelFor: oTF
    	  });
    	  oLayout.createRow(oLabel, oTF);
    	// Add the layout to the dialog
    	  oDialog.addContent(oLayout);
    	// Add a button to post the bank's data to the odata interface
    	  oDialog.addButton(new sap.ui.commons.Button({text: "Save", press:function(){
    	  // Add a button to post the bank's data to the odata interface
    	 
    	    var bankCountry_var    = sap.ui.getCore().getControl("tbankCountry").getValue(); 
    	         var bankID_var      = sap.ui.getCore().getControl("tbankID").getValue(); 
    	         var bankName_var  = sap.ui.getCore().getControl("tbankName").getValue(); 
    	         var region_var   = sap.ui.getCore().getControl("tregion").getValue(); 
    	         var street_var   = sap.ui.getCore().getControl("tstreet").getValue(); 
    	         var city_var    = sap.ui.getCore().getControl("tcity").getValue(); 
    	         OData.request 
    	         ({  
    	              requestUri:      "http://server_name/sap/opu/odata/sap/Z_TM_BANK_SRV/BankCollection/?$filter=bankCountry eq'AR'",  
    	        	 method: "GET",  
    	                    headers:  
    	                        {       
    	    "X-Requested-With": "XMLHttpRequest", 
    	   "Content-Type": "application/atom+xml",    	    
    	"DataServiceVersion": "2.0",          
    	"X-CSRF-Token":"Fetch"                                 }                    
    	                 },  
    	                 function (data, response) 
    	                 { 
    	     header_xcsrf_token = response.headers['x-csrf-token']; 
    	                  OData.request 
    	                  ({  
    	                       requestUri: 
    	                        "http://server_name/sap/opu/odata/sap/Z_TM_BANK_SRV/BankCollection",  
    	                             method: "POST",  
    	    headers: {   "X-Requested-With": "XMLHttpRequest",                        
    	"Content-Type": "application/atom+xml", 
    	     "DataServiceVersion": "2.0",  
    	"Accept": "application/atom+xml,application/atomsvc+xml,application/xml", 
    	"X-CSRF-Token": header_xcsrf_token    },  
    	                             data:  
    	                                 {  
    	                              bankCountry: bankCountry_var,  
    	                              bankID:bankID_var, 
    	                              bankName:bankName_var, 
    	                              region: region_var, 
    	                              street: street_var, 
    	                              city: city_var, 
    	                      }  
    	                          },
    	                          function (data, response) 
    	                            {  
    	                           document.location.reload(true);
    	                                             $("<div>Returned data " + window.JSON.stringify(data) + "</div>").appendTo($("#MessageDiv")); 
    	                            },  
    	                                   function (err)  
    	                                   { 
    	                                        $("<div>Returned error " + window.JSON.stringify(err.response) + "</div>").appendTo($("#MessageDiv")); 
    	                                   } 
    	                  ); 
    	        },  
    	        function (err)  
    	                       { 
    	                            var request = err.request; // the request that was sent. 
    	                            var response = err.response; // the response that was received. 
    	                            alert("Error in Get -- Request "+request+" Response "+response); 
    	                       } 
    	        );                      
    	  oDialog.close();
    	}}));
    	  oDialog.open();
    	},
    	
    	Update : function() {
    		var oTable = sap.ui.getCore().getElementById('bankTableID');
    		       var i = oTable.getSelectedIndex();
    		       var ServiceURL = "http://server_name/sap/opu/odata/sap/Z_TM_BANK_SRV";
    		       if (i == -1) {
    		               alert("Please Select a row to Update");
    		               return;
    		             }else if(i>=0){

    		  			var selectedRow = oTable.getRows()[i];
    		var selectedId = selectedRow.getCells()[0].getValue();
    		        var selectedCount = selectedRow.getCells()[1].getValue();
    		        OData.read(ServiceURL + "/BankCollection(bankCountry='"
    		+ selectedCount + "',bankID='"
    		+ selectedId + "')",
    		        function(response) {
    		      var oDialogu = new sap.ui.commons.Dialog("Dialogu", {
    		                  modal: true,
    		           closed: function(oControlEvent){
    		          sap.ui.getCore().getElementById('Dialogu').destroy();
    		             }
    		  });
    		      oDialogu.setTitle("Update Bank Collection");
    		var oLayout = new sap.ui.commons.layout.MatrixLayout({
    		            columns: 2,
    		        width: "100%"
    		  });
    		  var oTF = new sap.ui.commons.TextField("tbankCountry", {
    		               tooltip: 'Bank Country',
    		    editable: false,
    		             value:response.bankCountry,
    		          width: '200px',
    		        required: true
    		  });
    		var oLabel = new sap.ui.commons.Label("lbankCountry", {
    		        text: 'Bank Country',
    		      labelFor: oTF
    		  });
    		  oLayout.createRow(oLabel, oTF);
    		   oTF = new sap.ui.commons.TextField("tbankID", {
    		          tooltip: 'Bank ID',
    		         editable: false,
    		          required: true,
    		          width: '200px',
    		      value:response.bankID
    		  });
    		  oLabel = new sap.ui.commons.Label("lbankID", {
    		          text: 'Bank ID',
    		          labelFor: oTF
    		  });
    		         oLayout.createRow(oLabel, oTF);
    		      oTF = new sap.ui.commons.TextField("tbankName", {
    		          tooltip: 'Bank Name',
    		          editable: true,
    		          required: true,
    		          width: '200px',
    		       value:response.bankName
    		  });
    		oLabel = new sap.ui.commons.Label("lbankName", {
    		          text: 'Bank Name',
    		          labelFor: oTF
    		  });
    		  oLayout.createRow(oLabel, oTF);
    		  oTF = new sap.ui.commons.TextField("tregion", {
    		          tooltip: 'Region Name',
    		          maxLength:3,
    		          editable: true,
    		          value:response.region ,
    		          width: '200px'
    		  });
    		  oLabel = new sap.ui.commons.Label("lregion", {
    		        text: 'Region Name',
    		         labelFor: oTF
    		  });
    		 
    		oLayout.createRow(oLabel, oTF);
    		  oTF = new sap.ui.commons.TextField("tstreet", {
    		tooltip: 'Street Name',
    		editable: true,
    		width: '200px',
    		  value:response.street
    		  });
    		  oLabel = new sap.ui.commons.Label("lstreet", {
    		text: 'Street Name',
    		    labelFor: oTF
    		  });
    		  oLayout.createRow(oLabel, oTF);
    		  oTF = new sap.ui.commons.TextField("tcity", {
    		          tooltip: 'City Name',
    		          editable: true,
    		          value:response.city,
    		          width: '200px'
    		  });
    		  oLabel = new sap.ui.commons.Label("lcity", {
    		text: 'City Name',
    		labelFor: oTF
    		  });
    		  oLayout.createRow(oLabel, oTF);
    		  oDialogu.addContent(oLayout);
    		  oDialogu.addButton(new sap.ui.commons.Button({text: "Update", press:function(){
    		  var bankCountry_var    = sap.ui.getCore().getControl("tbankCountry").getValue(); 
    		         var bankID_var      = sap.ui.getCore().getControl("tbankID").getValue(); 
    		         var bankName_var  = sap.ui.getCore().getControl("tbankName").getValue(); 
    		         var region_var   = sap.ui.getCore().getControl("tregion").getValue(); 
    		         var street_var   = sap.ui.getCore().getControl("tstreet").getValue(); 
    		         var city_var    = sap.ui.getCore().getControl("tcity").getValue(); 
    		  OData.request 
    		         ({  
    		  requestUri: 
    		               "http://server_name/sap/opu/odata/sap/Z_TM_BANK_SRV/BankCollection/?$filter=bankCountry eq'AR'",  
    		                    method: "GET",  
    		                    headers:  
    		                        {       
    		"X-Requested-With": "XMLHttpRequest", 
    		"Content-Type": "application/atom+xml", 
    		"DataServiceVersion": "2.0",          
    		"X-CSRF-Token":"Fetch"  
    		                          }                    
    		                 },  
    		                 function (data, response) 
    		                 { 
    		           header_xcsrf_token = response.headers['x-csrf-token']; 
    		                  OData.request 
    		                  ({  
    		                       requestUri: "http://server_name/sap/opu/odata/sap/Z_TM_BANK_SRV/BankCollection(bankCountry='"+ selectedCount + "',bankID='"+ selectedId+ "')",  
    		                             method: "PUT",  
    		                             headers: {  
    		     "X-Requested-With": "XMLHttpRequest",                        
    		"Content-Type": "application/atom+xml", 
    		"DataServiceVersion": "2.0",  
    		  "Accept": "application/atom+xml,application/atomsvc+xml,application/xml", 
    		  "X-CSRF-Token": header_xcsrf_token  
    		  },   data:  
    		    {    bankCountry: bankCountry_var,  
    		      bankID:bankID_var, 
    		       bankName:bankName_var, 
    		       region: region_var, 
    		        street: street_var, 
    		       city: city_var, 
    		}  
    		                          },
    		   function (data, response) 
    		                            {
    		var oSubDialog = new sap.ui.commons.Dialog( {title: "Updated",
    		                           content : [new sap.ui.commons.Label({
    		                           text : "Data Updated Successfully"
    		                           })]});
    		                           oSubDialog.open();
    		                           oSubDialog.addButton(new sap.ui.commons.Button({text: "OK", press:function(){oSubDialog.close();}}));                       
    		                     
    		                                             $("<div>Returned data " + window.JSON.stringify(data) + "</div>").appendTo($("#MessageDiv")); 
    		                                       //      document.location.reload(true);
    		                            },  
    		                                   function (err)  
    		                                   { 
    		                                        $("<div>Returned error " + window.JSON.stringify(err.response) + "</div>").appendTo($("#MessageDiv")); 
    		                                   } 
    		                  ); 
    		        },  
    		   function (err)  
    		{ 
    		   var request = err.request; // the request that was sent. 
    		var response = err.response; // the response that was received. 
    		alert("Error in Get -- Request "+request+" Response "+response); 
    		                       } 
    		        );
    		  oDialogu.close();
    		     }}));
    		  oDialogu.open();    
    		        });
    		       }
    		    },
    		    
    		    Delete : function(oEvent) {
    		         var oTable = sap.ui.getCore().getElementById('bankTableID');
    		  // Retrieve the selected index, i.e., the index of the selected row
    		      var i = oTable.getSelectedIndex();
    		var ServiceURL = "http://server_name/sap/opu/odata/sap/Z_TM_BANK_SRV";
    		        if (i == -1) {
    		               alert("Please Select a row to Delete");
    		               return;
    		             }
    		             else if(i>=0){
    		        var selectedRow = oTable.getRows()[i];
    		        var selectedId = selectedRow.getCells()[0].getValue();
    		        var selectedCount = selectedRow.getCells()[1].getValue();
    		       }
    		     OData.request 
    		        ({  requestUri: "http://server_name/sap/opu/odata/sap/Z_TM_BANK_SRV/BankCollection/?$filter=bankCountry eq'AR'",  
    		                   method: "GET",  
    		                   headers:  
    		                       {       
    		  "X-Requested-With": "XMLHttpRequest", 
    		   "Content-Type": "application/atom+xml", 
    		  "DataServiceVersion": "2.0",          
    		  "X-CSRF-Token":"Fetch"  
    		                         }                    
    		                },
    		                function (data, response) 
    		                {  
    		                       header_xcsrf_token = response.headers['x-csrf-token']; 
    		           OData.request 
    		           ({ 
    		            requestUri: "http://server_name/sap/opu/odata/sap/Z_TM_BANK_SRV/BankCollection(bankCountry='"+ selectedCount + "',bankID='"+ selectedId+ "')",
    		  method: "DELETE",  
    		  headers: {  
    		                    "X-Requested-With": "XMLHttpRequest",                        
    		                    "Content-Type": "application/atom+xml", 
    		                    "DataServiceVersion": "2.0",  
    		                    "X-CSRF-Token": header_xcsrf_token  
    		                         } 
    		                   },  
    		                     function (data, request) 
    		                     { 
    		                    document.location.reload(true);
    		                                 $("<div>Returned data in Delete " + window.JSON.stringify(data) + "</div>").appendTo($("#MessageDiv")); 
    		                      },  
    		                    function (err)  
    		                    { 
    		                                 $("<div>Returned error in Delete " + window.JSON.stringify(err.response) + "</div>").appendTo($("#MessageDiv"));                              
    		                     } 
    		           ); 
    		       }, 
    		         function (err)  
    		             { 
    		                      var request     = err.request;  
    		                      var response = err.response;  
    		                      alert("Error in Get -- Request "+request+" Response "+response); 
    		             } 
    		       );       
    		    }
});  