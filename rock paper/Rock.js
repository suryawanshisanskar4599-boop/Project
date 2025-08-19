 let computerMove;

    
    const Score = JSON.parse(localStorage.getItem("Score")) || { win: 0, loose: 0, tie: 0 };

    
    function f3() {
        alert(`Your score is Win: ${Score.win}, Loose: ${Score.loose}, Tie: ${Score.tie}`);
    }

    
    function f2() {
        Score.loose = 0;
        Score.win = 0;
        Score.tie = 0;
        localStorage.removeItem("Score");
        f4(); // update UI
    }

    function autoPlaycheck() {
      const Subscribe = document.querySelector('.autoPlay');

      if (Subscribe.innerText === 'Auto Play') {
         document.
         Subscribe.innerHTML = 'Stop';
      }
      else {
         Subscribe.innerHTML = 'Auto Play';
      }
   }

    function autoPlay (playerMove) {
       setInterval(function (){

        const Number = Math.random();


        if (Number < 1 / 3) {
            computerMove = 'Rock';
        } else if (Number < 2 / 3) {
            computerMove = 'Paper';
        } else {
            computerMove = 'Scissors';
        }

        f1(computerMove);
       } , 1000);
  
    }
    function f1(playerMove) {
        const Number = Math.random();


        if (Number < 1 / 3) {
            computerMove = 'Rock';
        } else if (Number < 2 / 3) {
            computerMove = 'Paper';
        } else {
            computerMove = 'Scissors';
        }

        let result;

      
        if (computerMove === playerMove) {
            result = 'Tie';
            Score.tie++;
        }

        if (playerMove === 'Scissors') {
            if (computerMove === 'Rock') {
                result = 'Loose';
                Score.loose++;
            } else if (computerMove === 'Paper') {
                result = 'win';
                Score.win++;
            }
        }

        if (playerMove === 'Rock') {
            if (computerMove === 'Scissors') {
                result = 'win';
                Score.win++;
            } else if (computerMove === 'Paper') {
                result = 'Loose';
                Score.loose++;
            }
        }

        if (playerMove === 'Paper') {
            if (computerMove === 'Scissors') {
                result = 'Loose';
                Score.loose++;
            } else if (computerMove === 'Rock') {
                result = 'win';
                Score.win++;
            }
        }

        
        f4();

        
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `Your 
        <img src="${playerMove}-emoji.png" style="height: 80px;" alt="${playerMove}">
        &nbsp;vs&nbsp;
        Computer 
        <img src="${computerMove}-emoji.png" style="height: 80px;" alt="${computerMove}">
    `;

        console.log(`You Picked ${playerMove} and computer picked ${computerMove} — You ${result}`);

       
        localStorage.setItem("Score", JSON.stringify(Score));
    }

    
    function f4() {
        document.querySelector('.js-score').innerHTML = `Your Score  Win: ${Score.win}, Loose: ${Score.loose}, Tie: ${Score.tie}`;
    }

   
    function f5(playerMove, computerMove) {
        document.querySelector('.js-result').innerHTML = `Your 
        <img src="${playerMove}-emoji.png" style="height: 80px;" alt="${playerMove}">
        &nbsp;vs&nbsp;
        Computer 
        <img src="${computerMove}-emoji.png" style="height: 80px;" alt="${computerMove}">
    `;
    }


    console.log(result);
   
    f4();