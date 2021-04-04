class Conjugation {
	#element
	#isCorrect

	constructor(pronoun, conjugation) {
		this.#element = document.createElement('div');

		const pronounLabel = document.createElement('label');
		pronounLabel.textContent = pronoun;

		const conjugationInput = document.createElement('input');
		conjugationInput.onkeyup = () => {
			if (conjugationInput.value == conjugation) {
				conjugationInput.style = 'color: green; weight: bold';
				conjugationInput.readOnly = true;

				this.#isCorrect = true;

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