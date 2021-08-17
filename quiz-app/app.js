 const quizData = [
{
    questions: 'What is the full form of HTML? ',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Makeup Language',
    c: 'Helios Markup Language',
    d: 'Hypertext Markup Literals',

    correct: 'a'
},
{
    questions: 'What is the full form of CSS? ',
    a: 'Cascading Sling Sheet',
    b: 'Castrol Style Sheet',
    c: 'Cascading Style Slot',
    d: 'Cascading Style Sheet',

    correct: 'd'

},
{
    questions: 'What are the basic languages used for Front-end Development? ',
    a: 'HTML , CSS,C++',
    b: 'JavaScript , HTML , python',
    c: 'React , Angular , jQuerry',
    d: 'HTML , CSS, JavaScript',

    correct: 'd'
},
{
    questions: "React is a JavaScript's.... ? " ,
    a: 'Framework',
    b: 'Liberary',
    c: 'Side Language',
    d: 'Dictionary',

    correct: 'b'
},
{
    questions: "Angular is JavaScript's... ? ",
    a: 'Liberary',
    b: 'Dictionary',
    c: 'Framework',
    d: 'Side Language',

    correct: 'c'
}

];

    const answerEls = document.querySelectorAll('.answer');
    const questionEl = document.getElementById('question');
    const quiz = document.getElementById('quiz');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBnt = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;



loadQuiz();

function loadQuiz(){

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.questions;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected(){
    
        let answer = undefined;

        answerEls.forEach((answerEl) => {
    if(answerEl.checked){
        answer =  answerEl.id;

}
    });
        return answer;
    
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
            });
}

submitBnt.addEventListener('click' , () => {
    
    const answer = getSelected();
    
    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {

            
        quiz.innerHTML = `<h2>You answered corrrectly at ${score} / ${quizData.length} question</h2>
        <button onClick = "location.reload()">Reloaod</button> `;
      
    }
    }

    
});