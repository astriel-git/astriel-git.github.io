// Get the submit button element

const submitButton = document.getElementById('submit')

// Add a click event listener to the submit button
submitButton.addEventListener('click', () => {


    const birthMonth = parseInt(document.getElementById('month').value);
    const birthDay = parseInt(document.getElementById('day').value);
    const birthYear = parseInt(document.getElementById('year').value);

    // Calculate the user's greek sign
    const greekSign = calculateGreek(birthMonth, birthDay);
  
    // Calculate the user's Chinese zodiac sign
    const chineseSign = calculateChinese(birthYear);
  
    // Display the results
    document.getElementById('result1').textContent = greekSign;
    document.getElementById('result2').textContent = chineseSign;
  });



// Function to calculate the user's old and new zodiac signs
function calculateGreek(month, day) {
    const oldZodiacSigns = [    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'  ];
    
    let oldGreekSign;
    if (month == 3 && day >= 21 || month == 4 && day <= 19) {
      oldGreekSign = oldZodiacSigns[0]; // Aries (Mar 21 - Apr 19)
    } else if (month == 4 && day >= 20 || month == 5 && day <= 20) {
      oldGreekSign = oldZodiacSigns[1]; // Taurus (Apr 20 - May 20)
    } else if (month == 5 && day >= 21 || month == 6 && day <= 20) {
      oldGreekSign = oldZodiacSigns[2]; // Gemini (May 21 - Jun 20)
    } else if (month == 6 && day >= 21 || month == 7 && day <= 22) {
      oldGreekSign = oldZodiacSigns[3]; // Cancer (Jun 21 - Jul 22)
    } else if (month == 7 && day >= 23 || month == 8 && day <= 22) {
      oldGreekSign = oldZodiacSigns[4]; // Leo (Jul 23 - Aug 22)
    } else if (month == 8 && day >= 23 || month == 9 && day <= 22) {
      oldGreekSign = oldZodiacSigns[5]; // Virgo (Aug 23 - Sep 22)
    } else if (month == 9 && day >= 23 || month == 10 && day <= 22) {
      oldGreekSign = oldZodiacSigns[6]; // Libra (Sep 23 - Oct 22)
    } else if (month == 10 && day >= 23 || month == 11 && day <= 21) {
      oldGreekSign = oldZodiacSigns[7]; // Scorpio (Oct 23 - Nov 21)
    } else if (month == 11 && day >= 22 || month == 12 && day <= 21) {
      oldGreekSign = oldZodiacSigns[8]; // Sagittarius (Nov 22 - Dec 21)
    } else if (month == 12 && day >= 22 || month == 1 && day <= 19) {
      oldGreekSign = oldZodiacSigns[9]; // Capricorn (Dec 22 - Jan 19)
    } else if (month == 1 && day >= 20 || month == 2 && day <= 18) {
      oldGreekSign = oldZodiacSigns[10]; // Aquarius (Jan 20 - Feb 18)
    } else {
      oldGreekSign = oldZodiacSigns[11]; // Pisces (Feb 19 - Mar 20)
    }
  
    return oldGreekSign;
  }

// Function to calculate the user's Chinese zodiac sign
    function calculateChinese(year) {
        const animals = [
        'Monkey', 'Rooster', 'Dog', 'Pig',
        'Rat', 'Ox', 'Tiger', 'Rabbit',
        'Dragon', 'Snake', 'Horse', 'Sheep'
        ];
        return animals[year % 12];
    }