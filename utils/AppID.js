import { Platform } from "react-native"


export default function AppID () {
   return Platform?.__constants?.Serial || false;
}

