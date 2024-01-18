// Importa os dados dos freelancers
const freelancersData = require('./freelancers');

document.addEventListener('DOMContentLoaded', function () {
    const freelancersList = document.getElementById('freelancers-list');

    // Função para renderizar a lista de freelancers
    function renderFreelancers() {
        freelancersList.innerHTML = '';

        freelancersData.forEach(freelancer => {
            const freelancerCard = document.createElement('div');
            freelancerCard.classList.add('freelancer-card');

            const nameElement = document.createElement('h2');
            nameElement.textContent = freelancer.name;

            const skillsElement = document.createElement('p');
            skillsElement.textContent = `Skills: ${freelancer.skills.join(', ')}`;

            const rateElement = document.createElement('p');
            rateElement.textContent = `Valor: R$ ${freelancer.rate.toFixed(2)}/hora`;

            const locationElement = document.createElement('p');
            locationElement.textContent = `Localização: ${freelancer.location}`;

            const availabilityElement = document.createElement('p');
            availabilityElement.textContent = `Horário Disponível: ${freelancer.availability}`;

            freelancerCard.appendChild(nameElement);
            freelancerCard.appendChild(skillsElement);
            freelancerCard.appendChild(rateElement);
            freelancerCard.appendChild(locationElement);
            freelancerCard.appendChild(availabilityElement);

            freelancersList.appendChild(freelancerCard);
        });
    }

    // Inicializar a renderização
    renderFreelancers();
});