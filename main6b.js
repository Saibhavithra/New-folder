
//let bookList = []
//let bookList1 = []
function save(){
    //this function will save the form fields into local storage
    // calls the showAll function

    var isComplete = document.getElementById('bookIsComplete')
    
    if(isComplete.checked == true){
        let bookList1 = JSON.parse(localStorage.getItem('listItem1')) ?? []
        var id
        bookList1.length !=0 ? bookList1.findLast((item) => id = item.id) : id = 0
        
        if(document.getElementById('bookId').value){
            bookList1.forEach(value=>{
                if(document.getElementById('bookId').value == value.id){
                    value.title = document.getElementById('bookTitle').value,
                    value.author = document.getElementById('bookAuthor').value,
                    value.year = document.getElementById('bookYear').value
                    //value.isComplete = 1
                }
            })
            //document.getElementById('bookId').value = ''
        }
        else{
            var item = {
                id : id+1,
                title : document.getElementById('bookTitle').value,
                author : document.getElementById('bookAuthor').value,
                year : document.getElementById('bookYear').value
                //isComplete : 1
            }
            bookList1.push(item)
    
        }
        
        localStorage.setItem('listItem1', JSON.stringify(bookList1))

    }

    else{
        let bookList = JSON.parse(localStorage.getItem('listItem')) ?? []
        var id
        bookList.length !=0 ? bookList.findLast((item) => id = item.id) : id = 0
        
        if(document.getElementById('bookId').value){
            bookList.forEach(value=>{
                if(document.getElementById('bookId').value == value.id){
                    value.title = document.getElementById('bookTitle').value,
                    value.author = document.getElementById('bookAuthor').value,
                    value.year = document.getElementById('bookYear').value
                    //value.isComplete = 0
                }
            })
            document.getElementById('bookId').value = ''
        }
        else{
            var item = {
                id : id+100,
                title : document.getElementById('bookTitle').value,
                author : document.getElementById('bookAuthor').value,
                year : document.getElementById('bookYear').value
                //isComplete : 0
            }
            bookList.push(item)
    
        }
        
        localStorage.setItem('listItem', JSON.stringify(bookList))
    }
   
    showAll();
    document.getElementById('form').reset();
}

function showAll(){
    
    table1.innerHTML = ``
    bookList = JSON.parse(localStorage.getItem('listItem')) ?? []
    bookList.forEach( (value) =>{
        var table1 = document.getElementById('table1')

        table1.innerHTML += `
    <tr>
        <td>${value.id}</td>
        <td>${value.title}</td>
        <td>${value.author}</td>
        <td>${value.year}</td>
        <td>
            <button class="btn btn-sm btn-warning"><i class="fa-solid fa-check"></i></button>
        </td>
        <td>
            <button class="btn btn-sm btn-success" onclick="edit(${value.id})"><i class="fa-solid fa-pen-to-square"></i></button>
        </td>
        <td>
            <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})"><i class="fa-solid fa-trash"></i></button>
        </td>
    </tr>

    `
   
    }) 

    
    table2.innerHTML = ``
    bookList1 = JSON.parse(localStorage.getItem('listItem1')) ?? [] 
    bookList1.forEach( (value) =>{
        var table2 = document.getElementById('table2')
        table2.innerHTML += `
    <tr>
        <td>${value.id}</td>
        <td>${value.title}</td>
        <td>${value.author}</td>
        <td>${value.year}</td>
        <td>
            <button class="btn btn-sm btn-warning"><i class="fa-solid fa-check"></i></button>
        </td>
        <td>
            <button class="btn btn-sm btn-success" onclick="edit1(${value.id})"><i class="fa-solid fa-pen-to-square"></i></button>
        </td>
        <td>
            <button class="btn btn-sm btn-danger" onclick="removeData1(${value.id})"><i class="fa-solid fa-trash"></i></button>
        </td>
    </tr>

    `
    
    })
    
}

function edit(id){
    bookList = JSON.parse(localStorage.getItem('listItem'))
    bookList.forEach((value)=>{
        if(value.id == id){
            document.getElementById('bookId').value = value.id
            document.getElementById('bookTitle').value = value.title
            document.getElementById('bookAuthor').value = value.author
            document.getElementById('bookYear').value = value.year
        }
    })
}

function removeData(id){
    bookList = JSON.parse(localStorage.getItem('listItem'))
    bookList = bookList.filter(value=>{
        return value.id != id;
    })
    localStorage.setItem('listItem', JSON.stringify(bookList))
    showAll();
}

function edit1(id){
    bookList1 = JSON.parse(localStorage.getItem('listItem1'))
    let bookIsComplete = document.getElementById('bookIsComplete');
    bookIsComplete.checked= true;
    bookList1.forEach((value)=>{
        if(value.id == id){
            document.getElementById('bookId').value = value.id
            document.getElementById('bookTitle').value = value.title
            document.getElementById('bookAuthor').value = value.author
            document.getElementById('bookYear').value = value.year
           
        }
    })
}

function removeData1(id){
    bookList1 = JSON.parse(localStorage.getItem('listItem1'))
    bookList1 = bookList1.filter(value=>{
        return value.id != id;
    })
    localStorage.setItem('listItem1', JSON.stringify(bookList1))
    showAll();
}