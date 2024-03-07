import Image from "next/image";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export const imagePath = `https://image.tmdb.org/t/p/original`;

/**
 * @todo Add type for serie
 */
type Props = {
  serie: any;
};

const SerieCard = ({ serie }: Props) => {
  const router = useRouter();

  return (
    <div className={styles.card} onClick={() => { router.push(`/details/${serie.id}`) }}>
      <div className={styles.image}>
        <Image
          alt={serie.original_title}
          src={imagePath + serie.poster_path}
          width={150}
          height={225}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{serie.original_name}</h3>
        <p>{serie.release_date}</p>
        <p>{`${Math.round(serie.vote_average * 10) / 10} / 10`}</p>
      </div>
    </div>
  );
};

export default SerieCard;
