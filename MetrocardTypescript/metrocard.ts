
let CardnumberIncrement=1000;
class UserInfo
{
    CardNumber:string;
    UserName:string;
    Phone:string;
    Balance:number;

    constructor(username:string,phone:string,balance:number)
    {
        this.CardNumber="CMRL"+ CardnumberIncrement++;
        this.UserName=username;
        this.Balance=balance;
    }
}
//user list--default data
let userList:Array<UserInfo>=new Array<UserInfo>;
userList.push(new UserInfo("Ravi","987654321",1000));
userList.push(new UserInfo("Baskaran","1234567890",1000));


let TicketIDIncrement=2000;

class TicketFair
{
    TicketID:number;
    FromLocation:string;
    ToLocation:string;
    Fair:number;

    constructor(fromLocation:string,toLoacation:string,fair:number)
    {
        this.TicketID=TicketIDIncrement++;
        this.FromLocation=fromLocation;
        this.ToLocation=toLoacation;
        this.Fair=fair;
    }
}
//ticket fair list - default data
let ticketFairList:Array<TicketFair>=new Array<TicketFair>;
ticketFairList.push(new TicketFair("Airport","Egmore",55));
ticketFairList.push(new TicketFair("Airport","Koyembedu",25));
ticketFairList.push(new TicketFair("Alandur","Koyembedu",25));
ticketFairList.push(new TicketFair("Koyembedu","Egmore",32));
ticketFairList.push(new TicketFair("Vadapalani","Egmore",45));
ticketFairList.push(new TicketFair("Arumbakkam","Egmore",25));
ticketFairList.push(new TicketFair("Vadaplani","Koyembedu",25));
ticketFairList.push(new TicketFair("Arumbakkam","Koyembedu",16));



//Travel history details
let TravelIDIncrement=3000;
class Travel{
    TravelID:number;
    CardNumber:string;
    FromLocation:string;
    ToLocation:string;
    TravelCost:number;
    Status:string;
    Date:string;

    constructor(cardNumber:string,fromLocation:string,toLocation:string,travelCost:number,status:string,date:string)
    {
        this.TravelID=TravelIDIncrement++;
        this.CardNumber=cardNumber;
        this.FromLocation=fromLocation;
        this.ToLocation=toLocation;
        this.TravelCost=travelCost;
        this.Status=status;
        this.Date=date;
    }
}
let travelList:Array<Travel>=new Array<Travel>;

let CurrentUser;
let CurrentUserBalance;
let CurrentUserName;

function SigninButton()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="block";
    signup_page.style.display="none";
    menubar.style.display="none";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";


}

function SignIn()
{
    let flag:boolean=true;
    let cardnumber=(document.getElementById("cardNumber") as HTMLInputElement).value;
    let regex=/^CMRL\d{4}$/;
    if(regex.test(cardnumber))
        {
            for(let i=0;i<userList.length;i++)
                {
                    if(userList[i].CardNumber==cardnumber)
                    {
                        flag=false;
                        alert("Logged In Successfully");
                        CurrentUser=userList[i].CardNumber;
                        CurrentUserBalance=userList[i].Balance;
                        CurrentUserName=userList[i].UserName;
                        AfterSignin();
                    }
                }
                if(flag)
                    {
                        alert("Invalid Card Number");
                    }
        }

    
} 
function AfterSignin()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
}

function SignUpbutton()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="block";
    menubar.style.display="none";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
}

function SignUp()
{
    //let email=(document.getElementById("") as HTMLInputElement).value;
    let username=(document.getElementById("name") as HTMLInputElement).value;
    let passsword=(document.getElementById("pwd") as HTMLInputElement).value;
    let phone=(document.getElementById("phone") as HTMLInputElement).value;
    let BalanceAmount=(document.getElementById("balance") as HTMLInputElement).value;
    userList.push(new UserInfo(username,phone,parseInt(BalanceAmount)));
    Aftersignup();
}

function Aftersignup()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
        let signin_page=document.getElementById("signin_page") as HTMLDivElement;
        let signup_page=document.getElementById("signup_page") as HTMLDivElement;
        let menubar=document.getElementById("menubar") as HTMLDivElement;
        let home=document.getElementById("home") as HTMLDivElement;
        let topup=document.getElementById("topup") as HTMLDivElement;
        let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
        let travel=document.getElementById("travel") as HTMLDivElement;
        let history=document.getElementById("history") as HTMLDivElement;
        let count=document.getElementById("count") as HTMLDivElement;
        buttons.style.display="block";
        signin_page.style.display="none";
        signup_page.style.display="none";
        menubar.style.display="none";
        home.style.display="none";
        topup.style.display="none";
        FairDetails.style.display="none";
        travel.style.display="none";
        history.style.display="none";
        count.style.display="none";
}
function Home()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="block";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
    let greet=document.getElementById("greet") as HTMLLabelElement;
    greet.innerHTML=`<h2>Welcome ${CurrentUserName} </h2>`;

}

function Balance()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
    alert("your Current Balance is: "+CurrentUserBalance);
}

function RechargeFormDisplay()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="block";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
    
}
function Recharge()
{
    let topupamount=(document.getElementById("top_up") as HTMLInputElement).value;
    CurrentUserBalance=CurrentUserBalance+ +topupamount;
    alert(CurrentUserBalance);
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
}

