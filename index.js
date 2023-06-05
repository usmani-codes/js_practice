import mongoose from 'mongoose'

mongoose
  .connect('mongodb://127.0.0.1:27017/sample')
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch((err) => console.log(err))

const studentSchema = mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
})

export const Student = mongoose.model('Student', studentSchema)

const start = async (params) => {
  await Student.create({
    name: 'usman',
    workout: true,
    height: 5.7,
  })
}

start()
