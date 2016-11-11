$(document).ready(function () {

    // jQuery methods go here...
    var container = $("#content");
    var baseURL = "https://api.lootbox.eu/";
    var json;

    $("#get").click(function () {
        // console.log("test");
         var requestUrl = baseURL + $("#platform").val() + "/" + $("#region").val() + "/" + $("#gamerTag").val() + "/profile";
        // alert(baseURL + $("#platform").val() + "/" + $("#region").val() + "/" + $("#gamerTag").val() + "/profile");
        $.get(requestUrl, function (data, status) {
                $.each(data, function(index, item){
                    $.each(item, function(key, value){
                        container.append("</br>"+ key + ": " + value + "</br>");
                    });
                    //container.append("</br></br>");
                });
            });

        
        
        
            //  function(data, status){
            //      $("#avatar").attr("src", data.data.avatar);

            //      console.log(data.data.avatar);
            //  });
    })
});