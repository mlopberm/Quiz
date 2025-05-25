// app.js
import { Quiz } from './quiz.js';

const quiz = new Quiz();

class App {
  constructor() {
    this._refs();
    this._listeners();
    this._updateStartButton();
  }

  _refs() {
    this.courseSelection = document.getElementById('courseSelection');
    this.courseDropdown  = document.getElementById('courseDropdown');
    this.courseStartBtn  = document.getElementById('courseStartBtn');
    this.appContainer    = document.getElementById('appContainer');
    this.learnTab        = document.getElementById('learnTab');
    this.testTab         = document.getElementById('testTab');
    this.learnContent    = document.getElementById('learnContent');
    this.testContent     = document.getElementById('testContent');
    this.changeCourseBtn = document.getElementById('changeCourseBtn');
  }

  _listeners() {
    this.courseDropdown.addEventListener('change', () => this._updateStartButton());

    this.courseStartBtn.addEventListener('click', async () => {
      const curso = this.courseDropdown.value;
      if (!curso) return;
      const module = await import(`./questions/${curso}.js`);
      quiz.setQuestions(module.questions);
      this._showApp();
    });
    this.learnTab.addEventListener('click', () => this._switch('learn'));
    this.testTab .addEventListener('click', () => this._switch('test'));
    this.changeCourseBtn.addEventListener('click', () => {
      quiz.reset();
      this._reset();
    });
    document.addEventListener('quizFinished', () => this._switch('test'));
  }

  _updateStartButton() {
    this.courseStartBtn.disabled = !this.courseDropdown.value;
  }

  _showApp() {
    this.courseSelection.classList.add('hidden');
    this.appContainer.classList.remove('hidden');
    this._switch('learn');
  }

  _reset() {
    this.appContainer.classList.add('hidden');
    this.courseSelection.classList.remove('hidden');
    this.courseDropdown.value = '';
    this._updateStartButton();
    window.location.hash = '';
  }

  _switch(tab) {
    window.location.hash = tab;
    this._onHashChange();
  }

  _onHashChange() {
    const h = window.location.hash.replace('#','');
    if (h === 'test') {
      this._activate(this.testTab, this.testContent);
      this._deactivate(this.learnTab, this.learnContent);
      quiz.startNewQuiz();
    } else {
      this._activate(this.learnTab, this.learnContent);
      this._deactivate(this.testTab, this.testContent);
    }
  }

  _activate(btn, sec) {
    sec.classList.remove('hidden');
    btn.classList.add('text-sky-400','border-b-2','border-sky-500');
    btn.classList.remove('text-slate-400');
  }

  _deactivate(btn, sec) {
    sec.classList.add('hidden');
    btn.classList.remove('text-sky-400','border-b-2','border-sky-500');
    btn.classList.add('text-slate-400');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
