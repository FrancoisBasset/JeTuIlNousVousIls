const express = require('express');
const router = express.Router();

const classes = require('../classes');

router.get('/:verb', function(req, res) {
	const json = classes.conjugateVerb('manger');

	res.json({
		success: true,
		response: json
	});
});

module.exports = router;