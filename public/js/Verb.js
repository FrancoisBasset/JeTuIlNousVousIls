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
			const tense = new Tense(tenseName, tenses[tenseName]);
			this.#element.appendChild(tense.getElement());

			this.#tenses.push(tense);
		}		
	}

	getTenses() {
		return this.#tenses;
	}
}