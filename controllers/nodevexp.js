const Nodevexp = require("../models/Nodevexp");

exports.selectNoExperience = (req, res, next) => {
    Nodevexp.find().then(experiences => res.status(200).json(experiences));
};

exports.postNoExperience = (req, res, next) => {
    const noexperience = new Nodevexp({ ...req.body });
    noexperience.save()
        .then(() => res.status(201).json({ message: `Experience crée !`}))
        .catch((error) => res.status(400).json({ error }));
};

exports.deleteNoExperience = (req, res, next) => {
    Nodevexp.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: `Experience supprimée !`}))
        .catch((error) => res.status(400).json({ error }));
};

exports.updateNoExperience = (req, res, next) => {
    Nodevexp.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: `Experience modifiée !`}))
        .catch((error) => res.status(400).json({ error }));
};