const getUser = (req, res) => {
    res.status(200).json({
        id : 1,
        username : 'Jose antonio'
    });
}

const postUser = (req, res) => {
    
    const {username} = req.body;
    const { q } = req.query;
    const { id } = req.params;

    res.json({
        username : username.toUpperCase(),
        q,
        id
    });
}



module.exports = {
    getUser,
    postUser
}