import React from "react";
import { Button, Card, Popup } from "semantic-ui-react";

function BookCard({
  image,
  title,
  description,
  publisher,
  pageCount,
  averageRating,
  ratingCount,
}) {
  return (
    <Card fluid centered color="blue">
      <Card.Content extra>
        <img alt="pic" src={image} style={{ height: 200 }} />
      </Card.Content>
      <Card.Content style={{ overflow: "auto", maxHeight: 200 }}>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Popup
          on="click"
          content={
            <Card fluid>
              <Card.Content textAlign="center">
                <Card.Header>Publisher: {publisher}</Card.Header>
                <Card.Description>Page Count: {pageCount}</Card.Description>
                <Card.Description>
                  Average Rating: {averageRating}
                </Card.Description>
                <Card.Description>
                  Ratings Count: {ratingCount}
                </Card.Description>
              </Card.Content>
            </Card>
          }
          trigger={<Button color="blue" fluid compact content="Details" />}
        />
      </Card.Content>
    </Card>
  );
}

export default BookCard;
