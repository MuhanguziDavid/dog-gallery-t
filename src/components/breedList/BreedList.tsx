import { useNavigate } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export interface BreedListProps {
  breedList: {
    [key: string]: string[]
  }
}

// This is a bit of a mess, but it works :)
// I'm sure there's a better way to do this.
// Anyway, it gets a list of breeds and sub-breeds from the API and displays
// them in a dropdown menu if there are sub-breeds, or just a link if there aren't.
// 
// Example of what the API returns:
// breedlist = {
//    "african": [],
//    "bulldog": [
//        "boston",
//        "french"
//    ],
// }
const BreedList: React.FC<BreedListProps> = ({ breedList }) => {
  const navigate = useNavigate()

  const handleClick = (breed: string, subBreed: string | null) => {
    subBreed ? navigate(`/breed/${breed}/${subBreed}`) : navigate(`/breed/${breed}`)
  }

  return (
    <div className="breed-list">
      <h2>{breedList && Object.keys(breedList).length === 1 ? 'Breed' : 'Breeds'}</h2>
      {breedList && Object.keys(breedList).map((key, index) => (
        <div className="breed" data-testid={`breed-item-${index}`} key={index}>
          {breedList[key].length > 0 ? (
            <Dropdown className="dropdown-group" as={ButtonGroup}>
              <div className="button-as-link" onClick={() => handleClick(key, null)}>{key}</div>
        
              <Dropdown.Toggle split variant="link" id="dropdown-split-basic" className="dropdown-toggle-as-link" data-testid={`dropdown-item-${index}`} />
        
              <Dropdown.Menu>
                {breedList[key].map((subBreed, index) => (
                  <Dropdown.Item key={index}>
                    <div className="button-as-link" onClick={() => handleClick(key, subBreed)}>{subBreed}</div>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <div className="button-as-link" onClick={() => handleClick(key, null)}>{key}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default BreedList;
