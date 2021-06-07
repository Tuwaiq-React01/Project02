import React, { Component } from 'react'
import logo from './assets/Bee-01.jpg'
import './assets/style.css'
// import quizQuestions from './quizService'
import QuestionBox from './components/QuestionBox'
import Result from './components/Result'
import axios from 'axios'


export default class App extends Component {

  state = {
    questionsBank: [],
    score: 0,
    response: 0,
    // Random: this.questionsBank[Math.floor((Math.random() * this.questionsBank.length))]
  }

  getQuestions() {
    axios.get("https://localhost:5001/home")//My API
      .then(responce => {
        const question = responce.data
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
      response: this.state.response < 10 ? this.state.response + 1 : 10
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
    var Screen = this.state.questionsBank.length > 0 && this.state.response < 10 && this.state.questionsBank.map(
      ({ question, answers, correct, questionId }) =>
      (
        <QuestionBox question={question} options={answers} key={questionId} selected={answer => this.computAnswer(answer, correct)} />
      )

    )
    return (
      <div className="container">

        <div className="title"> QuizBee <span>Test Your knowledge</span> <img width="50px" height="50px" src={logo} /></div>
        {Screen}
        {this.state.response == 10 ? <Result score={this.state.score} playAgain={this.playAgain} /> : null}
      </div>
    )
  }
}

