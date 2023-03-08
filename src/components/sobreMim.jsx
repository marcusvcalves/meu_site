import img from "../img/avatar.jpg";
import htmlLogo from "../img/htmlLogo.png";
import reactLogo from "../img/reactLogo.png";
import bootstrapLogo from "../img/bootstrapLogo.png";
export default () => (
  <>
    <section className="sobreMim" id="SobreMim">
      <div className="sobreMimContent container">
        <h2 id="sobreMimH2">SOBRE MIM</h2>
        <img src={img} alt="" id="imgAvatar" />
        <div className="sobreMimText">
          <p>
            Tenho 23 anos, sou de Maceió, atualmente estou cursando 9º período
            de Ciência da Computação, tenho um Inglês avançado e estou em busca
            da minha primeira experiência profissional como desenvolvedor, sou
            uma pessoa tranquila e tenho bom relacionamento interpessoal, sou
            uma pessoa fácil de lidar.
          </p>
          <p>
            Sou bem curioso e gosto de aprender novas coisas, então não
            reclamaria caso precisasse aprender algo novo, mas as principais
            tecnologias que já utilizei são: HTML/CSS, Bootstrap, Scss,
            JavaScript, React, C#/.NET, Python (Django), MySql.
          </p>
        </div>
        <div className="sobreMimImg container">
          <img src={htmlLogo} alt="" id="htmlLogo" />
          <img src={bootstrapLogo} alt="" id="bootstrapLogo" />
          <img src={reactLogo} alt="" id="reactLogo" />
        </div>
      </div>
    </section>
  </>
);
