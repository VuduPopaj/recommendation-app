import React from "react";
import { Card } from "semantic-ui-react";
import BookCard from "./BookCard";

function BookList({ booksInfo }) {
  return (
    <Card.Group itemsPerRow="4" stackable>
      {booksInfo.map((item, idx) => (
        <BookCard
        key={idx}
          image={item.volumeInfo.imageLinks.thumbnail}
          title={item.volumeInfo.title}
          desc={item.volumeInfo.description}
          publisher={item.volumeInfo.publisher}
          pageCount={item.volumeInfo.pageCount}
          averageRating={item.volumeInfo.averageRating}
          ratingCount={item.volumeInfo.ratingsCount}
        />
      ))}
    </Card.Group>
  );
}

export default BookList;
