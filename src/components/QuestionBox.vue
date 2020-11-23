<template>
  <div>
    <div class="question-box-container">
      <b-jumbotron>
        <template slot="lead">
          {{ currentQuestion.question }}
        </template>
  
        <hr class="my-4" />
        <b-list-group>
          <b-list-group-item
              v-for="(answer, index) in answers"
              :key="index"
              @click.prevent="selectAnswer(index)"
              :class="[selectedIndex === index ? 'selected' : '']"
          >
            {{ answer }}
          </b-list-group-item>
        </b-list-group>
        
        <b-button variant="info" href="#">Submit</b-button>
        
        <b-button variant="success" href="#" @click="next">
          Next
        </b-button>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  
  export default {
    props: {
      currentQuestion: Object,
      next: Function
    },
    data() {
      return {
        selectedIndex: null,
        shuffledAnswers: []
      }
    },
    computed: {
      answers() {
        let answers = [...this.currentQuestion.incorrect_answers]
        answers.push(this.currentQuestion.correct_answer)
        return answers
      }
    },
    watch: {
      currentQuestion() {
        this.selectedIndex = null;
        this.shuffleAnswers()
      }
    },
    methods: {
      selectAnswer(index) {
        this.selectedIndex = index
      },
      shuffleAnswers() {
        let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
        this.shuffledAnswers = _.shuffle(answers)
      }
    }
  }
</script>

<style scoped>
  .question-box-container {
    text-align: center;
  }
  .list-group {
    margin-bottom: 15px;
  }
  .list-group-item {
    
  }
  .list-group-item:hover {
    background-color: #E1E1E1;
    cursor: pointer;
  }
  .btn {
    margin: 0 15px;
  }
  .selected {
    background-color: blue;
  }
  .correct {
    background-color: green;
  }
  .incorrect {
    background-color: red;
  }
</style>