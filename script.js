let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const setMessage = message => document.querySelector('.message').textContent = message;
const setScore = score => document.querySelector('.score').textContent = score;
const setStyle = (bgColor, width) => {
    document.querySelector('body').style.backgroundColor = bgColor;
    document.querySelector('.number').style.width = width;
};

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    setMessage('Start guessing...');
    setScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    setStyle("#222", "15rem");
});

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    !guess ? setMessage('No number') :
        guess === number ? (
            setMessage('Correct number 🥳'),
            setStyle("#60b347", "30rem"),
            document.querySelector('.number').textContent = number,
            score > highscore && (highscore = score, document.querySelector('.highscore').textContent = highscore)
        ) :
            guess !== number ? (
                score > 1 ? (
                    setMessage(guess > number ? 'Too high' : 'Too low'),
                    setScore(--score)
                ) : (
                    setMessage('You lost the game'),
                    setScore(0)
                )
            ) : null;
});

// // console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = 'correct number'
// // document.querySelector('.number').textContent = 12
// // document.querySelector('.score').textContent = 12
// // document.querySelector('.guess').value = 13
// let number = Math.trunc(Math.random() * 20) + 1
// let score = 20;
// let highscore = 0;
// document.querySelector('.again').addEventListener('click', () => {
//     score = 20;
//     number = Math.trunc(Math.random() * 20) + 1
//     document.querySelector('.message').textContent = 'start guessing...'
//     document.querySelector('.score').textContent = score
//     document.querySelector('.number').textContent = '?'
//     document.querySelector('.guess').value = ''
//     document.querySelector('body').style.backgroundColor = "#222"
//     document.querySelector('.number').style.width = "15rem"
// })
// document.querySelector('.check').addEventListener('click', () => {
//     const guess = Number(document.querySelector('.guess').value)
//     console.log(guess);
//     // when there is no input
//     if (!guess) {
//         document.querySelector('.message').textContent = 'no number'

//         // if winsss
//     } else if (guess === number) {
//         document.querySelector('.message').textContent = 'yes vooo🥳'
//         document.querySelector('body').style.backgroundColor = "#60b347"
//         document.querySelector('.number').textContent = number
//         document.querySelector('.number').style.width = "30rem"

//         if (score > highscore) {
//             highscore = score
//             document.querySelector('.highscore').textContent = highscore;
//         }

//     } else if (guess !== number) {

//     }

//     else if (guess > number) {

//         if (score > 0) {
//             document.querySelector('.message').textContent = 'too high'
//             score = score - 1
//             document.querySelector('.score').textContent = score
//         } else {
//             document.querySelector('.message').textContent = 'you lost the game'
//             document.querySelector('.score').textContent = 0
//         }
//     } else if (guess < number) {

//         if (score > 0) {
//             document.querySelector('.message').textContent = 'too low'
//             score = score - 1
//             document.querySelector('.score').textContent = score
//         } else {
//             document.querySelector('.message').textContent = 'you lost the game'
//             document.querySelector('.score').textContent = 0
//         }
//     }

// })

