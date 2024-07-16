import ProgressBar from "react-bootstrap/ProgressBar";
function Progressbar(prop) {
  const { scale } = prop;
  return <ProgressBar now={scale} />;
}

export default Progressbar;