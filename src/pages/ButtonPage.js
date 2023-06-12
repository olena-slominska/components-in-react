import Button from "../components/Button";
import { GoBell, GoClippy, GoCloudDownload } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
  };

  return (
    <div className="App">
      <div>
        <Button
          className="mb-4"
          primary
          outline
          onClick={handleClick} >
          <GoBell />
          Click here!</Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoCloudDownload />
          Buy now!</Button>
      </div>
      <div>
        <Button success rounded>
          <GoClippy />
          See Deal!</Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger>Here are Ads!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
