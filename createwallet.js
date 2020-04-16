const createwallet=()=>{
        //console.log("uhugdo")
        var name=document.getElementById("fname").value;
        console.log(name)
         
         /*localStorage.setItem("fname","Smith");
         console.log(localStorage.getItem("fname"))*/
// Retrieve
//document.getElementById("result").innerHTML = localStorage.lastname;
       fetch('http://ec2-13-235-238-26.ap-south-1.compute.amazonaws.com:8080/createWallet',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                        name:name,//enter data when needed
                })
        })
        .then(response=>response.json())
        .then(data=>{

                console.log(data.token)
                localStorage.setItem("token",data.token);
                console.log(localStorage.getItem("token"))
                fetch('http://ec2-13-235-238-26.ap-south-1.compute.amazonaws.com:8080/createDid',{
                method:'post',
                headers:{'Content-Type':'application/json',
                        'Authorization':data.token },
                body:JSON.stringify({
                        name:name,
                        role:'User'//enter data when needed
                })
        })
        .then(response1=>response1.json())
        .then(data1=>{
               
                console.log(data1)
                localStorage.setItem("did",data1.did);
                console.log(localStorage.getItem("did"))
        })
        })

}