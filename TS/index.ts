let CurrentUserID;
let CurrentUserName;
let CurrentUserBalance;
function SignInbutton()
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
  signin.style.display="block";
  button.style.display="none";
  signup.style.display="none";
  home.style.display="none";
  menubar.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
}
function SignIn()
{
  
  let existing=(document.getElementById("existinguserid") as HTMLInputElement).value;
  let regex=/^UI\d{4}$/;
  if(regex.test(existing))
    {
      for(let i=0;i<userList.length;i++)
        {
          if(userList[i].UserID==existing)
            {
              CurrentUserID=userList[i].UserID;
              CurrentUserName=userList[i].UserName;
              CurrentUserBalance=userList[i].Walletbalance;
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
function AfterSignin()
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
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";

}

//displaying Home
function Home()
{
  let greet=document.getElementById("greet") as HTMLLabelElement;
  greet.innerHTML = `<h3>Hello ${CurrentUserName}</h3>`;
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
  home.style.display="block";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
}


function SignUpbutton()
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
  signup.style.display="block";
  home.style.display="none";
  menubar.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
}

let userList: Array<UserInfo> = new Array<UserInfo>;
function SignUp()
{
  let username=(document.getElementById("name") as HTMLInputElement).value;
  let password=(document.getElementById("pwd") as HTMLInputElement).value;
  let phone=(document.getElementById("number") as HTMLInputElement).value;
  let balance=(document.getElementById("balance") as HTMLInputElement).value;
  userList.push(new UserInfo(username,password,phone,+balance));
  alert("success");
  AfterSignup();
}

function AfterSignup()
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
  button.style.display="block";
  signup.style.display="none";
  home.style.display="none";
  menubar.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
}

//medicine class
let MedicineIncrement=0;
const tablebody=document.querySelector("#data tbody") as HTMLTableSectionElement;
class MedicineInfo
{
    MedicineID:number;
    MedicineName:string;
    MedicinePrice:number;
    MedicineCount:number;
    ExpiryDate:string;

    constructor(medicineName:string,medicinePrice:number,medicineCount:number,expiryDate:string)
    {
        this.MedicineID=MedicineIncrement++;
        this.MedicineName=medicineName;
        this.MedicinePrice=medicinePrice;
        this.MedicineCount=medicineCount;
        this.ExpiryDate=expiryDate;

    }

}
//default data
let medicineList: Array<MedicineInfo> = new Array<MedicineInfo>;
medicineList.push(new MedicineInfo("Paracetomel",8,10,"20/10/2024"));
medicineList.push(new MedicineInfo("Colpal",5,8,"22/04/2024"));
medicineList.push(new MedicineInfo("Stepsil",10,5,"11/05/2024"));


const renderTable = () => {
  tablebody.innerHTML = "";
  medicineList.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.MedicineName}</td>
      <td>${item.MedicinePrice}</td>
      <td>${item.MedicineCount}</td>
      <td>${item.ExpiryDate}</td>
    `;
    tablebody.appendChild(row);
  });
  MedicineTable();// to show the details
};

function MedicineTable()
{
  let button=document.getElementById("buttons") as HTMLDivElement;
  let signin=(document.getElementById("signin-page") as HTMLDivElement);
  let signup=(document.getElementById("signup-page") as HTMLDivElement);
  let home=(document.getElementById("home-page") as HTMLDivElement);
  let menubar=(document.getElementById("menubar") as HTMLDivElement);
  let medicines=(document.getElementById("table") as HTMLDivElement);
  let topupform=(document.getElementById("topup_form") as HTMLDivElement);
  let order_table=(document.getElementById("order_table") as HTMLDivElement);
  let cancel_table=(document.getElementById("cancel_table") as HTMLDivElement);
  let list=document.getElementById("list") as HTMLDivElement;
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="block";
  topupform.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  list.style.display="none";
  purchase_table.style.display="none";
}

let uID=1000;
//user info
class UserInfo
{
  UserID:string;
  UserName:string;
  Password:string;
  Phone:string;
  Walletbalance:number;

  constructor(userName:string,password:string,phone:string,walletBalance:number)
  {
    this.UserID="UI"+uID++;
    this.UserName=userName;
    this.Password=password;
    this.Phone=phone;
    this.Walletbalance=walletBalance;
  }
}

userList.push(new UserInfo("Dharshana","1234","1234567890",200));
userList.push(new UserInfo("Priya","12350","1234567890",100));

function TopUp()
{
  
  let balance=(document.getElementById("amount") as HTMLInputElement).value;
  CurrentUserBalance=CurrentUserBalance+ +balance;
  alert("your current Balance is: "+ +CurrentUserBalance);
  let button=document.getElementById("buttons") as HTMLDivElement;
  let signin=(document.getElementById("signin-page") as HTMLDivElement);
  let signup=(document.getElementById("signup-page") as HTMLDivElement);
  let home=(document.getElementById("home-page") as HTMLDivElement);
  let menubar=(document.getElementById("menubar") as HTMLDivElement);
  let medicines=(document.getElementById("table") as HTMLDivElement);
  let purchasing=(document.getElementById("purchasing") as HTMLDivElement);
  let medicine_list=(document.getElementById("medicine_list") as HTMLDivElement);
  let topupform=(document.getElementById("topup_form") as HTMLDivElement);
  let order_table=(document.getElementById("order_table") as HTMLDivElement);
  let cancel_table=(document.getElementById("cancel_table") as HTMLDivElement);
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  let list=document.getElementById("list") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  purchase_table.style.display="none";
  list.style.display="none";
 
}

function TopupForm()
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
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  let list=document.getElementById("list") as HTMLDivElement;
  topupform.style.display="block";
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  purchase_table.style.display="none";
  list.style.display="none";
}


function Balance()
{
  
  alert("Balance " + +CurrentUserBalance);
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
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";

}

//
let oID=2000;
class purchase
{
  OrderID:number;
  UserID:string;
  
  MedicineID:number;
  Medicinename:string;
  Quantity:number;
  OrderPrice:number;
  OrderStatus:string;
  constructor(userID:string,medicineID:number,medicinename:string,quantity:number,price:number,orderstatus:string)
  {
    this.OrderID=+oID++;
    this.UserID=userID;
    this.MedicineID=medicineID;
    this.Medicinename=medicinename;
    this.Quantity=quantity;
    this.OrderPrice=price;
    this.OrderStatus=orderstatus;
  }

}


let orderCart: Array<purchase>=new Array<purchase>;
const purchasebody=(document.querySelector("#purchase-list tbody") as HTMLTableSectionElement);

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

const orderbody=document.querySelector("#orders tbody") as HTMLTableSectionElement;
function Orders()
{
  Ordertable();
  orderbody.innerHTML = "";
    orderCart.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.UserID}</td>
        <td>${item.MedicineID}</td>
        <td>${item.Medicinename}</td>
        <td>${item.Quantity}</td>
        <td>${item.OrderPrice}</td>
        <td>${item.OrderStatus}</td>
        `;
        orderbody.appendChild(row);
      });
}

