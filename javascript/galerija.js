$(document).ready(function () {
  $.ajax({
      type: "GET",
      url: "../json/galerija.json",
      dataType: "json",
      success: function (data) {
          napraviGaleriju(data)            
      },

      error: function (xhr,status,err) {
          console.log(err);
      },

      success: function(data)
{
var ispisslika="";
for(var i in data)
{
ispisslika+= "<a href='"+data[i].slika+"'><img src='"+data[i].slika+"' alt='"+data[i].alt+"'></a>";
}

$("#galerija").html(ispisslika);
}
});

$("#galerija a").vanillabox();
      
  });


  