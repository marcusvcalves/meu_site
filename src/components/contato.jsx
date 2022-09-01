import celular from "../img/celular.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import insta from "../img/insta.png";

export default () => (
  <>
    <section className="contato container" id="Contato">
      <h2 className="contatoh2">CONTATO</h2>
      <div className="contatoContainer">
        <div className="contatoItem">
          <a
            href="https://api.whatsapp.com/send/?phone=5582996047002&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img src={celular} alt="" height="30px" width="30px" />
          </a>
        </div>
        <div className="contatoItem">
          <a
            href="https://www.linkedin.com/in/marcus-vin%C3%ADcius-carvalho-alves-ab31341a8/"
            target="_blank"
          >
            <img src={linkedin} alt="" height="30px" width="30px" />
          </a>
        </div>
        <div className="contatoItem">
          <a href="https://github.com/marcusvcalves" target="_blank">
            <img src={github} alt="" height="30px" width="30px" />
          </a>
        </div>
        <div className="contatoItem">
          <a href="https://www.instagram.com/marcusvcalves_/" target="_blank">
            <img src={insta} alt="" height="30px" width="30px" />
          </a>
        </div>
      </div>
    </section>
  </>
);
