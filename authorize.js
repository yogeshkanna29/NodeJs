const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user === "Yogesh"){
        req.user = { name: "Yogesh", id: 1 };
        next();
    } else{
        res.status(401).send("Unauthorized");
    }
};

export default authorize;
