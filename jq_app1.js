jQuery.ajax({
    type: 'GET',

    url: 'http://127.0.0.1:8080/data.json',
    dataType: 'json',

    success: function(studentData) {

        var col = [];
        for (var i = 0; i < studentData.length; i++) {
            for (var key in studentData[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

 
        var table = document.createElement("table");
        table.setAttribute("id", "myTable");
        var thead = table.appendChild(document.createElement('thead'))


        var tr = thead.insertRow(-1); 

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th"); 
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

     
        var tbody = table.appendChild(document.createElement('tbody'))
        for (var k = 1; k <= 100; k++) {
            for (var i = 0; i < studentData.length; i++) {
                tr = tbody.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = studentData[i][col[j]] + ' ' + k;

                }
            }
        }

       
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        show(10);
    }
});

function show (max) {
    var $table = $('#myTable'), $rows = $table.find('tbody tr');
    //min = min ? min - 1 : 0;
    max = max ? max : $rows.length;
    $rows.hide().slice(0, max).show();
    return false;    
}

	jQuery(document).ready(function(){
			  	$("#myInput").on("keyup", function() {
			    var value = $(this).val().toLowerCase();

			    $("#myTable tbody").filter(function() {
			      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

			    });
			  });
			});

/*$('#limit').bind('change', function () {
    show(0, this.value);
});*/