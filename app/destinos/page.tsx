import CardDestino from "@/components/CardDestino";
import styles from "./destinos.module.css";

const destinos = [
  {
    id: 1,
    nome: "Paris, França",
    imagem: "/paris.jfif",
    descricao:
      "Conheça a Cidade Luz, famosa pela Torre Eiffel, gastronomia e arquitetura encantadora.",
  },
  {
    id: 2,
    nome: "Tóquio, Japão",
    imagem: "/toquio.webp",
    descricao:
      "Descubra uma cidade que mistura tradição, tecnologia, cultura e gastronomia única.",
  },
  {
    id: 3,
    nome: "Rio de Janeiro, Brasil",
    imagem: "/rio.jpg",
    descricao:
      "Explore praias famosas, paisagens incríveis e alguns dos cartões-postais mais conhecidos do Brasil.",
  },
  {
    id: 4,
    nome: "Santorini, Grécia",
    imagem: "/santorini.jpg",
    descricao:
      "Encante-se com casas brancas, mar azul e um dos pores do sol mais famosos do mundo.",
  },
];

export default function Destinos() {
  return (
    <main className={styles.pagina}>
      <div className={styles.cabecalho}>
        <span>🌎 Explore</span>
        <h1>Destinos incríveis</h1>
        <p>
          Escolha seu próximo destino e descubra lugares inesquecíveis ao redor
          do mundo.
        </p>
      </div>

      <section className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
            descricao={destino.descricao}
          />
        ))}
      </section>
    </main>
  );
}