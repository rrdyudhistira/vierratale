import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";

function Home() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>|| Merchandise Vierratale ||</title>
      </Head>

      <div className="top-section">
        <Navbar />
        <section className="hero">
          <div className="container">
            <div className="text-wrapper">
              <h1 className="title">Welcome To</h1>
              <h3 className="title1">
                Merchandise<span className="title2">Vierratale</span>
              </h3>
              <p className="description">
                Vierratale Merchandise merupakan produk yang diproduksi langsung oleh Vierratale dengan menyajikan produk-produk yang mereka usung.
              </p>
              <div className="links">
                <Link
                  href="https://api.whatsapp.com/send/?phone=6281818189231&text=Halo%20kak%20saya%20mau%20order%20Merchandise%20Vierratale%20mohon%20dibantu"
                  passHref
                  className="cta"
                >
                  <Image src="/logo_contact.png" width={20} height={15}></Image> Contact
                </Link>
              </div>
            </div>
            <div className="logo">
              <Image src="/logo_header.png" width={200} height={200} />
            </div>
          </div>
        </section>
        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2C2C3B"
              fillOpacity="1"
              d="M0,32L80,37.3C160,43,320,53,480,69.3C640,85,800,107,960,101.3C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <main id="about">
        <div className="img-wrapper">
          <div className="intro">
            <center><h1 className="header-main">==== About ====</h1></center>
            {/* <div className="intro-container">
              <div className="intro-h1">
                <h1 className="intro1">Hoodie Vierratale</h1>
                <p className="introp1">Hood</p>
              </div>
              <div className="logo1">
                <Image src="/favicon.png" width={200} height={200} />
              </div>
            </div>
            <div className="intro-h12">
              <div className="img">
                <div className="logo2">
                  <Image src="/favicon.png" width={200} height={200} />
                </div>
              </div>
              <div className="descriptionp">
                <h1 className="intro2">Land Map</h1>
                <p className="introp2">Lahan yang sudah kami sediakan untuk di buat sebuah dunia virtual dan sebagai
                  jaminan asset digital yang anda beli secara virtual.</p>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="intro">
        </div>
        <div className="intro-h13">
          <h1 className="intro3">Land Virtual</h1>
          <p className="introp3">kami akan mencetak land virtual ini
            menyesuaikan proyek lahan yang sudah kita
            pegang di dalam kehiduapan secara nyata. Jadi
            hak kepemilikan NFT land digital sama dengan hak
            kepemilikan lahan secara nyata yang sudah kami
            sediakan, lahan tersebut akan di gunakan sebagai
            sarana pertanian pembangunan gedung & wisata
            penghijauan.</p>
          <div className="logo3">
            <Image src="/favicon.png" width={200} height={200} />
          </div>
        </div> */}
      </main>
      <div>
      </div>
      <section id="merchandise">
        <div className="img2-wrapper">
          <div className="wave2-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#5000ca"
                fillOpacity="1"
                d="M0,32L80,37.3C160,43,320,53,480,69.3C640,85,800,107,960,101.3C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="about-container">
            <h1 className="about-desc">==== Merchandise ====</h1>
          </div>
          <ul className="cards">
            <li>
              <a href="" class="card">
                <img src="/main_wall.jpg" class="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    {/* <img class="card__thumb" src="/logo_header.png" alt="" /> */}
                    <div className="card__header-text">
                      <h3 className="card__title">Hoodie Vierratale</h3>
                      <span className="card__status">1 hour ago</span>
                    </div>
                  </div>

                </div>
              </a>
            </li>
            <li>
              <a href="" className="card">
                <img src="/katalog.jpg" class="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    {/* <img class="card__thumb" src="/logo_header.png" alt="" /> */}
                    <div className="card__header-text">
                      <h3 className="card__title">Gold Edition Vierratale</h3>
                      <span className="card__status">3 hours ago</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="card">
                <img src="/katalog2.jpg" class="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    {/* <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                    <div className="card__header-text">
                      <h3 className="card__title">Lightstick Vierratale</h3>
                      {/* <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span> */}
                      <span className="card__status">1 hour ago</span>
                    </div>
                  </div>
                  {/* <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p> */}
                </div>
              </a>
            </li>
            <li>
              <a href="" className="card">
                <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    {/* <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" /> */}
                    <div className="card__header-text">
                      <h3 className="card__title">T-Shirt</h3>
                    <span className="card__status">3 hours ago</span>
                    </div>
                  </div>
                  {/* <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p> */}
                </div>
              </a>
            </li>
          </ul>

        </div>
      </section >
<div>
        <audio src="/Vierratale.mp3"  autoPlay loop="true" />
      </div>
    </div >
  );
}

export default Home;
