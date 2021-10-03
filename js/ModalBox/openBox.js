export function openBox(arr, index, key) {
    //console.log(`modalBox index: ${index}, key: ${key}`);
    const h3Title = document.querySelector('.modal-title');
    h3Title.textContent = `${arr[index].name}'s ${key}:`;
    const divDescription = document.querySelector('.modal-description');
    if(divDescription.childNodes.length > 0) {
        console.log('Delete child divDescription')
        while (divDescription.firstChild) {
            divDescription.removeChild(divDescription.firstChild);
        }
    }
    for(const i in arr[index][key]){
        const span = document.createElement('span');
        const br = document.createElement('br');
        if(typeof arr[index][key][i] === 'object' && arr[index][key][i] !== null) {
            //Check value === 'object'
            const geoSpan = document.createElement('span');
            const geoBr = document.createElement('br');
            geoSpan.textContent = `${i}:`;
            divDescription.appendChild(geoSpan);
            divDescription.appendChild(geoBr);
            for(let j in arr[index][key][i]) {
                const spanj = document.createElement('span');
                const brj = document.createElement('br');
                spanj.textContent = `-${j}: ${arr[index][key][i][j]}`;
                divDescription.appendChild(spanj);
                divDescription.appendChild(brj);
            }
        } else {
            span.textContent = `${i}: ${arr[index][key][i]}`;
            divDescription.appendChild(span);
            divDescription.appendChild(br);
        }
    }
}