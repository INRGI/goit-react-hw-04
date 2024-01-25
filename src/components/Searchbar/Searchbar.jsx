import { IoSearchSharp } from "react-icons/io5";
import { useState } from 'react';
import { Form, FormButton, Header, Input, Label } from './Searchbar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = event => setSearchName(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const trimmedSearchName = searchName.trim();
    setSearchName(trimmedSearchName);
    onSubmit(trimmedSearchName);
    event.target.reset();
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <FormButton type="submit">
          <IoSearchSharp size={24}/>
          <Label>Search</Label>
        </FormButton>

        <Input
          value={searchName}
          name="searchName"
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
};

export default SearchBar;

