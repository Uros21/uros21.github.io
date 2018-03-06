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
        }
        
    });

    $.ajax({
        type: "GET",
        url: "../json/gornjimeni.json",
        dataType: "json",
        success: function (data) {
            napravigornjimeni(data)
        },

        error: function (xhr,status,err) {
            console.log(err);
        }
    });

});

function napraviGaleriju(data) {
    $.each(data, function (indexInArray, valueOfElement) { 
        console.log(valueOfElement);
         
    });
}

function napravigornjimeni(data) {
    var gornjimeni = document.getElementById("gornjiMeni")
    var sadrzaj = ""
    
    for(var i = 0;i<data.length;i++){
        sadrzaj+= `<li>
                     <a href="${data[i].link}" class="${data[i].klasa}">${data[i].naziv}</a>
                   </li>`
    }
    gornjimeni.innerHTML=sadrzaj;
}

