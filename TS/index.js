var CurrentUserID;
var CurrentUserName;
var CurrentUserBalance;
function SignInbutton() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "block";
    button.style.display = "none";
    signup.style.display = "none";
    home.style.display = "none";
    menubar.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
function SignIn() {
    var existing = document.getElementById("existinguserid").value;
    var regex = /^UI\d{4}$/;
    if (regex.test(existing)) {
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].UserID == existing) {
                CurrentUserID = userList[i].UserID;
                CurrentUserName = userList[i].UserName;
                CurrentUserBalance = userList[i].Walletbalance;
                alert("logged in successfully");
                AfterSignin();
                // let menubar=(document.getElementById("menubar") as HTMLDivElement);
                // let signin=(document.getElementById("signin-page") as HTMLDivElement);
                // let buttons=(document.getElementById("buttons") as HTMLDivElement);
            }
        }
    }
}
//displaying After sign in
function AfterSignin() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
//displaying Home
function Home() {
    var greet = document.getElementById("greet");
    greet.innerHTML = "<h3>Hello ".concat(CurrentUserName, "</h3>");
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "block";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
function SignUpbutton() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "block";
    home.style.display = "none";
    menubar.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
var userList = new Array;
function SignUp() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("pwd").value;
    var phone = document.getElementById("number").value;
    var balance = document.getElementById("balance").value;
    userList.push(new UserInfo(username, password, phone, +balance));
    alert("success");
    AfterSignup();
}
function AfterSignup() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "block";
    signup.style.display = "none";
    home.style.display = "none";
    menubar.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
