const express = require('express')
const app = express()
const port = 4568;

app.get('/', index);
app.get('/home', Home);
app.get('/adminlogin', adminLogin);
 app.get('/donorlogin', donorLogin);
 app.get('/hospital', hospitalLogin);
app.get('/admin', admin);
app.get('/user', user);
app.get('/bank', bank);
app.get('/donorRegistration', donorRegistration);
app.get('/bloodBankRegistration', bloodBankRegistration);
app.get('/emergency', emergency);

app.get('/admin/hospitalList', adminHospitalList);
app.get('/admin/aproveList', aproveList);
app.get('/admin/userList', userList);
app.get('/admin/bloodreq', Viewbloodreq);

app.get('/donor/viewBloodbank', viewBloodbank);
app.get('/admin/urgentBlood', urgentBlood);
app.get('/donor/donorUrgentList', donorUrgentList);
app.get('/donor/bloodreq', donorBloodReq);

 app.get('/donor/searchDonor', searchDonor);
app.get('/donor/donorList', donorList);
 app.get('/donor/viewBloodbanks', viewBloodbanks);
 app.get('/donor/requestBlood', requestBlood);

 app.get('/Hospital/addAvailability', addAvailability);
 app.get('/Hospital/viewAvailability', viewAvailability);
//  app.get('/Hospital/hospitalUrgent', hospitalUrgent);
 app.get('/Hospital/hospitaldonorList', hospitaldonorList);
 app.get('/Hospital/hsearchDonor', hsearchDonor);
 app.get('/Hospital/hospitalsList', hhospitalList);
 app.get('/Hospital/bloodreq', hbloodRequest);

function index(req, res) {
	res.sendFile("./index.html",{root:__dirname});
}

function Home(req, res) {
	res.sendFile("./Home.html",{root:__dirname});
}

function adminLogin(req, res) {
	res.sendFile("./distributor.html",{root:__dirname});
}

function donorLogin(req, res) {
	res.sendFile("./donorLogin.html",{root:__dirname});
}

function admin(req, res) {
	res.sendFile("Admin/adminHome.html",{root:__dirname});
}

function adminHospitalList(req, res) {
	res.sendFile("Admin/unAprovedList.html",{root:__dirname});
}

function aproveList(req, res) {
	res.sendFile("Admin/aprovedList.html",{root:__dirname});
}

function userList(req, res) {
	res.sendFile("Admin/userList.html",{root:__dirname});
}
function Viewbloodreq(req, res) {
	res.sendFile("Admin/ViewBloodRequest.html",{root:__dirname});
}

function viewBloodbank(req, res) {
	res.sendFile("donor/viewBloodbanks.html",{root:__dirname});
}

function urgentBlood(req, res) {
	res.sendFile("Admin/urgentBlood.html",{root:__dirname});
}

function donorUrgentList(req, res) {
	res.sendFile("donor/donorUrgentList.html",{root:__dirname});
}

function user(req, res) {
	res.sendFile("donor/home.html",{root:__dirname});
}
function donorBloodReq(req, res) {
	res.sendFile("donor/ViewBloodRequest.html",{root:__dirname});
}



function hbloodRequest(req, res) {
	res.sendFile("Hospital/ViewBloodRequest.html",{root:__dirname});
}

function bank(req, res) {
	res.sendFile("Hospital/Home.html",{root:__dirname});
}

function searchDonor(req, res) {
	res.sendFile("donor/searchDonor.html",{root:__dirname});
}

function donorList(req, res) {
	res.sendFile("donor/donorList.html",{root:__dirname});
}

function viewBloodbanks(req, res) {
	res.sendFile("donor/viewBloodbanks.html",{root:__dirname});
}

function donorRegistration(req, res) {
	res.sendFile("registration.html",{root:__dirname});
}

function bloodBankRegistration(req, res) {
	res.sendFile("hospitalRegistration.html",{root:__dirname});
}

function emergency(req, res) {
	res.sendFile("emergency.html",{root:__dirname});
}

function requestBlood(req, res) {
	res.sendFile("donor/requestBlood.html",{root:__dirname});
}

function addAvailability(req, res) {
	res.sendFile("Hospital/addAvailability.html",{root:__dirname});
}

function viewAvailability(req, res) {
	res.sendFile("Hospital/ViewAvailabilites.html",{root:__dirname});
}

function hospitaldonorList(req, res) {
	res.sendFile("Hospital/hdonorsList.html",{root:__dirname});
}

function hsearchDonor(req, res) {
	res.sendFile("Hospital/hsearchDonor.html",{root:__dirname});
}

function hhospitalList(req, res) {
	res.sendFile("Hospital/hospitalsList.html",{root:__dirname});
}

function hospitalLogin(req, res) {
	res.sendFile("hospitalLogin.html",{root:__dirname});
}

app.listen(port, () => console.log(`Server Started on ${port} Port Number`))
