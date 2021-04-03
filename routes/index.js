const express = require('express');
const router = express.Router();

const classes = require('../classes');

router.get('/:verb', function(req, res) {
	const json = classes.conjugateVerb(req.params.verb);

	res.json({
		success: true,
		response: json
	});
});

module.exports = router;