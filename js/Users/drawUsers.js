const tableTag = document.querySelector('#usersBody');
export function drawUsers(arr){
    if(tableTag.childNodes.length > 0) {
        console.log('Delete child')
        while (tableTag.firstChild) {
            tableTag.removeChild(tableTag.firstChild);
        }
    }
    arr.map((el, index) => {
        let trTag = document.createElement('tr');

        //Id
        let tdIndex = document.createElement('td');
        tdIndex.textContent = el.id;
        //tdIndex.textContent = index + 1; --> don't save sort
        tdIndex.setAttribute('data-label', 'ID');
        trTag.appendChild(tdIndex);

        //Name
        let tdName = document.createElement('td');
        tdName.textContent = el.name;
        tdName.setAttribute('data-label', 'Name');
        trTag.appendChild(tdName);

        //Username
        let tdUsername = document.createElement('td');
        tdUsername.textContent = el.username;
        tdUsername.setAttribute('data-label', 'Username');
        trTag.appendChild(tdUsername);

        //Email
        let tdEmail = document.createElement('td');
        tdEmail.textContent = el.email;
        tdEmail.setAttribute('data-label', 'Email');
        trTag.appendChild(tdEmail);

        //Website
        let tdWebsite = document.createElement('td');
        tdWebsite.textContent = el.website;
        tdWebsite.setAttribute('data-label', 'Website');
        trTag.appendChild(tdWebsite);

        //Address
        let tdAddress = document.createElement('td');
        let aAddress = document.createElement('a');
        aAddress.textContent = el.address.city;
        aAddress.setAttribute('address', index);
        tdAddress.appendChild(aAddress);
        tdAddress.setAttribute('data-label', 'Address');
        trTag.appendChild(tdAddress);

        //Company
        let tdCompany = document.createElement('td');
        tdCompany.textContent = el.company.name;
        tdCompany.setAttribute('company', index);
        tdCompany.setAttribute('data-label', 'Company');
        trTag.appendChild(tdCompany);

        //Phone
        let tdPhone = document.createElement('td');
        tdPhone.textContent = el.phone;
        tdPhone.setAttribute('data-label', 'Phone');
        trTag.appendChild(tdPhone);

        //Delete
        let tdDel = document.createElement('td');
        let bDel = document.createElement('button');
        bDel.innerHTML = `&#9747;`;
        bDel.setAttribute('del', index);
        tdDel.setAttribute('data-label', 'Delete');
        tdDel.appendChild(bDel);

        trTag.appendChild(tdDel);
        tableTag.appendChild(trTag);
    });
};