import CryptoJS from 'crypto-js';
// import { pad, unpad } from 'crypto-js/pad-iso10126';
import { ENCRYPTION_CLIENT_KEY, ENCRYPTION_SERVER_KEY } from './config';


export const decrypt = (data) => {
    const keyUtf8 = CryptoJS.enc.Utf8.parse(ENCRYPTION_SERVER_KEY.replace('34', 'ww'));
    const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: CryptoJS.enc.Base64.parse(data) },
        keyUtf8,
        { mode: CryptoJS.mode.ECB }
    );

    console.log(decrypted.toString());
    const decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
    console.log(decryptedData);
    const decryptedDataJson = JSON.parse(decryptedData);
    return decryptedDataJson;
}

// export const decrypt = (enc) => {
//     const decrypted = CryptoJS.AES.decrypt(
//       { ciphertext: CryptoJS.enc.Base64.parse(enc) },
//       ENCRYPTION_SERVER_KEY.replace('34', 'ww'),
//       { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.NoPadding }
//     );
//     // const unpadded = unpad(decrypted, { padding: CryptoJS.pad.Iso10126 });
//     console.log(decrypted);
//     return CryptoJS.enc.Utf8.stringify(decrypted);
//   }

export const encrypt = (data) => {
    const keyUtf8 = CryptoJS.enc.Utf8.parse(ENCRYPTION_CLIENT_KEY.replace('34', 'xx'));
    // const keyUtf8 = CryptoJS.enc.Utf8.parse(ENCRYPTION_SERVER_KEY.replace('34', 'ww'));
    const encrypted = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        keyUtf8,
        { mode: CryptoJS.mode.ECB }
    );

    const encryptedData = encrypted.toString();
    return encryptedData;
}
