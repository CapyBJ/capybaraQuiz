const correctAnswers=['A','B','B','B','A'];
const form=document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  let score=0;
  const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]
  console.log(userAnswers);
  userAnswers.forEach((answer,index)=>{
    if(answer == correctAnswers[index]){
      score+=20;
    }
  });
  // const result=document.querySelector('.result-para');
  const resultDisplay=document.querySelector('.result');
  // const submitBtn=document.querySelector('.submit_btn');
  // submitBtn.setAttribute('class','submit_btn text-center d-none');
  // console.log('display:',resultDisplay); 
  // resultDisplay.classList.remove('d-none');
  // console.log(`You are ${score}% Capybara`);
  scrollTo({ top: 0, behavior: 'smooth' });
  let output=0;
  const timer= setInterval(() => {
    resultDisplay.innerHTML=`<p style="margin-top:10px;">You are <span class="text-white"> ${output}% </span> Capybara hehe</p>`;
    if(output === score){
      clearInterval(timer);
    }else{
      output++;
    }
  },25);
});