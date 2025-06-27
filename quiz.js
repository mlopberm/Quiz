// quiz.js
import { timer } from './timer.js';

export class Quiz {
  constructor() {
    this.allQuestions = [];
    this.currentQuizQuestions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswers = [];

    // Referencias DOM
    this._refs();
    this._listeners();
  }

  /** Llamado desde App tras importar el módulo de preguntas */
  setQuestions(questionsArray) {
    this.allQuestions = questionsArray;
  }

  _refs() {
    this.quizArea                = document.getElementById('quizArea');
    this.resultsArea             = document.getElementById('resultsArea');
    this.currentQuestionNumberEl = document.getElementById('currentQuestionNumber');
    this.totalQuestionsDisplayEl = document.getElementById('totalQuestionsDisplay');
    this.currentScoreEl          = document.getElementById('currentScore');
    this.progressBar             = document.getElementById('progressBar');
    this.questionTextEl          = document.getElementById('question');
    this.optionsContainer        = document.getElementById('optionsContainer');
    this.feedbackArea            = document.getElementById('feedbackArea');
    this.feedbackTextEl          = document.getElementById('feedbackText');
    this.explanationTextEl       = document.getElementById('explanationText');
    this.submitAnswerButton      = document.getElementById('submitAnswerButton');
    this.nextQuestionButton      = document.getElementById('nextQuestionButton');
    this.restartQuizButton       = document.getElementById('restartQuizButton');
    this.finalScoreTextEl        = document.getElementById('finalScoreText');
    this.resultsMessageEl        = document.getElementById('resultsMessage');
  }

  _listeners() {
    this.submitAnswerButton.addEventListener('click', () => this._handleSubmit());
    this.nextQuestionButton.addEventListener('click',   () => this._handleNext());
    this.restartQuizButton.addEventListener('click',   () => this.startNewQuiz());
  }

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  _selectRandom() {
    const copy = [...this.allQuestions];
    this._shuffle(copy);
    this.currentQuizQuestions = copy.slice(0, 10);
  }

  startNewQuiz() {
    // reinicia y arranca el timer si existe
    timer.reset();
+   timer.start();

    this._selectRandom();
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.currentScoreEl.textContent = this.score;
    this.totalQuestionsDisplayEl.textContent = this.currentQuizQuestions.length;
    this.progressBar.style.width = '0%';
    this.resultsArea.classList.add('hidden');
    this.quizArea.classList.remove('hidden');

    this._loadQuestion();
  }

  _loadQuestion() {
    this.feedbackArea.classList.add('hidden');
    this.submitAnswerButton.classList.remove('hidden');
    this.nextQuestionButton.classList.add('hidden');
    this.submitAnswerButton.disabled = false;
    this.optionsContainer.innerHTML = '';
    this.selectedAnswers = [];

    if (this.currentQuestionIndex >= this.currentQuizQuestions.length) {
      this._showResults();
      return;
    }

    const q = this.currentQuizQuestions[this.currentQuestionIndex];
    this.currentQuestionNumberEl.textContent = this.currentQuestionIndex + 1;
    this.progressBar.style.width =
      `${((this.currentQuestionIndex + 1) / this.currentQuizQuestions.length) * 100}%`;
    this.questionTextEl.textContent = q.question;

    // renderizar opciones
    const opts = [...q.options];
    this._shuffle(opts);
    opts.forEach(opt => {
      const wrapper = document.createElement('div');
      wrapper.className = 'flex items-center p-3 bg-slate-800 rounded-lg hover:bg-slate-600 cursor-pointer mb-2';

      const input = document.createElement('input');
      input.type  = q.type === 'multiple' ? 'checkbox' : 'radio';
      input.name  = `opt_q${this.currentQuestionIndex}`;
      input.value = opt.id;
      input.id    = `opt-${q.id}-${opt.id}`;
      input.className = 'mr-3 form-radio h-5 w-5 text-sky-500';
      input.addEventListener('change', e => {
        const val = parseInt(e.target.value, 10);
        if (q.type === 'multiple') {
          if (e.target.checked) {
            if (!this.selectedAnswers.includes(val)) this.selectedAnswers.push(val);
          } else {
            this.selectedAnswers = this.selectedAnswers.filter(x => x !== val);
          }
        } else {
          this.selectedAnswers = [val];
        }
      });

      const label = document.createElement('label');
      label.htmlFor   = input.id;
      label.textContent = opt.text;
      label.className = 'text-slate-200 flex-1 cursor-pointer';

      wrapper.addEventListener('click', () => {
        if (input.disabled) return;
        input.checked = input.type === 'checkbox' ? !input.checked : true;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });

      wrapper.append(input, label);
      this.optionsContainer.appendChild(wrapper);
    });
  }

