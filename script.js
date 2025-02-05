const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll(".price");
	let totalSum = 0;
	for(let v of prices){
		totalSum += parseInt(v.innerText)
	}
	let table = document.querySelector(".table");
	let row = document.createElement("tr");
	// let cell1 = document.createElement("td");
	let cell2 = document.createElement("td");

	// cell1.innerText = "Total";
	cell2.innerText = totalSum;

	// row.append(cell1);
	row.append(cell2);
	table.append(row);
};

getSumBtn.addEventListener("click", getSum);

