import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../types';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import { Link } from 'react-router-dom';

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  const borderWidth = '1px';

  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack marginBottom={3} justifyContent='space-between'>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize='2xl'>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
