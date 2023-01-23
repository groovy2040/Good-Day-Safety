import { Platform } from "react-native"


export default function AppID () {
  //we rely that every phone have this property, if not need refactoring
   return Platform?.__constants?.Serial || false;
}

