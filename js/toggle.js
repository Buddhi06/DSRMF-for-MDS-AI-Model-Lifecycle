function toggle(divId) {
    let div = document.getElementById(divId);
    div.classList.toggle("hidden");
}


 function showDetails(event, detailId) {
        event.stopPropagation(); // Prevents body click from hiding it immediately

        // Hide all other detail boxes first
        document.querySelectorAll('.detail-box').forEach(box => box.style.display = "none");

        // Show the selected detail box
        document.getElementById(detailId).style.display = "block";
    }

    function closeDetails(event, detailId) {
        event.stopPropagation(); // Prevents parent click from reopening
        document.getElementById(detailId).style.display = "none";
    }

    // Hide details when clicking anywhere outside
    document.body.addEventListener("click", function () {
        document.querySelectorAll('.detail-box').forEach(box => box.style.display = "none");
    });


    function toggleDiv(index) {
        let contents = document.querySelectorAll('.content');
        let content = contents[index];
        if(content){
        	 // Toggle the clicked div
        content.classList.toggle('open');
        }
       else{
       	console.error("not found");
       }
    }