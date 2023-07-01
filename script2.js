var candidatesData = [
    { name: "John Doe", location: "New York", jobRole: "Engineer" },
    { name: "Jane Smith", location: "London", jobRole: "Designer" },
    { name: "Mark Johnson", location: "San Francisco", jobRole: "Manager" },
    { name: "Emily Brown", location: "Sydney", jobRole: "Engineer" },
    { name: "Michael Lee", location: "Tokyo", jobRole: "Designer" }
];

function searchCandidates() {
    var location = document.getElementById("location").value;
    var jobRole = document.getElementById("jobRole").value;
    
    // Clear previous results
    var candidatesList = document.getElementById("candidatesList");
    candidatesList.innerHTML = "";
    
    // Filter candidates based on location and job role
    var filteredCandidates = candidatesData.filter(function(candidate) {
        return (location === "" || candidate.location.toLowerCase().includes(location.toLowerCase()))
            && (jobRole === "" || candidate.jobRole.toLowerCase() === jobRole.toLowerCase());
    });
    
    // Display the filtered candidates
    filteredCandidates.forEach(function(candidate) {
        var row = candidatesList.insertRow();
        row.insertCell().textContent = candidate.name;
        row.insertCell().textContent = candidate.location;
        row.insertCell().textContent = candidate.jobRole;
    });
}