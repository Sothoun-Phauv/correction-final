const BASE_URL = "https://finalexamapi.herokuapp.com/api/teachers";

function displayProfile(response) {
    let users = response.data;
    for (let user of users) {
        const card = document.createElement('div');
        const pro = document.createElement('div');
        const text = document.createElement('div');
        const names = document.createElement('div');
        const title = document.createElement('div');
        const personalId = document.createElement('div');
        const img = document.createElement('img');
        const firstname = document.createElement('p');
        const lastname = document.createElement('p');
        const position = document.createElement('p');
        const id = document.createElement('span');

        card.classList.add('card');
        pro.classList.add('profile');
        text.classList.add('text');
        names.classList.add('names');
        title.classList.add('title');
        personalId.classList.add('personalId');

        img.src = user.profile;
        pro.appendChild(img);

        firstname.textContent = user.firstname;
        lastname.textContent = user.lastname;
        names.appendChild(firstname);
        names.appendChild(lastname);

        position.textContent = user.position;
        title.appendChild(position);

        id.textContent = user.id;
        personalId.appendChild(id);

        text.appendChild(names);
        text.appendChild(title);
        text.appendChild(personalId);
        card.appendChild(pro);
        card.appendChild(text);

        container.appendChild(card);
    }
}
function requestData() {
    axios
    .get(BASE_URL)
    .then(displayProfile)
}

const container = document.querySelector('.container');
requestData();