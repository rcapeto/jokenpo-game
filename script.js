const btnPlay = document.querySelectorAll('button')[0];
const btnRestart = document.querySelectorAll('button')[1];
let divResult = document.querySelector('.result');
let inputPlayer = document.querySelector('input');
const options = ['PEDRA', 'PAPEL', 'TESOURA'];


btnPlay.addEventListener('click', e => {
   let number = Math.floor(Math.random() * options.length -1 );
   
   if(inputPlayer.value === '0' || 
      inputPlayer.value === '1' || 
      inputPlayer.value === '2'
   ){

      divResult.innerHTML = '';

      let pc = options[number];
      let player = options[inputPlayer.value];
      let result = null;

      if(pc === 'PEDRA'){
         switch(player){
            case 'PEDRA':
               result = 'EMPATE!'
               break;
            case 'PAPEL':
               result = 'VITÓRIA DO JOGADOR';
               break;
            case 'TESOURA':
               result = 'VITÓRIA DO COMPUTADOR';
               break;
         }
      } else if(pc === 'PAPEL'){
         switch(player){
            case 'PEDRA':
               result = 'VITÓRIA DO COMPUTADOR';
               break;
            case 'PAPEL':
               result = 'EMPATE!'
               break; 
            case 'TESOURA':
               result = 'VITÓRIA DO JOGADOR';
               break;
         }
      } else {
        switch(player){
            case 'TESOURA':
               result = 'EMPATE!';
               break;
            case 'PAPEL':
               result = 'VITÓRIA DO COMPUTADOR';
               break;
            case 'PEDRA':
               result = 'VITÓRIA DO JOGADOR';
               break;
        }
      }
      divResult.innerHTML = '<p>Calculando...</p>'

      let timer = setInterval(() => {
         divResult. innerHTML = `
            <p>O computador escolheu <strong>${pc}</strong></p>
            <p>O jogador escolheu <strong>${player}</strong></p>
            <p><strong>${result}</strong></p>
         `;
         clearInterval(timer);
      }, 2000)
      
   } else {
      alert('Por favor, digite um número de 0 a 2.')
   }

   inputPlayer.value = '';
});


btnRestart.addEventListener('click', e => {
   inputPlayer.value = '';
   divResult.innerHTML = '';
});