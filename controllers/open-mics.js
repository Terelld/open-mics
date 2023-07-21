module.exports = {
    new: newOpenMic
};

function newOpenMic (req, res) {
    res.render('open-mics/new', { errorMsg: ''});
}