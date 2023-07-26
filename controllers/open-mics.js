const OpenMic = require("../models/open-mic");

module.exports = {
    new: newOpenMic,
    create,
    index,
    show
    
};


function newOpenMic (req, res) {
    res.render('open-mics/new', { title: 'New Open Mic', errorMsg: ''});
}

async function create(req, res) {
    let newOpenMic = await OpenMic.create(req.body)
    res.redirect('/open-mics');
}

async function index(req, res) {
    let allOpenMics = await OpenMic.find();
    res.render('open-mics/index', {
        openMics: await OpenMic.find(), title: 'Open Mics'
    });
}

async function show(req, res) {
    const foundOM = await OpenMic.findById(req.params.id); //found Open Mic
    res.render('open-mics/show', {OpenMic: foundOM});
}

