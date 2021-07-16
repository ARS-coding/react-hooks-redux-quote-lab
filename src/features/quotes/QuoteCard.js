import React from "react";
import { useDispatch } from "react-redux";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";


function QuoteCard(props) {
  
  const dispatch = useDispatch();

  function handleUpvoteClick(event) {
    dispatch(upvoteQuote(event.target.id));
  }

  function handleDownvoteClick(event) {
    dispatch(downvoteQuote(event.target.id));
  }

  function handleRemoveButtonClick(event) {
    // console.log("id", event.target.id)
    dispatch(removeQuote(event.target.id));
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{props.quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={handleUpvoteClick} id={props.quote.id}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleDownvoteClick} id={props.quote.id}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger" onClick={handleRemoveButtonClick} id={props.quote.id}>
              {/* <span aria-hidden="true">&times;</span> */}
              &times;
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
