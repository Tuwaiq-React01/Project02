import React, { Component } from 'react'
import './assets/style.css'
import quizQuestions from './quizService'
import QuestionBox from './components/QuestionBox'
import Result from './components/Result'


export default class App extends Component {

  state = {
    questionsBank: [],
    score: 0,
    response: 0
  }

  getQuestions() {
    quizQuestions().then(question => {
      this.setState({ questionsBank: question })
    })
  }

  computAnswer(answer, correctAnswer) {
    if (answer == correctAnswer) {
      this.setState({
        score: this.state.score + 1
      })
    }
    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : 5
    })
  }

  //
  componentDidMount() {
    this.getQuestions()
  }

  playAgain = () => {
    this.getQuestions()
    this.setState({ score: 0, response: 0 })
  }
  render() {
    var Screen = this.state.questionsBank.length > 0 && this.state.response < 5 && this.state.questionsBank.map(
      ({ question, answers, correct, questionId }) =>
      (
        <QuestionBox question={question} options={answers} key={questionId} selected={answer => this.computAnswer(answer, correct)} />
      )
    )
    return (
      <div className="container">
        <div className="title"> QuizBee <span>Test Your knowledge</span></div>
        {Screen}
        {this.state.response == 5 ? <Result score={this.state.score} playAgain={this.playAgain} /> : null}
      </div>
    )
  }
}

