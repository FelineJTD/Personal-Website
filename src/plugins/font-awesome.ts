import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "../libs/FontAwesomeIcon.vue";
 
library.add(fas, faLinkedin, faInstagram, faEnvelope);
 
export { FontAwesomeIcon };