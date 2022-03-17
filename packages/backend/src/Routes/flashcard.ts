const {Router } = require('express');
const Flashcard = require('../Models/FlashcardsModel');

const router = Router()

//Post request to create a new flashcard with mongoose
router.post('/', (req, res) => {
    const { question, answer, region, subregion, category, subcategory} = req.body;
    const flashcard = new Flashcard({
        question,
        answer,
        region,
        subregion,
        category,
        subcategory
    });
    flashcard.save()
        .then(() => res.status(201).send(flashcard))
        .catch(error => res.status(400).send(error));
});

//Get request to get all flashcards with mongoose
router.get('/', (req, res) => {
    Flashcard.find()
        .then(flashcards => res.send(flashcards))
        .catch(error => res.status(400).send(error));
});

//Update request to update a flashcard with mongoose
router.put('/:id', (req, res) => {
    const { question, answer, region, subregion, category, subcategory} = req.body;
    const flashcard = {
        question,
        answer,
        region,
        subregion,
        category,
        subcategory
    };
    Flashcard.findByIdAndUpdate(req.params.id, flashcard, { new: true })
        .then(updatedFlashcard => res.send(updatedFlashcard))
        .catch(error => res.status(400).send(error));
});

//Delete request to delete a flashcard with mongoose
router.delete('/:id', (req, res) => {
    Flashcard.findByIdAndDelete(req.params.id)
        .then(() => res.send())
        .catch(error => res.status(400).send(error));
});

//Get request to get a flashcard with mongoose
router.get('/:id', (req, res) => {
    Flashcard.findById(req.params.id)
        .then(flashcard => res.send(flashcard))
        .catch(error => res.status(400).send(error));
});

export { router as flashCardRouter }