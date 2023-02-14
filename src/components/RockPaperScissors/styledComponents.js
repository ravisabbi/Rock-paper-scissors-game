import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 5px;
  padding-top: 10px;
`

export const CustomText = styled.h1`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #ffffff;
  font-weight: 900;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const HeaderSection = styled.div`
  border: 2px solid #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 150px;
  width: 95%;
  @media (min-width: 768px) {
    width: 80%;
  }
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 80%;
  @media (min-width: 768px) {
    width: 200px;
  }
`

export const ScoreHeading = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #223a5f;
  margin-bottom: 0px;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 50px;
  color: #223a5f;
  margin-top: 0px;
  font-weight: 700;
  margin-bottom: 0px;
  @media (min-width: 768px) {
    font-size: 70px;
  }
`
export const ChoicesList = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (min-width: 768px) {
    width: 500px;
  }
`
export const ModalContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const RuleImage = styled.img`
  width: 80%;
  height: 80%;
`

export const CloseButton = styled.button`
  border: none;
  align-self: flex-end;
  margin-right: 10px;
`
export const RulesButton = styled.button`
  border: none;
  align-self: flex-end;
  background-color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 16px;
  color: #223a5f;
  height: 40px;
  width: 70px;
  margin-right: 10px;
  font-weight: 900;
  border-radius: 5px;
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  margin-top: 30px;

  flex-wrap: wrap;
  @media (min-width: 768px) {
    width: 400px;
  }
`
export const ResultItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`
export const ResultImage = styled.img`
  width: 100px;
  height: 100px;
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

export const ResultStatus = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  font-weight: 900;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const Person = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  font-weight: 900;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const PlayAgainButton = styled.button`
  font-size: 18px;
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  height: 40px;
  width: 120px;
  font-weight: 400;
  font-family: 'Bree Serif';
  @media screen and (min-width: 768px) {
    font-size: 25px;
    height: 45px;
    width: 160px;
  }
`
