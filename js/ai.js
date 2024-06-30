const loadAiDetails = async () => {

        const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const data = await res.json();
        const aiDetails = data.data;
        console.log('aiDetails:', aiDetails);
        displayAiDetails(aiDetails);
    
}

const handleShowDetails = async(id) => {
     console.log('click', id);
     const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
     const data = await res.json();
     const aiDetail = data.data;
     showAiDetails(aiDetail);
}

const showAiDetails = (aiDetail) => {
      console.log(aiDetail);
      const aiDetailModal = document.getElementById('show-details-container');
      console.log(aiDetailModal);
      aiDetailModal.innerHTML = `
<div class="flex justify-around gap-4">

    <div class=" p-5 rounded-xl">
      <h1 class=" font-semibold">${aiDetail['description']}</h1>
      <div class="flex justify-around items-center gap-4 mt-4 font-bold">
         <div class="p-4 text-[#03A30A] bg-white rounded-xl"><p>$10/<br>month<br>Basic<p></div>
         <div class="p-4 text-[#F28927] bg-white  rounded-xl"><p>$50/<br>month<br>Pro<p></div>
         <div class="p-4 text-[#EB5757] bg-white  rounded-xl"><p>Contact<br>us<br>Enterprise<p></div>
      </div>

      <div>
           <div class="flex justify-around">
                <div class="card-body">
                  <h2 class="card-title"><span>Feature : </span></h2>
                  <div class="mt-2">
              
                <ul>
                    <li>${aiDetail?.features[1]['feature_name']}</li>
                    <li>${aiDetail?.features[2]['feature_name']}</li>
                    <li>${aiDetail?.features[3]['feature_name']}</li>
                 </ul> 
                
                </div>
           </div>
           <div>
               <div class="card-body">
                  <h2 class="card-title"><span>Integrations:</span></h2>
               <div class="mt-2">
                  
                  <ul>
                    <li>${aiDetail?.integrations[0] || 'No data Found'}</li>
                    <li>${aiDetail?.integrations[1] || 'No data Found'}</li>
                    <li>${aiDetail?.integrations[2] || 'No data Found'}</li>
                 </ul>
           </div>
      </div>
    </div>     
 </div>   
      `;
      show_details_modal.showModal();
}


const displayAiDetails = aiDetail => {
       const aiInformationDetails = document.getElementById('ai-information-details');
        aiDetail.tools.forEach(aiDetail => {
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
                  <div><img onclick="handleShowDetails('${aiDetail.id}')" src="image/Group 31.png"></div>
                </div>
                  </div>     
            `;
            aiInformationDetails.appendChild(aiDetailCard);
        });

    } 
loadAiDetails();
