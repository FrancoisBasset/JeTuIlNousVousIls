const FrenchVerbs = require('french-verbs');
const Lefff = require('french-verbs-lefff');

const pronouns = require('./pronouns');
const tenses = require('./tenses');
const vowels = require('./vowels');

module.exports.conjugateVerb = function(verb) {
	var json = {};
	json['verb'] = verb;
	json['tenses'] = {};

	for (const tense of tenses) {
		json['tenses'][tense.toLowerCase().split('_').join(' ')] = [];

		for (var pronoun of Object.keys(pronouns)) {
			try {
				const conjugation = FrenchVerbs.getConjugation(Lefff, verb, tense, pronouns[pronoun]);

				if (pronoun == 'je ' && vowels.includes(conjugation[0])) {
					pronoun = 'j\'';
				}

				json['tenses'][tense.toLowerCase().split('_').join(' ')].push({
					pronoun: pronoun,
					conjugation: conjugation
				});
			} catch (e) {}
		}
	}

	return json;
}