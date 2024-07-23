// Sample votes data 

let votes = [];

document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', function () {

        const option = this.getAttribute('data-option');
        votes.push(option);
        displayResults()
    })

});

// Display results 
function displayResults(){
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    const voteCounts = votes.reduce((acc, vote) => {
        acc[vote] = (acc[vote] || 0 ) + 1;
        return acc;
    }, {});

for (const [option, count] of Object.entries(voteCounts)) {
    const listItem = document.createElement('li');
    listItem.textCOntent = `${option}: ${count} votes`;
    resultsList.appendChild(listItem);

}


}


