// const _ = require("lodash");
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
// const config = require("../config/passport/passport");

module.exports = (app, db) => {
	app.get("/test", (req, res) => {
		db.test
			.findAll()
			.then(result => {
				res.json(result);
			})
			.catch(err => {
				res.status(400).json({ message: err.message });
			});
	});

	app.post(
		"/posttest", (req, res) => {
			// console.log(req.user, "😁😁")
			db.test
				.create({
					input: req.body.input
				})
				.then(result => {
					res.status(201).json(result);
				})
				.catch(err => {
					console.error(err);
					res.status(400).json({ ErrorMessage: err.message });
				});
		}
	);

	app.put(
		"/puttest/:id", async (req, res) => {
			// console.log(req.user, "😁😁")
			await db.test
				.update(
					{
						input: req.body.input
					},
					{
						where: {
							id: req.params.id,
						}
					})
				.then(result => {
					res.status(201).json(result);
				})
				.catch(err => {
					console.error(err);
					res.status(400).json({ ErrorMessage: err.message });
				});
		}
	);

	app.delete(
		"/deletetest/:id", (req, res) => {
			db.test
				.destroy({
					where: {
						id: req.params.id
					}
				}).then(result => {
					console.log('result', result);
					res.status(200).send("delete success");
				}).catch(err => {
					res.status(400).send({ message: err.message + '😍😍😍' });
				})

		}
	);


};
