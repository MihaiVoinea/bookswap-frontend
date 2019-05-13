<template>
  <div id="Landing">
    <main>
      <nav>
        <a href="https://bookswap.ro">
          <img src="../assets/img/logo.png" alt="BookSwap" />
        </a>
        <ul>
          <li><a href="#">Explorează</a></li>
          <li><a href="#">Despre</a></li>
          <li><router-link to="/login">Cont</router-link></li>
          <li><a href="#" class="btn-cta">Începe</a></li>
        </ul>
      </nav>
      <section>
        <div>
          <h1>Obține ușor cărțile pe care ți le dorești</h1>
          <p>
            BookSwap este o platforma online unde poți schimba cărțile de care
            nu mai ai nevoie pentru unele noi.
          </p>
          <a href="#" class="btn btn-cta">Caută o carte</a>
        </div>
        <img src="../assets/img/landing/book_lover.svg" alt="Book Lover" />
      </section>
      <section>
        <div>
          <img src="../assets/img/landing/map.svg" alt="Map Image" />
          <h2>Distanțe minime</h2>
          <p>
            Căutăm persoane ce doresc să facă schimb în apropierea ta astfel
            încât distanțele să fie minime. Nu trebuie să-ți faci griji pentru
            transportul cărților.
          </p>

          <a href="#" class="learn-more">
            <span>Află mai multe</span>
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M310.627 438.627L470.627 278.627C483.124 266.131 483.124 245.869 470.627 233.372L310.627 73.372C298.13 60.876 277.869 60.876 265.372 73.372C252.875 85.868 252.875 106.13 265.372 118.627L370.745 224H64C46.327 224 32 238.327 32 256C32 273.673 46.327 288 64 288H370.745L265.372 393.373C259.124 399.621 256 407.811 256 416C256 424.189 259.124 432.379 265.372 438.627C277.869 451.124 298.13 451.124 310.627 438.627Z"
              />
            </svg>
          </a>
        </div>
        <div>
          <img src="../assets/img/landing/checked.svg" alt="Checked Image" />
          <h2>Condiții excelente</h2>
          <p>
            Ne asigurăm că toate cărțile adăugate pe platforma noastră sunt în
            condiții bune pentru a-ți oferi o experiență pe măsura așteptărilor
            tale.
          </p>

          <a href="#" class="learn-more">
            <span>Află mai multe</span>
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M310.627 438.627L470.627 278.627C483.124 266.131 483.124 245.869 470.627 233.372L310.627 73.372C298.13 60.876 277.869 60.876 265.372 73.372C252.875 85.868 252.875 106.13 265.372 118.627L370.745 224H64C46.327 224 32 238.327 32 256C32 273.673 46.327 288 64 288H370.745L265.372 393.373C259.124 399.621 256 407.811 256 416C256 424.189 259.124 432.379 265.372 438.627C277.869 451.124 298.13 451.124 310.627 438.627Z"
              />
            </svg>
          </a>
        </div>
      </section>
      <section>
        <div>
          <h2>O colecție imensă de cărti</h2>
          <p>
            Dispunem de o colecție imensă de cărți, deci poți fi sigur că o să
            găsești ceva pe gustul tău. Toate cărțile sunt adăugate de alți
            utilizatori.
          </p>
          <a href="#" class="btn btn-cta">Caută o carte</a>
        </div>
        <img src="../assets/img/landing/bookcovers.png" alt="Book Covers" />
      </section>
      <section>
        <img src="../assets/img/landing/bibliophile.svg" alt="Bibliophile" />
        <div>
          <h2>Te anunțăm când apar cărți noi</h2>
          <p>
            Abonează-te la newsletterul nostru și te vom anunța când apar cărți
            noi pe placul tău în apropiere. Nu vei rata ocazia să obți cărțile
            pe care ți le dorești.
          </p>
          <a href="#" class="btn btn-cta">Abonează-te</a>
        </div>
      </section>
    </main>
    <img src="../assets/img/landing/blobs/Vector1.svg" id="Vector1" />
    <img src="../assets/img/landing/blobs/Vector2.svg" id="Vector2" />
    <img src="../assets/img/landing/blobs/Vector3.svg" id="Vector3" />
    <img src="../assets/img/landing/blobs/Vector4.svg" id="Vector4" />
    <img src="../assets/img/landing/blobs/Vector5.svg" id="Vector5" />
  </div>
</template>

