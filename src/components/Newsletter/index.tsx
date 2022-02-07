import { useState, VFC } from "react"
import { useForm } from "react-hook-form"
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import {
  Container,
  ErrorText,
  Form,
  Input,
  Label,
  ReturnButton,
  ReturnButtonText,
  SubmitButton,
  SubmitButtonText,
  SuccessContainer,
  SuccessParagraph,
  SuccessTitle,
  Title
} from "./styles"
import { api } from "services/api"

interface NewsletterProps {
  name: string;
  email: string;
}

interface Props {
  title: string
}

const newsletterFormSchema = Yup.object().shape({
  name: Yup.string().required("Preencha com seu nome completo"),
  email: Yup.string().required("Preencha com um e-mail válido").email("Preencha com um e-mail válido")
})

export const Newsletter: VFC<Props> = ({
  title
}) => {

  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterProps>({
    resolver: yupResolver(newsletterFormSchema)
  })

  const onSubmit = async (data: NewsletterProps) => {
    try {
      const { status } = await api.post(process.env.REACT_APP_API_NEWSLETTER_ROUTE || 'newsletter', data);

      if (status === 200) {
        setSuccess(true);
        reset();
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Container>
      {
          !success && (
            <Title>
              {title}
            </Title>
          )
      }
      

        {
          success && (
            <SuccessContainer>
              <SuccessTitle>Seu e-mail foi cadastrado com sucesso!</SuccessTitle>
              <SuccessParagraph>
                A partir de agora você receberá as novidade e ofertas exclusivas.
              </SuccessParagraph>
              <ReturnButton onClick={() => setSuccess(false)}>
                <ReturnButtonText>Cadastrar novo e-mail</ReturnButtonText>
              </ReturnButton>
            </SuccessContainer>
          )
        }


        {
          !success && (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  error={!!errors.name}
                  {...register("name")}
                />
                {
                  !!errors.name && <ErrorText>{errors.name.message}</ErrorText>
                }
              </Label>
              <Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                  error={!!errors.email}
                  {...register("email")}
                />
                {
                  !!errors.email && <ErrorText>{errors.email.message}</ErrorText>
                }
              </Label>
              <SubmitButton
                type="submit"
              >
                <SubmitButtonText>
                  Eu quero!
                </SubmitButtonText>
              </SubmitButton>
            </Form>
          )
        }
    </Container>
  )
}