var str='';
var schemaname='';
const getschema=()=>{
        var temp2='';
        fetch('http://ec2-13-235-238-26.ap-south-1.compute.amazonaws.com:8080/getSchemas',{
                method:'get' })
        .then(response=>response.json())
        .then(data=>{
                temp2=data;
                var temp='';
                for(var i=0;i<data.length;i++)
                {
                        var para = document.createElement("p");
                
                        var node = document.createTextNode(data[i].schemaname+"------     "+data[i].attributes);
                        var x=document.createElement("input");
                        var child=document.createElement("input");
                        child.setAttribute("type","radio");
                        child.setAttribute("value",data[i].schemaid);
                        child.setAttribute("name","radio");
                       // x.addEventListener("entercredentials",OnRadioStateChange, false);
                        child.schemaid=data[i].schemaid;
                        para.appendChild(child);
                        para.appendChild(node);
                        var element = document.getElementById("Schema");
                        element.appendChild(para);

                }

               var radios = document.querySelectorAll('input[type=radio]');
         radios.forEach(radio => radio.addEventListener('change', ()=>{
            console.log(radio.value)
            var i=0;
            for(i=0;i<temp2.length;i++)
            {
                if(temp2[i].schemaid==radio.value)
                        
                        {
                            schemaname=temp2[i].schemaname;
                            console.log(temp2[i].schemaname)
                                 str=temp2[i].attributes.split(" ");
                                console.log(str)
                                for(var j=0;j<str.length;j++)
                                {


                                        var para=document.createElement("p");
                                        var node1=document.createTextNode(str[j]);
                                        var child=document.createElement("input");
                                        var br=document.createElement("br");
                                        child.setAttribute("id",str[j]);
                                        para.appendChild(br);
                                        para.appendChild(node1);
                                        para.appendChild(child);
                                        var element = document.getElementById("SchemaInput");
                                        element.appendChild(para);
                                }
                        }


            }

           

         }));
                console.log(data)
        })


}

function entercredentials(event){
var temp1='';
console.log(event.target.value)

}
const send_cred_offer=()=>{
    
    console.log(document.getElementById("recipientDid").value,schemaname)
    var temp2='';
        fetch('http://ec2-13-235-238-26.ap-south-1.compute.amazonaws.com:8082/createCredentialOffer',{
                method:'post',
                 headers:{'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTk4MGI1M2JjMDVkNzI3YWQzYjQ2NGEiLCJpYXQiOjE1ODcwMjI2NzZ9.vlpdIPpO4qhB88K31N5TLWh1HmqREb7auWHFhabLJ34'},
                body:JSON.stringify({
                    recipientDid:document.getElementById("recipientDid").value,
                        name:schemaname,
                        did:'YSwPuqo1xj4ZqAizB9ooVf'
                        //enter data when needed
                })

                 })
        .then(response1=>response1.json())
        .then(data1=>{
               
                console.log(data1)
               // localStorage.setItem("did",data1.did);
                //console.log(localStorage.getItem("did"))
        })

}
const queryshooter=()=>{
        var json=new Object();
        json.recipientDid="did";
         json.credValues=new Object();
        for(var i=0;i<str.length;i++)
        {
            console.log(document.getElementById(str[i]).value)
            json.credValues[str[i]]=new Object();
            json.credValues[str[i]].raw=document.getElementById(str[i]).value;
            json.credValues[str[i]].encoded=Math.floor(100000 + Math.random() * 900000);
            
        }
        console.log(json)


}

/*{
    "recipientDid": "FL3kiy3nYa8WdpzKmVUJFN",
    "credValues": {
        "name": {"raw": "Lota", "encoded": "12344"},
        "gender": {"raw": "M", "encoded": "23455"},
        "dob": {"raw": "4-7-1998", "encoded": "34565"},
        "roll": {"raw": "1230", "encoded": "45679"},
        "age": {"raw": "21", "encoded": "21"}
    }
}*/