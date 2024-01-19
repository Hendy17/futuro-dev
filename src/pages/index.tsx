import React from 'react';
import './style.css';

export function FormularioDoacaoSangue() {
  return (    
    <section id="form">
      <div className="form">
        <h1>Formulário de Inscrição para Doação de Sangue</h1>
        <form action="#" method="post">
          {/* Campo de Nome */}
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />

          {/* Campo de CPF */}
          <label htmlFor="cpf">CPF:</label>
          <input type="number" id="cpf" name="cpf" max="99999999999" required />

          {/* Tipo de Sangue (Dropdown) */}
          <label htmlFor="tipoSangue">Tipo de Sangue:</label>
          <select id="tipoSangue" name="tipoSangue" required>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          {/* Data e Hora para Agendamento */}
          <label htmlFor="agendamento">Data e Hora para Agendamento:</label>
          <input type="datetime-local" id="agendamento" name="agendamento" required />

          {/* Botões de Reset e Enviar */}
          <button type="reset">Limpar</button>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
