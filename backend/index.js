const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Student = require('./Student')
const app = express()
app.use(express.json())
app.use(cors())






app.get('/student', async (req, res) => {
    try {
        const student = await Student.find({});
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})
app.post('/student', async (req, res) => {
    try {
        const student = await Student.create(req.body)
        res.status(200).json(student)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})
// app.put('/student/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const student = await Student.findByIdAndUpdate(id, req.body);
//         if (!student) {
//             return res.status(404).json({ message: `Cannot find any student with ID ${id}` })
//         }
//         const UpdateStudent = await Student.findById(id);
//         res.status(200).json(UpdateStudent);
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({ message: error.message })
//     }
// })
// app.delete('/student/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const student = await Student.findByIdAndDelete(id);
//         res.status(200).json(student);
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({ message: error.message })
//     }
// })
// app.get('/student/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const student = await Student.findById(id);
//         res.status(200).json(student);
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({ message: error.message })
//     }
// })

mongoose.connect('mongodb+srv://qaviashraf:12345678Admin@nodeapi.iymng6r.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then((error) => {
        console.log("connected to mongodb")
        app.listen(3001, () => {
            console.log("node api is running on port 3000")
        })

    }).catch(() => {
        console.log("error")
    })