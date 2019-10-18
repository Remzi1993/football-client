import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRandomDogImage } from '../../actions/examples/fetchRandomDogImage'
import { fetchBreedList } from '../actions/fetchBreedList'
import Render from './render/Game1'


class RandomPictureGame extends Component {
    state = {
        arrayOfOptions: [],
        playerAnswer: null,
        rightAnswer: null,
        countCorrectAnswers: 0,
        countIncorrectAnswers: 0,
        total: 0
    }

    componentDidMount() {
        this.props.fetchRandomDogImage()
        this.props.fetchBreedList()
    }

    handleClick = (event) => {
        // console.log('Button value > ', event.target.value);
        if (event.target.value === this.getCurrentDog()) {
            // console.log('Correct answer!');

            this.setState({
                playerAnswer: true,
                countCorrectAnswers: this.state.countCorrectAnswers + 1,
                total: this.state.total + 1

            })
            // console.log('countCorrectAnswers > ', this.state.countCorrectAnswers);
            this.props.fetchRandomDogImage()
        }
        else {
            // console.log('Wrong answer!');
            this.setState({
                playerAnswer: false,
                rightAnswer: this.getCurrentDog(),
                countIncorrectAnswers: this.state.countIncorrectAnswers + 1,
                total: this.state.total + 1
            })

            // console.log('countIncorrectAnswers > ', this.state.countIncorrectAnswers);
            setTimeout(this.tempTimeout, 2000);
        }
    }

    tempTimeout = () => {
        this.setState({
            playerAnswer: null,
            rightAnswer: null
        })
        this.props.fetchRandomDogImage()
    }

    getCurrentDog() {
        const randomDogImage = this.props.randomDogImage
        // Below we split the url with / than we get an array, sometimes in that array we get also the alternative name
        // we split that also en we select the first item
        return randomDogImage === null ? null : randomDogImage.split('/')[4].split('-')[0]
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    randomBreed() {
        const dogBreeds = this.props.breeds
        return dogBreeds[Math.floor(Math.random() * dogBreeds.length)]
    }

    render() {
        let percentage = 0
        const correct = this.state.countCorrectAnswers
        const total = this.state.total

        if (total !== 0) {
            percentage = correct/total*100
        }
        
        const options = new Set([this.getCurrentDog(), this.randomBreed(), this.randomBreed()]);
        const arrayOfOptions = [...options]

        while (arrayOfOptions.length < 3) {
            arrayOfOptions.push(this.randomBreed())
        }
        const shuffledOptions = this.shuffle(arrayOfOptions)

        return <Render
            randomDogImage = {this.props.randomDogImage}
            shuffledOptions = {shuffledOptions}
            history = {this.props.history}
            handleClick = {this.handleClick}
            playerAnswer = {this.state.playerAnswer}
            rightAnswer = {this.state.rightAnswer}
            countCorrectAnswers = {this.state.countCorrectAnswers}
            countIncorrectAnswers = {this.state.countIncorrectAnswers}
            percentage = {percentage}
        />
    }
}

const mapDispatchToProps = {
    fetchRandomDogImage,
    fetchBreedList
}

const mapStateToProps = (state) => {
    return {
        randomDogImage: state.randomDogImage,
        breeds: state.breeds
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomPictureGame);
