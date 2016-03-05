var sessions = [
    {id:0 , title:"Friends", speaker:"Feeds",
        picture:"Friends.jpeg", description: "Shitty picture @ the beach"},
    {id:1 , title:"Family", speaker:"Feeds",
        picture:"Family.png", description: "What up Fam"},
    {id:2 , title:"Work", speaker:"Feeds",
        picture:"Work.jpeg", description: "Yo, Jannet from Accounting is a bitch"},
    {id:3 , title:"Mobile Performance Techniques", speaker:"JESSICA WONG", picture:"3:10Pm", room:"Ballroom B", description: "In this session, you will learn performance techniques to speed up your mobile application."},
    {id:4 , title:"Building Modular Applications", speaker:"LAURA TAYLOR", picture:"2:00pm", room:"Ballroom A", description: "Join Laura to learn different approaches to build modular JavaScript applications."}
];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};
