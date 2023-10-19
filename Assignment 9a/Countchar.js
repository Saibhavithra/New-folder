let counter=0;
let str = 'Thanks for teaching us';
for(let i=0;i<str.length;i++)
{
    for(let j=0;j<str.length;j++)
{ if(((str.charAt(i).toUpperCase()) != (str.charAt(j))) && ((str.charAt(i).toLowerCase()) != (str.charAt(j))) ) 
    {
     continue;
    }           
counter++;
}
let s = str.charAt(i);
if (s != " ")
{
console.log((str.charAt(i)+"=" + counter+ s));
counter =0;
}
}
