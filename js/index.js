var ObservationModule = (function () {

       var loadDataToTable = function () {

          $('#table').bootstrapTable({
          data: data
        });

       }


   var tableSettings = function(){

      $('.fixed-table-pagination').hide();
      $('.dropdown-toggle').hide();
      $('#table td:nth-child(1)').addClass('filterBYPiller');
      $('#table td:nth-child(3)').css('width','750px');
      $('#table td:nth-child(4)').addClass('filterBYApp');

   }

   var bindUiActions = function(){

      $('#filter1').on("keyup",function() { 
        $("#table td.filterBYPiller:containsIN('" + $(this).val() + "')").parent().show();
        $("#table td.filterBYPiller:not(:containsIN('" + $(this).val() + "'))").parent().hide();
      });

     $('#filter2').on("keyup",function() { 
        $("#table td.filterBYApp:containsIN('" + $(this).val() + "')").parent().show();
        $("#table td.filterBYApp:not(:containsIN('" + $(this).val() + "'))").parent().hide();
    });

   $.extend($.expr[":"], {"containsIN": function(elem, i, match, array){
         return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
         }
        });
   }

   var init = function(){

    bindUiActions();

   }


   return {

     loadDataToTable: loadDataToTable,
     tableSettings: tableSettings,
     init: init

   };


})();


$(function(){

    ObservationModule.loadDataToTable();
    ObservationModule.tableSettings();
    ObservationModule.init();

});
