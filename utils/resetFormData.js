import { storeData } from "./storage";

export default async function() {
    
    await storeData('form1answer', {});
    await storeData('form2answer', {});
    await storeData('form3answer', {});
    await storeData('image', {});
    await storeData('form5answer', {});      
}