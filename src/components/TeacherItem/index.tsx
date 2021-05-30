import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG7iBV-V4bB7A/profile-displayphoto-shrink_200_200/0/1575733814177?e=1628121600&v=beta&t=cXAYPxabJqbZDgcwi8fNEYa89_6MFdyLMeZ7b__3XvA" alt="Joao Daniel" />
        <div>
          <strong>João Daniel</strong>
          <span>Matematica</span>
        </div>
      </header>
      <p>
        Experienced Support Technician with a demonstrated history of working in the information technology and services industry. Skilled in Microsoft Excel, Microsoft Word, Sales, and Microsoft Office. Strong information technology professional with a Bacharelado focused in Ciência da Computação from Faculdade Lourenço Filho.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"></img>
                Entrar em contato
              </button>
        </p>
      </footer>
    </article>

  );
}

export default TeacherItem;