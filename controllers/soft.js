const Soft = require("../models/Soft");

exports.selectSoft = (req, res, next) => {
    Soft.find().then(competences => res.status(200).json(competences));
};

exports.postSoft = (req, res, next) => {
    const soft = new Soft({ ...req.body });
    soft.save()
        .then(() => res.status(201).json({ message: `Compétence crée !`}))
        .catch((error) => res.status(400).json({ error }));
};

exports.deleteSoft = (req, res, next) => {
    Soft.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: `Compétence supprimée !`}))
        .catch((error) => res.status(400).json({ error }));
};

exports.updateSoft = (req, res, next) => {
    Soft.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: `Compétence modifiée !`}))
        .catch((error) => res.status(400).json({ error }));
};