import React from 'react';

const Changer = (props) => {

    const handleShelfChange = (event) => {
        event.preventDefault()
        if(event.target.value === 'Delete'){
            props.handleDelete(props.bookTitle)
        }else{
            props.handleShelfChange(props.bookTitle, event.target.value);
        }
    }

    return(
        <div className="book-shelf-changer">
            <select onChange={handleShelfChange} value={props.category}>
            <option value="move" disabled>Move to...</option>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Want to Read">Want to Read</option>
            <option value="Read">Read</option>
            <option value="Delete">Delete</option>
            </select>
        </div>
    )
}

export default Changer;