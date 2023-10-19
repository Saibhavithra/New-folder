let counter=0;
let str = 'Thanks for teaching us';
for(let i=0;i<str.length;i++)
{
    for(let j=0;j<str.length;j++)
{ if((str.charAt(i) != (str.charAt(j))) && ((str.charAt(i).toUpperCase()) != (str.charAt(j))) && ((str.charAt(i).toLowerCase()) != (str.charAt(j))) ) 
    {
     continue;
    }           
counter++;
}
console.log((str.charAt(i)+"=" + counter));
counter =0;
}



