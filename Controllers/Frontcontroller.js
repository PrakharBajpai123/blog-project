class Frontcontroller{
    static home = (req,res)=>{
        res.send("hello home")
    }
    static about = (req,res)=>{
        res.send("about")
    }
    static contact= (req,res)=>{
        res.send("contact")
    }
}
module.exports=Frontcontroller