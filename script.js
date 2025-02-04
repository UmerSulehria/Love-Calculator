document.getElementById('love-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    var name = document.getElementById('name').value;
    var crushName = document.getElementById('crush-name').value;

    // Capitalize first letter and lowercase the rest
    var formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    var formattedCrushName = crushName.charAt(0).toUpperCase() + crushName.slice(1).toLowerCase();

    // Generate a random love percentage
    var lovePercentage = Math.floor(Math.random() * 100) + 1;

    // Display the result
    var result = document.getElementById('result');
    result.textContent = formattedName + ", your love with " + formattedCrushName + " is " + lovePercentage + "%";
});