let fairTableBody=document.querySelector("#fair tbody") as HTMLTableSectionElement;
const FairDetails = ()=>
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="block";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
    fairTableBody.innerHTML = "";

    ticketFairList.forEach((item) => {
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${item.FromLocation}</td>
        <td>${item.ToLocation}</td>
        <td>${item.Fair}</td>
        `;
        fairTableBody.appendChild(row);
    });
    
};

let travelBody=document.querySelector("#makeTravel tbody") as HTMLTableSectionElement;
const Travelbtn =()=>
{
    
    travelBody.innerHTML = "";
    ticketFairList.forEach((item)=>
        {
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${item.FromLocation}</td>
            <td>${item.ToLocation}</td>
            <td>${item.Fair}</td>
            <td><input type="button" onclick="DisplayCountForm('${item.FromLocation}','${item.ToLocation}')" value="BuyTickets"></td>
            `;
            travelBody.appendChild(row);
        });
        let buttons=document.getElementById("buttons") as HTMLDivElement;
        let signin_page=document.getElementById("signin_page") as HTMLDivElement;
        let signup_page=document.getElementById("signup_page") as HTMLDivElement;
        let menubar=document.getElementById("menubar") as HTMLDivElement;
        let home=document.getElementById("home") as HTMLDivElement;
        let topup=document.getElementById("topup") as HTMLDivElement;
        let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
        let travel=document.getElementById("travel") as HTMLDivElement;
        let history=document.getElementById("history") as HTMLDivElement;
        let count=document.getElementById("count") as HTMLDivElement;
        buttons.style.display="none";
        signin_page.style.display="none";
        signup_page.style.display="none";
        menubar.style.display="block";
        home.style.display="none";
        topup.style.display="none";
        FairDetails.style.display="none";
        travel.style.display="block";
        history.style.display="none";
        count.style.display="none";
        
    
};

let fromLocation;
let toLocation;
function confirmTravel()
{
    let quantity=(document.getElementById("getcount") as HTMLInputElement).value;
    for(let i=0;i<ticketFairList.length;i++)
        {
            if(ticketFairList[i].FromLocation==fromLocation && ticketFairList[i].ToLocation==toLocation)
            {
                let price=ticketFairList[i].Fair * +quantity;
                if(CurrentUserBalance>=price)
                    {
                        CurrentUserBalance=CurrentUserBalance-price;
                        alert("Tickets Booked");
                        let date=new Date();
                        let day=date.getDate();
                        let month=date.getMonth();
                        let year=date.getFullYear();
                        let currentDate=day +'/'+month+'/'+year;
                        travelList.push(new Travel(CurrentUser,ticketFairList[i].FromLocation,ticketFairList[i].ToLocation,ticketFairList[i].Fair,"Booked",currentDate));
                        
                    }
            }
        }
}

function DisplayCountForm(from : string,to:string)
{
    for(let i=0;i<ticketFairList.length;i++)
        {
            if(ticketFairList[i].FromLocation==from && ticketFairList[i].ToLocation==to)
                {
                    fromLocation=ticketFairList[i].FromLocation;
                    toLocation=ticketFairList[i].ToLocation;
                }
        }
        // let form=document.getElementById("count") as HTMLDivElement;
        // form.style.display="block";
        let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="block";
    history.style.display="none";
    count.style.display="block";
    

}

let historybody=document.querySelector("#travelHistory tbody") as HTMLTableSectionElement;
const TravelDetails =()=>
    {
        let buttons=document.getElementById("buttons") as HTMLDivElement;
        let signin_page=document.getElementById("signin_page") as HTMLDivElement;
        let signup_page=document.getElementById("signup_page") as HTMLDivElement;
        let menubar=document.getElementById("menubar") as HTMLDivElement;
        let home=document.getElementById("home") as HTMLDivElement;
        let topup=document.getElementById("topup") as HTMLDivElement;
        let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
        let travel=document.getElementById("travel") as HTMLDivElement;
        let history=document.getElementById("history") as HTMLDivElement;
        let count=document.getElementById("count") as HTMLDivElement;
        buttons.style.display="none";
        signin_page.style.display="none";
        signup_page.style.display="none";
        menubar.style.display="block";
        home.style.display="none";
        topup.style.display="none";
        FairDetails.style.display="none";
        travel.style.display="none";
        history.style.display="block";
        count.style.display="none";

        historybody.innerHTML="";
        travelList.forEach((item)=>
        {
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${item.FromLocation}</td>
            <td>${item.ToLocation}</td>
            <td>${item.TravelCost}</td>
            <td>${item.Date}</td>
            <td>${item.Status}</td>
            `;
            historybody.appendChild(row);
        });
    };

    function Signout()
    {
        let buttons=document.getElementById("buttons") as HTMLDivElement;
        let signin_page=document.getElementById("signin_page") as HTMLDivElement;
        let signup_page=document.getElementById("signup_page") as HTMLDivElement;
        let menubar=document.getElementById("menubar") as HTMLDivElement;
        let home=document.getElementById("home") as HTMLDivElement;
        let topup=document.getElementById("topup") as HTMLDivElement;
        let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
        let travel=document.getElementById("travel") as HTMLDivElement;
        let history=document.getElementById("history") as HTMLDivElement;
        let count=document.getElementById("count") as HTMLDivElement;
        buttons.style.display="block";
        signin_page.style.display="none";
        signup_page.style.display="none";
        menubar.style.display="none";
        home.style.display="none";
        topup.style.display="none";
        FairDetails.style.display="none";
        travel.style.display="none";
        history.style.display="none";
        count.style.display="none";
    }