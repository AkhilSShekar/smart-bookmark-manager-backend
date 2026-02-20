const Bookmark = require('../models/Bookmark');

//   GET /api/bookmarks
const getBookmarks = async (req, res) => {
    try {
        const bookmarks = await Bookmark.find().sort({ createdAt: -1 });
        res.status(200).json(bookmarks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//    POST /api/bookmarks
const addBookmark = async (req, res) => {
    try {
        const { title, url } = req.body;
        const newBookmark = await Bookmark.create({ title, url });
        res.status(201).json(newBookmark);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//    PUT /api/bookmarks/:id
const updateBookmark = async (req, res) => {
    try {
        const updatedBookmark = await Bookmark.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        res.status(200).json(updatedBookmark);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//    DELETE /api/bookmarks/:id
const deleteBookmark = async (req, res) => {
    try {
        await Bookmark.findByIdAndDelete(req.params.id);
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getBookmarks, addBookmark, updateBookmark, deleteBookmark };