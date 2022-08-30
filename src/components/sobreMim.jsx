import img from "../img/avatar.jpg";
export default () => (
  <>
    <section className="sobreMim" id="SobreMim">
      <div className="sobreMimContent container">
        <h2 id="sobreMimH2">SOBRE MIM</h2>
        <img src={img} alt="" id="imgAvatar" />
        <div className="sobreMimText">
          <p>
            Tenho 23 anos, sou de Maceió, atualmente estou cursando 8º período
            de Ciência da Computação, tenho um Inglês avançado e estou em busca
            da minha primeira experiência profissional como desenvolvedor, sou
            uma pessoa tranquila e tenho bom relacionamento interpessoal, sou
            uma pessoa fácil de lidar.
          </p>
          <p>
            Sou bem curioso e gosto de aprender novas coisas, então não
            reclamaria caso precisasse aprender algo novo, mas as principais
            tecnologias que já utilizei são: HTML/CSS, Bootstrap, Scss,
            JavaScript, React, C#/.NET, Python, MySql.
          </p>
        </div>
      </div>
    </section>
  </>
);
