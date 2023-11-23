import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter}   my-4 h-[200px]   `}>
    <div className={`${styles.flexCenter}   flex-wrap w-full `}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1  ${styles.flexCenter} sm:min-w-[120px] `}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[73px] sm:h-[70px] w-[40.35px] h-[40.35px] object-contain mb-4"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
