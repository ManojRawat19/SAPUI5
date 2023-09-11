sap.ui.define([
    "./ModuleA",
    "./ModuleB"
  ], function(ModuleA, ModuleB) {
    // "use strict";
  
    var ModuleC = {
      printMessages: function() {
        console.log(ModuleA.message); // Accessing ModuleA
        console.log(ModuleB.message); // Accessing ModuleB
      }
    };
  
    return ModuleC;
  });
  