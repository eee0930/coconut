import { useEffect } from "react";

function ViewAlbum() {
  useEffect(() => window.scrollTo(0, 0), []);
  return null;
}

export default ViewAlbum;