const body = document.body;

const btn = document.getElementById('startBtn');
const btnLabelStart = document.getElementById('btnLabelStart');
const btnLabelTake = document.getElementById('btnLabelTake');

const blobTop = document.getElementById('blobTop');
const blobBottom = document.getElementById('blobBottom');


const questionAnswerMap = {
    1: 'c',
    2: 'a',
    3: 'b',
}


/*
 * on start,
 */ 

btn.addEventListener('click', () => {

    const state = body.getAttribute('data-state');
    const btnState = body.getAttribute('btn-state');
    
    // first click - start
    if (state === 'initial' && btnState === 'start') {
        btn.classList.add('started');
        blobTop.classList.add('active');
        blobBottom.classList.add('active');

        // next - quiz
        body.setAttribute('btn-state', 'quiz');
    }

    


    // second click - quiz
    else if (state === 'initial' && btnState === 'quiz') {

        // next - q1
        body.setAttribute('data-state', 'started');
        body.setAttribute('btn-state', 'started');
        body.setAttribute('question-num', 'q1');
    
    }

});






/*
 * on select answer
 */
document.querySelectorAll('.obox-option').forEach(opt => {
  opt.addEventListener('click', (e) => {

    const questionIndex = opt.getAttribute('question-index');
    const questionAnswer = questionAnswerMap[questionIndex];
    const userSelect = opt.getAttribute('data-option');


    // correct
    if (questionAnswer === userSelect) {
        
      opt.classList.add('correct');

      setTimeout(() => {        
        // last
        if (questionIndex === "3") {
          body.setAttribute('data-state', 'finished');
          body.setAttribute('btn-state', 'finished');
          body.setAttribute('question-num', 'q0');
        }
  
        // other q
        else {
          body.setAttribute('question-num', 'q' + (parseInt(questionIndex)+1));
        }
      }, 300);



    } 
    
    // wrong
    else {
      opt.classList.add('wrong');     
    }

  });
});

