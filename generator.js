function fortune() {
    let phrases = ['Yoday you are lucky!', 'Today you are unlucky...', 'Today, you are neither lucky or unlucky.']
    let numbers = [1,2,3,4,5,6,7,8,9,10]
    let advice = ['You should avoid cats', 'You should avoid showers', 'You should smell a red flower and count to 10']
    let randomPhrase  = phrases[Math.floor(Math.random() * phrases.length)]
    let randomNumber = numbers[Math.floor(Math.random()*numbers.length)]
    let randomAdvice = advice[Math.floor(Math.random()*advice.length)]

    return `${randomPhrase} Today's fortune number is: ${randomNumber}. ${randomAdvice}`
}

console.log(fortune())