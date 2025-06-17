export default function Home() {
  return (
    <>
<div className="text-center mt-2 bg-[#fdf6e3] px-4 py-6">

  <h1 className="text-2xl font-semibold mb-4">
    <i>Maria Clara Reginato</i>
  </h1>

  {/* Informações adicionais */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

    {/* Foto */}
    <img
      className="rounded-[30px] w-[160px]"
      src="maria.png"
      alt="Maria Clara"
    />

    {/* Contato */}
    <div className="space-y-3 text-left">
      <div className="flex items-center gap-2">
        <img className="w-[24px]" src="whats.png" alt="WhatsApp" />
        <span>+55 11 91407-3895</span>
      </div>

      <div className="flex items-center gap-2">
        <img className="w-[24px]" src="gmail.png" alt="Email" />
        <span>mariaclarareginato8@gmail.com</span>
      </div>

      <div className="flex items-center gap-2">
        <img className="w-[24px]" src="location.png" alt="Localização" />
        <span>São Caetano do Sul, São Paulo, Brasil</span>
      </div>
    </div>
  </div>

  {/* Idiomas */}
  <div className="text-center mt-6">
    <p className="mb-2 font-semibold">Idiomas:</p>

    <div className="grid grid-cols-3 gap-3 justify-items-center">
      <img
        className="w-[40px] transition-transform duration-300 hover:scale-125"
        src="bra.png"
        alt="Português"
      />
      <img
        className="w-[40px] transition-transform duration-300 hover:scale-125"
        src="eua.png"
        alt="Inglês"
      />
      <img
        className="w-[40px] transition-transform duration-300 hover:scale-125"
        src="esp.png"
        alt="Espanhol"
      />
    </div>
  </div>
</div>




        

          {/* Accordion */}

      <div className="bg-[#926161] grid grid-rows-[90px_6fr_90px] items-center justify-items-center min-h-screen  py-90 sm:py-70 gap-16 font-[family-name:var(--font-geist-sans)]">
        <div className="accordion w-full max-w-4xl" id="accordionExample">


          {/* Habilidades */}

          <div className="accordion-item ">
            <h2 className="accordion-header flex justify-center">

              <button
                className="accordion-button !block text-center !bg-[#fdf6e3] !text-[#926161]"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
               Habilidades
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse bg-[#fdf6e3]"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              <h1 className="!text-[23px] text-center font-bold mb-4 !text-[#926161]">Tecnológicas:</h1>

         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

                  <img className="w-full max-w-[50px] mx-auto" src="html.png" alt="HTML" />
                  <img className="w-full max-w-[50px] mx-auto" src="css.png" alt="CSS" />
                  <img className="w-full max-w-[50px] mx-auto" src="js.png" alt="JS" />
                  <img className="w-full max-w-[50px] mx-auto" src="php.png" alt="PHP" />
                  <img className="w-full max-w-[50px] mx-auto" src="vsc.png" alt="VS Code" />
                  <img className="w-full max-w-[50px] mx-auto" src="gith.png" alt="GitHub" />
                  <img className="w-full max-w-[50px] mx-auto" src="sql.png" alt="SQL" />
                  <img className="w-full max-w-[50px] mx-auto" src="nextjs.png" alt="Nextjs"></img>
                </div>
              </div>
              <br></br>
          <div className="flex flex-col items-center text-center gap-4 mt-6">
  <h1 className="!text-[23px] font-bold text-[#926161]">Pessoais:</h1>

  <ul className="list-disc list-inside text-[#926161] text-left">
    <li>Trabalho em equipe</li>
    <li>Organização</li>
    <li>Calma em resolução de problemas</li>
    <li>Flexibilidade</li>
  </ul>
</div>

            </div>


      
          </div>


          {/* Projetos */}

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button !block text-center !bg-[#fdf6e3] !text-[#926161]"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
               Projetos
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse justify-center text-center bg-[#fdf6e3]"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body flex flex-col items-center text-center">
                <h5 className="mb-4 !text-[#926161]">Explore meu Github e confira meus projetos:</h5>
                <a href="https://github.com/mariaclarareginato"><img src="gith.png" alt="GitHub Maria Clara"></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


