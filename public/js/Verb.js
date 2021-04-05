class Verb {
	#element
	#name
	#tenses = []

	constructor(name, tenses) {
		this.#element = document.getElementById('verb');
		this.#name = name;

		const verbLabel = document.createElement('label');
		verbLabel.textContent = this.#name;

		this.#element.appendChild(verbLabel);

		for (const tenseName of Object.keys(tenses)) {
			const tense = new Tense(tenseName, tenses[tenseName], this.getTenses().length);
			this.#element.appendChild(tense.getElement());

			this.#tenses.push(tense);
		}		
	}

	getTenses() {
		return this.#tenses;
	}

	focus(tenseIndex, conjugationIndex) {
		var conjugation = this.#tenses[tenseIndex].getConjugations()[conjugationIndex];
		if (conjugation != null) {
			conjugation.getElement().lastChild.focus();
		} else {
			var tense = this.#tenses[tenseIndex + 1];

			if (tense != null) {
				tense.getConjugations()[0].getElement().lastChild.focus();
			}
		}
	}
}