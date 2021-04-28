import mongoose from 'mongoose'

mongoose
  .connect(process.env.CONNECTION, {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('connection successful')
  })
  .catch((e) => {
    console.log('no connection')
  })
