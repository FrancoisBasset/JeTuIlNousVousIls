class Conjugation {
	#element
	#tenseIndex
	#index
	#isCorrect
	#response

	constructor(pronoun, conjugation, tenseIndex, index) {
		this.#element = document.createElement('div');
		this.#tenseIndex = tenseIndex;
		this.#index = index;
		this.#response = conjugation;

		const pronounLabel = document.createElement('label');
		pronounLabel.textContent = pronoun;

		const conjugationInput = document.createElement('input');
		conjugationInput.onkeyup = () => {
			if (conjugationInput.value == conjugation && conjugationInput.readOnly == false) {
				conjugationInput.style = 'color: green; weight: bold';
				conjugationInput.readOnly = true;

				this.#isCorrect = true;

				verb.focus(this.#tenseIndex, this.#index + 1);

				verb.updateScore();
			}
		}

		this.#element.appendChild(pronounLabel);
		this.#element.appendChild(conjugationInput);
		this.#element.style = 'margin: 10px';
	}

	getElement() {
		return this.#element;
	}

	isCorrect() {
		return this.#isCorrect;
	}

	showAnswer() {
		this.#element.lastChild.value = this.#response;
		if (!this.#isCorrect) {
			this.#element.lastChild.style.color = 'red';
			this.#element.lastChild.readOnly = true;
		}
	}
}