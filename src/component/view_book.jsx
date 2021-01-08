import React from "react";

class ViewBook extends React.Component {
    removeBook = (e) => {
        var books = this.props.ourState.books;
        var newbook = [];
        for (var i = 0; i < books.length; i++) {
            if (e.target.value !== books[i].bookname) {
                newbook.push(books[i]);
            }
        }
        this.props.ourState.books = newbook;
    }

    render(props) {
        var allbook = [];
        var books = this.props.ourState.books;
        for (var i = 0; i < books.length; i++) {
            allbook.push(
                <div className="col s3 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src="./logo192.png" height="200" alt="book-image"></img>
                        </div>
                        <div className="card-content">
                            <p>{books[i].bookname}</p>
                            <p>By {books[i].bookauthor}</p>
                            <p>Price: {books[i].bookprice}</p>
                        </div>
                        <div className="card-action">
                            <button value={books[i].bookname} className="btn" onClick={this.removeBook}>Remove</button>
                        </div>
                    </div>
                </div>
            );
        }
        if (books.length == 0) {
            allbook = <p align="center">No Book Added, Please add!</p>
        }
        return (
            <div>
                <div className="row">
                    {allbook}

                </div>
            </div>
        )
    }
}

export default ViewBook;