
const sales = [
                {item:'PS4 Pro', stock:3, original:399.99},
                {item:'Xbox One X', stock:1, original:499.99, discount:0.1},
                {item:'Nintendo Switch', stock:4, original:299.99},
                {item:'PS2 Console', stock:1, original:299.99, discount:0.8},
                {item:'Nintendo 64', stock:2, original:199.99, discount:0.65}
            ];
            
      sales.map((element)=>
            
           // {if (element.item =="PS4 Pro" || element.item =="Nintendo Switch")
           {if (element.discount == null)
            {  var Total = element.stock * element.original
                var Item=element.item;
                var Stock=element.stock;
                var Original=element.original;
                var Sale = element.original;

              const sales1 = {Item,Stock,Original,Sale,Total} 
              console.log(sales1) 
            
           
            }
             else        
            {var  Sale= (element.original - (element.original*element.discount)) 
                var  Total = element.stock *  Sale             
                { 
                    var Item=element.item;
                    var Stock=element.stock;
                    var Original=element.original;
                    var Discount=element.discount;
                    
    
                    const sales1 = {Item,Stock,Original,Discount,Sale,Total}
                  console.log(sales1) 
             
            

            }     
        } })

    
