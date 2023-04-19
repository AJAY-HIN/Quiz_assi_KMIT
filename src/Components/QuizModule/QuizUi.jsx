import React, { useState } from 'react';
import { questions } from '../Data/questions';
import {
  Button,
  CompletedText,
  Container,
  Div,
  FLexDiv,
  OptionsBtn,
  OptionsConatiner,
  Progress,
  Question,
  QuestionNumber,
  QuizContainer,
  StarBox,
  Text,
  Title,
} from './QuizUi.style.js';
import Star from '../Star/Star';
import { useEffect } from 'react';
const QuizUi = () => {
  const [questionData, setQuestionData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [notification, setNotiFication] = useState(null);

  const changeQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(0);
      setNotiFication(null);
    }
  };

  const handleCheckAnswer = (ele) => {
    setSelectedOption(ele);
    if (questionData[currentQuestion].correct_answer !== ele) {
      setNotiFication('Sorry! Please Try again');
    } else {
      setNotiFication('Correct!');
    }
  };

  const decode = (questions) => {
    return questions?.map((ele) => ({
      type: ele['type'],
      difficulty: ele['difficulty'],
      category: decodeURIComponent(ele['category']),
      question: decodeURIComponent(ele['question']),
      correct_answer: decodeURIComponent(ele['correct_answer']),
      options: [
        ...ele.incorrect_answers.map((answer) => decodeURIComponent(answer)),
        decodeURIComponent(ele['correct_answer']),
      ],
    }));
  };

  useEffect(() => {
    //Comment :- here i used map, random and sort for shuffling options
    let res = decode(questions)?.map((ele) => ({
      ...ele,
      options: ele?.options?.sort(() => Math.random() - 0.5),
    }));
    setQuestionData(res);
  }, []);

  const difficultyLevel = {
    easy: [true, false, false],
    medium: [true, false, false],
    hard: [true, true, true],
  };

  const resetAll = () => {
    setCurrentQuestion(0);
    setSelectedOption(0);
  };

  const score = (Number(currentQuestion) * 100) / questionData.length;
  return (
    <>
      <Text className="headingText">Quiz APP</Text>
      <QuizContainer>
        <Progress scroll={`${score}%`} />
        <div style={{ width: '60%' }}>
          {score === 100 ? (
            <StarBox className="completedPage">
              <CompletedText>Yay!😄 Completed</CompletedText>
              <Button onClick={resetAll}>Restart</Button>
            </StarBox>
          ) : (
            <>
              <QuestionNumber>
                Question {currentQuestion + 1} of {questionData.length}{' '}
              </QuestionNumber>
              <Title>{questionData[currentQuestion]?.category}</Title>
              <StarBox>
                {difficultyLevel?.[
                  questionData[currentQuestion]?.difficulty
                ]?.map((ele, i) => (
                  <Star fill={ele === true ? '#FFD93D' : 'none'} />
                ))}
              </StarBox>
              <FLexDiv>
                <Question>{questionData[currentQuestion]?.question}</Question>
              </FLexDiv>

              <OptionsConatiner>
                {questionData[currentQuestion]?.options.map((option, i) => {
                  return (
                    <>
                      <OptionsBtn
                        className={`option-btn checked ${
                          selectedOption === option
                            ? selectedOption ===
                              questionData[currentQuestion].correct_answer
                              ? 'bgSuccess'
                              : 'bgRed'
                            : ''
                        }`}
                        key={i}
                        onClick={() => handleCheckAnswer(option)}
                      >
                        {option}
                      </OptionsBtn>
                    </>
                  );
                })}
              </OptionsConatiner>
              <Text className="massege">{notification}</Text>
              <Div>
                <Button
                  disabled={
                    selectedOption !==
                    questionData[currentQuestion]?.correct_answer
                  }
                  type="submit"
                  onClick={changeQuestion}
                >
                  Next
                </Button>
              </Div>
            </>
          )}
        </div>
      </QuizContainer>
    </>
  );
};

export default QuizUi;
