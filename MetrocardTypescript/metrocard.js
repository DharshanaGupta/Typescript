var CardnumberIncrement = 1000;
var UserInfo = /** @class */ (function () {
    function UserInfo(username, phone, balance) {
        this.CardNumber = "CMRL" + CardnumberIncrement++;
        this.UserName = username;
        this.Balance = balance;
    }
    return UserInfo;
}());
//user list--default data
var userList = new Array;
userList.push(new UserInfo("Ravi", "987654321", 1000));
userList.push(new UserInfo("Baskaran", "1234567890", 1000));
var TicketIDIncrement = 2000;
var TicketFair = /** @class */ (function () {
    function TicketFair(fromLocation, toLoacation, fair) {
        this.TicketID = TicketIDIncrement++;
        this.FromLocation = fromLocation;
        this.ToLocation = toLoacation;
        this.Fair = fair;
    }
    return TicketFair;
}());
//ticket fair list - default data
var ticketFairList = new Array;
ticketFairList.push(new TicketFair("Airport", "Egmore", 55));
ticketFairList.push(new TicketFair("Airport", "Koyembedu", 25));
ticketFairList.push(new TicketFair("Alandur", "Koyembedu", 25));
ticketFairList.push(new TicketFair("Koyembedu", "Egmore", 32));
ticketFairList.push(new TicketFair("Vadapalani", "Egmore", 45));
ticketFairList.push(new TicketFair("Arumbakkam", "Egmore", 25));
ticketFairList.push(new TicketFair("Vadaplani", "Koyembedu", 25));
ticketFairList.push(new TicketFair("Arumbakkam", "Koyembedu", 16));
//Travel history details
var TravelIDIncrement = 3000;
var Travel = /** @class */ (function () {
    function Travel(cardNumber, fromLocation, toLocation, travelCost, status, date) {
        this.TravelID = TravelIDIncrement++;
        this.CardNumber = cardNumber;
        this.FromLocation = fromLocation;
        this.ToLocation = toLocation;
        this.TravelCost = travelCost;
        this.Status = status;
        this.Date = date;
    }
    return Travel;
}());
var travelList = new Array;
var CurrentUser;
var CurrentUserBalance;
var CurrentUserName;
function SigninButton() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "block";
    signup_page.style.display = "none";
    menubar.style.display = "none";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
function SignIn() {
    var flag = true;
    var cardnumber = document.getElementById("cardNumber").value;
    var regex = /^CMRL\d{4}$/;
    if (regex.test(cardnumber)) {
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].CardNumber == cardnumber) {
                flag = false;
                alert("Logged In Successfully");
                CurrentUser = userList[i].CardNumber;
                CurrentUserBalance = userList[i].Balance;
                CurrentUserName = userList[i].UserName;
                AfterSignin();
            }
        }
        if (flag) {
            alert("Invalid Card Number");
        }
    }
}
function AfterSignin() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
function SignUpbutton() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "block";
    menubar.style.display = "none";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
function SignUp() {
    //let email=(document.getElementById("") as HTMLInputElement).value;
    var username = document.getElementById("name").value;
    var passsword = document.getElementById("pwd").value;
    var phone = document.getElementById("phone").value;
    var BalanceAmount = document.getElementById("balance").value;
    userList.push(new UserInfo(username, phone, parseInt(BalanceAmount)));
    Aftersignup();
}
function Aftersignup() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "block";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "none";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
function Home() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "block";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
    var greet = document.getElementById("greet");
    greet.innerHTML = "<h2>Welcome ".concat(CurrentUserName, " </h2>");
}
function Balance() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
    alert("your Current Balance is: " + CurrentUserBalance);
}
function RechargeFormDisplay() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "block";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
function Recharge() {
    var topupamount = document.getElementById("top_up").value;
    CurrentUserBalance = CurrentUserBalance + +topupamount;
    alert(CurrentUserBalance);
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
var fairTableBody = document.querySelector("#fair tbody");
var FairDetails = function () {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "block";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
    fairTableBody.innerHTML = "";
    ticketFairList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.FromLocation, "</td>\n        <td>").concat(item.ToLocation, "</td>\n        <td>").concat(item.Fair, "</td>\n        ");
        fairTableBody.appendChild(row);
    });
};
var travelBody = document.querySelector("#makeTravel tbody");
var Travelbtn = function () {
    travelBody.innerHTML = "";
    ticketFairList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(item.FromLocation, "</td>\n            <td>").concat(item.ToLocation, "</td>\n            <td>").concat(item.Fair, "</td>\n            <td><input type=\"button\" onclick=\"DisplayCountForm('").concat(item.FromLocation, "','").concat(item.ToLocation, "')\" value=\"BuyTickets\"></td>\n            ");
        travelBody.appendChild(row);
    });
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "block";
    history.style.display = "none";
    count.style.display = "none";
};
var fromLocation;
var toLocation;
function confirmTravel() {
    var quantity = document.getElementById("getcount").value;
    for (var i = 0; i < ticketFairList.length; i++) {
        if (ticketFairList[i].FromLocation == fromLocation && ticketFairList[i].ToLocation == toLocation) {
            var price = ticketFairList[i].Fair * +quantity;
            if (CurrentUserBalance >= price) {
                CurrentUserBalance = CurrentUserBalance - price;
                alert("Tickets Booked");
                var date = new Date();
                var day = date.getDate();
                var month = date.getMonth();
                var year = date.getFullYear();
                var currentDate = day + '/' + month + '/' + year;
                travelList.push(new Travel(CurrentUser, ticketFairList[i].FromLocation, ticketFairList[i].ToLocation, ticketFairList[i].Fair, "Booked", currentDate));
            }
        }
    }
}
function DisplayCountForm(from, to) {
    for (var i = 0; i < ticketFairList.length; i++) {
        if (ticketFairList[i].FromLocation == from && ticketFairList[i].ToLocation == to) {
            fromLocation = ticketFairList[i].FromLocation;
            toLocation = ticketFairList[i].ToLocation;
        }
    }
    // let form=document.getElementById("count") as HTMLDivElement;
    // form.style.display="block";
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "block";
    history.style.display = "none";
    count.style.display = "block";
}
var historybody = document.querySelector("#travelHistory tbody");
var TravelDetails = function () {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "block";
    count.style.display = "none";
    historybody.innerHTML = "";
    travelList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(item.FromLocation, "</td>\n            <td>").concat(item.ToLocation, "</td>\n            <td>").concat(item.TravelCost, "</td>\n            <td>").concat(item.Date, "</td>\n            <td>").concat(item.Status, "</td>\n            ");
        historybody.appendChild(row);
    });
};
function Signout() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "block";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "none";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
