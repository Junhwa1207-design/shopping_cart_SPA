
import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/junhwajung/Desktop/Vue_ShoppingMall-master/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage });

export {
    upload
}