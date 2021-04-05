class Score {
	#element

	constructor() {
		this.#element = document.getElementById('score');
	}

	addTense(tense, count) {
		const row = this.#element.insertRow();
		var cell = row.insertCell();
		cell.textContent = tense;

		cell = row.insertCell();
		cell.textContent = '0 / ' + count;		
	}

	updateTense(index, number) {
		this.#element.rows[index].cells[1].innerText = number;

		if (number[0] == number[4]) {
			this.#element.rows[index].className = 'finished';
		} else if (number[0] > 0) {
			this.#element.rows[index].className = 'started';
		}
	}
}