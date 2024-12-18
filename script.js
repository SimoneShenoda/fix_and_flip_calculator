function calculate() {
    // Get input values
    const arv = parseFloat(document.getElementById("arv").value);
    const purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    const rehabBudget = parseFloat(document.getElementById("rehabBudget").value);
    const holdingCosts = parseFloat(document.getElementById("holdingCosts").value);
    const loanInterestRate = parseFloat(document.getElementById("loanInterestRate").value);
    const otherCosts = parseFloat(document.getElementById("otherCosts").value);

    // Validation: Check if inputs are numeric
    if (isNaN(arv) || isNaN(purchasePrice) || isNaN(rehabBudget) || isNaN(holdingCosts) || isNaN(loanInterestRate) || isNaN(otherCosts)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Calculate Total Project Costs
    const loanInterest = (purchasePrice * loanInterestRate) / 100;
    const totalCosts = purchasePrice + rehabBudget + holdingCosts + loanInterest + otherCosts;

    // Calculate Profit
    const profit = arv - totalCosts;

    // Calculate Cash-on-Cash Return (assuming full cash investment)
    const cashReturn = profit / totalCosts * 100;

    // Display Results
    document.getElementById("totalCost").textContent = "$" + totalCosts.toFixed(2);
    document.getElementById("profit").textContent = "$" + profit.toFixed(2);
    document.getElementById("cashReturn").textContent = cashReturn.toFixed(2) + "%";
}
