let bookList =[]

function save(){
    var isComplete = document.getElementById('bookIsComplete')
    if(isComplete.checked == true){

    }
    
    var id 
    bookList.length !=0 ? bookList.findLast((item) =>id = item.id): id=0
   if(document.getElementById('bookId').value){
    bookList.forEach(value=>{
        if(document.getElementById('bookId').value == value.id){
    value.title=document.getElementById('bookTitle').value,
    value.author=document.getElementById('bookAuthor').value,
    value.year=document.getElementById('bookYear').value
   }
})
document.getElementById('bookId').value= ' '


}

else{
   
    var item ={
        id: id+1,
        title: document.getElementById('bookTitle').value,
        author: document.getElementById('bookAuthor').value,
        year: document.getElementById('bookYear').value
          }
          bookList.push(item)
        }
          localStorage.setItem('listItem',JSON.stringify(bookList))

          showAll();
          document.getElementById('form').reset();

}


function showAll(){
    table1.innerHTML = ``
    bookList = JSON.parse(localStorage.getItem('listItem'))
    bookList.forEach ( (value) => {       
        var table1=document.getElementById('table1')
        table1.innerHTML += `
         <tr>
        <td>${value.id}</td>
        <td>${value.title}</td>
        <td>${value.author}</td>
        <td>${value.year}</td>
        <td>
        <button class="btn btn-sm btn-warning "><i class="fa-solid  fa-check"></i></button>
    </td>
    <td>
        <button class="btn btn-sm btn-success " onclick="edit(${value.id})"><i class="fa-solid fa-pen-to-square"></i></button>
     </td>
     <td> 
        <button class="btn btn-sm btn-danger " onclick ="deletedata(${value.id})"><i class="fa-solid  fa-trash"></i></button>
      </td> 

    </tr>
    `
    })
}
function edit(id){
    bookList =JSON.parse (localStorage.getItem('listItem'))
bookList.forEach((value) =>{
 if(value.id == id){
    document.getElementById('bookId').value=value.id
    document.getElementById('bookTitle').value=value.title
    document.getElementById('bookAuthor').value=value.author
    document.getElementById('bookYear').value=value.year
 }

})
}
function deletedata(id){
    bookList = JSON.parse(localStorage.getItem('listItem'))
    bookList = bookList.filter(value =>{
        return value.id !=id;
    })
    localStorage.setItem('listItem',JSON.stringify(bookList))
    showAll();
    }




