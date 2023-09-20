import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { Genre } from '../types';

type Props = {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
};

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  if (isLoading) {
    return (
      <List>
        {skeletons.map((skeleton) => (
          <ListItem key={skeleton} marginY={1}>
            <Skeleton height='40px' />
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant='link'
              fontSize='sm'
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
