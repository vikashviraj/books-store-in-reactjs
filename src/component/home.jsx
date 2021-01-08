import react from "react";

class Home extends react.Component {
    render(props) {
        var books = this.props.ourState.books;
        books = books.length;
        return (
            <div>
                <div className="custom-card">
                    <p>Total Books <br /><span style={{ color: '#fff' }}>{books}</span></p>

                </div>
            </div>
        )
    }
}

export default Home;