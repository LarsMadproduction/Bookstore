function init(){
    contentBooks();
}
        



function contentBooks(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let bookindex = 0; bookindex < books.length; bookindex++) {
         let bookname = books[bookindex].bookname;
         let author = books[bookindex].author;
         let likes = books[bookindex].likes;
         let liked = books[bookindex].liked;
         let price = books[bookindex].price;
         let publishedYear = books[bookindex].publishedYear;
         let genre = books[bookindex].genre;     
         contentRef.innerHTML += contentTemplate(bookname, author, likes, liked, price, publishedYear, genre, bookindex)
         const commentsRef = document.getElementsByClassName('comments');
         for (let commentindex = 0; commentindex < books[bookindex].comments.length; commentindex++) {
            commentsRef[bookindex].innerHTML += `<tr>
                                                    <th>${books[bookindex].comments[commentindex].user}</th>
                                                    <td>:${books[bookindex].comments[commentindex].comment}</td>
                                                 </tr>`
         }
    }
}