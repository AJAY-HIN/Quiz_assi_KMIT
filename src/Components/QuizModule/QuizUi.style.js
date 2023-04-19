import styled from 'styled-components';

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
  background-color: white;
  box-shadow: 2px 2px 10px 1px #333;
  overflow: hidden;
  ${'' /* padding: 10px; */}
  position: relative;
`;

export const Text = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  text-transform: uppercase;

  &.massege {
    color: black;
    text-align: center;
    width: 80%;
  }
`;

export const Question = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Title = styled.span`
  color: gray;
  font-size: 14px;
`;

export const Container = styled.div`
  margin: 8px;
  box-shadow: 0px 0px 10px 1px #a2a3a3;
  border-radius: 5px;
  padding: 5px;
  font-size: large;
  font-weight: 600;
  font-family: 'Times New Roman', Times, serif;
  min-width: 100%;
  min-height: 90px;
`;

export const FLexDiv = styled.div`
  margin: 15px 0px;
`;

export const QuestionNumber = styled.h2`
  ${'' /* margin-right: 5px; */}
`;

export const OptionsConatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  padding: 10px;
`;

export const OptionsBtn = styled.button`
  ${'' /* box-shadow: 0px 0px 4px 1px rgb(128, 123, 123); */}
  border:1px solid rgb(128, 123, 123);
  padding: 5px;
  border-radius: 3px;
  transition: 0.3s;
  min-height: 30px;
  background-color: #eeeeee;
  cursor: pointer;
  width: 280px;

  &.checked {
    color: black;
    ${'' /* box-shadow: 3px 3px 4px 1px rgb(78, 69, 78); */}
    font-weight: bold;
  }

  &.bgSuccess {
    background-color: green;
  }

  &.bgRed {
    background-color: red;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: purple;
  background-color: #276272;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 2px 1px rgb(127, 109, 109);
  font-size: larger;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  transition: 0.2s;
  width: 100px;
  position: absolute;
  bottom: 15px;

  :disabled {
    display: none;
  }
`;

export const Progress = styled.div`
  position: relative;
  background: linear-gradient(
    to right,
    #379237 ${(props) => props.scroll},
    transparent 0
  );
  transition: all ease-in-out 0.4s;
  width: 100%;
  ${'' /* bottom: 5px; */}
  height: 10px;
  ${'' /* border-radius: 10px; */}
`;

export const StarBox = styled.div`
  &.completedPage {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    width: 100%;
  }
`;

export const CompletedText = styled.h1`
  color: #379237;
`;

export const Div = styled.div`
  position: absolute;
  left: 42%;
  top: 85%;
`;
