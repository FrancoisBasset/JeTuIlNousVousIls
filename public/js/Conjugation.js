class Conjugation {
	#element
	#isCorrect

	constructor(pronoun, conjugation) {
		this.#element = document.createElement('div');

		var pronounLabel = document.createElement('label');
		pronounLabel.textContent = pronoun;
		pronounLabel.style.margin = '10px';

		var conjugationInput = document.createElement('input');
		conjugationInput.onkeyup = () => {
			if (conjugationInput.value == conjugation) {
				conjugationInput.style.color = 'green';
				conjugationInput.style.weight = 'bold';
				conjugationInput.readOnly = true;

				this.#isCorrect = true;

				updateScore();
			}
		}

		this.#element.appendChild(pronounLabel);
		this.#element.appendChild(conjugationInput);
	}

	getElement() {
		return this.#element;
	}

	isCorrect() {
		return this.#isCorrect;
	}
}