function Ordertable()
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
  let list=document.getElementById("list") as HTMLDivElement;
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="block";
  cancel_table.style.display="none";
  list.style.display="none";
  purchase_table.style.display="none";
}

const cancelBody=document.querySelector("#cancel_order tbody") as HTMLSelectElement;
function Cancel()
{
  CancelTable();
  cancelBody.innerHTML = "";
    orderCart.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.UserID}</td>
        <td>${item.MedicineID}</td>
        <td>${item.Medicinename}</td>
        <td>${item.Quantity}</td>
        <td>${item.OrderPrice}</td>
        <td>${item.OrderStatus}</td>
        <input type="button" onclick="Cancelitem(${item.OrderID})" value="Remove">
        
      `;
      cancelBody.appendChild(row);
    });
     
  };

function CancelTable()
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
  let list=document.getElementById("list") as HTMLDivElement;
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  // purchasing.style.display="none";
  //medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="block";
  list.style.display="none";
  purchase_table.style.display="none";
}
const Cancelitem=(id:number)=>
  {
      // orderCart=orderCart.filter((item)=>item.OrderID!==id);
      // Cancel();
      for(let i=0;i<orderCart.length;i++)
        {
          if(id==orderCart[i].OrderID && orderCart[i].OrderStatus=="Ordered")
          {
            for(let j=0;j<medicineList.length;j++)
              {
                if(orderCart[i].MedicineID==medicineList[j].MedicineID && CurrentUserID==orderCart[i].UserID)
                  {
                    orderCart[i].OrderStatus="Cancelled";
                    CurrentUserBalance+=orderCart[i].OrderPrice;
                    alert("balance" + +CurrentUserBalance);
                    medicineList[j].MedicineCount+=orderCart[i].Quantity;
                    alert("current quantity" + medicineList[j].MedicineCount);
                  }
              }
          }
        }
  }

  //newly added
  const body=document.querySelector("#purchasedata tbody") as HTMLTableSectionElement;
  const PurchaseTable = () => {
    //displaying
  


    body.innerHTML = "";
    medicineList.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.MedicineName}</td>
        <td>${item.MedicinePrice}</td>
        <td>${item.MedicineCount}</td>
        <td>${item.ExpiryDate}</td>
        <td><button onclick="displayGetCountForm(${item.MedicineID})">Buy</button></td>
      `;
      body.appendChild(row);
    });
      let button=document.getElementById("buttons") as HTMLDivElement;
  let signin=(document.getElementById("signin-page") as HTMLDivElement);
  let signup=(document.getElementById("signup-page") as HTMLDivElement);
  let home=(document.getElementById("home-page") as HTMLDivElement);
  let menubar=(document.getElementById("menubar") as HTMLDivElement);
  let medicines=(document.getElementById("table") as HTMLDivElement);
  let topupform=(document.getElementById("topup_form") as HTMLDivElement);
  let medicine_list=(document.getElementById("medicine_list") as HTMLDivElement);
  let order_table=(document.getElementById("order_table") as HTMLDivElement);
  let cancel_table=(document.getElementById("cancel_table") as HTMLDivElement);
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  purchase_table.style.display="block";
  };
