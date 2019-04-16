<template>
  <div class="container">
    <header>
      <img src="../assets/img/logo.png" alt="BookSwap" />
      <nav>
        <ul>
          <li>
            <a href="#">Explorează</a>
          </li>
          <li>
            <a href="#">Despre</a>
          </li>
          <li>
            <a href="#" class="btn-cont">Cont</a>
          </li>
          <li>
            <a href="#" class="btn btn-cta">Începe</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <div>
          <h1>Obține ușor cărțile pe care ți le dorești</h1>
          <p>
            BookSwap este o platforma online unde poți schimba cărțile de care
            nu mai ai nevoie pentru unele noi.
          </p>
          <a href="#" class="btn btn-cta">Caută o carte</a>
        </div>
        <img
          src="../assets/img/landing/book_lover.svg"
          alt="Person reading book Image"
        />
      </section>
      <section>
        <div id="left">
          <img src="../assets/img/landing/map.svg" alt="Map Image" />
          <h2>Distanțe minime</h2>
          <p>
            Căutăm persoane ce doresc să facă schimb în apropierea ta astfel
            încât distanțele să fie minime. Nu trebuie să-ți faci griji pentru
            transportul cărților.
          </p>

          <a href="#">
            Află mai multe
            <img src="./../assets/img/landing/arrow_right_red.svg" />
          </a>
        </div>
        <div id="right">
          <img src="../assets/img/landing/checked.svg" alt="Checked Image" />
          <h2>Condiții excelente</h2>
          <p>
            Ne asigurăm că toate cărțile adăugate pe platforma noastră sunt în
            condiții bune pentru a-ți oferi o experiență pe măsura așteptărilor
            tale.
          </p>

          <a href="#">
            Află mai multe
            <img src="../assets/img/landing/arrow_right_red.svg" />
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

        <img src="../assets/img/landing/bookcovers.png" />
      </section>
      <section>
        <img src="../assets/img/landing/bibliophile.svg" alt="" />
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

<style lang="scss">
h1 {
  font-weight: 300;
  font-size: 6.4rem;
  line-height: normal;
  margin-top: 0px;
}

h2 {
  font-weight: 300;
  font-size: 3.6rem;
}

p {
  color: rgba(0, 0, 0, 0.8);
  text-align: justify;
  line-height: 130%;
}

body {
  overflow-x: hidden;
}

section:nth-child(4) {
  display: flex;
  margin-top: 130px;
  align-items: center;
  justify-content: space-around;
  img {
    flex: 0 0 50%;
    position: relative;
    right: 8%;
  }

  div {
    flex: 0 0 50%;
    h2 {
      margin-top: 0px;
      margin-bottom: 0px;
    }

    p {
      margin-bottom: 40px;
      margin-top: 8px;

      width: 80%;
    }
    a {
      padding: 18px 35px 18px 35px;
    }
  }
}

section:nth-child(3) {
  display: flex;
  align-items: center;
  margin-top: 700px;
  div {
    margin-left: 140px;
    flex: 0 0 38%;
    h2 {
      margin-top: 0px;
      margin-bottom: 0px;
    }

    p {
      margin-bottom: 40px;
      margin-top: 8px;
    }
    a {
      padding: 18px 35px 18px 35px;
    }
  }

  img {
    flex: 0 0 62%;
    position: relative;
    left: 9.5%;
  }
}

section:nth-child(2) {
  display: flex;
  align-items: center;
  margin-top: 400px;
  justify-content: space-between;
  * {
    margin-left: 40px;
    margin-right: 40px;
  }

  #left {
    img {
      display: block;
      margin: 60px auto 85px auto;
    }
  }

  #right {
    img {
      display: block;
      margin: 35px auto 58px auto;
    }
  }

  #left,
  #right {
    margin-right: 2%;

    h2 {
      margin-top: 0px;
      margin-bottom: 0px;
    }

    p {
      margin-bottom: 40px;
      margin-top: 8px;
    }

    a {
      text-decoration: none;
      color: $red-main;
      img {
        display: inline-block;
        width: 1em;
        height: 1em;
        margin: 0;
        position: relative;
        top: 3px;
        left: 3px;
      }
    }
  }

  #right {
    margin-left: 2%;
  }

  div#left,
  div#right {
    width: 60rem;
    height: 70rem;
    border-radius: 15px;
    box-shadow: 0px 3px 20px rgba(54, 64, 82, 0.18);
    background: #fff;
  }
}

section:first-child {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  img {
    width: 65rem;
    height: auto;
  }
  margin-top: 120px;
  p {
    margin-bottom: 50px;
    width: 80%;
  }
  .btn-cta {
    padding: 18px 35px 18px 35px;
  }
  div {
    h1 {
      width: 720px;
    }
  }
}

body {
  font-size: 0.94vw;
}

.btn {
  padding: 0.52vw 1.82vw 0.52vw 1.82vw;
  border-radius: 100px;
}

.btn-cta {
  background: $red-main;
  color: white;
  text-decoration: none;
}

.btn-cont {
  color: $black-text;
}

.container {
  margin: 2.08vw 14vw 2.6vw 14vw;
}

header {
  display: flex;
  justify-content: space-between;
  img {
    width: 10.26vw;
    height: 2.81vw;
  }
  ul {
    li:not(:last-child) {
      margin-left: 1.56vw;
    }
    li {
      display: inline;
      a {
        text-decoration: none;
        color: $gray-text;
      }
    }
  }
  .btn-cta {
    margin-left: 2.6vw;
  }
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

  left: 50vw;
  top: 1250px;
  z-index: -1;
}

#Vector5 {
  position: absolute;
  left: 0px;
  top: 2011px;
}
</style>
