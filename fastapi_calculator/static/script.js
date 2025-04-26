async function calculate(operation) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        alert("Please enter both numbers!");
        return;
    }

    const response = await fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ num1, num2, operation })
    });

    const data = await response.json();
    document.getElementById("result").innerText = "Result: " + data.result;
}