let medicineID;
function BuyMedicine()
{
    let quantity=(document.getElementById("quantity") as HTMLInputElement).value;
    for (let i = 0; i < medicineList.length; i++) {
      if (medicineList[i].MedicineID == medicineID) {
          if (medicineList[i].MedicineCount > 0) {
  
              if((medicineList[i].MedicineCount >+quantity))
              {
                if(CurrentUserBalance>medicineList[i].MedicinePrice* +quantity)
                {
                  orderCart.push(new purchase(CurrentUserID,medicineList[i].MedicineID,medicineList[i].MedicineName,+quantity,medicineList[i].MedicinePrice* +quantity,"Ordered"));
                  alert("Purchased Successfully");
                  medicineList[i].MedicineCount-=+quantity;
                  CurrentUserBalance-=medicineList[i].MedicinePrice* +quantity;
                  alert("your current balance: "+ +CurrentUserBalance);
                  alert("Stock remaining: "+ medicineList[i].MedicineCount);
                  break;
                }
                else{
                  alert("Insufficient balance");
                }
              }
              else{
                alert("Out of stock");
              }
            }
        }
        
    }
}

function displayGetCountForm(id:number)
{
  for(let i=0;i<medicineList.length;i++)
    {
      if(medicineList[i].MedicineID==id)
        {
          medicineID=medicineList[i].MedicineID;
        }
    }
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
  let list=document.getElementById("list") as HTMLDivElement;
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  list.style.display="block";
  purchase_table.style.display="block";
  
}
 


  