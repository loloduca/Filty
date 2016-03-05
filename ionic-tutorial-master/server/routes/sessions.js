var sessions = [

    {id:0 , title:"Friends", speaker:"Feeds", time:"15", description: "Shitty time @ the beach"},
    {id:1 , title:"Family", speaker:"Feeds", time:"10", description: "What up Fam"},
    {id:2 , title:"Work", speaker:"Feeds", time:"5", description: "Yo, Jannet from Accounting is a bitch"},
    {id:3 , title:"Mobile Performance Techniques", speaker:"JESSICA WONG", time:"3:10Pm", room:"Ballroom B", description: "In this session, you will learn performance techniques to speed up your mobile application."},
    {id:4 , title:"Building Modular Applications", speaker:"LAURA TAYLOR", time:"2:00pm", room:"Ballroom A", description: "Join Laura to learn different approaches to build modular JavaScript applications."}
];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};
