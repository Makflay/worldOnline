const url = 'http://jsonplaceholder.typicode.com/users';
export async function getUsers(arr) {
    const res = await fetch(url)
    if (res.ok) {
        const json = await res.json();
        for(const key in json) {
            arr.push(json[key])
        }
        return arr
    } else {
        return console.log(`Errr ${res.status}`)
    }
}