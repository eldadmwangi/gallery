(()=>{var e={656:(e,o,t)=>{const r=t(37);var s=new(0,r.Schema)({name:String,path:String,size:Number,date:{type:Date,default:Date()}});let n=r.model("Image",s);e.exports=n},393:(e,o,t)=>{const r=t(252).Router();let s=t(656);r.get("/:id",((e,o)=>{s.findById(e.params.id,(function(e,t){e&&console.log(e),o.render("singleImage",{title:"Single Image",image:t})}))})),r.put("/:id",((e,o)=>{console.log(e.params.id),console.log(e.body),s.findOneAndUpdate({_id:e.params.id},{name:e.body.name},{new:!0},(function(e,t){e&&console.log(e),o.redirect("/")}))})),r.delete("/:id",((e,o)=>{console.log(e.params.id),s.deleteOne({_id:e.params.id},(function(e){e&&console.log(e),o.redirect("/index")}))})),e.exports=r},4:(e,o,t)=>{const r=t(252).Router();t(903);let s=t(79);t(16);let n=t(656);r.get("/",((e,o)=>{n.find({},(function(t,r){t&&console.log(t),o.render("index",{images:r,msg:e.query.msg})}))})),r.post("/upload",((e,o)=>{s(e,o,(t=>{t?o.redirect(`/?msg=${t}`):(console.log(e.file),null==e.file?o.redirect("/?msg=Error: No file selcted!"):(new n({name:e.file.filename,size:e.file.size,path:"images/"+e.file.filename}).save(),o.redirect("/?msg=File uploaded successfully")))}))})),e.exports=r},79:(e,o,t)=>{const r=t(461),s=t(928),n=r.diskStorage({destination:"./public/images/",filename:function(e,o,t){t(null,o.fieldname+"-"+Date.now()+s.extname(o.originalname))}}),i=r({storage:n,limits:{fileSize:1e6},fileFilter:function(e,o,t){!function(e,o){const t=/jpeg|jpg|png|gif/,r=t.test(s.extname(e.originalname).toLowerCase());if(t.test(e.mimetype)&&r)return o(null,!0);o("Error: Images Only!!")}(o,t)}}).single("image");e.exports=i},578:(e,o,t)=>{const r=t(252),s=(t(268),t(37)),n=t(928);let i=t(4),l=t(393);s.connect("mongodb+srv://eldad:Mwangi10835@darkroom.ipuj2.mongodb.net/?retryWrites=true&w=majority&appName=darkroomdarkroom",{useNewUrlParser:!0,useUnifiedTopology:!0}).then((()=>{console.log("Database connected successfully")})).catch((e=>{console.error("MongoDB connection error:",e)})),s.connection.once("open",(()=>{console.log("Database connected successfully")}));const a=r();a.set("view engine","ejs"),a.use(r.static(n.join(__dirname,"public"))),a.use(r.json()),a.use("/",i),a.use("/image",l);const c=process.env.PORT||4e3;a.listen(c,(()=>{console.log(`Server is listening at http://localhost:${c}`)})),e.exports=a},268:e=>{"use strict";e.exports=require("body-parser")},252:e=>{"use strict";e.exports=require("express")},37:e=>{"use strict";e.exports=require("mongoose")},461:e=>{"use strict";e.exports=require("multer")},903:e=>{"use strict";e.exports=require("uuid")},928:e=>{"use strict";e.exports=require("path")},16:e=>{"use strict";e.exports=require("url")}},o={};!function t(r){var s=o[r];if(void 0!==s)return s.exports;var n=o[r]={exports:{}};return e[r](n,n.exports,t),n.exports}(578)})();