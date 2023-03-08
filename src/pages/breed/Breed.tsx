import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import DogsGallery from '../../components/dogsGallery/DogsGallery'
import BreedList from '../../components/breedList/BreedList'

const Breed = () => {
  const { breed, subBreed } = useParams();
  const { error, isLoading, data: dogs } = useFetch(
    subBreed 
    ? `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/20`
    : `https://dog.ceo/api/breed/${breed}/images/random/20`
  );

  return (
    <div className="dogs-page">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { breed && <BreedList breedList={subBreed ? {[`${breed}-${subBreed}`]: []} : {[breed]: []}}/> }
      { dogs && <DogsGallery dogs={dogs}/> }
    </div>
  )
}

export default Breed
