const names = ["Olga Luzinskaya  Sergeevna", "Kanaeva Darya Mikhailovna", "Zubenko Mikhail Petrovich"];
const jobTitles = ["Main Nutritionist", "Nutritionist", "Nutritionist"];
const workExperiences = ["10 years", "3 years", "6 years"];
const certifications = ["2019 г. nutrition and health: human microbiom and Autophagy: Research Behind the 2016 Nobel Prize in Physiology or Medicine (Tokyo Tech).","2021 scientific and practical seminar 'Nutritional support for cancer patients' 2021 Healthy heart, healthy vessels (Sechenov University)","2017 'Modern aspects of dietetics and nutritionology' (HSE Almaty).'Sports Nutrition' (KBiF St. Petersburg)."];
const achievements = ["Continuous professional development, participation in master classes, conferences.Publications in scientific journals.Speaking as a speaker at conferences and for the media.Participation in educational and information projects of such companies as Danone Rastishka, Procter&Gamble, Mega Almaty, H&M, etc.","Continuous professional development, participation in master classes, conferences.Publications in scientific journals.Speaking as a speaker at conferences and for the media.Participation in educational and information projects of such companies as Danone Rastishka, Procter&Gamble, Mega Almaty, H&M, etc.","Continuous professional development, participation in master classes, conferences.Publications in scientific journals.Speaking as a speaker at conferences and for the media.Participation in educational and information projects of such companies as Danone Rastishka, Procter&Gamble, Mega Almaty, H&M, etc."];
const teamImages = ["images/person1.jpg", "images/person2.jpg", "images/person3.jpg"];

const teamContainer = document.getElementById('team');

for (let index = 0; index < names.length; index++) {
    const card = document.createElement('div');
    card.className = 'card';
    if (index % 2 === 0) {
        card.classList.add('slide-in-left');
    } else {
        card.classList.add('slide-in-right');
    }
    card.style.marginTop = '20px';

    const cardBody = document.createElement('div');
    if (window.innerWidth < 768) {
        cardBody.className = 'card-body d-flex flex-column';
    } else {
        cardBody.className = 'card-body d-flex ';
    }
    cardBody.style.padding = '0';

    const imageDiv = document.createElement('div');
    imageDiv.style.display = 'flex';
    imageDiv.style.margin = 'auto';
    let image = document.createElement('img');
    image.src = teamImages[index];
    if (window.innerWidth < 768) {
        imageDiv.style.width = "60%";
        image.setAttribute('width', '100%');
    } else {
        imageDiv.style.width = "40%";
        image.setAttribute('width', '100%');
    }
    image.setAttribute('alt', '');
    imageDiv.appendChild(image);

    const infoDiv = document.createElement('div');
    if (window.innerWidth < 768) {
        infoDiv.style.margin = 'auto';
        infoDiv.style.width = "90%";
    } else {
        infoDiv.style.marginLeft = '20px';
        infoDiv.style.marginRight = '20px';
        infoDiv.style.width = "100%";
    }

    const trainerName = document.createElement('h2');
    trainerName.className = 'font-g-bold';
    trainerName.textContent = names[index];

    const jobTitle = document.createElement('h2');
    jobTitle.className = 'font-g-bold';
    jobTitle.innerHTML = 'Job title: <span class="font-g-regular">' + jobTitles[index] + '</span>';

    const workExperience = document.createElement('h2');
    workExperience.className = 'font-g-bold';
    workExperience.innerHTML = 'Work experience: <span class="font-g-regular">' + workExperiences[index] + '</span>';

    const certificationsTitle = document.createElement('h2');
    certificationsTitle.className = 'font-g-bold';
    certificationsTitle.textContent = 'Certifications:';

    const certificationsText = document.createElement('p');
    certificationsText.className = 'fs-5';
    certificationsText.textContent = certifications[index];

    const achievementsTitle = document.createElement('h2');
    achievementsTitle.className = 'font-g-bold';
    achievementsTitle.textContent = 'Achievements:';

    const achievementsText = document.createElement('p');
    achievementsText.className = 'fs-5';
    achievementsText.textContent = achievements[index];

    if (index % 2 == 0) {
        infoDiv.appendChild(trainerName);
        infoDiv.appendChild(jobTitle);
        infoDiv.appendChild(workExperience);
        infoDiv.appendChild(certificationsTitle);
        infoDiv.appendChild(certificationsText);
        infoDiv.appendChild(achievementsTitle);
        infoDiv.appendChild(achievementsText);

        cardBody.appendChild(imageDiv);
        cardBody.appendChild(infoDiv);

        card.appendChild(cardBody);

        teamContainer.appendChild(card);
    } else {
        infoDiv.appendChild(trainerName);
        infoDiv.appendChild(jobTitle);
        infoDiv.appendChild(workExperience);
        infoDiv.appendChild(certificationsTitle);
        infoDiv.appendChild(certificationsText);
        infoDiv.appendChild(achievementsTitle);
        infoDiv.appendChild(achievementsText);

        cardBody.appendChild(infoDiv);
        cardBody.appendChild(imageDiv);

        card.appendChild(cardBody);

        teamContainer.appendChild(card);
    }
}

const styleElement = document.createElement('style');

styleElement.insertAdjacentHTML('beforeend', `

    @keyframes slide-in-left {
        0% {
            transform: translateX(-100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-right {
        0% {
            transform: translateX(100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .slide-in-left {
        animation: slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .slide-in-right {
        animation: slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
`);

document.head.appendChild(styleElement);
