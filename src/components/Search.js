import React, { useState } from "react";
import { Form, Input } from "semantic-ui-react";

function Search({ onSearch }) {
  const [query, setQuery] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        action={{ icon: "search" }}
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      ></Input>
    </Form>
  );
}

export default Search;
