export function stringSort(arr, key) {
    arr.sort((a, b) => {
        if(a[key].toLowerCase() > b[key].toLowerCase()) {
            return 1;
        } else if(a[key].toLowerCase() < b[key].toLowerCase()) {
            return -1;
        } else {
            // a === b
            return 0;
        }
    });
    return arr;
}

export function objSort(arr, key, value) {
    arr.sort((a, b) => {
        if(a[key][value].toLowerCase() > b[key][value].toLowerCase()) {
            return 1;
        } else if(a[key][value].toLowerCase() < b[key][value].toLowerCase()) {
            return -1;
        } else {
        // a === b
            return 0;
        }
    });
    return arr;
}
//
export function numberSort(arr, key) {
    arr.sort((a, b) => {
        if(typeof a[key] === 'string' && typeof b[key] === 'string') {
            return a[key].replace(/[^0-9]/g, '') - b[key].replace(/[^0-9]/g, '')
        } else {
            return a[key] - b[key];
        }
    });
    return arr;
}