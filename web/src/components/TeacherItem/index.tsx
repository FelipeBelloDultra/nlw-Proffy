import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/51035716?s=460&u=20abfbb221aa1f5be1fbdbe77c23a9dc112982a7&v=4" alt="Felipe Bello Dultra" />
        <div>
          <strong>Felipe Bello Dultra</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      <br /><br />
      Tenetur at aliquam, magni quo esse corporis praesentium delectus fuga explicabo velit rerum expedita error.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 10,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
