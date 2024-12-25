import Link from "next/link";
import { Main } from "./styles";


export default function Home() {
  return (
    <Main>
      <h1>Animations Test 🚀</h1>
      <ul>
        <li><Link href={'/scrollone'}>Scroll Test One</Link></li>
        <li><Link href={'/parallax'}>Parallax Effect</Link></li>
      </ul>
    </Main>
  );
}
