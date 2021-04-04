class Tense {
	#element
	#conjugations = []

	constructor(name, tense) {
		this.name = name;

		this.#element = document.createElement('div');

		var nameH3 = document.createElement('h3');
		nameH3.textContent = name;

		this.#element.appendChild(nameH3);

		var i = 0;

		for (const conjugation of tense) {
			this.#conjugations[i] = new Conjugation(conjugation.pronoun, conjugation.conjugation);
			this.#element.appendChild(this.#conjugations[i].getElement());

			i++;
		}
	}

	getElement() {
		return this.#element;
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