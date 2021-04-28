import express from 'express'
import Teacher from '../models/teachersjs.js'
const router = express.Router()

// create new teachers with promises

// app.post('/Teachers', (req, res) => {
//   console.log(req.body)
//   const user = new Teacher(req.body)
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user)
//     })
//     .catch((e) => {
//       res.status(400).send(e)
//     })
// })

// get teachers
router.get('/teachers', async (req, res) => {
  try {
    const getTeachers = await Teacher.find()
    res.send(getTeachers)
  } catch (error) {
    res.send(error)
  }
})

// get a single teacher
router.get('/teachers/:id', async (req, res) => {
  try {
    const _id = req.params.id
    // res.send(req.params.id)
    const getTeacher = await Teacher.findOne({ _id })
    res.send(getTeacher)
  } catch (error) {
    res.send(error)
  }
})

// how to GET a single teacher by name in postman
// app.get('/teachers/:name', async (req, res) => {
//   try {
//     const name = req.params.name
//     // res.send(req.params.id)
//     const getTeacher = await Teacher.findOne({ name })
//     res.send(getTeacher)
//   } catch (error) {
//     res.send(error)
//   }
// })

// update a teacher DATA
router.patch('/teachers/:id', async (req, res) => {
  try {
    const _id = req.params.id
    // res.send(req.params.id)
    const getTeacher = await Teacher.findOneAndUpdate(_id, req.body)
    res.send(getTeacher)
  } catch (error) {
    res.send(error)
  }
})

// Delete teacher Document

router.delete('/teachers/:id', async (req, res) => {
  const getTeacher = await Teacher.findByIdAndDelete(req.params.id)
  try {
    if (!req.params.id) {
      return res.status(400).send()
    }
    res.send(getTeacher)
  } catch (error) {
    res.status(400).send(error)
  }
})

// create new teachers with async await
router.post('/teachers', async (req, res) => {
  try {
    const user = new Teacher(req.body)
    const createUser = await user.save()
    res.status(201).send(createUser)
  } catch (error) {
    res.status(400).send(error)
  }
})

export default router
