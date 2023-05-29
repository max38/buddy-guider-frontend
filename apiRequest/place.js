import { post, get } from "./index";


export const getPlaceInformation = async (place_slug) => {
    const url = `api/place-detail/${place_slug}`;
    
    const { data } = await get({ url });
    return data;
};