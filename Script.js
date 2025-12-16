        let a;
        let b='';
        let r='';
        let score= JSON.parse(localStorage.getItem('score'))||( 
                {
                    Wins: 0,
                    Losses: 0,
                    Ties: 0   
                }
            );

        updateScore();
            
        function randnum(){
            a = Math.random();
   
            if (a===0 && a<0.33)
                {
                    b='Rock';
                }
            else if (a>0.33 && a<0.66)
                {
                    b='Paper';
                }
            else if (a>0.66 && a<1)
                {
                    b='Scissors';
                }
            return b;
            }

            function result(move)
            {
                
                if (move==='Rock'){
                    
                    if (b==='Rock')
                    {
                        r='Tie';
                    }
                    else if(b==='Paper')
                    {
                        r='You Lose';
                    }
                    else if (b==='Scissors')
                    {
                        r='You Win';
                    }
                }

                else if (move==='Paper'){
                    if (b==='Rock'){
                        r='You Win';
                    }
                    else if(b==='Paper'){
                        r='Tie';
                    }
                    else if (b==='Scissors'){
                        r='You Lose';
                    }
                }

                else if(move==='Scissors'){
                    if (b==='Rock'){
                        r='You Lose';
                    }
                    else if(b==='Paper'){
                        r='You Win';
                    }
                    else if (b==='Scissors'){
                        r='Tie';
                    }
                }

                if (r==="You Win"){
                    score.Wins += 1;
                     }
                else if(r==='You Lose'){
                    score.Losses += 1;
                }
                else if (r==='Tie'){
                    score.Ties += 1;
                }
           
                
                localStorage.setItem('score', JSON.stringify(score));

                updateScore();

            document.querySelector('.result-card').
            innerHTML=`Result is  " ${r} "`;
                
           
            document.querySelector('.move-card').innerHTML=
            `You picked <img class="img-result" src="./Images/${move}-emoji.png">
            Computer Picked <img class="img-result" src="./Images/${b}-emoji.png">`;
            }
        

        
       function updateScore(){
            document.querySelector('.score-card').innerHTML=`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
       }