import React from "react";

class AddBook extends React.Component {
    addBooks = () => {
        var name = document.getElementById('bookname').value;
        var author = document.getElementById('bookauthor').value;
        var price = document.getElementById('bookprice').value;

        var book = this.props.ourState.books;
        book.push({ bookname: name, bookauthor: author, bookprice: price });
        this.setState({
            books: book
        });
        document.getElementById('alert').style.display = 'block';
        setInterval(() => {
            document.getElementById('alert').style.display = 'none';
        }, 1000)
        document.getElementById('bookname').value = '';
        document.getElementById('bookauthor').value = '';
        document.getElementById('bookprice').value = '';

    }
    render(props) {
        return (
            <div className="row add-form">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Add Book</span>
                            <input type="text" className="validate" id="bookname" placeholder="Enter book name"></input>
                            <input type="text" className="validate" id="bookauthor" placeholder="Enter book Author"></input>
                            <input type="number" className="validate" id="bookprice" placeholder="Enter book Price"></input>
                        </div>
                        <div className="card-action">
                            <button className="btn" style={{ marginRight: '10px' }} onClick={this.addBooks}>Add Book</button>
                            <button className="btn">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBook;