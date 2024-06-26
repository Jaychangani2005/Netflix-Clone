// document.addEventListener("DOMContentLoaded", function() {
//     const questions = document.querySelectorAll('.question');

//     questions.forEach(question => {
//         question.addEventListener('click', function() {
//             const answer = question.nextElementSibling;
//             const isActive = answer.classList.contains('show');

//             // Close all answers
//             closeAllAnswers();

//             if (!isActive) {
//                 // Open the clicked answer
//                 answer.classList.add('show');

//                 // Calculate the height of the answer content
//                 const height = answer.scrollHeight + 'px';

//                 // Set the max-height to the calculated height for smooth transition
//                 answer.style.maxHeight = height;
//             }
//         });
//     });


//     function closeAllAnswers() {
//         const answers = document.querySelectorAll('.answer');

//         answers.forEach(answer => {
//             answer.classList.remove('show');
//             answer.style.maxHeight = '0';
//         });


//     }
// });










document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('svg');
            const isActive = answer.classList.contains('show');

            // Close all answers and reset icons
            closeAllAnswers();

            if (!isActive) {
                // Open the clicked answer
                answer.classList.add('show');

                // Calculate the height of the answer content
                const height = answer.scrollHeight + 'px';

                // Set the max-height to the calculated height for smooth transition
                answer.style.maxHeight = height;

                // Rotate the icon
                icon.classList.add('rotate');
            }
        });
    });

    function closeAllAnswers() {
        const answers = document.querySelectorAll('.answer');
        const icons = document.querySelectorAll('.question svg');

        answers.forEach(answer => {
            answer.classList.remove('show');
            answer.style.maxHeight = '0';
        });

        icons.forEach(icon => {
            icon.classList.remove('rotate');
        });
    }
});
