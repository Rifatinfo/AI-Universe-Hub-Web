const loadAiDetails = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const data = await res.json();
        const aiDetails = data.data;
        console.log('aiDetails:', aiDetails);
        displayAiDetails(aiDetails);
    } catch (error) {
        console.error('Error fetching AI details:', error);
    }
}

const displayAiDetails = aiDetails => {
       const aiInformationDetails = document.getElementById('ai-information-details');
        aiDetails.tools.forEach(aiDetail => {
            console.log(aiDetail);
            // 2 create a div 
            const aiDetailCard = document.createElement('div');
            aiDetailCard.classList = `card bg-base-100 p-4 shadow-xl`;
            // 3 set inner HTML 
            aiDetailCard.innerHTML = `
            <figure>
                  <img
                    src="${aiDetail.image}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title"><span>Feature : </span> </h2>
                  <div class="mt-2">
                 <ol>
                    <li>${aiDetail.features[0]}</li>
                    <li>${aiDetail.features[1]}</li>
                    <li>${aiDetail.features[2]}</li>
                 </ol> 
                </div>
                <div class="mt-4 mb-4">
                  <hr>
                 </div>
                  <p class="text-2xl font-semibold">${aiDetail.name}</p>
                  <div class="flex justify-between items-center">
                  <div class=flex>
                  <img src="image/Frame.png">
                  <p>${aiDetail.published_in}</p>
                  </div>
                  <div><img src="image/Group 31.png"></div>
                </div>
                  </div>
                  
            `;
            aiInformationDetails.appendChild(aiDetailCard);
        });

    } 


loadAiDetails();
