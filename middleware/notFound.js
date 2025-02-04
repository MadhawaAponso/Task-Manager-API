const notFound = (req,res)=>res.status(404).json({msg:"The resource not found"})

module.exports = notFound