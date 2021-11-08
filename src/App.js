import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Search from "./components/Search";
import BookList from "./components/BookList";
import { Button, Container, Header } from "semantic-ui-react";
import Books from "./components/Books";
import googleapi from "./api/googleapi";

function App() {
  const [booksInfo, setBooksInfo] = useState([]);
  const [randomBook, setRandomBook] = useState([]);
  const [number, setNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 11));
    setRandomBook(booksInfo[number]);
    setOpen(true);
  };

  const onSearch = async (keyword) => {
    const response = await googleapi.get("/search", {
      params: {
        q: keyword,
      },
    });
    setBooksInfo(response.data.items);
    setDisabled(false);
  };

  if (open === true) {
    return <Books randomBook={randomBook} setOpen={setOpen} open={open} />;
  }
  return (
    <div style={{ marginTop: 20 }}>
      <Container textAlign="center">
        <Header block size="huge">
          Book Recommender
        </Header>
        <br />
        <Search onSearch={onSearch} />
        <br />
        <Button color="blue" disabled={disabled} onClick={randomNumber}>
          Search the books and choose recommended
        </Button>
        <div style={{ marginTop: 20 }} />
        <BookList booksInfo={booksInfo} setBooksInfo={setBooksInfo} />
      </Container>
    </div>
  );
}

export default App;
