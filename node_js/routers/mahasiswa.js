// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Mahasiswa = require('../models/Mahasiswa')
const verifyToken = require('../routers/verifyToken')
// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const mahasiswaPost = new Mahasiswa({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        // simpan data 
        const mahasiswa = await mahasiswaPost.save()
        // response
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})


// Read
router.get('/', verifyToken, async(req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find()
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:mahasiswaId', async(req, res) => {
    try {
        // delete data 
        const mahasiswa = await Mahasiswa.deleteOne({_id: req.params.mahasiswaId})
        // response
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})
module.exports = router
