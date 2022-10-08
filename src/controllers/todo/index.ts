import { Candidate } from "@models/entity/Movies"
// import { User } from "@models/entity/User"
import { getRepository } from "typeorm"



export const getCandidate = async (request, response) => {
  try {
    const movieRepository = getRepository(Candidate)
    const findMovie = await movieRepository.find()
    return response.status(200).json(findMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}
export const Login = async (request, response) => {
  const requisição = request.body
  if (
    requisição.nome === "emillymarques96622@gmail.com" ||
    requisição.senha === "banana"
  ) {
    return response.json({ Message: "veio algo", auth: true })
  }
  return response.json({ Message: "não veio nada", auth: false })
}

export const getCandidateId = async (request, response) => {
  try {
    const { id } = request.params
    const movieRepository = getRepository(Candidate)
    const findMovie = await movieRepository.findOne(id)

    return response.status(200).json(findMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const postCandidate = async (request, response) => {
  try {
    const {
      name,
      email,
      gender,
      telephone,
      cpf
    } = request.body
    const CandidateRepository = getRepository(Candidate)
    const findMovie = CandidateRepository.create({

    })
    const saveCandidate = await CandidateRepository.save(findMovie)
    return response.status(200).json(saveCandidate)
  } catch (error) {
    return response.status(500).json(error)
  }
}
/*
export const updateCandidate = async (request, response) => {
  try {
    const {
      title,
      subtitle,
      resume,
      releaseDate,
      image,
      director,
      writer,
      classification,
      studio,
      note,
    } = request.body
    const { id } = request.params
    const updateCandidateId = getRepository(Candidate)
    const movie = await updateCandidateId.findOne(id)
    if (title) {
      movie.title = title
    }
    if (subtitle) {
      movie.subtitle = subtitle
    }
    if (resume) {
      movie.resume = resume
    }
    if (releaseDate) {
      movie.releaseDate = releaseDate
    }
    if (image) {
      movie.image = image
    }
    if (director) {
      movie.director = director
    }
    if (writer) {
      movie.writer = writer
    }
    if (classification) {
      movie.classification = classification
    }
    if (studio) {
      movie.studio = studio
    }
    if (note) {
      movie.note = note
    }
    const result = await updateCandidateId.save(movie)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}
*/