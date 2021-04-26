

let add = (req, res, next) =>{
    try {
        
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        });
    }
}

let query = (req, res, next) =>{
    try {
        
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        });
    }
}

let list = (req, res, next) =>{
    try {
        
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        });
    }
}

let update = (req, res, next) =>{
    try {
        
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        });
    }
}

let activate = (req, res, next) =>{
    try {
        
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        });
    }
}

let desactivate = (req, res, next) =>{
    try {
        
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        });
    }
}

let remove = (req, res, next) =>{
    try {
        
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        });
    }
}

export default {
    add,
    query,
    list,
    update,
    activate,
    desactivate,
    remove
}