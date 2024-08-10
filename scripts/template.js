function contentTemplate(bookname, author, likes, liked, price, publishedYear, genre, bookindex){
    
  return`   <div class="book_window max_widht">
            <div class="shadow"><h2>${bookname}</h2></div>
            <div class="shadow bg"><img class="book_img" src="./img/book.png" alt=""></div>
            <div class="space_place">
                <span>${price}€</span> 
                <div class="like">
                <span>${likes}</span> 
                <img class="heart_img" src="./img/notliked.png" alt="">
            </div>
            </div>
            <div class="shadow">
            <table class="table_data">
                <tr>
                    <th>Author</th>
                    <td>:${author}</td>
                </tr>
                <tr>
                    <th>Erscheinungsjahr</th>
                    <td>:${publishedYear}</td>
                </tr>
                <tr>
                    <th>Genre</th>
                    <td>:${genre}</td>
                </tr>
            </table>
            </div>
            <div class="shadow">
            <table class="table_data comments">
                <tr>
                    <th>Kommentare:</th>
                </tr>
            </table>
            </div>
            <div class="comment">
                <textarea class="input" placeholder="Schreibe dein Kommentar ..." name="commentary" id=""></textarea>
                <input class="message_img" type="image" src="./img/send_com.png" value="submit">
            </div>
            </div>
        `
}
