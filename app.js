document.getElementById("veriForm").addEventListener("submit",handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    //Get form input values
    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const enabled=document.getElementById("enabled").checked;

    var ads=document.querySelector("#user-table");
    var trCount=ads.querySelectorAll("tr").length;
    
    function addID(){
        trCount+=1;
        return trCount;
    }

    //select the option for change color
    
    const options= Array.from(document.querySelectorAll("#User-Roles option"));
    const optionValues=options.map(option => option.value);

    //add the data to table
    const tableRow=document.createElement("tr");
    tableRow.innerHTML=`
    <td>${addID()}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${enabled ? "true": "false"}</td>
    `;

    //append the new row to the table body
    const tableBody=document.getElementById("user-table");
    tableBody.appendChild(tableRow);

    //reset the form
    document.querySelector("#veriForm").reset();

}
