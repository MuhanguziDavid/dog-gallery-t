import useFetch from "../../hooks/useFetch"
import DogsGallery from '../../components/dogsGallery/DogsGallery'

const DogsPage = () => {
  const { error: galleryError, isLoading: isLoadingGallery, data: dogs } = useFetch('https://dog.ceo/api/breeds/image/random/20')

  return (
    <div className="dogs-page">
      { (galleryError) && <div>{ galleryError }</div> }
      { (isLoadingGallery) && <div>Loading...</div> }
      {/* // { breedList && <BreedList breedList={breedList}/> } */}
      { dogs && <DogsGallery dogs={dogs}/> }
    </div>
  )
}

export default DogsPage
