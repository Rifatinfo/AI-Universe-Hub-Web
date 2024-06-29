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
        aiDetails.tools.forEach(aiDetail => {
            console.log(aiDetail);
        });
    } 


loadAiDetails();
