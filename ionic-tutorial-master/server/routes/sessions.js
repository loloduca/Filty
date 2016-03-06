var sessions = [
    {id:0 , title:"Friends", speaker:"Feeds",
        picture:"Friends.jpeg", description: "Hey Doc... What's a Facebook??"},
    {id:1 , title:"Family", speaker:"Feeds",
        picture:"Family.png", description: "What up Fam"},
    {id:2 , title:"Work", speaker:"Feeds",
        picture:"Work.jpeg", description: "Yo, Jannet from Accounting is a b****"},
    {id:3 , title:"Old Friends", speaker:"Feeds",
        picture:"Old.jpeg", description: "..."}
];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};
