/* SAFE VALUE FUNCTION */

function safeValue(v){
if(!v || v.trim()==="") return "None";
return v;
}


/* DATA STORAGE */

let teamUpdates=[];
let clientUpdates=[];
let requirements=[];
let meetingMinutes=[];
let offshoreUpdates=[];
let clientAvailability=[];


/* ===============================
   INTERNAL TEAM UPDATES
================================ */

const teamForm=document.getElementById("teamForm");
const teamTable=document.querySelector("#teamTable tbody");

teamForm.addEventListener("submit",function(e){

e.preventDefault();

const engineer=document.getElementById("engineer").value;
const story=document.getElementById("story").value;
const status=document.getElementById("status").value;
const blocker=document.getElementById("blocker").value;

if(status===""){
alert("Please select status");
return;
}

teamUpdates.push({
engineer:safeValue(engineer),
story:safeValue(story),
status:status,
blocker:safeValue(blocker)
});

renderTeam();

teamForm.reset();

});


function renderTeam(){

teamTable.innerHTML="";

teamUpdates.forEach((t,i)=>{

let row=document.createElement("tr");

row.innerHTML=`
<td>${t.engineer}</td>
<td>${t.story}</td>
<td>${t.status}</td>
<td>${t.blocker}</td>

<td class="actions">
<span onclick="editTeam(${i})">✏️</span>
<span onclick="deleteTeam(${i})">❌</span>
</td>
`;

teamTable.appendChild(row);

});

}


function deleteTeam(i){
teamUpdates.splice(i,1);
renderTeam();
}


function editTeam(i){

let t=teamUpdates[i];

document.getElementById("engineer").value=t.engineer;
document.getElementById("story").value=t.story;
document.getElementById("status").value=t.status;
document.getElementById("blocker").value=t.blocker;

deleteTeam(i);

}



/* ===============================
   CLIENT MEETING UPDATES
================================ */

document.getElementById("clientForm").addEventListener("submit",function(e){

e.preventDefault();

const meeting=document.getElementById("meetingName").value;
const update=document.getElementById("meetingUpdate").value;

clientUpdates.push({
meeting:safeValue(meeting),
update:safeValue(update)
});

renderClient();

this.reset();

});


function renderClient(){

const list=document.getElementById("clientFeed");

list.innerHTML="";

clientUpdates.forEach((c,i)=>{

let li=document.createElement("li");

li.innerHTML=`
${c.meeting} : ${c.update}

<span class="actions">
<span onclick="editClient(${i})">✏️</span>
<span onclick="deleteClient(${i})">❌</span>
</span>
`;

list.appendChild(li);

});

}


function deleteClient(i){
clientUpdates.splice(i,1);
renderClient();
}


function editClient(i){

document.getElementById("meetingName").value=clientUpdates[i].meeting;
document.getElementById("meetingUpdate").value=clientUpdates[i].update;

deleteClient(i);

}



/* ===============================
   REQUIREMENT TRANSLATOR
================================ */

document.getElementById("reqForm").addEventListener("submit",function(e){

e.preventDefault();

const business=document.getElementById("businessReq").value;
const tech=document.getElementById("technicalReq").value;

requirements.push({
business:safeValue(business),
tech:safeValue(tech)
});

renderReq();

this.reset();

});


function renderReq(){

const list=document.getElementById("translatedReq");

list.innerHTML="";

requirements.forEach((r,i)=>{

let li=document.createElement("li");

li.innerHTML=`
Business: ${r.business} → Tech: ${r.tech}

<span class="actions">
<span onclick="editReq(${i})">✏️</span>
<span onclick="deleteReq(${i})">❌</span>
</span>
`;

list.appendChild(li);

});

}


function deleteReq(i){
requirements.splice(i,1);
renderReq();
}


function editReq(i){

document.getElementById("businessReq").value=requirements[i].business;
document.getElementById("technicalReq").value=requirements[i].tech;

deleteReq(i);

}



/* ===============================
   MEETING MINUTES
================================ */

document.getElementById("notesForm").addEventListener("submit",function(e){

e.preventDefault();

const title=document.getElementById("meetingTitle").value;
const note=document.getElementById("meetingNotes").value;

meetingMinutes.push({
title:safeValue(title),
note:safeValue(note)
});

renderMinutes();

this.reset();

});


function renderMinutes(){

const list=document.getElementById("meetingList");

list.innerHTML="";

meetingMinutes.forEach((m,i)=>{

let li=document.createElement("li");

li.innerHTML=`
${m.title} : ${m.note}

<span class="actions">
<span onclick="editMinute(${i})">✏️</span>
<span onclick="deleteMinute(${i})">❌</span>
</span>
`;

list.appendChild(li);

});

}


function deleteMinute(i){
meetingMinutes.splice(i,1);
renderMinutes();
}


