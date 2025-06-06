  let score=JSON.parse(localStorage.getItem('score')) || {
                    win: 0,
                    loss:0,
                    ties:0
                };
       
               updatescore();  
       /* if(score == null)
            {
                score={
                    win: 0,
                    loss:0,
                    ties:0
                };
            }
                    */
        function play(usermove)
        {
            let computermove=["rock","paper","Scissors"];
       let move=computermove[Math.floor(Math.random()*3)];
       
         if( move==='paper' && usermove==='rock'){
                 result='YOU LOSE !';
                 score.loss++;
         }       
            else if( move==='Scissors' && usermove==='rock'  )
                {
            result='YOU WIN !';
            score.win++;
         }
            else if( move==='Scissors' && usermove==='paper'  )
            {
                 result='YOU LOSE !';
                 score.loss++;
         }
          else if( move==='rock' && usermove==='paper'  )
           {
            result='YOU WIN !';
            score.win++;
         }    
            else if( move==='paper' && usermove==='Scissors'  )
            {
            result='YOU WIN !';
            score.win++;
         }
           else if( move==='rock' && usermove==='Scissors'  )
            {
                 result='YOU LOSE !';
                 score.loss++;
         }
            else if( move===usermove){
                    result=' IT IS A TIE';
                    score.ties++;
            }
            
            localStorage.setItem('score', JSON.stringify(score));

            updatescore();

           document.querySelector('.result').innerHTML=result;
           let color=document.querySelector('.result');
           color.classList.remove('win', 'lose', 'tie');

            if(result === 'YOU WIN !')
            {
                
                color.classList.add('win');

            }else if(result === 'YOU LOSE !') {

               
                color.classList.add('lose');

            }else if(result === ' IT IS A TIE') {

                
                color.classList.add('tie');
            }

           document.querySelector('.move').innerHTML=`  You  <img src="image/${usermove}.png" class="otherimg"/>
             <img src="image/${move}.png" class="otherimg"/> 
             Computer `;
             console.log(typeof(move));

            
        }
       

        function resetscore(){
            score.win=0;
            score.loss=0;
            score.ties=0;
        }
        function updatescore(){
             document.querySelector('.score')
        .innerHTML=`Wins:${score.win} Losses:${score.loss} Ties:${score.ties}`;
        }
