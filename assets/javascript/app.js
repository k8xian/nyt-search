

    var startDate = 19000101;
    var endDate = 20180704 
    var keyword = "";
    var numberOf = 10;
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$( document ).ready(function() {
    console.log("I'm ready!");

    console.log(keyword);
    console.log(startDate);
    console.log(endDate);
    console.log(numberOf);


    $("#clearButton").on("click", function(event) {
        event.preventDefault();
        startDate = 19000101;
        endDate = 20180407 
        keyword = "";
        numberOf = 10;
        $("#articlesGoHere").empty();
        url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    });


    $("#submitButton").on("click", function(event) {
        event.preventDefault();
        console.log("You hit submit!");

        keyword = $("#searchTerm").val();
        startDate = $('#startYear').val();
        endDate = $("#endYear").val();
        numberOf = $("#numRecords").val();

       // var limit = '&limit=' + numberOf;
       // console.log(limit);
       var startDate = 19000101;
       var endDate = 20180704
       var numberOf = 10;
       
        url += '?' + $.param({
          'api-key': "b14ddadd671848b8af670577089ce376",
          'q': keyword,
          'begin_date': startDate,
          'end_date': endDate
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).then(function (result) {
            console.log(url);
            for (var i = 0; i <= numberOf; i++) {
             //   console.log(JSON.stringify(result.docs[i].web_url) + JSON.stringify(result[i].docs[i].byline.original))
                // var panelId = "panel" + [i];
                // console.log(panelId);
                // var panelSelector = '"#' + panelId + '"'
                // console.log(panelSelector);

                var articleTitle = result.response.docs[i].headline.main;
                console.log(articleTitle);

                articleNum = parseInt(i + 1);

                var byline = result.response.docs[i].byline.original;
                console.log(byline);

                var a = $("<div>");
                //create a panel
                a.addClass("panel");
                //append content to title
                $(a).append('<h3><span class="badge badge-secondary">'+ articleNum +'</span> ' + articleTitle + '</h3>'
                + '<h5>By:'+byline+'<h5/>'
                );
                
                // Added the button to where it belongs
                $("#articlesGoHere").append(a);

            }

            console.log(result);
        }).fail(function (err) {
            throw err;
        });


});



        
    });
