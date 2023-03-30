


function transfert(){
    const link = document.createElement("a");
    var json='{"Etat":1,"Satelite":0}';
    let data=new File([""],"data.json");
    link.href = URL.createObjectURL(data);
    link.download = "data.json";
    link.click();
    URL.revokeObjectURL(link.href);
    data=JSON.parse(json);
    document.getElementById('data').innerHTML+=data.Etat,data.Satelite
};
