import Image from "next/image";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  nome: string;
  imagem: string;
  descricao: string;
}

export default function CardDestino({
  nome,
  imagem,
  descricao,
}: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imagemContainer}>
        
        <Image
  src={imagem}
  alt={`Imagem de ${nome}`}
  fill
  sizes="(max-width: 750px) 100vw, 50vw"
  className={styles.imagem}
/>
      </div>

      <div className={styles.conteudo}>
        <h2>{nome}</h2>
        <p>{descricao}</p>
      </div>
    </article>
  );
}