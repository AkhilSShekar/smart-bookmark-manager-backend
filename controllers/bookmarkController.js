const Bookmark = require('../models/Bookmark');

const getBookmarks = async (req, res) => {
    try {
        const { userId } = req.auth; 
        const bookmarks = await Bookmark.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(bookmarks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addBookmark = async (req, res) => {
    try {
        const { title, url } = req.body;
        const { userId } = req.auth;
        const newBookmark = await Bookmark.create({ title, url, userId });
        res.status(201).json(newBookmark);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateBookmark = async (req, res) => {
    try {
        const { userId } = req.auth;
        const updatedBookmark = await Bookmark.findOneAndUpdate(
            { _id: req.params.id, userId }, 
            req.body,
            { new: true }
        );
        res.status(200).json(updatedBookmark);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteBookmark = async (req, res) => {
    try {
        const { userId } = req.auth;
        await Bookmark.findOneAndDelete({ _id: req.params.id, userId });
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getBookmarks, addBookmark, updateBookmark, deleteBookmark };