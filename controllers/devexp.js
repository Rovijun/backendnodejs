const Devexp = require("../models/Devexp");

exports.selectDevExperience = (req, res, next) => {
    Devexp.find().then(experiences => res.status(200).json(experiences));
};

exports.postDevExperience = (req, res, next) => {
    const devexperience = new Devexp({ ...req.body });
    devexperience.save()
        .then(() => res.status(201).json({ message: `Experience crée !`}))
        .catch((error) => res.status(400).json({ error }));
};

exports.deleteDevExperience = (req, res, next) => {
    Devexp.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: `Experience supprimée !`}))
        .catch((error) => res.status(400).json({ error }));
};

exports.updateDevExperience = (req, res, next) => {
    Devexp.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: `Experience modifiée !`}))
        .catch((error) => res.status(400).json({ error }));
};