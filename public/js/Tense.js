class Tense {
	#element
	#name
	#conjugations = []

	constructor(name, tense, index) {
		this.#name = name;

		this.#element = document.createElement('div');

		const nameH3 = document.createElement('h3');
		nameH3.textContent = this.#name;

		this.#element.appendChild(nameH3);

		var i = 0;

		for (const conjugation of tense) {
			this.#conjugations[i] = new Conjugation(conjugation.pronoun, conjugation.conjugation, index, i);
			this.#element.appendChild(this.#conjugations[i].getElement());

			i++;
		}
	}

	getElement() {
		return this.#element;
	}

	getName() {
		return this.#name;
	}

	getConjugations() {
		return this.#conjugations;
	}
	
	getNumberOfCorrect() {
		var count = 0;

		for (const conjugation of this.#conjugations) {
			if (conjugation.isCorrect()) {
				count++;
			}
		}

		return count + "/" + this.#conjugations.length;
	}
}