//medicine class
var MedicineIncrement = 0;
var tablebody = document.querySelector("#data tbody");
var MedicineInfo = /** @class */ (function () {
    function MedicineInfo(medicineName, medicinePrice, medicineCount, expiryDate) {
        this.MedicineID = MedicineIncrement++;
        this.MedicineName = medicineName;
        this.MedicinePrice = medicinePrice;
        this.MedicineCount = medicineCount;
        this.ExpiryDate = expiryDate;
    }
    return MedicineInfo;
}());
//default data
var medicineList = new Array;
medicineList.push(new MedicineInfo("Paracetomel", 8, 10, "20/10/2024"));
medicineList.push(new MedicineInfo("Colpal", 5, 8, "22/04/2024"));
medicineList.push(new MedicineInfo("Stepsil", 10, 5, "11/05/2024"));
var renderTable = function () {
    tablebody.innerHTML = "";
    medicineList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td>".concat(item.MedicineName, "</td>\n      <td>").concat(item.MedicinePrice, "</td>\n      <td>").concat(item.MedicineCount, "</td>\n      <td>").concat(item.ExpiryDate, "</td>\n    ");
        tablebody.appendChild(row);
    });
    MedicineTable(); // to show the details
};
function MedicineTable() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    var list = document.getElementById("list");
    var purchase_table = document.getElementById("purchase_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "block";
    topupform.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
    list.style.display = "none";
    purchase_table.style.display = "none";
}
var uID = 1000;
//user info
var UserInfo = /** @class */ (function () {
    function UserInfo(userName, password, phone, walletBalance) {
        this.UserID = "UI" + uID++;
        this.UserName = userName;
        this.Password = password;
        this.Phone = phone;
        this.Walletbalance = walletBalance;
    }
    return UserInfo;
}());
userList.push(new UserInfo("Dharshana", "1234", "1234567890", 200));
userList.push(new UserInfo("Priya", "12350", "1234567890", 100));
function TopUp() {
    var balance = document.getElementById("amount").value;
    CurrentUserBalance = CurrentUserBalance + +balance;
    alert("your current Balance is: " + +CurrentUserBalance);
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
function TopupForm() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    topupform.style.display = "block";
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
function Balance() {
    alert("Balance " + +CurrentUserBalance);
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
//
var oID = 2000;
var purchase = /** @class */ (function () {
    function purchase(userID, medicineID, medicinename, quantity, price, orderstatus) {
        this.OrderID = +oID++;
        this.UserID = userID;
        this.MedicineID = medicineID;
        this.Medicinename = medicinename;
        this.Quantity = quantity;
        this.OrderPrice = price;
        this.OrderStatus = orderstatus;
    }
    return purchase;
}());
var orderCart = new Array;
var purchasebody = document.querySelector("#purchase-list tbody");
/*const Add = () => {
  
  let medicine=document.getElementById("medicine_list") as HTMLSelectElement;
  let medicineName = medicine[medicine.selectedIndex].innerHTML;
  let medicinecount=(document.getElementById("count") as HTMLInputElement).value;
  
  for(let i=0;i<medicineList.length;i++)
  {
      if(medicineName==medicineList[i].MedicineName)
      {
        if(+medicinecount < medicineList[i].MedicineCount)
          {
            orderCart.push(new purchase(CurrentUserID,medicineList[i].MedicineID,medicineName,+medicinecount,medicineList[i].MedicinePrice* +medicinecount,"Ordered"));
          }
        
      }
              
  }
  //orderCart.push(new purchase(medicineName,+medicinecount));
  purchasebody.innerHTML = "";
  orderCart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      
      <td>${item.Medicinename}</td>
      <td>${item.Quantity}</td>
      <td>
      <button onclick="edit()">Edit</button>
      <button onclick="remove()">Delete</button>
      </td>
      <td>
      <button onclick="Buy()">Buy</button>
      </td>
    `;
    purchasebody.appendChild(row);
  });
  
};*/
/*function Buy()
{
  let medicine=document.getElementById("medicine_list") as HTMLSelectElement;
    let medicineName = medicine[medicine.selectedIndex].innerHTML;
    let medicinecount=(document.getElementById("count") as HTMLInputElement).value;
    //let flag:boolean=true;
  for (let i = 0; i < medicineList.length; i++) {

    if (medicineList[i].MedicineName == medicineName) {

        
        if (medicineList[i].MedicineCount > 0) {

            if((medicineList[i].MedicineCount >+medicinecount))
            {
              //flag:false;
              if(CurrentUserBalance>medicineList[i].MedicinePrice* +medicinecount)
              {
                alert("Purchased Successfully");
                medicineList[i].MedicineCount-=+medicinecount;
                CurrentUserBalance-=medicineList[i].MedicinePrice* +medicinecount;
                alert(CurrentUserBalance);
                alert(medicineList[i].MedicineCount);
                break;
              }
            }
          }
      }
      
  }
}

function Purchase()
{
  let button=document.getElementById("buttons") as HTMLDivElement;
  let signin=(document.getElementById("signin-page") as HTMLDivElement);
  let signup=(document.getElementById("signup-page") as HTMLDivElement);
  let home=(document.getElementById("home-page") as HTMLDivElement);
  let menubar=(document.getElementById("menubar") as HTMLDivElement);
  let medicines=(document.getElementById("table") as HTMLDivElement);
  let topupform=(document.getElementById("topup_form") as HTMLDivElement);
  let purchasing=(document.getElementById("purchasing") as HTMLDivElement);
  let medicine_list=(document.getElementById("medicine_list") as HTMLDivElement);
  let order_table=(document.getElementById("order_table") as HTMLDivElement);
  let cancel_table=(document.getElementById("cancel_table") as HTMLDivElement);
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="block";
  medicine_list.style.display="block";
  order_table.style.display="none";
  cancel_table.style.display="none";
}*/
var orderbody = document.querySelector("#orders tbody");
function Orders() {
    Ordertable();
    orderbody.innerHTML = "";
    orderCart.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.UserID, "</td>\n        <td>").concat(item.MedicineID, "</td>\n        <td>").concat(item.Medicinename, "</td>\n        <td>").concat(item.Quantity, "</td>\n        <td>").concat(item.OrderPrice, "</td>\n        <td>").concat(item.OrderStatus, "</td>\n        ");
        orderbody.appendChild(row);
    });
}
function Ordertable() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    var list = document.getElementById("list");
    var purchase_table = document.getElementById("purchase_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "block";
    cancel_table.style.display = "none";
    list.style.display = "none";
    purchase_table.style.display = "none";
}
var cancelBody = document.querySelector("#cancel_order tbody");
function Cancel() {
    CancelTable();
    cancelBody.innerHTML = "";
    orderCart.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.UserID, "</td>\n        <td>").concat(item.MedicineID, "</td>\n        <td>").concat(item.Medicinename, "</td>\n        <td>").concat(item.Quantity, "</td>\n        <td>").concat(item.OrderPrice, "</td>\n        <td>").concat(item.OrderStatus, "</td>\n        <input type=\"button\" onclick=\"Cancelitem(").concat(item.OrderID, ")\" value=\"Remove\">\n        \n      ");
        cancelBody.appendChild(row);
    });
}
;
function CancelTable() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    var list = document.getElementById("list");
    var purchase_table = document.getElementById("purchase_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    // purchasing.style.display="none";
    //medicine_list.style.display="none";
    order_table.style.display = "none";
    cancel_table.style.display = "block";
    list.style.display = "none";
    purchase_table.style.display = "none";
}
var Cancelitem = function (id) {
    // orderCart=orderCart.filter((item)=>item.OrderID!==id);
    // Cancel();
    for (var i = 0; i < orderCart.length; i++) {
        if (id == orderCart[i].OrderID && orderCart[i].OrderStatus == "Ordered") {
            for (var j = 0; j < medicineList.length; j++) {
                if (orderCart[i].MedicineID == medicineList[j].MedicineID && CurrentUserID == orderCart[i].UserID) {
                    orderCart[i].OrderStatus = "Cancelled";
                    CurrentUserBalance += orderCart[i].OrderPrice;
                    alert("balance" + +CurrentUserBalance);
                    medicineList[j].MedicineCount += orderCart[i].Quantity;
                    alert("current quantity" + medicineList[j].MedicineCount);
                }
            }
        }
    }
};
//newly added
var body = document.querySelector("#purchasedata tbody");
var PurchaseTable = function () {
    //displaying
    body.innerHTML = "";
    medicineList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.MedicineName, "</td>\n        <td>").concat(item.MedicinePrice, "</td>\n        <td>").concat(item.MedicineCount, "</td>\n        <td>").concat(item.ExpiryDate, "</td>\n        <td><button onclick=\"displayGetCountForm(").concat(item.MedicineID, ")\">Buy</button></td>\n      ");
        body.appendChild(row);
    });
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    var purchase_table = document.getElementById("purchase_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
    purchase_table.style.display = "block";
};
var medicineID;
function BuyMedicine() {
    var quantity = document.getElementById("quantity").value;
    for (var i = 0; i < medicineList.length; i++) {
        if (medicineList[i].MedicineID == medicineID) {
            if (medicineList[i].MedicineCount > 0) {
                if ((medicineList[i].MedicineCount > +quantity)) {
                    if (CurrentUserBalance > medicineList[i].MedicinePrice * +quantity) {
                        orderCart.push(new purchase(CurrentUserID, medicineList[i].MedicineID, medicineList[i].MedicineName, +quantity, medicineList[i].MedicinePrice * +quantity, "Ordered"));
                        alert("Purchased Successfully");
                        medicineList[i].MedicineCount -= +quantity;
                        CurrentUserBalance -= medicineList[i].MedicinePrice * +quantity;
                        alert("your current balance: " + +CurrentUserBalance);
                        alert("Stock remaining: " + medicineList[i].MedicineCount);
                        break;
                    }
                    else {
                        alert("Insufficient balance");
                    }
                }
                else {
                    alert("Out of stock");
                }
            }
        }
    }
}
function displayGetCountForm(id) {
    for (var i = 0; i < medicineList.length; i++) {
        if (medicineList[i].MedicineID == id) {
            medicineID = medicineList[i].MedicineID;
        }
    }
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    var list = document.getElementById("list");
    var purchase_table = document.getElementById("purchase_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
    list.style.display = "block";
    purchase_table.style.display = "block";
}
