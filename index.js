function showCountries() {
    let xhttpr = new XMLHttpRequest();

    xhttpr.open('GET', 'https://restcountries.com/v2/all', true);

    xhttpr.onload = function () {
        if (xhttpr.status = 200) {
            console.log('SUCCESS');
            let countries = JSON.parse(this.response);
            console.log(countries);
            countries.forEach(country => {
                let countryCard = document.createElement('div');
                const countryCardImage = document.createElement('img');

                countryCard.innerHTML = country.name;
                countryCardImage.src = country.flag;

                countryCard.appendChild(countryCardImage);
                document.getElementById('feed').appendChild(countryCard);
            })
        }
    }

    xhttpr.send();
}