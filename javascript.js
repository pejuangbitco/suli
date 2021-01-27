(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  // const myQuestions = [
  //   {
  //     question: "Which of the following assumptions about early humans is expressed in the passage?",
  //     answers: {
  //       a: "They probably had extensive knowledge of plants.",
  //       b: "They thought there was no need to cultivate crops.",
  //       c: "They did not enjoy the study of botany",
  //       d: "They placed great importance on the ownership of property",
  //     },
  //     correctAnswer: "a"
  //   },
  //   {
  //     question: "What does the comment 'This is logical' in line 6 mean?",
  //     answers: {
  //       a: "There is no clear way to determine the extent of our ancestor’s knowledge of plants.",
  //       b: "It is not surprising that early humans had a detailed knowledge of plants.",
  //       c: "It is reasonable to assume that our ancestors behaved very much like people in preindustrial societies.",
  //       d: "Human knowledge of plants is well organized and very detailed",
  //     },
  //     correctAnswer: "b"
  //   },
  //   {
  //     question: "According to the passage, why has general knowledge of botany begun to fade?",
  //     answers: {
  //       a: "People no longer value plants as a useful resource.",
  //       b: "Botany is not recognized as a special branch of science.",
  //       c: "Research is unable to keep up with the increasing numbers of plants.",
  //       d: "Direct contact with a variety of plants has decreased.",
  //     },
  //     correctAnswer: "d"
  //   },
  //   {
  //     question: "In line 16, what is the author’s purpose in mentioning 'a rose, an apple, or an orchid'?",
  //     answers: {
  //       a: "To make the passage more poetic.",
  //       b: "To cite examples of plants that are attractive",
  //       c: "To give botanical examples that all readers will recognize.",
  //       d: "To illustrate the diversity of botanical life.",
  //     },
  //     correctAnswer: "c"
  //   },
  //   {
  //     question: "According to the passage, what was the first great step toward the practice of agriculture?",
  //     answers: {
  //       a: "The invention of agricultural implements and machinery",
  //       b: "The development of a system of names for plants.",
  //       c: "The discovery of grasses that could be harvested and replanted.",
  //       d: "The changing diets of early humans.",
  //     },
  //     correctAnswer: "c"
  //   },
  //   {
  //     question: "The relationship between botany and agriculture is similar to the relationship between zoology (the study of animals) and",
  //     answers: {
  //       a: "deer hunting",
  //       b: "bird watching",
  //       c: "sheep raising",
  //       d: "horseback riding",
  //     },
  //     correctAnswer: "c"
  //   },
  //   {question: "In which lines in the passage does the author describe the beneficial properties that plants have for humans?",
  //   answers:{a:"Lines 1-2",b:"Lines 7-9",c:"Lines 11-12",d:"Lines 14-16",},
  //   correctAnswer:"c"},
  //   {question: "The passage states which of the following about the first English people to be involved in establishing colonies in North America?",answers:{a:"They were requested to do so by Queen Elizabeth",b:"They were members of large trading companies.",c:"They were immediately successful",d:"They were acting on their own.",},correctAnswer:"d"},
  //   {question: "According to the passage, which of the following statements about Sir Humphrey Gilbert is true? ",answers:{a:"He never settled in North America.",b:"His trading company was given a patent by the queen.",c:"He fought the Spanish twice",d:"He died in 1587",},correctAnswer:"a"},
  //   {question: "When did Sir Walter Raleigh's initial expedition set out for North America?",answers:{a:"1577",b:"1579",c:"1582",d:"1584",},correctAnswer:"d"},

  // ];
  const myQuestions = [
    { question:"",answers:{a:"The woman and the man have plans to eat out together.",b:"The woman would prefer to stay home this evening.",c:"The man has changed his mind about the new restaurant.",d:"The man is sorry he cannot join the woman for dinner.",},correctAnswer:"a"},

{ question:"",answers:{a:"A plane trip. ",b:"A rental car.",c:"A hotel room. ",d:"Concert tickets.",},correctAnswer:"a"},

{ question:"",answers:{a:"The  woman     did not remember her appointment.",b:"The woman needs to get a calendar.",c:"The appointment must be changed to a different day.",d:"The calendar shows the wrong month.",},correctAnswer:"d"},

{ question:"",answers:{a:"The woman should continue driving.",b:"They will arrive late for dinner.",c:"He forgot to make reservations.",d:"He is not sure what is wrong with the car.",},correctAnswer:"b"},

{ question:"",answers:{a:"She did not realize that their team had won.",b:"Their team nearly lost the game.",c:"She called to find out the score of the game.",d:"Their team usually wins its games.",},correctAnswer:"b"},

{ question:"",answers:{a:"Join him and Mary at the movie. ",b:"Ask Mary what she is doing tonight.",c:"Invite a group of friends to go to the movie.",d:"Tell Mary about the movie.",},correctAnswer:"a"},

{ question:"",answers:{a:"Professor Campbell changed the conference time.",b:"He is planning to stay until the conference is finished",c:"He will not attend the concert. ",d:"He will wait for the woman.",},correctAnswer:"b"},

{ question:"",answers:{a:"She recently purchased laundry detergent.",b:"She will buy some detergent for the man.",c:"The Laundromat is around the corner.",d:"The man can buy detergent at the store.",},correctAnswer:"d"},

{ question:"",answers:{a:"It is next to the Holiday Motel.",b:"It is nicer than the Holiday Motel.",c:"It is very inexpensive.",d:"It is a little farther than the Holiday Motel.",},correctAnswer:"b"},

{ question:"",answers:{a:"She does not believe it will snow. ",b:"Snow in October is unusual.",c:"Canadian winters are rather long.",d:"Winter is her favorite season.",},correctAnswer:"c"},

{ question:"",answers:{a:"He lost his wallet on a trip to Germany.",b:"His private lessons did not help him.",c:"His German tutor charges a reasonable fee.",d:"He plans to continue taking lessons.",},correctAnswer:"b"},

{ question:"",answers:{a:"The committee has just begun to write the report.",b:"The report will be short.",c:"The committee members have just become acquainted.",d:"The report is finished except for the introduction.",},correctAnswer:"a"},

{ question:"",answers:{a:"They should play another time.",b:"They will probably have to play in the gym.",c:"He prefers to play in the gym",d:"It is not supposed to rain tomorrow.",},correctAnswer:"b"},

{ question:"",answers:{a:"Type the letter as it is.",b:"Change some wording in his letter.",c:"Send the letter without typing it.",d:"Check to make sure his facts are correct.",},correctAnswer:"b"},

{ question:"",answers:{a:"The woman should call the professor the next day.",b:"He is canceling the choir rehearsal because of illness.",c:"The woman will feel better in a day or two.",d:"He will turn up the heat in the choir room.",},correctAnswer:"b"},

{ question:"",answers:{a:"They should take another route to the bank.",b:"They turned onto the wrong road.",c:"The man will get to the bank before it closes.",d:"The bank will open soon.",},correctAnswer:"c"},

{ question:"",answers:{a:"Go out to eat when the museum closes.",b:"Check that the museum cafeteria is open.",c:"Leave the museum temporarily",d:"Meet each other later in the day.",},correctAnswer:"c"},

{ question:"",answers:{a:"The woman should have thrown out the newspapers herself.",b:"He does not know where her paper is.",c:"The woman's paper is in the trash.",d:"He does not have time to help her look for her paper.",},correctAnswer:"c"},

{ question:"",answers:{a:"The woman can make her call tomorrow.",b:"There is a problem with the woman's telephone.",c:"The airline's offices are closed.",d:"He does not know what the problem could be.",},correctAnswer:"a"},

{ question:"",answers:{a:"He is very hungry.",b:"He has made plans to eat with someone else.",c:"He did not like what he ate for lunch.",d:"He will go with the woman.",},correctAnswer:"d"},

{ question:"",answers:{a:"She is proud of the man.",b:"She  does  not  want  to see the man'stest.",c:"She also got a good grade.",d:"She has not taken the test yet.",},correctAnswer:"b"},

{ question:"",answers:{a:"He will tell the woman what to do.",b:"The meeting will have to be postponed.",c:"He will get the job done if he gets some instruction.",d:"He will need to throw away most of the papers.",},correctAnswer:"c"},

{ question:"",answers:{a:"Find another sociology course. ",b:"Look for a job in the sociology department.",c:"Ask someone to take notes for her on Friday.",d:"Change her work schedule.",},correctAnswer:"a"},

{ question:"",answers:{a:"She can help the man until lunchtime.",b:"She cannot read the applications until after her class.",c:"She has a class after lunch.",d:"She also plans to apply to graduate school.",},correctAnswer:"b"},

{ question:"",answers:{a:"Mary will trim her hedge.",b:"Phil has a better chance of winning.",c:"Mary will win the election.",d:"Phil will sit on the ledge.",},correctAnswer:"c"},

{ question:"",answers:{a:"He thinks the woman's computer is broken.",b:"He worked on the woman's computer for too long.",c:"He sometimes gets headaches after doing computer work.",d:"He needs to take a longer break.",},correctAnswer:"c"},

{ question:"",answers:{a:"The library closed earlier than she expected.",b:"She could not find a birthday present.",c:"She picked Jack up at the golf course.",d:"The bookstore did not have what she was looking for.",},correctAnswer:"d"},

{ question:"",answers:{a:"The equipment has already been locked up.",b:"The woman should be more careful with the equipment.",c:"He knows how to operate the equipment.",d:"He will put the equipment away.",},correctAnswer:"d"},

{ question:"",answers:{a:"The man did not give the woman the notes she needed.",b:"The man's notes were hard to understand.",c:"The woman wants to borrow the man's sociology notes.",d:"The woman has to organize her psychology notes.",},correctAnswer:"a"},

{ question:"",answers:{a:"The man will find a job if he continues to look.",b:"The man should look for a job in a different field.",c:"The man can get a job where the woman works.",d:"The man should keep his current job.",},correctAnswer:"a"},

{ question:"",answers:{a:"She will be able to join the economics seminar.",b:"She has a new printer for her computer.",c:"She finished paying back her loan.",d:"She got an A on her term paper.",},correctAnswer:"b"},

{ question:"",answers:{a:"The importance of paying back loans promptly.",b:"A way to help people improve their economic conditions.",c:"Using computers to increase business efficiency.",d:"The expansion of international business.",},correctAnswer:"b"},

{ question:"",answers:{a:"It is the topic of his term paper.",b:"He would like to find a job there.",c:"His economics professor did research work there.",d:"Microcredit programs have been very successful there.",},correctAnswer:"d"},

{ question:"",answers:{a:"Cancel her credit card.",b:"Sign up for the economics seminar.",c:"Do research on banks in Asia.",d:"Type the man's term paper.",},correctAnswer:"d"},

{ question:"",answers:{a:"The life of a well-known Canadian architect.",b:"The architectural design of a new museum.",c:"The variety of museums in Washington, D.C.",d:"The changing function of the modern museum.",},correctAnswer:"b"},

{ question:"",answers:{a:"Both were designed by the same architect.",b:"Both are located in Washington, D.C.",c:"Both feature similar exhibits.",d:"Both were built around a central square.",},correctAnswer:"a"},

{ question:"",answers:{a:"A classical temple.",b:"A well-known museum.",c:"A modern office building.",d:"A natural landscape.",},correctAnswer:"d"},

{ question:"",answers:{a:"Traditional views on the purpose of a museum.",b:"Traditional values of Native Americans.",c:"Traditional notions of respect for elected leaders.",d:"Traditional forms of classical architecture.",},correctAnswer:"b"},

{ question:"",answers:{a:"They are examples of the usual sequence of observation and explanation.",b:"They provide evidence of inaccurate scientific observation.",c:"Their discovery was similar to that of the neutrino.",d:"They were subjects of 1995 experiments at Los Alamos.",},correctAnswer:"a"},

{ question:"",answers:{a:"Its mass had previously been measured.",b:"Its existence had been reported by Los Alamos National Laboratory.",c:"Scientists were looking for a particle with no mass.",d:"Scientists were unable to balance equations of energy without it.",},correctAnswer:"d"},

{ question:"",answers:{a:"That it carries a large amount of energy.",b:"That it is a type of electron.",c:"That it is smaller in size than previously thought.",d:"That it has a tiny amount of mass.",},correctAnswer:"d"},

{ question:"",answers:{a:"The clearing of New England forests.",b:"The role of New England trees in British shipbuilding.",c:"The development of the shipbuilding industry in New England.",d:"The role of the British surveyor general in colonizing New England.",},correctAnswer:"b"},

{ question:"",answers:{a:"Law.",b:"Mathematics.",c:"History.",d:"Engineering.",},correctAnswer:"c"},

{ question:"",answers:{a:"Sugar maple.",b:"Oak.",c:"White pine.",d:"Birch.",},correctAnswer:"d"},

{ question:"",answers:{a:"Its width. ",b:"Its height.",c:"Its straightness.",d:"Its location.",},correctAnswer:"a"},

{ question:"",answers:{a:"M",b:"%",c:"K",d:"->",},correctAnswer:"d"},

{ question:"",answers:{a:"How they swim long distances.",b:"How they got their name.",c:"How they hunt.",d:"How they solve problems.",},correctAnswer:"d"},

{ question:"",answers:{a:"By changing its appearance.",b:"By imitating signals that the other spiders send.",c:"By spinning a large web.",d:"By imitating insects caught in a web.",},correctAnswer:"b"},

{ question:"",answers:{a:"Avoid attacks by other spiders.",b:"Cross some water.",c:"Jump to the edge of the tray.",d:"Spin a long thread.",},correctAnswer:"b"},

{ question:"",answers:{a:"It would keep trying to reach the rock the same way.",b:"It would try to reach the rock a different way.",c:"The scientists would move the spider to the rock.",d:"The scientists would place another spider in the tray",},correctAnswer:"b"},

  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();


