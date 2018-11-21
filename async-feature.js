import request from 'axios';


/** It will export all function by default */
// export default {
//     getList: async () => {
//         const response = await request.get("https://pokeapi.co/api/v2/ability/")
//         let count = (response.data && response.data.count || 'Error ');
//         return count;
//     },

//     getData: () => {
//         return 'Ashok';
//     }
// }

export async function getList() {
    const response = await request.get("https://pokeapi.co/api/v2/ability/")
    let count = (response.data && response.data.count || 'Error ');
    return count;
}

export function getData() {
    return 'Ashok';
}