import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../service";
import { Input } from "../../components/input";
import { LoginStyled } from "./style";
import logo from "../../assents/logoRegister.png";
import { Context } from "../../context/FullContext";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("O email inválido")
    .min(6, "Mínimo 6 caracteres")
    .max(100, "Máximo 120 caracteres"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .max(120, "Máximo 120 caracteres"),
});

export const PageLogin = () => {
  const htmlElement = document.querySelector("html");
  const { typePassword, setTypePassword } = useContext(Context);

  htmlElement.classList.add("yellow");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  //   useEffect(() => {
  //     autoLogin();
  //   }, []);

  const login = async (data) => {
    try {
      const response = await api.post("auth/login", data);
      localStorage.setItem("@Token", response.data.token);
      localStorage.setItem("@Id", response.data.user.id);
      toast.success("Login Concluído!");
      setTimeout(() => {
        navigate("/profile");
        window.location.reload();
      }, 1600);
    } catch (error) {
      toast.error("Email ou senha incorreto(s)");
    }
  };

  return (
    <LoginStyled>
      <img src={logo} />
      <form onSubmit={handleSubmit(login)}>
        <h1>Já Tem cadastro?</h1>
        <h2>Faça seu login na sua conta abaixo:</h2>
        <Input
          label="Email"
          type="text"
          placeholder="Coloque seu email aqui"
          register={register("email")}
          msgerror={errors.email?.message}
          image={false}
        />
        <Input
          label="Password"
          type={typePassword}
          placeholder="Coloque seu email aqui"
          register={register("password")}
          msgerror={errors.password?.message}
          image={true}
        />
        <button className="button" type="submit">
          Continuar
        </button>
        <Link to="/register">Novo por aqui? Cadastre-se</Link>
      </form>
      <ToastContainer autoClose={1500} />
    </LoginStyled>
  );
};
