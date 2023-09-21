import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms} = usePlatforms();

  const plaform = platforms.results.find(p => p.id === id);

  return plaform;
}

export default usePlatform;