let str1 = "Thanks for teaching us";
str =str1.split(" ").join("");

for( let i = 0 ;i < str.length ;i++)
{ 
    let count = 0;
    for( let j = 0 ;j < str.length ;j++)
    {
       
      if( str.charAt(i).toLowerCase() == str.charAt(j).toLowerCase() && i > j  )
      {
        break;
      }
      if( str.charAt(i).toLowerCase() == str.charAt(j).toLowerCase() )
      {
        count++;
      }
    }
    if( count > 0)
    console.log((str.charAt(i).toUpperCase())+ "=" +count );
  }