$(document).ready(function() {

    $('#search').click(function() {
        const results = $('#resultsPage');
        results.empty();
        $.ajax({
            type: "GET",
            url: 'http://localhost:3000/api/search?query='+$('#searchBar').val(),
            success: function(data)
            {
                
                $.each(data, function(index, itemData) {
                    console.log("Data is "+JSON.stringify(data));
                    console.log("Loggin");
                    results.append('<div class="col-md-6" id="resultCard"><div class="card" style="width: 100%;"><img src="'+itemData.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+itemData.title+'</h5><p class="card-text">'+itemData.description+'</p></div></div></div>');
                });

            },
            error: function (request, status, error) {

            }
        });

    });

});
