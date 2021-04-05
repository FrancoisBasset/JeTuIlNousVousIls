class Conjugation {
	#element
	#tenseIndex
	#index
	#isCorrect

	constructor(pronoun, conjugation, tenseIndex, index) {
		this.#element = document.createElement('div');
		this.#tenseIndex = tenseIndex;
		this.#index = index;

		const pronounLabel = document.createElement('label');
		pronounLabel.textContent = pronoun;

		const conjugationInput = document.createElement('input');
		conjugationInput.onkeyup = () => {
			if (conjugationInput.value == conjugation) {
				conjugationInput.style = 'color: green; weight: bold';
				conjugationInput.readOnly = true;

				this.#isCorrect = true;

				verb.focus(this.#tenseIndex, this.#index + 1);

				updateScore();
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
}