  _handleSubmit() {
    if (this.selectedAnswers.length === 0) {
      this._showFeedback("Por favor, selecciona una respuesta.", "", "warning");
      return;
    }
    this.submitAnswerButton.disabled = true;
    this.submitAnswerButton.classList.add('hidden');
    const q = this.currentQuizQuestions[this.currentQuestionIndex];
    const correct = this._checkAnswer(q);
    if (correct) {
      this.score++;
      this.currentScoreEl.textContent = this.score;
      this._showFeedback("¡Correcto!", q.explanation, "success");
    } else {
      this._showFeedback("¡Incorrecto!", q.explanation, "error");
    }

    // resaltar
    this.optionsContainer.querySelectorAll('input').forEach(input => {
      const val = parseInt(input.value, 10);
      const w   = input.parentElement;
      input.disabled = true;

      const isCorr = q.type === 'multiple'
        ? q.answers.includes(val)
        : val === q.answer;

      if (isCorr) {
        w.classList.add('bg-green-700','ring-2','ring-green-400');
      }
      if (this.selectedAnswers.includes(val) && !isCorr) {
        w.classList.add('bg-red-700','ring-2','ring-red-400');
      }
    });

    this.nextQuestionButton.classList.remove('hidden');
  }

  _handleNext() {
    this.currentQuestionIndex++;
    this._loadQuestion();
  }

  _checkAnswer(q) {
    if (q.type === 'multiple') {
      const u = [...this.selectedAnswers].sort();
      const c = [...q.answers].sort();
      return u.length === c.length && u.every((v,i) => v === c[i]);
    } else {
      return this.selectedAnswers.length === 1
          && this.selectedAnswers[0] === q.answer;
    }
  }

  _showResults() {
    timer.stop();
+   timer.setFinalTime();
    this.quizArea.classList.add('hidden');
    this.resultsArea.classList.remove('hidden');
    this.finalScoreTextEl.textContent =
      `${this.score} / ${this.currentQuizQuestions.length}`;
    const pct = (this.score / this.currentQuizQuestions.length) * 100;
    this.resultsMessageEl.textContent = this._resultMessage(pct);
  }

  _showFeedback(msg, explanation, type) {
    this.feedbackArea.className = 'p-4 rounded mb-4';
    this.feedbackTextEl.textContent = msg;
    this.explanationTextEl.textContent = explanation;
    const clr = type === 'success' ? 'green'
              : type === 'error'   ? 'red'
              : 'yellow';
    this.feedbackArea.classList.add(`bg-${clr}-500`,`text-${clr}-900`);
    this.feedbackArea.classList.remove('hidden');
  }

  _resultMessage(pct) {
    if (pct === 100) return "¡Extraordinario! Puntuación perfecta.";
    if (pct >= 80)   return "¡Excelente trabajo!";
    if (pct >= 60)   return "¡Buen trabajo!";
    if (pct >= 40)   return "¡Vas por buen camino!";
    return "¡Sigue practicando!";
  }

 reset() {
    this.allQuestions = [];
    this.currentQuizQuestions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswers = [];
    // Restablecer elementos del DOM sin eliminar su estructura
    this.currentQuestionNumberEl.textContent = '0';
    this.totalQuestionsDisplayEl.textContent = '0';
    this.currentScoreEl.textContent = '0';
    this.progressBar.style.width = '0%';
    this.questionTextEl.textContent = 'Cargando pregunta...';
    this.optionsContainer.innerHTML = '';
    this.feedbackArea.classList.add('hidden');
    this.resultsArea.classList.add('hidden');
    // Resetear timer
    timer.reset();
    timer.hide();
  }
}
