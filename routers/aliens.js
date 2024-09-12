const express = require('express')
const router = express.Router();
const Alien = require('../models/alien');

// get all aliens
router.get('/', async(req, res) => {
    // res.send("Get...welcome to server ")

    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch (err) {
        res.send("Error: " + err);
    }
})

// fetch based on id
router.get('/:id', async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien);
    } catch (err) {
        res.send("Error:"+err)
}
})

// add a new alien
router.post('/', async(req, res) => { 
    const alien = new Alien({
        name: req.body.name,
        age: req.body.age
    })

    try { 
       const a1 = await alien.save()
        res.json(a1);
    } catch (err) {
        res.send("Error: " + err);
    }

})

// update an alien
router.patch("/:id", async(req, res)=>{
    try {
        const alien = await Alien.findById(req.params.id)
        alien.age = req.body.age
        const a1 = await alien.save();
        res.json(a1);
    } catch (err) {
        res.send("Error: " + err);
    }
})

// delete an alien
router.delete("/:id", async (req, res) => {
    try {
        const alien = await Alien.findByIdAndDelete(req.params.id);
        if (!alien) {
            return res.status(404).json({ message: "Alien not found" });
        }
        res.json({ message: "Alien deleted successfully", alien });
    } catch (err) {
        res.status(500).send("Error: " + err);
    }
});




module.exports = router;