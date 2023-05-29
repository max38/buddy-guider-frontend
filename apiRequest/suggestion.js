import { post, get } from "./index";

import { decrypt, encrypt } from "../utils/encryption";


export const requestItinerarySuggestion = async (place, days) => {
  const url = "api/guider/suggestion";
  
  const payload = {
    "place": place,
    "start_date": new Date().toISOString(), // "2023-04-22T00:10:00.00Z",
    "days": days
  }
  
  const { data } = await post({ url, body: payload });
  return data;
};

export const getItinerarySuggestion = async (id) => {
    const url = `api/guider/suggestion/${id}`;

    const { data } = await get({ url });
    // console.log(data);
    
    // const decryptedData2 = decrypt("t6dmv2CgTuxFA6mxJfzLhB3M+ScojaoROmjy1mCm9qU=");
    // console.log(decryptedData2);

    // const decryptedData = decrypt(data.data);
    // console.log(decryptedData);
    return data;
}
