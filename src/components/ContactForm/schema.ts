import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  nickname: yup.string().optional(),
  email: yup.string().email('Email inválido').optional(),
  phone: yup.string().required('Telefone é obrigatório'),
  pix: yup.string().optional()
})

export type TContactFormData = yup.InferType<typeof schema>
