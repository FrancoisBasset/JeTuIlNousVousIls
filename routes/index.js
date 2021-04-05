const express = require('express');
const router = express.Router();

const classes = require('../classes');

router.get('/:verb', function(req, res) {
	const json = classes.conjugateVerb(req.params.verb);

	if (json == null) {
		res.json({
			success: false,
			message: 'Ce verbe n\'existe pas !'
		});
		return;
	}

	res.json({
		success: true,
		response: json
	});
});

module.exports = router;