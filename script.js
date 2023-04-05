


function transfert(){
    var json='{"Etat":1,"Satelite":0}';
    let data=new File([""],"data.json");
    //const link = document.createElement("a");
    //link.href = URL.createObjectURL(data);
    //link.download = "data.json";
    //link.click();
    // URL.revokeObjectURL(link.href);
    data=JSON.parse(json);
    document.getElementById('data').innerHTML=data.Etat+" "+data.Satelite
    window.location.href = "server.php?data=" + json;
};
