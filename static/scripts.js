function countFunction() {
    var company = document.getElementById("companyInput").value;
    var unit_price = document.getElementById("unitPriceInput").value;
    var funds = document.getElementById("fundsInput").value;

    var companyOutput = document.getElementById("companyName");
    companyOutput.textContent = company;

    var unitPriceOutput = document.getElementById("unitPrice");
    unitPriceOutput.textContent = unit_price;

    var fundsOutput = document.getElementById("funds");
    fundsOutput.textContent = funds;

    // Pobierz element <select> na podstawie jego ID
    var selectElement = document.getElementById("percents");

    // Pobierz wybraną opcję (zwraca obiekt opcji)
    var selectedOption = selectElement.options[selectElement.selectedIndex];

    // Pobierz wartość wybranej opcji
    var selectedValue = selectedOption.value;
 
    // Obliczamy liczbę akcji
    var numShares = funds / unit_price;
    var numSharesOutput = document.getElementById("numShares");
    numSharesOutput.textContent = Math.floor(numShares);

    // Obliczamy szacowany zysk
    var fundsNumber = Number(funds);
    var estimatedProfit = (selectedValue / 100) * fundsNumber;
    var sum = Number(estimatedProfit.toFixed(2));
    var infoText = document.getElementById("infoText");
    infoText.textContent = "Szacowany " + selectedValue +" % zysk: " + sum + " PLN" ;

    var infoAll = document.getElementById("infoTextAll");
   
    sumOfAll = fundsNumber + sum
    infoAll.textContent = "Całość inwestycji: " + sumOfAll.toFixed(2) + "PLN";
    

    var info = document.getElementById("countedInfo");    
    info.hidden = false;
    console.log("działa");

}