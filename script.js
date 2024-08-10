function init(){
    loadLocal();
    contentBooks();
}
        
function contentBooks(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let bookindex = 0; bookindex < books.length; bookindex++) {
         let bookname = books[bookindex].bookname;
         let author = books[bookindex].author;
         let likes = books[bookindex].likes;
         let heart = books[bookindex].heart;
         let price = books[bookindex].price;
         let publishedYear = books[bookindex].publishedYear;
         let genre = books[bookindex].genre;     
         contentRef.innerHTML += contentTemplate(bookname, author, likes, heart, price, publishedYear, genre, bookindex)
         let commentsRef = document.getElementsByClassName('comments');
         for (let commentindex = 0; commentindex < books[bookindex].comments.length; commentindex++) {
            commentsRef[bookindex].innerHTML += `<tr>
                                                    <th>${books[bookindex].comments[commentindex].user}</th>
                                                    <td>:${books[bookindex].comments[commentindex].comment}</td>
                                                 </tr>`
         }
    }
}

function like(idx) {
    const item = books[idx];
    if (item.liked) {
        item.likes--;
        item.liked = false;
        item.heart = heart[0];
    } else {
        item.likes++; 
        item.liked = true;
        item.heart = heart[1];
    }
    saveLocal();
    loadLocal();
    init();
}

function saveLocal(index) {
    const item = books[index];
    localStorage.setItem("books", JSON.stringify(books));
}


function loadLocal(idx) {
    const item = books[idx];
    let savedBook = localStorage.getItem('books');
    if (savedBook) {books = JSON.parse(savedBook);
    }
}


function addComment(idx) {
    const item = books[idx];
    let input = document.getElementById(`input(${idx})`);
    if (input.value == 0) {
        alert('Bitte Kommentar hinzufügen!')
        return false;
    }
    books[idx].comments.push({user: 'Lars', comment: input.value});
    input.value = "";

    saveLocal();
    init();
}