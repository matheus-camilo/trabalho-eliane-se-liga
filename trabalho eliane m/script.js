document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let score = 0;
    let totalQuestions = 3;
    let unanswered = false;

    for (let i = 1; i <= totalQuestions; i++) {
        let answer = document.querySelector(`input[name="question${i}"]:checked`);
        if (!answer) {
            unanswered = true;
            break;
        }
        score += parseInt(answer.value);
    }

    if (unanswered) {
        alert("Por favor, responda todas as perguntas.");
    } else {
        document.getElementById("result").innerHTML = `Você acertou ${score} de ${totalQuestions} perguntas!`;
    }
});
