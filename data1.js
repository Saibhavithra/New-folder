
    function getData(){
        $.ajax({
            url:'https://gorest.co.in/public/v2/users',
            dataType:'json',
            type:'GET',
            data:{
                key:'value'
            },
            success:data=>{
                console.log(data);
                let tableData="";
                data.map((values)=>{
                    tableData +=`<tr>
                    <td>${values.id}</td>
                    <td>${values.name}</td>
                    <td>${values.email}</td>
                    <td>${values.gender}</td>
                    <td>${values.status}</td>
                    </tr>
                    `;     
                });
                document.getElementById("table1").
                innerHTML+=tableData;
                 
            },
            error:err=>{
                console.log(err)
            }
        })
    }