// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ],
//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller) {
//         "use strict";

//         return Controller.extend("project.controller.View1", {
//             onInit: function () {

//             }
//         });
//     });

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "project/modules/ModuleC"
  ], function(Controller, ModuleC) {
    "use strict";
  
    return Controller.extend("project.controller.View1", {
      onInit: function() {
        // Trigger module loading and execution
        // sap.ui.require(["./modules/ModuleC"], function(ModuleC) {
        //     sap.ui.require(["project/Modules/ModuleC"], function(ModuleC) {
        //   ModuleC.printMessages();
        // });
        console.log("In Iniit");
      },
      
      onLoadModules: function(){
        alert("Hello");
        sap.ui.require(["project/Modules/ModuleC"], function(ModuleC) {
            ModuleC.printMessages();
          });

      }

    });
  });
  

  
