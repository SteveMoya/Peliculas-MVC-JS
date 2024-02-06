import z from 'zod'

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required.'
  }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url({
    message: 'El Poster de la Movie debe ser una URL válida',
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
    {
      required_error: 'Genero Requerido',
      invalid_type_error: 'El Genero de la Movie No Existe'
    }
  )
})

export function validateMovie (input) {
  return movieSchema.safeParse(input)
}

export function validatePartialMovie (input) {
  return movieSchema.partial().safeParse(input)
}