function editMinute(i){

document.getElementById("meetingTitle").value=meetingMinutes[i].title;
document.getElementById("meetingNotes").value=meetingMinutes[i].note;

deleteMinute(i);

}



/* ===============================
   OFFSHORE UPDATES
================================ */

document.getElementById("offshoreForm").addEventListener("submit",function(e){

e.preventDefault();

const team=document.getElementById("offshoreTeam").value;
const update=document.getElementById("offshoreUpdate").value;

offshoreUpdates.push({
team:safeValue(team),
update:safeValue(update)
});

renderOffshore();

this.reset();

});


function renderOffshore(){

const list=document.getElementById("offshoreFeed");

list.innerHTML="";

offshoreUpdates.forEach((o,i)=>{

let li=document.createElement("li");

li.innerHTML=`
${o.team} : ${o.update}

<span class="actions">
<span onclick="editOffshore(${i})">✏️</span>
<span onclick="deleteOffshore(${i})">❌</span>
</span>
`;

list.appendChild(li);

});

}


function deleteOffshore(i){
offshoreUpdates.splice(i,1);
renderOffshore();
}


function editOffshore(i){

document.getElementById("offshoreTeam").value=offshoreUpdates[i].team;
document.getElementById("offshoreUpdate").value=offshoreUpdates[i].update;

deleteOffshore(i);

}



/* ===============================
   CLIENT AVAILABILITY
================================ */

document.getElementById("clientAvailForm").addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("clientName").value;
const status=document.getElementById("clientStatus").value;
const backup=document.getElementById("clientBackup").value;

if(status===""){
alert("Please select status");
return;
}

clientAvailability.push({
name:safeValue(name),
status:status,
backup:safeValue(backup)
});

renderClientAvailability();

this.reset();

});


function renderClientAvailability(){

const table=document.querySelector("#clientTable tbody");

table.innerHTML="";

clientAvailability.forEach((c,i)=>{

let row=document.createElement("tr");

row.innerHTML=`
<td>${c.name}</td>
<td>${c.status}</td>
<td>${c.backup}</td>

<td class="actions">
<span onclick="editClientAvail(${i})">✏️</span>
<span onclick="deleteClientAvail(${i})">❌</span>
</td>
`;

table.appendChild(row);

});

}


function deleteClientAvail(i){
clientAvailability.splice(i,1);
renderClientAvailability();
}


function editClientAvail(i){

document.getElementById("clientName").value=clientAvailability[i].name;
document.getElementById("clientStatus").value=clientAvailability[i].status;
document.getElementById("clientBackup").value=clientAvailability[i].backup;

deleteClientAvail(i);

}



/* ===============================
   REPORT GENERATOR
================================ */

function generateReport(){

let report="BridgeSprint Daily Report\n\n";


if(teamUpdates.length){

report+="INTERNAL TEAM UPDATES\n---------------------\n";

teamUpdates.forEach(t=>{

report+=`${t.engineer}
Story: ${t.story}
Status: ${t.status}
Blocker: ${t.blocker}

`;

});

}


if(clientUpdates.length){

report+="CLIENT MEETING UPDATES\n----------------------\n";

clientUpdates.forEach(c=>{
report+=`${c.meeting} : ${c.update}\n`;
});

report+="\n";

}


if(requirements.length){

report+="REQUIREMENT TRANSLATIONS\n------------------------\n";

requirements.forEach(r=>{
report+=`Business: ${r.business}
Tech: ${r.tech}

`;
});

}


if(meetingMinutes.length){

report+="MEETING MINUTES\n-----------------\n";

meetingMinutes.forEach(m=>{
report+=`${m.title} : ${m.note}\n`;
});

report+="\n";

}


if(offshoreUpdates.length){

report+="OFFSHORE TEAM UPDATES\n---------------------\n";

offshoreUpdates.forEach(o=>{
report+=`${o.team} : ${o.update}\n`;
});

report+="\n";

}


if(clientAvailability.length){

report+="CLIENT AVAILABILITY\n-------------------\n";

clientAvailability.forEach(c=>{
report+=`${c.name} - ${c.status}\nBackup: ${c.backup}\n\n`;
});

}


document.getElementById("report").innerText=report;

}



/* ===============================
   DOWNLOAD REPORT
================================ */

function downloadReport(){

const text=document.getElementById("report").innerText;

if(!text){
alert("Generate report first");
return;
}

const win=window.open("","","width=800,height=600");

win.document.write(`
<html>
<head>
<title>BridgeSprint Report</title>
<style>
body{font-family:Arial;padding:40px;}
pre{white-space:pre-wrap;}
</style>
</head>

<body>

<h1>BridgeSprint Daily Report</h1>
<hr>

<pre>${text}</pre>

</body>
</html>
`);

win.document.close();
win.print();

}
