const Hard = require("../models/Hard");

exports.selectHard = (req, res, next) => {
    Hard.find().then(competences => res.status(200).json(competences));
};

exports.postHard = (req, res, next) => {
    const hard = new Hard({ ...req.body });
    hard.save()
        .then(() => res.status(201).json({ message: `Compétence crée !`}))
        .catch((error) => res.status(400).json({ error }));
};

exports.deleteHard = (req, res, next) => {
    Hard.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: `Compétence supprimée !`}))
        .catch((error) => res.status(400).json({ error }));
};

exports.updateHard = (req, res, next) => {
    Hard.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: `Compétence modifiée !`}))
        .catch((error) => res.status(400).json({ error }));
};