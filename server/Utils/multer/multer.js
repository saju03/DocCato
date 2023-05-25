import multer, { diskStorage } from 'multer'

let Storage=diskStorage({
    destination:function(req,file,cb){
        cb(null,'images')
    },
    filename:function(req,file,cb){
        
        let ext=file.originalname.substring(file.originalname.lastIndexOf('.'))

        cb(null,file.fieldname+'-'+Date.now()+ext)
    }
})
const store=multer({storage:Storage})

export default store