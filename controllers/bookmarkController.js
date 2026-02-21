const Bookmark = require('../models/Bookmark');

// GET all bookmarks
const getBookmarks = async (req, res) => {
    try {
        const bookmarks = await Bookmark.find().sort({ createdAt: -1 });
        res.status(200).json(bookmarks);
    } catch (error) {
        res.status(500).json({ message: "Server Error: " + error.message });
    }
};

// ADD a bookmark
const addBookmark = async (req, res) => {
    try {
        const { title, url } = req.body;
        const newBookmark = await Bookmark.create({ title, url });
        res.status(201).json(newBookmark);
    } catch (error) {
        res.status(400).json({ message: "Validation Error: " + error.message });
    }
};

// UPDATE a bookmark
const updateBookmark = async (req, res) => {
    try {
        const updatedBookmark = await Bookmark.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        res.status(200).json(updatedBookmark);
    } catch (error) {
        res.status(400).json({ message: "Update Failed" });
    }
};

// DELETE a bookmark
const deleteBookmark = async (req, res) => {
    try {
        await Bookmark.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Bookmark deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Delete Failed" });
    }
};

module.exports = { getBookmarks, addBookmark, updateBookmark, deleteBookmark };