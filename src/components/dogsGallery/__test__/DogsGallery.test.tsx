import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DogsGallery from '../DogsGallery';

type DogsGalleryProps = {
  dogs: string[]
}

const dogsMock = [
  "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_275.jpg"
]

const MockDogsGallery = ({ dogs }: DogsGalleryProps) => {
  return (
    <BrowserRouter>
      <DogsGallery dogs={dogs}/>
    </BrowserRouter>
  )
}

describe("DogsGallery", () => {
  it('should render a dog image', async () => {
    render(<MockDogsGallery dogs={dogsMock}/>);
    const dogImageElement = await screen.findByRole("img") as HTMLImageElement
    expect(dogImageElement.src).toContain("https://images.dog.ceo/breeds/terrier-westhighland/n02098286_275.jpg");
  });
})
