function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * (1 + rate / 100 * years) - principal;
    currentYear = new Date().getFullYear() + parseInt(years);
    
    i = document.getElementById("result");
    i.innerHTML = "If you deposit " + principal + ", <br />" +
        "at an interest rate of " + rate + "%.<br />" +
        "You will receive an amount of " + interest + ",<br />" +
        "in the year " + currentYear + ".";
}
        
function updateRate()
{
    rate = document.getElementById("rate").value;
    rateDisplay = document.getElementById("rate_display");
    rateDisplay.innerHTML = rate + "%";
}

function validatePrincipal() 
{
    principal = document.getElementById("principal").value;
    if (parseInt(principal) <= 0) 
    {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
    }
}