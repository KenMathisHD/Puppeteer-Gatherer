const puppeteer = require('puppeteer');

var currentFirstName;
var currentLastName;

(async () => {
  for (let i = 0; i < 155; i++) {
    // Launch the browser
    const browser = await puppeteer.launch({
      headless: true
    });

    // Open a new page
    const page = await browser.newPage();

    // Navigate to the desired URL
    await page.goto('https://woobox.com/3a7r6e');

    // Target and trigger the click event on the button with data-id="33"
    await page.evaluate(() => {
      const button = document.querySelector('button[data-id="33"]');
      button.click();
    });

    function generateRandomFirstName() {
      // Generate and return a random first name
      var firstNames = [
        "Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Charlotte", "William", "Sophia",
        "James", "Amelia", "Benjamin", "Isabella", "Lucas", "Mia", "Henry", "Harper", "Alexander", "Evelyn",
        "Michael", "Abigail", "Daniel", "Emily", "Matthew", "Elizabeth", "Joseph", "Sofia", "David", "Avery",
        "Jackson", "Ella", "Samuel", "Scarlett", "Sebastian", "Grace", "Carter", "Chloe", "Owen", "Victoria",
        "Wyatt", "Penelope", "Jack", "Riley", "Luke", "Lily", "Gabriel", "Zoey", "Anthony", "Layla"
      ];
      var randomIndex = Math.floor(Math.random() * firstNames.length);
      currentFirstName = firstNames[randomIndex];
      return currentFirstName;
    }

    function generateRandomLastName() {
      // Generate and return a random last name
      var lastNames = [
        "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
        "Anderson", "Thomas", "Jackson", "White", "Harris", "Clark", "Lewis", "Young", "Hall", "Walker",
        "Allen", "King", "Wright", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter",
        "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins",
        "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey"
      ];
      var randomIndex = Math.floor(Math.random() * lastNames.length);
      currentLastName = lastNames[randomIndex];
      return currentLastName;
    }

    function generateRandomEmail() {
      // Generate and return a random email address
      var domains = ["outlook.com", "gmail.com", "yahoo.com", "live.com", "icloud.com", "hotmail.com"];
      var firstLetter = currentFirstName.charAt(0);
      var randomIndex = Math.floor(Math.random() * domains.length);
      return firstLetter + currentLastName + '@' + domains[randomIndex];
    }

    var randomFirstName = generateRandomFirstName();
    var randomLastName = generateRandomLastName();
    var randomEmail = generateRandomEmail();

    // Fill in the first name field
    await page.type('#custom_2_first', String(randomFirstName));

    // Fill in the last name field
    await page.type('#custom_2_last', randomLastName);

    // Fill in the email field
    await page.type('#email_id', randomEmail);

    // Target and trigger the click event on the submit button
    await page.evaluate(() => {
      const submitButton = document.querySelector('input[type="submit"][id="actionbutton"]');
      submitButton.click();
    });

    // Wait for a moment to observe the result
    await page.waitForTimeout(2000);

    // Close the browser
    await browser.close();
  }
})();