<style lang="scss" scoped>
section:nth-child(5) {
  margin: 37.04vh 0 0 0;
  img {
    flex: 0 0 50%;
    position: relative;
    right: 50%;
    height: 864px;
  }
  div {
    flex: 0 0 50%;
    // margin-left: 140px;
    position: relative;
    right: 45%;
    text-align: justify;
    padding-top: 40px;
    h2 {
      margin: 0;
    }
    p {
      width: 80%;
      margin: 8px 0 40px 0;
    }
  }
}

section:nth-child(4) {
  margin: 37.04vh 0 0 0;
  img {
    flex: 0 0 50%;
    height: 849px;
  }
  div {
    flex: 0 0 50%;
    margin-left: 8%;
    text-align: justify;
    h2 {
      margin: 0;
    }
    p {
      width: 80%;
      margin: 8px 0 40px 0;
    }
  }
}

section:nth-child(3) {
  justify-content: space-around;
  margin: 35.19vh 0 0 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 3px 20px rgba(54, 64, 82, 0.18);
    border-radius: 15px;
    min-width: 60rem;
    width: 60rem;
    height: 70rem;
    margin: 0 30px;
    text-align: justify;
    background: white;
    a {
      margin: 40px 40px 85px 40px;
      color: $red-main;
      text-decoration: $red-main;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      transition: all 0.3s ease-in-out;
      svg {
        width: 1em;
        height: 1em;
        margin-left: 7px;
        position: relative;
        top: 1px;
        fill: $red-main;
        transition: all 0.3s ease-out;
      }
      &:hover {
        color: $red-main-hover;
        svg {
          fill: $red-main-hover;
        }
      }
    }

    & > * {
      margin: 0 40px;
    }

    &:first-child {
      & > img {
        margin: 60px 0 85px 0;
      }
    }
    &:nth-child(2) {
      & > img {
        margin: 35px 0 58px 0;
      }
    }
  }
}
section:nth-child(2) {
  margin: 13.89vh 0 0 0;
  div {
    text-align: justify;
    padding-bottom: 40px;
    p {
      margin-bottom: 53px;
      width: 90%;
    }
  }
  img {
    position: relative;
    left: 100px;
    height: 599px;
  }
}

section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 0 0;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-left: 30px;
    }
    li:last-child {
      margin-left: 50px;
      a {
        padding: 10px 35px;
        &:hover {
          color: #fff;
          background: $red-main-hover;
        }
      }
    }
    a {
      text-decoration: none;
      color: $gray-text;
      transition: all 0.3s ease-out;
      &:hover {
        color: #000;
      }
    }
  }
}
main {
  display: flex;
  flex-direction: column;
  width: calc(100% - 32.75em);
  margin: 0 auto;
  max-width: 86.25em;
  margin-bottom: 30px;
}
#Landing {
  overflow-x: hidden;
}
.btn-cta {
  background: $red-main;
  padding: 13px 35px;
  border-radius: 100px;
  color: white;
  text-decoration: none;
}
p {
  font-weight: normal;
  font-size: 1.8rem;
  line-height: normal;
  margin: 30px 0;
  color: rgba(0, 0, 0, 0.8);
}
h2 {
  font-style: normal;
  font-weight: 300;
  font-size: 3.6rem;
  line-height: normal;
}
h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 6.4rem;
  line-height: normal;
  margin: 0;
  color: #000;
}

@media screen and (min-height: 1081px) and (min-width: 1921px) {
  section:nth-child(2) {
    margin: 20vh 0 0 0;
  }
}

@media screen and (max-width: 1919px) {
  main {
    width: calc(100% - 8.1875em) !important;
  }
  section:nth-child(4) {
    div {
      margin-left: 0px;
    }
  }
  section:nth-child(2) img {
    left: 50px;
  }
  section:nth-child(5) {
    img {
      right: 45%;
    }
    div {
      right: 40%;
    }
  }
}
@media screen and (max-width: 1500px) {
  section:nth-child(4) div {
    flex: 0 0 40%;
    p {
      width: 90%;
    }
  }
  section:nth-child(5) {
    img {
      right: 45%;
    }
    div {
      right: 45%;
    }
  }
}
@media screen and (max-width: 1439px) {
}

#Vector1 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

#Vector2 {
  position: absolute;
  top: 768px;
  left: 0;
  z-index: -1;
}

#Vector3 {
  position: absolute;

  width: 43rem;
  height: auto;
  left: 14.5rem;
  top: 863.27px;
  z-index: -1;
}

#Vector4 {
  position: absolute;

  right: 0;
  top: 1250px;
  z-index: -1;
}

#Vector5 {
  position: absolute;
  left: 0px;
  top: 2011px;

  z-index: -1;
}
</style>

<script>
export default {};
</script>
