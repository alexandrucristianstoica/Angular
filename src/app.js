import { IconButton } from "./components/icon-button.js";
import { Badge } from "./components/badge.js";
import { Image } from "./components/image.js";
const button = new IconButton("done");
button.append(document.body);
const badge = new Badge("10");
badge.append(document.body);
const image = new Image("75", "100");
image.append(document.body);
