function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * (1 + rate / 100 * years) - principal;
    currentYear = new Date().getFullYear() + parseInt(years);
    
    i = document.getElementById("result");
    i.innerHTML = "If you deposit <span>" + principal + "</span>, <br />" +
        "at an interest rate of <span>" + rate + "%</span>.<br />" +
        "You will receive an amount of <span>" + interest + "</span>,<br />" +
        "in the year <span>" + currentYear + "</span>.";
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
    if (!principal || parseInt(principal) <= 0) 
    {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
    }
}