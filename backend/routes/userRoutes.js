import express from 'express';
import User from '../models/User.js';

const router = express.Router();


// CREATE USER
router.post('/add', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to add user' });
    }
});


// GET ALL USERS
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to get data" });
    }
});


// UPDATE USER
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        );

        res.json(updatedUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to update data" });
    }
});


// DELETE USER
router.delete('/:id', async (req, res) => {
    try {

        await User.findByIdAndDelete(req.params.id);

        res.json({ message: "User deleted successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to delete data" });
    }
});

export default router;