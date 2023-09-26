import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useGameQueryStore from '../state-management/useGameQueryStore';

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const refSearch = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (refSearch.current) {
          setSearchText(refSearch.current.value);
          navigate('/');
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={refSearch}
          borderRadius={20}
          placeholder='Search'
          variant='filled'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
